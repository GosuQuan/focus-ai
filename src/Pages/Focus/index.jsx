import React, { useState, useEffect, useRef } from 'react';
import {
  Layout,
  Typography,
  Button,
  Card,
  Select,
  Progress,
  Space,
  Modal,
  Input,
  message,
} from 'antd';
import {
  PlayCircleOutlined,
  PauseCircleOutlined,
  RedoOutlined,
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { taskAPI } from '../../services/api';

const { Title } = Typography;
const { Option } = Select;

const FOCUS_TIME = 25 * 60; // 25分钟
const BREAK_TIME = 5 * 60; // 5分钟

const Focus = () => {
  const [selectedTask, setSelectedTask] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(FOCUS_TIME);
  const [isBreak, setIsBreak] = useState(false);
  const [showNoteModal, setShowNoteModal] = useState(false);
  const [note, setNote] = useState('');
  const timerRef = useRef(null);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const data = await taskAPI.getTasks({ status: 'in_progress' });
      setTasks(data);
    } catch (error) {
      message.error('获取任务列表失败');
    }
  };

  const startTimer = () => {
    if (!selectedTask) {
      message.warning('请先选择一个任务');
      return;
    }
    setIsRunning(true);
    timerRef.current = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current);
          if (!isBreak) {
            message.success('专注时间结束！');
            setShowNoteModal(true);
          } else {
            message.success('休息时间结束！');
            resetTimer();
          }
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const pauseTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTimeLeft(isBreak ? BREAK_TIME : FOCUS_TIME);
  };

  const handleNoteSubmit = async () => {
    try {
      // 这里应该调用API保存专注记录
      message.success('记录已保存');
      setShowNoteModal(false);
      setNote('');
      setIsBreak(true);
      setTimeLeft(BREAK_TIME);
    } catch (error) {
      message.error('保存失败');
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <Layout.Content style={{ padding: '24px' }}>
      <Title level={2}>专注</Title>

      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Select
            style={{ width: '100%' }}
            placeholder="选择要专注的任务"
            value={selectedTask}
            onChange={setSelectedTask}
          >
            {tasks.map((task) => (
              <Option key={task.id} value={task.id}>
                {task.title}
              </Option>
            ))}
          </Select>

          <div style={{ textAlign: 'center' }}>
            <motion.div
              animate={{ scale: isRunning ? [1, 1.02, 1] : 1 }}
              transition={{ repeat: Infinity, duration: 2 }}
            >
              <Progress
                type="circle"
                percent={(timeLeft / (isBreak ? BREAK_TIME : FOCUS_TIME)) * 100}
                format={() => formatTime(timeLeft)}
                size={200}
                status={isBreak ? 'success' : 'active'}
              />
            </motion.div>
          </div>

          <Space size="large" style={{ justifyContent: 'center', width: '100%' }}>
            {!isRunning ? (
              <Button
                type="primary"
                icon={<PlayCircleOutlined />}
                size="large"
                onClick={startTimer}
              >
                开始
              </Button>
            ) : (
              <Button
                type="primary"
                icon={<PauseCircleOutlined />}
                size="large"
                onClick={pauseTimer}
              >
                暂停
              </Button>
            )}
            <Button
              icon={<RedoOutlined />}
              size="large"
              onClick={resetTimer}
            >
              重置
            </Button>
          </Space>
        </Space>
      </Card>

      <Modal
        title="记录本次专注"
        open={showNoteModal}
        onOk={handleNoteSubmit}
        onCancel={() => setShowNoteModal(false)}
      >
        <Input.TextArea
          rows={4}
          placeholder="记录这次专注的收获..."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </Modal>
    </Layout.Content>
  );
};

export default Focus;

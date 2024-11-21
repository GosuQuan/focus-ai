import React, { useEffect, useState } from 'react';
import { Layout, Card, Row, Col, Statistic, Typography, Spin, message } from 'antd';
import { UserOutlined, ClockCircleOutlined, FileTextOutlined, BulbOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import { dashboardAPI } from '../../services/api';

const { Title } = Typography;
const { Content } = Layout;

const DashboardCard = ({ icon, title, value, prefix, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card hoverable>
        <Statistic
          title={title}
          value={value}
          prefix={icon}
          valueStyle={{ color }}
        />
      </Card>
    </motion.div>
  );
};

const Dashboard = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await dashboardAPI.getStats();
        setStats(data);
      } catch (error) {
        message.error('获取数据失败');
        console.error('Failed to fetch stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Spin size="large" />
      </div>
    );
  }

  return (
    <Layout style={{ padding: '24px' }}>
      <Content>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Title level={2}>仪表盘</Title>
        </motion.div>
        
        <Row gutter={[16, 16]}>
          <Col xs={24} sm={12} md={6}>
            <DashboardCard
              icon={<BulbOutlined />}
              title="专注次数"
              value={stats?.totalFocus || 0}
              color="#1890ff"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardCard
              icon={<ClockCircleOutlined />}
              title="总专注时间"
              value={stats?.totalTime || '0h'}
              color="#52c41a"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardCard
              icon={<FileTextOutlined />}
              title="总任务数"
              value={stats?.totalTasks || 0}
              color="#722ed1"
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <DashboardCard
              icon={<UserOutlined />}
              title="已完成任务"
              value={stats?.completedTasks || 0}
              color="#fa8c16"
            />
          </Col>
        </Row>

        {/* 这里可以添加更多的图表和数据展示组件 */}
      </Content>
    </Layout>
  );
};

export default Dashboard;

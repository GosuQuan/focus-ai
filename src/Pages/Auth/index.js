import React, { useState } from 'react';
import { 
  Layout, 
  Card, 
  Form, 
  Input, 
  Button, 
  Typography, 
  Divider, 
  message,
  Space
} from 'antd';
import { 
  UserOutlined, 
  LockOutlined, 
  MailOutlined,
  GoogleOutlined,
  GithubOutlined
} from '@ant-design/icons';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './index.less';

const { Content } = Layout;
const { Title, Text } = Typography;

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [form] = Form.useForm();
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    try {
      // 这里添加实际的登录/注册逻辑
      console.log('Form values:', values);
      message.success(isLogin ? '登录成功！' : '注册成功！');
      navigate('/');
    } catch (error) {
      message.error('操作失败，请重试');
    }
  };

  const toggleMode = () => {
    setIsLogin(!isLogin);
    form.resetFields();
  };

  return (
    <Layout className="auth-page">
      <Content>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="auth-container"
        >
          <Card className="auth-card">
            <div className="auth-header">
              <Title level={2}>{isLogin ? '欢迎回来' : '创建账号'}</Title>
              <Text type="secondary">
                {isLogin ? '使用您的账号继续' : '开始您的智能之旅'}
              </Text>
            </div>

            <Form
              form={form}
              name="auth-form"
              onFinish={handleSubmit}
              layout="vertical"
              size="large"
            >
              {!isLogin && (
                <Form.Item
                  name="username"
                  rules={[{ required: true, message: '请输入用户名' }]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="用户名" 
                  />
                </Form.Item>
              )}

              <Form.Item
                name="email"
                rules={[
                  { required: true, message: '请输入邮箱' },
                  { type: 'email', message: '请输入有效的邮箱地址' }
                ]}
              >
                <Input 
                  prefix={<MailOutlined />} 
                  placeholder="邮箱" 
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={[{ required: true, message: '请输入密码' }]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="密码"
                />
              </Form.Item>

              {!isLogin && (
                <Form.Item
                  name="confirmPassword"
                  dependencies={['password']}
                  rules={[
                    { required: true, message: '请确认密码' },
                    ({ getFieldValue }) => ({
                      validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                          return Promise.resolve();
                        }
                        return Promise.reject(new Error('两次输入的密码不一致'));
                      },
                    }),
                  ]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="确认密码"
                  />
                </Form.Item>
              )}

              <Form.Item>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button type="primary" htmlType="submit" block>
                    {isLogin ? '登录' : '注册'}
                  </Button>
                </motion.div>
              </Form.Item>
            </Form>

            <Divider>或使用以下方式{isLogin ? '登录' : '注册'}</Divider>

            <Space className="social-login" size="middle">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button shape="circle" icon={<GoogleOutlined />} />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button shape="circle" icon={<GithubOutlined />} />
              </motion.div>
            </Space>

            <div className="auth-footer">
              <Text type="secondary">
                {isLogin ? '还没有账号？' : '已有账号？'}
                <Button type="link" onClick={toggleMode}>
                  {isLogin ? '立即注册' : '立即登录'}
                </Button>
              </Text>
            </div>
          </Card>
        </motion.div>
      </Content>
    </Layout>
  );
};

export default Auth;

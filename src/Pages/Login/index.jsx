import React from 'react';
import { Layout, Card, Form, Input, Button, Typography, Space, Divider } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Login attempt:', values);
    // TODO: Implement login logic
  };

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Layout.Content style={{ padding: '50px 0' }}>
        <div style={{ maxWidth: 400, margin: '0 auto' }}>
          <Card>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              <Title level={2}>Login to Focus AI</Title>

              <Form
                form={form}
                layout="vertical"
                onFinish={handleSubmit}
              >
                <Form.Item
                  name="email"
                  rules={[
                    { required: true, message: 'Please input your email!' },
                    { type: 'email', message: 'Please enter a valid email!' }
                  ]}
                >
                  <Input 
                    prefix={<UserOutlined />} 
                    placeholder="Email" 
                    size="large"
                  />
                </Form.Item>

                <Form.Item
                  name="password"
                  rules={[{ required: true, message: 'Please input your password!' }]}
                >
                  <Input.Password
                    prefix={<LockOutlined />}
                    placeholder="Password"
                    size="large"
                  />
                </Form.Item>

                <Form.Item>
                  <Button type="primary" htmlType="submit" size="large" block>
                    Login
                  </Button>
                </Form.Item>
              </Form>

              <Divider />

              <Space>
                <span>Don't have an account?</span>
                <Link to="/register">Register now</Link>
              </Space>
            </Space>
          </Card>
        </div>
      </Layout.Content>
    </Layout>
  );
};

export default Login;

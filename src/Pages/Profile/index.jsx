import React from 'react';
import { Layout, Typography, Card, Avatar, Form, Input, Button, Space } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Title } = Typography;

const Profile = () => {
  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    console.log('Profile update:', values);
    // TODO: Implement profile update
  };

  return (
    <Layout.Content style={{ padding: '24px' }}>
      <Title level={2}>Profile</Title>
      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div style={{ textAlign: 'center' }}>
            <Avatar size={100} icon={<UserOutlined />} />
          </div>
          
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              name: '',
              email: '',
              bio: '',
            }}
          >
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input your name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="email"
              label="Email"
              rules={[
                { required: true, message: 'Please input your email!' },
                { type: 'email', message: 'Please enter a valid email!' }
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="bio"
              label="Bio"
            >
              <Input.TextArea rows={4} />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Update Profile
              </Button>
            </Form.Item>
          </Form>
        </Space>
      </Card>
    </Layout.Content>
  );
};

export default Profile;

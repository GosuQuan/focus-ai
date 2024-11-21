import React, { useState } from 'react';
import { Layout, Menu, Button, Card, Row, Col, Typography, Space, Divider, Input } from 'antd';
import { 
  SearchOutlined, 
  MenuOutlined,
  RocketOutlined,
  MessageOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined
} from '@ant-design/icons';
import './index.less';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph, Text } = Typography;

const Home = () => {
  const [current, setCurrent] = useState('home');
  const navigate = useNavigate();

  const menuItems = [
    { key: 'home', label: '首页' },
    { key: 'products', label: '产品' },
    { key: 'about', label: '关于我们' },
  ];

  const features = [
    {
      title: "智能分析",
      description: "强大的数据分析能力，助您做出明智决策",
      icon: <RocketOutlined style={{ fontSize: 24 }} />
    },
    {
      title: "即时通讯",
      description: "随时随地与团队保持联系",
      icon: <MessageOutlined style={{ fontSize: 24 }} />
    },
    {
      title: "安全可靠",
      description: "企业级安全保障，保护您的数据安全",
      icon: <SafetyCertificateOutlined style={{ fontSize: 24 }} />
    }
  ];

  const handleAuth = (path) => {
    navigate(path);
  };

  return (
    <Layout className="home-page min-h-screen">
      <Header className="header">
        <div className="logo"></div>
        <div className="menu-container">
          <Menu
            mode="horizontal"
            selectedKeys={[current]}
            items={menuItems}
          />
          <Space>
            <Button onClick={() => handleAuth('/login')}>登录</Button>
            <Button type="primary" onClick={() => handleAuth('/register')}>
              注册
            </Button>
          </Space>
        </div>
      </Header>

      <Content>
        <div className="hero-section">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-content"
          >
            <Title level={1}>打造智能化的未来</Title>
            <Paragraph>
              利用人工智能技术，为您的业务赋能，开启数字化转型之旅
            </Paragraph>
            <Space size="large">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button type="primary" size="large">
                  免费试用
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button size="large" ghost style={{ color: 'white', borderColor: 'white' }}>
                  了解更多
                </Button>
              </motion.div>
            </Space>
          </motion.div>
        </div>

        <div className="features-section">
          <Row gutter={[32, 32]} justify="center">
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  whileHover={{ y: -5 }}
                >
                  <Card hoverable className="feature-card">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      {feature.icon}
                    </motion.div>
                    <Title level={3}>{feature.title}</Title>
                    <Paragraph>{feature.description}</Paragraph>
                    <Button type="link" className="learn-more-btn">
                      了解更多 <ArrowRightOutlined />
                    </Button>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        <div className="contact-section">
          <Row justify="center" style={{ textAlign: 'center' }}>
            <Col xs={24} sm={16} md={12}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Title level={2}>联系我们</Title>
                <Paragraph style={{ marginBottom: '32px' }}>
                  我们期待听到您的声音，让我们一起创造更好的未来
                </Paragraph>
                <Space direction="vertical" size="large" style={{ width: '100%' }}>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Input placeholder="您的邮箱" size="large" />
                  </motion.div>
                  <motion.div whileHover={{ scale: 1.02 }}>
                    <Input.TextArea placeholder="您的留言" rows={4} />
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button type="primary" size="large">
                      发送消息
                    </Button>
                  </motion.div>
                </Space>
              </motion.div>
            </Col>
          </Row>
        </div>
      </Content>

      <Footer className="footer">
        <Row gutter={[32, 32]}>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: '#fff' }}>关于我们</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)' }}>
              我们致力于为客户提供最优质的数字化解决方案，助力企业实现数字化转型。
            </Paragraph>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: '#fff' }}>快速链接</Title>
            <Menu
              mode="vertical"
              style={{ background: 'transparent', borderRight: 'none' }}
              items={[
                { key: '1', label: '主页', style: { color: 'rgba(255,255,255,0.65)' } },
                { key: '2', label: '产品', style: { color: 'rgba(255,255,255,0.65)' } },
                { key: '3', label: '关于我们', style: { color: 'rgba(255,255,255,0.65)' } },
                { key: '4', label: '联系我们', style: { color: 'rgba(255,255,255,0.65)' } },
              ]}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: '#fff' }}>联系方式</Title>
            <Paragraph style={{ color: 'rgba(255,255,255,0.65)' }}>
              邮箱：contact@example.com<br />
              电话：(+86) 123-4567-8900<br />
              地址：中国上海市某某区某某街道
            </Paragraph>
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Title level={4} style={{ color: '#fff' }}>关注我们</Title>
            <Space size="middle">
              <Button type="link" style={{ color: 'rgba(255,255,255,0.65)' }}>微博</Button>
              <Button type="link" style={{ color: 'rgba(255,255,255,0.65)' }}>微信</Button>
              <Button type="link" style={{ color: 'rgba(255,255,255,0.65)' }}>知乎</Button>
            </Space>
          </Col>
        </Row>
        <Divider style={{ borderColor: 'rgba(255,255,255,0.15)' }} />
        <div className="copyright">
          &copy; 2024 您的公司名称. 保留所有权利。
        </div>
      </Footer>
    </Layout>
  );
};

export default Home;
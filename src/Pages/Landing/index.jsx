import React from 'react';
import { Button, Typography, Space, Row, Col } from 'antd';
import { motion } from 'framer-motion';
import { ArrowRightOutlined, ThunderboltOutlined, LineChartOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';

const { Title, Paragraph } = Typography;

// 样式组件
const HeroSection = styled.div`
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a 0%, #373737 100%);
  color: white;
  padding: 60px 20px;
  overflow: hidden;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 50%);
    top: -100%;
    left: -100%;
    animation: rotate 20s linear infinite;
  }

  @keyframes rotate {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
`;

const FeatureCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 30px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  height: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
  }
`;

const GradientText = styled.span`
  background: linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Landing = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const features = [
    {
      icon: <ThunderboltOutlined style={{ fontSize: '2rem', color: '#00F5A0' }} />,
      title: '提升专注力',
      description: '通过科学的番茄工作法，帮助你保持高效专注状态'
    },
    {
      icon: <LineChartOutlined style={{ fontSize: '2rem', color: '#00D9F5' }} />,
      title: '数据分析',
      description: '可视化你的工作效率，帮助你更好地理解和改进'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: '2rem', color: '#00F5A0' }} />,
      title: '时间管理',
      description: '智能任务规划，让你的时间安排更加合理'
    }
  ];

  return (
    <HeroSection>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
          <Col xs={24} md={20} lg={16}>
            <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
              <motion.div variants={itemVariants}>
                <Title level={1} style={{ color: 'white', fontSize: '3.5rem', marginBottom: '20px' }}>
                  Focus AI <GradientText>专注提升效率</GradientText>
                </Title>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Paragraph style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.2rem', marginBottom: '40px' }}>
                  利用人工智能，帮助你实现更高效的工作方式，让每一分钟都充满价值
                </Paragraph>
              </motion.div>

              <motion.div variants={itemVariants}>
                <Space size="large">
                  <Link to="/register">
                    <Button type="primary" size="large" style={{
                      background: 'linear-gradient(90deg, #00F5A0 0%, #00D9F5 100%)',
                      border: 'none',
                      height: '50px',
                      padding: '0 40px',
                      fontSize: '1.1rem'
                    }}>
                      立即开始 <ArrowRightOutlined />
                    </Button>
                  </Link>
                  <Link to="/login">
                    <Button ghost size="large" style={{ height: '50px', padding: '0 40px', fontSize: '1.1rem' }}>
                      登录
                    </Button>
                  </Link>
                </Space>
              </motion.div>
            </Space>
          </Col>
        </Row>

        <Row gutter={[32, 32]} style={{ marginTop: '80px' }}>
          {features.map((feature, index) => (
            <Col xs={24} md={8} key={index}>
              <motion.div
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <FeatureCard>
                  {feature.icon}
                  <Title level={3} style={{ color: 'white', marginTop: '20px' }}>
                    {feature.title}
                  </Title>
                  <Paragraph style={{ color: 'rgba(255,255,255,0.8)' }}>
                    {feature.description}
                  </Paragraph>
                </FeatureCard>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </HeroSection>
  );
};

export default Landing;

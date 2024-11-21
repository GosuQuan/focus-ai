import React from 'react';
import { Layout, Typography, Card, Row, Col } from 'antd';

const { Title } = Typography;

const Analytics = () => {
  return (
    <Layout.Content style={{ padding: '24px' }}>
      <Title level={2}>Analytics</Title>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Focus Time">
            <p>Coming soon...</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Task Completion">
            <p>Coming soon...</p>
          </Card>
        </Col>
        <Col xs={24} sm={12} lg={8}>
          <Card title="Productivity Trends">
            <p>Coming soon...</p>
          </Card>
        </Col>
      </Row>
    </Layout.Content>
  );
};

export default Analytics;

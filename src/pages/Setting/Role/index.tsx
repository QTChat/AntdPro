import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Card, Col, Row, Spin } from 'antd';
import styles from './index.less';

export default () => {

  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      <Row>
        <Col><Card>123</Card></Col>
        <Col><Card>123</Card></Col>
      </Row>
    </PageContainer>
  );
};

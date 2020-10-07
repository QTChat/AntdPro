import { GridContent, PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';

import AlertVisitor from './components/AlertVisitor';
import ConvGrade from './components/ConvGrade';
import EndConv from './components/EndConv';
import EndConvOffline from './components/EndConvOffline';

import styles from './index.less';

export default () => {

  return (
    <GridContent>
      <Row gutter={[0, 20]}><Col span={24}><EndConv /></Col></Row>
      <Row gutter={[0, 20]}><Col span={24}><EndConvOffline /></Col></Row>
      <Row gutter={[0, 20]}><Col span={24}><AlertVisitor /></Col></Row>
      <Row gutter={[0, 20]}><Col span={24}><ConvGrade /></Col></Row>
    </GridContent>
  );
};
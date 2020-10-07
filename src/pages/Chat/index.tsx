import React, { useState, useEffect } from 'react';
import { Col, Row, Spin } from 'antd';
import ChatList from './components/ChatList';
import styles from './index.less';
import ChatContent from './components/ChatContent';

export default () => {

  return (
    <div className={styles.main}>
      <Row className={styles.main}>
        <Col style={{width: "280px"}}>
          <ChatList />
        </Col>
        <Col flex={1}>
          <ChatContent />
        </Col>
      </Row>
    </div>
  );
};

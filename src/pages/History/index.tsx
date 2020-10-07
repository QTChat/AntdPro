import { GridContent, PageContainer,  } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import { Button, Col, Empty, Grid, Layout, Row, Spin } from 'antd';

import styles from './index.less';
import HistoryChatFilter from './components/ChatFilter';

const History = () => {

  const [type, setType] = useState<"filter"|"chat">("chat")

  const handleOnFilter = () => {}

  return (
    <Row className={styles.main}>
      <Col flex="300px" className={styles.sider}>
        <HistoryChatFilter />
      </Col>
      <Col>Right</Col>
    </Row>
  );
};


export default History;
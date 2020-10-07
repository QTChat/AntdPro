import React, { useEffect, useState } from 'react';
import { Button, Col, Empty, List, Row } from 'antd';
import _ from 'lodash';

import { ChatListItem } from '@/pages/Chat/components/ChatList';
import { ConversationType } from '@/services/conversation';

import styles from './index.less';

interface HistoryChatListProps {
  list: ConversationType[];
  filterOnClick: () => void;
  current?: string;
  onChange?: (current: string) => void;
}

const HistoryChatList: React.FC<HistoryChatListProps> = ({ list, filterOnClick, current, onChange }) => {

  const [_current, setCurrent] = useState("")

  useEffect(() => {
    if(!current) return
    setCurrent(current)
  }, [current])

  const handleOnClick = (id: string) => {
    setCurrent(id)
    onChange?.(id)
  }

  return (
    <div className={styles.chatMain}>
      <Row className={styles.siderHead} justify="space-between" align="middle">
        <Col>历史对话</Col>
        <Col><Button onClick={filterOnClick}>筛选</Button></Col>
      </Row>
      {list.length===0 && <Row justify="center" align="middle" className={styles.siderContent}>
        <Col><Empty description="暂无历史数据" /></Col>
      </Row>}
      {list.length>0 && <List
        className={styles.siderContent}
        size="small"
        dataSource={list}
        renderItem={item => (
          <List.Item key={item.id} className={`${styles.chatItem} ${_current===item.id?styles.active:""}`}>
              <ChatListItem
                onClick={() => handleOnClick(item.id)}
                name={item.visit_info.name}
                message={_.last(item.messages)?.content||""}
                time={item.last_msg_created_on}
              />
          </List.Item>
        )}
      />}
    </div>
  );
};


export default HistoryChatList;
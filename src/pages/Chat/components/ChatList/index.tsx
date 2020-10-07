import React, { useState } from 'react';
import { Avatar, Col, List, Row, Tabs, Typography } from 'antd';

import styles from './index.less';
import moment from 'moment';

interface ChatListItemProps {
    name: string;
    message: string;
    time: string;
    onClick?: () => void;
}

export const ChatListItem: React.FC<ChatListItemProps> = ({name, message, time, onClick}) => {

    const TimeFormat = "HH:mm:ss";
    const DateFormat = "YY/M/DD";

    return (
        <Row onClick={onClick} style={{flex: 1}} align="middle" gutter={10}>
            <Col flex="40px">
                <Avatar shape="square" size={40} src="https://formal.oss-cn-beijing.aliyuncs.com/bqk1ktngdp6oqu79bor0/files/WechatIMG18335.jpeg" />
            </Col>
            <Col style={{width: 0}} flex={1}>
                <div>{name}</div>
                <Typography.Paragraph style={{margin: 0}} ellipsis>{message}</Typography.Paragraph>
            </Col>
            <Col>
                <div>{moment(time).format(moment().isSame(time, "day")?TimeFormat:DateFormat)}</div>
                <div>&nbsp;</div>
            </Col>
        </Row>
    )
}

enum TabType {
    normal = "normal",
    team = "team",
    queue = "queue"
}

const ChatList: React.FC = () => {

    const [tab, setTab] = useState(TabType.normal)

    return (
        <div className={styles.main}>
            <Tabs className={styles.tabs} centered onChange={tab => setTab(tab as TabType)} activeKey={tab}>
                <Tabs.TabPane key={TabType.normal} tab="对话">
                    <List
                        size="small"
                        dataSource={[11,1,1,1,1,2,3]}
                        renderItem={item => (
                            <List.Item className={styles.item}>
                                <ChatListItem name={"123"} message="message" />
                            </List.Item>
                        )}
                    />
                </Tabs.TabPane>
                <Tabs.TabPane key={TabType.team} tab="同事">2</Tabs.TabPane>
                <Tabs.TabPane key={TabType.queue} tab="排队">3</Tabs.TabPane>
            </Tabs>
        </div>
    )
}

export default ChatList;
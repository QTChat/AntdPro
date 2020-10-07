import { FolderOpenOutlined, PictureOutlined, SmileOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';
import React from 'react';
import styles from './index.less';

const ChatContent: React.FC = () => {

    return (
        <div className={styles.main}>
            <div className={styles.head}>1</div>
            <div className={styles.content}>2</div>
            <div className={styles.footer}>
                <div className={styles.footerToolbar}>
                    <Space>
                        <SmileOutlined />
                        <PictureOutlined />
                        <FolderOpenOutlined />
                    </Space>
                </div>
                <textarea className={styles.footerContent}>123</textarea>
                <div className={styles.footerSubmit}><Button>发送</Button></div>
            </div>
        </div>
    )
}

export default ChatContent;
import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useEffect } from 'react';
import styles from './index.less';

export default () => {
  // const [loading, setLoading] = useState<boolean>(true);
  // useEffect(() => {
  //   setTimeout(() => {
  //     setLoading(false);
  //   }, 3000);
  // }, []);
  return (
    <PageContainer content="这是一个新页面，从这里进行开发！" className={styles.main}>
      123
    </PageContainer>
  );
};

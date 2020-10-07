import React, { useState } from 'react';
import { FormattedMessage } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import { Menu } from 'antd';
import Base from './Components/Base';
import Security from './Components/Security';
import styles from './style.less';
const { Item } = Menu;
type PersonalStateKeys = 'base' | 'security';
const menuMap = {
  base: '基本设置',
  security: '安全设置',
};

const Personal: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<PersonalStateKeys>('base');
  return (
    <GridContent>
      <div className={styles.main}>
        <div className={styles.leftMenu}>
          <Menu
            mode={'inline'}
            selectedKeys={[currentMenu]}
            onClick={({ key }) => setCurrentMenu(key as PersonalStateKeys)}
          >
            {Object.keys(menuMap).map((item) => (
              <Item key={item}>{menuMap[item]}</Item>
            ))}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[currentMenu]}</div>
          {currentMenu === 'base' && <Base />}
          {currentMenu === 'security' && <Security />}
        </div>
      </div>
    </GridContent>
  );
};

export default Personal;

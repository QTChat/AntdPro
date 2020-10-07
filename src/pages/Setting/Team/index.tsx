import React, { useState } from 'react';
import { FormattedMessage, useModel } from 'umi';
import { GridContent } from '@ant-design/pro-layout';
import { Menu } from 'antd';
import SettingTeamBase from './components/Base/index';
import SettingTeamAgent from './components/Agent';
import SettingTeamAdmin from './components/Admin';
import styles from './style.less';
import SettingTeamContat from './components/Contat';
const { Item } = Menu;
type TeamStateKeys = 'base' | 'agent' | 'admin' | 'contat';
const menuMap = {
  base: '团队信息',
  agent: '团队客服名片',
  admin: '超级管理员',
  contat: '团队联系人信息',
};

const Team: React.FC = () => {
  const [currentMenu, setCurrentMenu] = useState<TeamStateKeys>('base');
  return (
    <GridContent>
      <div className={styles.main}>
        <div className={styles.leftMenu}>
          <Menu
            mode="inline"
            selectedKeys={[currentMenu]}
            onClick={({ key }) => setCurrentMenu(key as TeamStateKeys)}
          >
            {Object.keys(menuMap).map((item) => (
              <Item key={item}>{menuMap[item]}</Item>
            ))}
          </Menu>
        </div>
        <div className={styles.right}>
          <div className={styles.title}>{menuMap[currentMenu]}</div>
          {currentMenu === 'base' && <SettingTeamBase />}
          {currentMenu === 'agent' && <SettingTeamAgent />}
          {currentMenu === 'admin' && <SettingTeamAdmin />}
          {currentMenu === 'contat' && <SettingTeamContat />}
        </div>
      </div>
    </GridContent>
  );
};

export default Team;

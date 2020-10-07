import React from 'react';
import { FormattedMessage, useIntl } from 'umi';
import { List } from 'antd';
type Unpacked<T> = T extends (infer U)[] ? U : T;
const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};
interface ProfileSecurityViewProps {}

const SettingTeamAdmin: React.FC<ProfileSecurityViewProps> = () => {
  const {} = useIntl();
  const data = [
    {
      title: '账户密码',
      description: (
        <>
          '当前密码强度：'：
          {passwordStrength.strong}
        </>
      ),
      actions: [<a key="Modify">修改</a>],
    },
    {
      title: '备用邮箱',
      description: `${'已绑定邮箱：'}：${123}`,
      actions: [<a key="Modify">修改</a>],
    },
  ];
  return (
    <>
      <List<Unpacked<typeof data>>
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item) => (
          <List.Item actions={item.actions}>
            <List.Item.Meta title={item.title} description={item.description} />
          </List.Item>
        )}
      />
    </>
  );
};

export default SettingTeamAdmin;

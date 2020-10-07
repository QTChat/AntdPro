import React, { useEffect, useState } from 'react';
import { useModel } from 'umi';
import { Button, Form, Input, List, message, Modal } from 'antd';

type Unpacked<T> = T extends (infer U)[] ? U : T;

const passwordStrength = {
  strong: <span className="strong">强</span>,
  medium: <span className="medium">中</span>,
  weak: <span className="weak">弱 Weak</span>,
};

const ProfileSecurityView: React.FC = () => {

  const { currentUser, updateUserInfo, error, updateLoading } = useModel('user');

  useEffect(() => {
    // console.log(error, error!.response)
  }, [error])

  const [passwordModal, setPasswordModal] = useState(false);

  const [ passwordForm ] = Form.useForm();

  const data = [
    {
      title: '账户密码',
      description: (<>当前密码强度：{passwordStrength.strong}</>),
      actions: [<Button onClick={()=>setPasswordModal(true)} type="link">修改</Button>],
    },
    {
      title: '备用邮箱',
      description: `${'已绑定邮箱：'}：${currentUser?.email}`,
      actions: [<Button type="link">修改</Button>],
    },
  ];

  const handlePasswordOk = (values: {password: string, new_password: string, repeat_password: string}) => {
    updateUserInfo(values)
      .then(res=>{
        message.success("更新成功！")
        setPasswordModal(false)
      })
  }

  return (
    <>
      <Modal
        title="修改密码"
        visible={passwordModal}
        onCancel={()=>setPasswordModal(false)}
        onOk={passwordForm.submit}
        destroyOnClose
        confirmLoading={updateLoading}
        okText="确定"
        cancelText="取消"
      >
        <Form onFinish={handlePasswordOk} form={passwordForm} preserve={false}>
          <Form.Item name="password"
            rules={[{required: true, message: "请输入正确的当前账号密码！"}]}
          >
            <Input.Password placeholder="请输入当前密码" />
          </Form.Item>
          <Form.Item hasFeedback name="new_password"
            rules={[
              {required: true, message: "请输入新密码！"},
              {min: 8, message: "密码长度需要大于 8 位！"},
              {max: 16, message: "密码长度不能超过 16 位！"}
            ]}
          >
            <Input.Password placeholder="请输入 8-16 位新密码" />
          </Form.Item>
          <Form.Item
            name="repeat_password"
            dependencies={['new_password']}
            hasFeedback
            rules={[
              {required: true, message: "请确认您的新密码！"},
              ({ getFieldValue }) => ({
                validator(rule, value) {
                  if (!value || getFieldValue('new_password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("两次密码输入不一致！");
                },
              }),
            ]}
          >
            <Input.Password placeholder="请输入确认密码" />
          </Form.Item>
        </Form>
      </Modal>
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

export default ProfileSecurityView;

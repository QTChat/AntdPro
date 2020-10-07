import React, { useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Upload, Form, message } from 'antd';
import { FormattedMessage, useIntl, useModel } from 'umi';
import styles from './BaseView.less'; // 头像组件 方便以后独立，增加裁剪之类的功能

const AvatarView = ({ avatar }: { avatar: string }) => (
  <>
    <div className={styles.avatar_title}>头像</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload showUploadList={false}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

interface BaseViewProps {
  currentUser?: API.UserInfo;
}

const SettingTeamAgent: React.FC<BaseViewProps> = ({ currentUser }) => {
  const {} = useIntl();
  const [form] = Form.useForm();
  const { enterpriseInfo } = useModel('enterprise');
  useEffect(() => {
    form.setFieldsValue({
      public_nickname: enterpriseInfo?.public_nickname,
      public_signature: enterpriseInfo?.public_signature,
      public_email: enterpriseInfo?.public_email,
      public_telephone: enterpriseInfo?.public_telephone,
      public_cellphone: enterpriseInfo?.public_cellphone,
      public_qq: enterpriseInfo?.public_qq,
      public_weixin: enterpriseInfo?.public_weixin,
    });
  }, [enterpriseInfo]);

  const getAvatarURL = () => {
    if (enterpriseInfo) {
      if (enterpriseInfo.avatar) {
        return enterpriseInfo.avatar;
      }

      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }

    return '';
  };

  return (
    <div className={styles.baseView}>
      <div className={styles.left}>
        <Form form={form} layout="vertical" initialValues={currentUser}>
          <Form.Item
            name="public_nickname"
            label="昵称"
            rules={[
              {
                required: true,
                message: '请输入您的昵称!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="public_email" label="邮箱">
            <Input />
          </Form.Item>
          <Form.Item
            name="public_signature"
            label="自定义签名"
            extra="您可以在自定义签名中填写如「职位名称」、「特别说明」甚至您的「座右铭」"
          >
            <Input.TextArea placeholder="个人简介" rows={2} />
          </Form.Item>
          <Form.Item name="public_telephone" label="座机">
            <Input />
          </Form.Item>
          <Form.Item name="public_cellphone" label="手机号">
            <Input />
          </Form.Item>
          <Form.Item name="public_qq" label="QQ">
            <Input />
          </Form.Item>
          <Form.Item name="public_weixin" label="微信">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button htmlType="submit" type="primary">
              更新基本信息
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.right}>
        <AvatarView avatar={getAvatarURL()} />
      </div>
    </div>
  );
};

export default SettingTeamAgent;

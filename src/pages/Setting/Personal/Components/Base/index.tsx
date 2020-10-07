import React, { useEffect } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, Input, Form, message } from 'antd';
import { FormattedMessage, useIntl, useModel } from 'umi';
import Upload, { uploadType } from '@/components/Upload';
import styles from './BaseView.less';
import { UploadChangeParam, UploadFile } from 'antd/lib/upload/interface';

const AvatarView = ({
  avatar,
  onChange,
}: {
  avatar: string;
  onChange: (info: UploadChangeParam<UploadFile>) => void;
}) => (
  <>
    <div className={styles.avatar_title}>头像</div>
    <div className={styles.avatar}>
      <img src={avatar} alt="avatar" />
    </div>
    <Upload onChange={onChange} uploadType={uploadType.avatar}>
      <div className={styles.button_view}>
        <Button>
          <UploadOutlined />
          更换头像
        </Button>
      </div>
    </Upload>
  </>
);

const ProfileBaseView: React.FC = () => {
  const { currentUser, updateUserInfo, updateLoading } = useModel('user');

  const [form] = Form.useForm();
  useEffect(() => {
    form.setFieldsValue(currentUser);
  }, [currentUser]);

  const getAvatarURL = () => {
    if (currentUser) {
      if (currentUser.avatar) {
        return currentUser.avatar;
      }

      const url = 'https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png';
      return url;
    }

    return '';
  };

  const handleFinish = (value: any) => {
    updateUserInfo(value)
      .then((res) => {
        message.success('更新基本信息成功');
      })
      .catch(message.error);
  };

  const handleUploadAvatar = (info: UploadChangeParam<UploadFile>) => {
    if (info.file.status === 'done') {
      updateUserInfo({
        avatar: info.file.response.file_url,
      }).then((res) => message.success('更换成功！'));
    }
  };

  return (
    <div className={styles.baseView}>
      <div className={styles.left}>
        <Form form={form} layout="vertical" onFinish={handleFinish}>
          <Form.Item
            name="nickname"
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
            name="signature"
            label="自定义签名"
            extra="您可以在自定义签名中填写如「职位名称」、「特别说明」甚至您的「座右铭」"
          >
            <Input.TextArea placeholder="个人简介" rows={2} />
          </Form.Item>
          <Form.Item name="telephone" label="座机">
            <Input />
          </Form.Item>
          <Form.Item name="public_cellphone" label="手机号">
            <Input />
          </Form.Item>
          <Form.Item name="qq" label="QQ">
            <Input />
          </Form.Item>
          <Form.Item name="weixin" label="微信">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button loading={updateLoading} htmlType="submit" type="primary">
              更新基本信息
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className={styles.right}>
        <AvatarView avatar={getAvatarURL()} onChange={handleUploadAvatar} />
      </div>
    </div>
  );
};

export default ProfileBaseView;

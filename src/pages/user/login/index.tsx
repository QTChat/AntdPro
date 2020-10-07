import { AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons';
import { Checkbox, message } from 'antd';
import React, { useState } from 'react';
import { Link, SelectLang, useHistory } from 'umi';
import logo from '@/assets/logo.svg';
import { LoginParamsType, accountLogin } from '@/services/login';
import Footer from '@/components/Footer';
import LoginFrom from './components/Login';
import styles from './style.less';

const { Username, Password, Submit } = LoginFrom;

const Login: React.FC = () => {

  const history = useHistory()

  const [submitting, setSubmitting] = useState(false);

  // const { refresh } = useModel('@@initialState');
  const [autoLogin, setAutoLogin] = useState(true);
  const [type, setType] = useState<string>('account');

  const handleSubmit = async (values: LoginParamsType) => {
    setSubmitting(true);
    try {
      // 登录
      const msg = await accountLogin({ ...values, platform: "web", remember: autoLogin});
      localStorage.setItem("token", msg.user_token)
      setTimeout(() => {
        history.push("/")
      }, 10);
    } catch (error) {
      message.error('登录失败，请重试！');
    }
    setSubmitting(false);
  };

  return (
    <div className={styles.container}>
      <div className={styles.lang}>
        <SelectLang />
      </div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.header}>
            <Link to="/">
              <img alt="logo" className={styles.logo} src={logo} />
              <span className={styles.title}>Ant Design</span>
            </Link>
          </div>
          <div className={styles.desc}>Ant Design 是西湖区最具影响力的 Web 设计规范</div>
        </div>

        <div className={styles.main}>
          <LoginFrom activeKey={type} onTabChange={setType} onSubmit={handleSubmit}>
              <Username
                name="email"
                placeholder="用户名: admin or user"
                rules={[{required: true, message: '请输入用户名!'}]}
              />
              <Password
                name="password"
                placeholder="密码: ant.design"
                rules={[{required: true, message: '请输入密码！'}]}
              />
            <div>
              <Checkbox checked={autoLogin} onChange={(e) => setAutoLogin(e.target.checked)}>
                自动登录
              </Checkbox>
              <a style={{float: 'right'}}>忘记密码</a>
            </div>
            <Submit loading={submitting}>登录</Submit>
            <div className={styles.other}>
              其他登录方式
              <AlipayCircleOutlined className={styles.icon} />
              <TaobaoCircleOutlined className={styles.icon} />
              <WeiboCircleOutlined className={styles.icon} />
              <Link className={styles.register} to="/user/register">
                注册账户
              </Link>
            </div>
          </LoginFrom>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;

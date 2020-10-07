// https://umijs.org/config/
import { defineConfig } from 'umi';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;
export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    name: 'QTChat',
    locale: false,
    siderWidth: 180,
  },
  locale: {
    default: 'zh-CN',
    antd: true,
    baseNavigator: false,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/user',
      layout: false,
      routes: [
        {
          name: 'login',
          path: '/user/login',
          component: './user/login',
        },
      ],
    },
    {
      path: '/welcome',
      name: 'welcome',
      icon: 'smile',
      component: './Welcome',
    },
    {
      path: '/',
      redirect: '/welcome',
    },
    {
      name: '对话',
      icon: 'CommentOutlined',
      path: '/chat',
      component: './Chat',
    },
    {
      name: '访客',
      icon: 'DesktopOutlined',
      path: '/visitor',
      component: './Visitor',
    },
    {
      name: '工单',
      icon: 'BarsOutlined',
      path: '/tickets',
      component: './Tickets',
    },
    {
      name: '历史',
      icon: 'HistoryOutlined',
      path: '/history',
      component: './History',
    },
    {
      name: '设置',
      icon: 'setting',
      path: '/setting',
      // component: './Setting',
      routes: [
        {
          name: '个人资料',
          icon: 'smile',
          path: '/setting/personal',
          component: './Setting/Personal',
        },
        {
          name: '客服分组',
          icon: 'smile',
          path: '/setting/agents',
          component: './Setting/Agents',
        },
        {
          name: '团队设置',
          icon: 'smile',
          path: '/setting/team',
          component: './Setting/Team',
        },
        {
          name: '对话设置',
          icon: 'smile',
          path: '/setting/chat',
          // component: './Setting/Chat',
          routes: [
            {
              name: '对话规则',
              path: '/setting/chat/rule',
              component: './Setting/Chat/Rule',
            },
            {
              name: '自动回复',
              path: '/setting/chat/autoreply',
              component: './Setting/Chat/AutoReply',
            },
          ],
        },
        {
          name: '角色权限',
          icon: 'smile',
          path: '/setting/role',
          component: './Setting/Role',
        },
      ],
    },
    {
      component: './404',
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    'primary-color': defaultSettings.primaryColor,
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
});

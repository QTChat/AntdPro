import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  // 拂晓蓝
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: false,
  },
  contentStyle: {height: "100px"},
  title: 'QTChat',
  pwa: false,
  iconfontUrl: '//at.alicdn.com/t/font_2109996_yq845h14fje.js',
} as LayoutSettings & {
  pwa: boolean;
};

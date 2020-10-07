import { createFromIconfontCN } from '@ant-design/icons';

export enum IconType {
    // 未知
    unknown = "icon-unknown",
    // 搜索引擎
    yahoo = "icon-yahoo",
    sm = "icon-sm",
    sogou = "icon-sogou",
    baidu = "icon-baidu",
    google = "icon-google",
    bing = "icon-bing",
    "360search" = "icon-360search",
    // 终端
    computer = "icon-computer",
    phone = "icon-phone",
    ios = "icon-ios",
    android = "icon-android",

    wechat = "icon-wechat",
    weibo = "icon-weibo",
    // 奖牌
    gold = "icon-gold",
    silver = "icon-silver",
    bronze = "icon-bronze",
}

export const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2109996_yq845h14fje.js',
});

export const getDeviceName = (name: string) => {
    return name.toLowerCase().replace(/(\s|\.)+/g, '-')
}


export default IconFont;
import { Avatar, Col, Row, Tooltip } from 'antd';
import { createFromIconfontCN } from '@ant-design/icons';
import React from 'react';

import styles from './index.less';
import IconFont, { getDeviceName } from '@/components/IconFont';

export enum CustomerAvatarType {
    icon = "icon-svg",
    image = "image"
}

interface CustomerAvatarProps {
    src: string;
    type: CustomerAvatarType
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = ({src, type}) => {

    return (
        <div>
            {type===CustomerAvatarType.icon && <IconFont className={styles.avatarIcon} type="icon-PCduan" />}
            {type===CustomerAvatarType.image && <Avatar size={35} src={src}/>}
        </div>
    )
}

interface CustomerDeviceProps {
    browser: string;
    os: string;
}

const CustomerDevice: React.FC<CustomerDeviceProps> = ({browser, os}) => {

    return (
        <Row gutter={10} className={styles.deviceIcon}>
            <Col>
                <Tooltip title={browser}>
                    <IconFont type={`icon-${getDeviceName(browser)}`} />
                </Tooltip>
            </Col>
            <Col>
                <Tooltip title={os}>
                    {os}
                    <IconFont type={`icon-${getDeviceName(os)}`} />
                </Tooltip>
            </Col>
        </Row>
    )
}

interface CustomerInfoProps {
    name: string;
    province: string;
    city: string;
    ip: string;
    browser_family?: string;
    os_family?: string;
    src?: string;
    avatarType?: CustomerAvatarType;
}

const CustomerInfo: React.FC<CustomerInfoProps> = ({ province, city, name, ip, browser_family, os_family, src, avatarType }) => {

    return (
        <Row align="middle" gutter={10}>
            {src && avatarType && <Col><CustomerAvatar src={src} type={avatarType} /></Col>}
            <Col>
                <div className={styles.name}>{province} {city} {name}</div>
                <div className={styles.ip}>{province} {city} ({ip})</div>
                {browser_family && os_family && <div><CustomerDevice browser={browser_family} os={os_family} /></div>}
            </Col>
        </Row>
    )

}

export default CustomerInfo;
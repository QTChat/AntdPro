import React, { useState } from 'react';

import { Card, Switch } from 'antd';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const AlertVisitor: React.FC = () => {

    const [loading, setLoading] = useState(false)

    const handleSave = () => {
        // setLoading(true)

        // updateEnterpriseConfig({
        //     ending_msg_settings: ending_msg_settings.setIn(["prompt_status"], StatusBooleanToString(value)).toJS()
        // }).then(
        //     res => {
        //         setLoading(false)
        //         message.success("保存成功")
        //     },
        //     err => {
        //         setLoading(false)
        //         message.error("保存失败")
        //     }
        // )
    }

    return (
        <Card
            bodyStyle={{display: "none"}}
            title={
                // <CardTitleSubTitle title="对话结束时提醒访客" subTitle="启用时系统会在对话结束时提醒访客。" />
                <div>
                    <div>对话结束时提醒访客</div>
                    <div>启用时系统会在对话结束时提醒访客。</div>
                </div>
            }
            extra={
                <Switch
                    loading={loading}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    onChange={handleSave}/>
            }
        />
    )
}

export default AlertVisitor;
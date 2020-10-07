import React, { useState } from 'react';

import { Card, Row, Col, Input, Button, Spin, message, InputNumber, Radio, Switch, Upload } from 'antd'


const EndConvOffline: React.FC = () => {

    const offlineEnd = 0

    const handleSave = () => {
        // updateEnterpriseConfig({
        //     end_conv_expire_config: end_conv_expire_config.setIn(["web", "offline_end"], radioValue).toJS()
        // }).then(
        //     res => message.success("保存成功"),
        //     err => message.error("保存失败")
        // )
    }

    const [radioValue, setRadioValue] = useState(offlineEnd)

    const [number, setNumber] = useState(offlineEnd>0?offlineEnd:30)

    const handleChange = (number: number) => {
        setRadioValue(number)
        setNumber(number)
    }

    return (
        <Card
            title={
                <div>
                    <div>离线自动结束对话</div>
                    <div>当顾客离线一段时间后未再上线，系统将自动将对话结束。</div>
                </div>
            }
            extra={<Button onClick={handleSave} type="primary">保存</Button>}
        >
            <div>来自 Web 的对话</div>

            <Radio.Group onChange={e=>setRadioValue(e.target.value)} value={radioValue}>
                <Row gutter={[20, 20]}>
                    <Col><Radio value={-1}>不自动结束</Radio></Col>
                </Row>
                <Row gutter={[20, 20]}>
                    <Col>
                        <Radio value={number}>
                            <InputNumber onChange={value=>handleChange(value as number)} value={number} max={720} min={3} /> 秒后无消息自动结束 <span>(最多300秒钟)</span>
                        </Radio>
                    </Col>
                </Row>
            </Radio.Group>
        </Card>
    )
}

export default EndConvOffline;


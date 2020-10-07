import React, {useEffect, useState} from 'react';
import _ from 'lodash';

import { Card, Row, Col, Form, Input, Button, Spin, message, InputNumber, Radio, Switch, Upload } from 'antd'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const ConvGrade: React.FC = () => {

    const [loading, setLoading] = useState(false)
    const [form] = Form.useForm()

    // useEffect(() => {
    //     form.setFieldsValue({
    //         first_client: config.getIn(["first_level", "client_msg_cnt"]),
    //         first_agent: config.getIn(["first_level", "agent_msg_cnt"]),
    //         second_client: config.getIn(["second_level", "client_msg_cnt"]),
    //         second_agent: config.getIn(["second_level", "agent_msg_cnt"]),
    //         third_client: config.getIn(["third_level", "client_msg_cnt"]),
    //         third_agent: config.getIn(["third_level", "agent_msg_cnt"])
    //     })
    // }, [config])

    const handleSave = () => {

        // setLoading(true)

        // updateEnterpriseConfig({
        //     conv_grade_config: data.toJS()
        // }).then(
        //     res => {
        //         setLoading(false);
        //         message.success("保存成功");
        //     },
        //     err => {
        //         setLoading(false);
        //         message.error("保存失败");
        //     }
        // )
    }

    const handleOnSubmit = () => {
        // const valid = _.every(value, (item, key)=>{
        //     return _.isNumber(item)
        // })

        // if(!valid) {
        //     message.error("请输入大于 0 的整数")
        //     return
        // }

        // handleSave(
        //     config.setIn(["first_level"], {client_msg_cnt: value.first_client, agent_msg_cnt: value.first_agent})
        //         .setIn(["second_level"], {client_msg_cnt: value.second_client, agent_msg_cnt: value.second_agent})
        //         .setIn(["third_level"], {client_msg_cnt: value.third_client, agent_msg_cnt: value.third_agent})
        // )

    }


    return (
        <Card
            // bodyStyle={{display: config.get("enable")?"block":"none"}}
            title={
                <div>
                    <div>按消息数量分级</div>
                    <div>每次对话结束后，系统将根据消息数量对其进行分级。</div>
                </div>
            }
            extra={
                <Switch
                    loading={loading}
                    checkedChildren={<CheckOutlined />}
                    unCheckedChildren={<CloseOutlined />}
                    // onChange={status=>handleSave(config.setIn(["enable"], status))}
                    // checked={config.getIn(["enable"])}
                    />
            }
        >
            <Form form={form} onFinish={handleOnSubmit}>
                <Row gutter={[20, 20]} align="middle">
                    <Col>金牌对话</Col>
                    <Col>
                        顾客消息数大于等于 <Form.Item name="first_client" noStyle><InputNumber min={0}/></Form.Item>
                    </Col>
                    <Col>
                        客服消息数大于等于 <Form.Item name="first_agent" noStyle><InputNumber min={0} /></Form.Item>
                    </Col>
                </Row>
                <Row gutter={[20, 20]} align="middle">
                    <Col>銀牌对话</Col>
                    <Col>
                        顾客消息数大于等于 <Form.Item name="second_client" noStyle><InputNumber min={0}/></Form.Item>
                    </Col>
                    <Col>
                        客服消息数大于等于 <Form.Item name="second_agent" noStyle><InputNumber min={0} /></Form.Item>
                    </Col>
                </Row>
                <Row gutter={[20, 20]} align="middle">
                    <Col>铜牌对话</Col>
                    <Col>
                        顾客消息数大于等于 <Form.Item name="third_client" noStyle><InputNumber min={0}/></Form.Item>
                    </Col>
                    <Col>
                        客服消息数大于等于 <Form.Item name="third_agent" noStyle><InputNumber min={0} /></Form.Item>
                    </Col>
                </Row>
                <Row justify="space-between">
                    <Col>- 不满足以上三个条件的其他对话，将被识别为正常对话而不做分级标记</Col>
                    <Col><Button htmlType="submit" type="primary">保存</Button></Col>
                </Row>
            </Form>
        </Card>
    )
}

export default ConvGrade;
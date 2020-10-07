import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';
import { useModel } from 'umi';

const SettingTeamContat: React.FC = () => {

    const [ form ] = Form.useForm();

    const { enterpriseInfo } = useModel("enterprise")

    useEffect(() => {
        form.setFieldsValue({
            contact_name: enterpriseInfo?.contact_name,
            contact_telephone: enterpriseInfo?.contact_telephone,
            contact_email:enterpriseInfo?.contact_email,
            contact_address: enterpriseInfo?.mailing_address
        })
    }, [enterpriseInfo])

    return (
        <Form
            layout="vertical"
            form={form}
        >
            <Form.Item name="contact_name" label="姓名" required>
                <Input></Input>
            </Form.Item>
            <Form.Item name="contact_telephone" label="电话" required>
                <Input></Input>
            </Form.Item>
            <Form.Item name="contact_email" label="邮箱">
                <Input></Input>
            </Form.Item>
            <Form.Item name="contact_address" label="邮寄地址" required>
                <Input></Input>
            </Form.Item>
            <Button htmlType="submit" type="primary">更新联系人</Button>
        </Form>
    )
}

export default SettingTeamContat;
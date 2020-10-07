import { getIndustries, getProvinceCity, ProvinceCityData } from '@/services/data';
import { Button, Cascader, Form, Input, Select } from 'antd';
import React, { useEffect } from 'react';
import { useModel } from 'umi';

const SettingTeamBase: React.FC = () => {

    const [ form ] = Form.useForm();

    const { enterpriseInfo } = useModel("enterprise")

    useEffect(() => {
        form.setFieldsValue({
            fullname: enterpriseInfo?.fullname,
            name: enterpriseInfo?.name,
            industry: enterpriseInfo?.industry,
            location: [enterpriseInfo?.province, enterpriseInfo?.city]
        })
    }, [enterpriseInfo])

    return (
        <Form
            form={form}
            layout="vertical"
        >
            <Form.Item name="fullname" label="团队/公司全称" required>
                <Input></Input>
            </Form.Item>
            <Form.Item name="name" label="团队/公司简称" required>
                <Input></Input>
            </Form.Item>
            <Form.Item name="industry" label="所在行业">
                <Select options={getIndustries()} />
            </Form.Item>
            <Form.Item name="location" label="所在地区" required>
                <Cascader options={getProvinceCity()} fieldNames={{label: "name", value: "name", children: "cities"}} /> 
            </Form.Item>
            <Button htmlType="submit" type="primary">更新团队信息</Button>
        </Form>
    )
}

export default SettingTeamBase;
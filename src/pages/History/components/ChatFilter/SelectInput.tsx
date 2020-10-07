import { Col, InputNumber, Row, Select } from 'antd';
import React, { useState, useEffect } from 'react';

type condition = "lt" | "gt" | "";

interface SelectInputValueType {
    condition: condition;
    second: number;
}

interface SelectInputProps {
    value?: SelectInputValueType,
    onChange?: (value: SelectInputValueType | "") => void;
}

const SelectInput: React.FC<SelectInputProps> = ({ value, onChange }) => {

    const [condition, setCondition] = useState<condition>("")
    const [second, setSecond] = useState(0)

    useEffect(() => {
        if (!value) {
            setCondition("")
            setSecond(0)
        } else {
            setCondition(value.condition)
            setSecond(value.second)
        }
    }, [value])

    const onSelectChange = (value: condition) => {
        if (value === "") {
            onChange?.(value)
        } else {
            onChange?.({ condition: value, second })
        }
    }

    const onSecondChange = (value: number) => {
        onChange?.({ condition, second: value })
    }

    return (
        <Row gutter={10}>
            <Col span={condition ? 12 : 24}>
                <Select value={condition} onChange={onSelectChange}>
                    <Select.Option value="gt">大于</Select.Option>
                    <Select.Option value="lt">小于</Select.Option>
                    <Select.Option value="">不限制</Select.Option>
                </Select>
            </Col>
            <Col span={12}>
                {condition !== "" && <InputNumber value={second} onChange={value => onSecondChange(value as number)} min={0} formatter={value => `${value} 秒`} />}
            </Col>
        </Row>
    )
}

export default SelectInput;
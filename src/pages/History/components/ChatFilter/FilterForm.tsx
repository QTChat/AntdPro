import React from 'react';
import { Button, Cascader, Checkbox, Col, DatePicker, Form, Input, Radio, Row, TreeSelect, Typography } from 'antd';

import moment from 'moment';
import SelectInput from './SelectInput';

import styles from './index.less';
import { HistoryFilterType } from '@/models/history';

interface HistoryFilterFormProps {
  loading: boolean;
  filterData: HistoryFilterType;
  onFilter: (values: HistoryFilterType) => void;
  onCancel: () => void;
}

const evaLevelOption = [
  {label: '差评', value: '0'},
  {label: '中评', value: '1'},
  {label: '好评', value: '2'},
  {label: '无评价', value: '-1'},
];

const qualityGradeOption = [
  {label: '金牌', value: 'first_level'},
  {label: '银牌', value: 'second_level'},
  {label: '铜牌', value: 'third_level'},
  {label: '无分级', value: 'not_exists'},
]

const DatePickerRanges: any = {
  "今天": [moment().startOf("day"), moment().endOf("day")],
  "昨天": [moment().subtract(1, "days").startOf("day"), moment().subtract(1, "days").endOf("day")],
  "过去7天": [moment().subtract(7, "days").startOf("day"), moment().endOf("day")],
  "过去30天": [moment().subtract(30, "days").startOf("day"), moment().endOf("day")],
}

const HistoryFilterForm: React.FC<HistoryFilterFormProps> = ({ loading, filterData, onFilter, onCancel }) => {

  const [ form ] = Form.useForm();

  return (
    <div className={styles.chatMain}>
      <Row className={styles.siderHead} justify="space-between" align="middle">
        <Col><Button onClick={onCancel}>返回</Button></Col>
        <Col><Button loading={loading} onClick={form.submit} type="primary">筛选</Button></Col>
      </Row>
      <Row className={styles.siderContent}>
        <Form
          form={form}
          layout="vertical"
          onFinish={onFilter}
          className={styles.filterForm}
          initialValues={filterData}
        >
          <Typography.Title level={5}>快速搜索</Typography.Title>
          <Form.Item name="visitor_name">
            <Input placeholder="搜索用户名称" />
          </Form.Item>

          <Typography.Title level={5}>常用筛选</Typography.Title>
          <Form.Item name="created_on" label="对话开始时间">
            <DatePicker.RangePicker ranges={DatePickerRanges} showTime />
          </Form.Item>
          <Form.Item name="ended_on" label="对话结束时间">
            <DatePicker.RangePicker allowClear={false} ranges={DatePickerRanges} showTime />
          </Form.Item>
          <Form.Item name="agents" label="客服">
            <TreeSelect placeholder="请选择" treeData={[]} treeCheckable showCheckedStrategy={"SHOW_PARENT"} allowClear />
          </Form.Item>
          {/* <Form.Item name="tags" label="标签">
            <Select tagRender={TagRender} placeholder="请选择" mode="multiple" onChange={() => { }}>
              {tags.toJS().map(tag => <Option key={tag.id} value={tag.id}><TagItem className={tag.color} title={tag.name} /></Option>)}
            </Select>
          </Form.Item> */}
          <Form.Item name="region" label="地区">
            <Cascader options={[ { name: "海外访客" }]} fieldNames={{ label: "name", value: "name", children: "cities" }} />
          </Form.Item>

          <Typography.Title level={5}>其他</Typography.Title>
          <Form.Item name="eva_level" label="评价结果">
            <Checkbox.Group options={evaLevelOption} />
          </Form.Item>
          <Form.Item name="quality_grade" label="对话分级">
            <Checkbox.Group options={qualityGradeOption} />
          </Form.Item>
          <Form.Item name="invalidate_conversation" label="无效对话">
            <Radio.Group>
              <Radio value="">显示</Radio>
              <Radio value="false">隐藏</Radio>
              <Radio value="true">仅看无效</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="converse_duration" label="持续时长">
            <SelectInput />
          </Form.Item>
          <Form.Item name="first_response_wait_time" label="首次响应时间">
            <SelectInput />
          </Form.Item>
          <Form.Item name="tel" label="电话">
            <Input placeholder="电话" />
          </Form.Item>
          <Form.Item name="content" label="对话内容">
            <Input placeholder="对话内容" />
          </Form.Item>
          <Form.Item name="ip" label="ip">
            <Input placeholder="ip" />
          </Form.Item>
          <Form.Item name="comment" label="备注">
            <Input placeholder="备注" />
          </Form.Item>
        </Form>
      </Row>
    </div>
  );
};


export default HistoryFilterForm;
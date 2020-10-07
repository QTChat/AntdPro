import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Radio, Table, Switch } from 'antd';

import { useModel } from 'umi';
import { String2Boolean } from '@/utils/format';


type filterType = "all"|"close"|"open";

const columns = [
  {
    title: '访客',
    dataIndex: 'name',
  },
  {
    title: '设备',
    dataIndex: 'mobile',
  },
  {
    title: '来源',
    dataIndex: 'content',
  },
  {
    title: 'UTM',
    dataIndex: 'created_at',
  },
  {
    title: '正在访问',
    dataIndex: 'address',
  },
  {
    title: '操作',
    dataIndex: 'status',
    width: 100,
    render: (status: StringBoolean) => <Switch checked={String2Boolean(status)} />
  },
]

const Visitor: React.FC = () => {

  const [filter, setFilter] = useState<filterType>("all")

  const { ticketList } = useModel("tickets");

  const list = useMemo(() => {
    if(filter==="all") return ticketList;
    return ticketList.filter(({status}) => status===filter)
  }, [ticketList, filter])

  return (
    <PageContainer>
      <Card
        // className={styles.listCard}
        bordered={false}
        title="基本列表"
        extra={
          <Row gutter={10} >
            <Col>
              <Radio.Group value={filter} onChange={e=>setFilter(e.target.value)}>
                <Radio.Button value="all">全部</Radio.Button>
                <Radio.Button value="close">已关闭</Radio.Button>
                <Radio.Button value="open">进行中</Radio.Button>
              </Radio.Group>
            </Col>
            {/* <Col>
              <Input.Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} />
            </Col> */}
          </Row>
        }
      >
        <Table rowKey={"id"} columns={columns} dataSource={list}></Table>
      </Card>
    </PageContainer>
  );
};

export default Visitor;

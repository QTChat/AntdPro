import { PageContainer } from '@ant-design/pro-layout';
import React, { useState, useMemo } from 'react';
import { Row, Col, Card, Radio, Table, Switch } from 'antd';

import styles from './index.less';
import { useModel } from 'umi';
import moment from 'moment';
import { String2Boolean } from '@/utils/format';
import CustomerAvatar, { CustomerAvatarType } from '@/components/CustomerAvatar';
import { TicketsData } from '@/services/tickets';

type filterType = "all"|"close"|"open";

const Tickets: React.FC = () => {

  const [filter, setFilter] = useState<filterType>("all")

  const { ticketList, updateTicket, updateLoading } = useModel("tickets");

  const columns = [
    {
      title: '顾客信息',
      dataIndex: 'name',
      render: (str: string, {visit_info: {ip, city, province, name, os_family, browser_family}}: TicketsData) => (
        <CustomerAvatar
          avatarType={CustomerAvatarType.icon}
          src={"123"}
          name={name}
          province={province}
          city={city}
          ip={ip}
          os_family={os_family}
          browser_family={browser_family}
        />
      )
    },
    {
      title: '顾客电话',
      dataIndex: 'mobile',
    },
    {
      title: '留言',
      dataIndex: 'content',
    },
    {
      title: '留言时间',
      dataIndex: 'created_at',
      render: (time: string) => moment(time).format("YYYY/MM/DD HH:mm:ss")
    },
    {
      title: '操作人员',
      dataIndex: 'address',
    },
    {
      title: '工单状态',
      dataIndex: 'status',
      width: 100,
      render: (status: StringBoolean, record: TicketsData) => <Switch loading={updateLoading} onChange={e=>updateTicket(record.id, e?"open":"close")} checked={String2Boolean(status)} />
    }
  ]

  const list = useMemo(() => {
    if(filter==="all") return ticketList;
    return ticketList.filter(({status}) => status===filter)
  }, [ticketList, filter])

  return (
    <PageContainer>
      <Card
        className={styles.listCard}
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

export default Tickets;

import { HistoryFilterType } from '@/models/history';
import _ from 'lodash';
import React, { useState } from 'react';
import { useModel } from 'umi';

import HistoryChatList from './ChatList';
import HistoryFilterForm from './FilterForm';

interface HistoryChatFilterProps {
  filterOnClick?: () => void
}

const HistoryChatFilter: React.FC<HistoryChatFilterProps> = () => {

  const [type, setType] = useState<"filter"|"chat">("chat");

  const { filterParams, historyList, loading, getHistory } = useModel("history");

  const [currentChat, setCurrentChat] = useState("")

  const handleOnFilter = (values: HistoryFilterType) => {
    const data = _.pickBy(values, _.identity)
    getHistory({...data, ended_on: values.ended_on})
      .finally(()=>setType("chat"))
  }

  if(type==="filter") return <HistoryFilterForm loading={loading} filterData={filterParams} onCancel={()=>setType("chat")} onFilter={handleOnFilter} />
  return <HistoryChatList current={currentChat} onChange={setCurrentChat} list={historyList} filterOnClick={()=>setType("filter")} />
};

export default HistoryChatFilter;
import { useRequest } from 'umi';
import { useEffect, useState } from 'react';
import { ConversationType, searchConversation } from '@/services/conversation';
import moment, { Moment } from 'moment';
import _ from 'lodash';

export interface SearchConversationParams {
    visitor_name?: string;
    created_on?: string;
    ended_on: string;
    agents?: string;
    region?: string;
    eva_level?: string;
    quality_grade?: string;
    invalidate_conversation?: string;
    converse_duration?: string;
    first_response_wait_time?: string;
    tel?: string;
    content?: string;
    ip?: string;
    comment?: string;
}

export interface HistoryFilterType extends Partial<Omit<SearchConversationParams, "created_on"|"ended_on">> {
    created_on?: Moment[];
    ended_on: Moment[];
}

const defaultFilterParams: HistoryFilterType = {
    created_on: [moment().startOf("day"), moment().endOf("day")],
    ended_on: [moment().startOf("day"), moment().endOf("day")],
    invalidate_conversation: "false"
}

const FormatStoreToParams = (params: HistoryFilterType) => {
    const FormatString = "YYYY-MM-DDTHH:mm:ss.SSSSSS";
    return _.mapValues(params, (value, key) => {
        switch (key) {
            case "ended_on":
            case "created_on":
                const data = JSON.stringify({
                    begin: moment(value![0]).utc().format(FormatString),
                    end: moment(value![1]).utc().format(FormatString)
                })
                return data
            case "region":
                return JSON.stringify({province: value![0],city: value![1]})
            case "converse_duration":
            case "first_response_wait_time":
                return JSON.stringify(value)
            default:
                return value
        }
    }) as SearchConversationParams
}

const HistoryModal = () => {

    const [historyList, setHistoryList] = useState<ConversationType[]>([])

    const [filterParams, setFilterParams] = useState<HistoryFilterType>(defaultFilterParams)

    const { loading, run: getHistory } = useRequest((params: HistoryFilterType) => searchConversation(FormatStoreToParams(params)), {
        manual: true,
        onSuccess: (res, [params]) => {
            setHistoryList(res.conversations)
            setFilterParams(params)
        }
    })

    useEffect(() => {
        getHistory(filterParams)
    }, [])

    return {
        filterParams,
        historyList,
        loading,
        getHistory
    };
}

export default HistoryModal;
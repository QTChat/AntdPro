import _ from 'lodash';
import { request } from 'umi';

interface AgentType {
    avatar: string;
    cellphone: string;
    created_on: string;
    deleted_at: string;
    email: string;
    email_activated: boolean;
    enterprise_id: string;
    group_id: string;
    id: string;
    is_online: boolean;
    nickname: string;
    privilege: string;
    privilege_range: string;
    public_cellphone: string;
    public_email: string;
    qq: string;
    rank: number;
    read_feature_id: number;
    realname: string;
    serving_limit: number;
    signature: string;
    status: string;
    telephone: string;
    token: string;
    weixin: string;
    work_num: string;
}

export interface VisitInfoType {
    agent_token: string;
    app_name: string;
    app_version: string;
    appkey: string;
    avatar: string;
    browser_family: string;
    browser_version: string;
    browser_version_string: string;
    city: string;
    country: string;
    created_on: string;
    device_brand: string;
    device_family: string;
    device_model: string;
    device_token: string;
    enterprise_id: string;
    first_visit_page_domain_by_session: string;
    first_visit_page_source_by_session: string;
    first_visit_page_source_domain_by_session: string;
    first_visit_page_source_keyword_by_session: string;
    first_visit_page_source_url_by_session: string;
    first_visit_page_title_by_session: string;
    first_visit_page_url_by_session: string;
    id: string;
    ip: string;
    isp: string;
    last_title: string;
    last_url: string;
    last_visit_id: string;
    last_visit_page_title_by_session: string;
    last_visit_page_url_by_session: string;
    name: string;
    net_type: string;
    os_category: string;
    os_family: string;
    os_language: string;
    os_timezone: string;
    os_version: string;
    os_version_string: string;
    platform: string;
    province: string;
    residence_time_sec: number
    residence_time_sec_by_session: number
    resolution: string;
    sdk_image_url: string;
    sdk_name: string;
    sdk_source: string;
    sdk_version: string;
    status: number
    status_on: string;
    track_id: string;
    ua_string: string;
    visit_cnt: number
    visit_id: string;
    visit_page_cnt: number;
    visit_page_cnt_by_session: number;
    visited_on: string;
}

interface MessageExtraType {
    content: string;
    content_robot: null;
    created_on: string;
    enterprise_id: string;
    id: string;
    sub_type: string;
    summary: string;
    thumbnail: string;
    updated_on: string;
}

interface MessageType {
    action: string;
    agent: AgentType;
    agent_id: string;
    content: string;
    content_robot: null
    content_type: string;
    conversation_id: string;
    created_on: string;
    enterprise_id: string;
    extra: MessageExtraType;
    from_type: string;
    id: string;
    media_url: string;
    question_id: string;
    read_on: null;
    sub_type: string;
    trace_start: number
    track_id: string;
    type: string;
}

export interface ConversationType {
    agent_effective_msg_num: number;
    agent_id: string;
    agent_msg_num: number;
    agent_type: string;
    assignee: string;
    client_first_send_time: null;
    client_last_send_time: string;
    client_msg_num: number;
    clues: null;
    converse_duration: number;
    created_on: string;
    ended_by: string;
    ended_on: string;
    enterprise_id: string;
    eva_content: string;
    eva_level: null;
    first_msg_created_on: null;
    first_response_wait_time: number;
    has_summary: boolean;
    id: string;
    is_client_online: boolean;
    last_msg_content: string;
    last_msg_created_on: string;
    last_updated: string;
    msg_num: number;
    quality_grade: string;
    title: string;
    track_id: string;
    url: string;
    visit_id: string;
    messages: MessageType[];
    visit_info: VisitInfoType;
}

export async function searchConversation(params: Partial<API.SearchConversationParams>) {

  return request<{conversations: ConversationType[], total_count: number}>('/qtapi/api/conversation/search/v2', {params})
    .then(res=>({data: res}))
}
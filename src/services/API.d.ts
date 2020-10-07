declare namespace API {

  export interface UserInfo {
    avatar: string;
    cellphone: string;
    created_on: string;
    deleted_at: null;
    email: string;
    email_activated: boolean;
    enterprise_id: string;
    group_id: string;
    id: string;
    is_online: boolean
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
    status: "on_duty"
    telephone: string;
    token: string;
  }

  export interface UpdateUserInfoParams {
    avatar?: string;
    cellphone?: string;
    email?: string;
    nickname?: string;
    public_cellphone?: string;
    public_email?: string;
    qq?: string;
    signature?: string;
    telephone?: string;
    password?: string;
    new_password?: string;
    repeat_password?: string;
  }

  export interface CurrentUser {
    avatar?: string;
    name?: string;
    title?: string;
    group?: string;
    signature?: string;
    tags?: {
      key: string;
      label: string;
    }[];
    userid?: string;
    access?: 'user' | 'guest' | 'admin';
    unreadCount?: number;
  }

  export interface LoginStateType {
    status?: 'ok' | 'error';
    type?: string;
  }

  export interface NoticeIconData {
    id: string;
    key: string;
    avatar: string;
    title: string;
    datetime: string;
    type: string;
    read?: boolean;
    description: string;
    clickClose?: boolean;
    extra: any;
    status: string;
  }





  // enterprise
  export interface EnterpriseInfo {
    allocation_rule: string;
    avatar: string;
    city: string;
    contact_email: string;
    contact_name: string;
    contact_telephone: string;
    created_on: string;
    fullname: string;
    id: string;
    industry: string;
    last_active_time: string;
    location: string;
    mailing_address: string;
    name: string;
    province: string;
    public_cellphone: string;
    public_email: string;
    public_nickname: string;
    public_qq: string;
    public_signature: string;
    public_telephone: string;
    public_weixin: string;
    returning_customer_enabled: boolean;
    selecting_rule_enabled: boolean;
    special_serving_limit: number;
    superadmin_id:string;
    telephone:string;
    token:string;
    type: number;
    website:string;
  }


  // conversation

  export interface SearchConversationParams {
    visitor_name: string;
    created_on: string;
    ended_on: string;
    agents: string;
    region: string;
    eva_level: string;
    quality_grade: string;
    invalidate_conversation: string;
    converse_duration: string;
    first_response_wait_time: string;
    tel: string;
    content: string;
    ip: string;
    comment: string;
  }
}

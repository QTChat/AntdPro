import { request } from 'umi';
import { VisitInfoType } from './conversation';

export interface TicketsData {
  content: string;
  created_at: string;
  ent_id: string;
  id: string;
  last_option_agent: string;
  mobile: string;
  status: StringBoolean;
  track_id: string;
  updated_at: string;
  visit_info: VisitInfoType;
}

export async function getTickets() {
  return request<{leave_messages: TicketsData[], total: number}>('/qtapi/api/leave_messages')
    .then(res=>({data: res}))
}

export const updateTicket = async (id: string, status: "open"|"close") => {
  return request<{success: boolean}>(`/qtapi/api/leave_messages/${id}`, {method: "put", data: {status}})
    .then(res=>({data: res}))
}
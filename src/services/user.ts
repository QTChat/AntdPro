import { request } from 'umi';

export const getUserInfo = async () => {
  return request<API.UserInfo>('/qtapi/api/agent/info')
    .then(res=>({data: res}));
}

export const updateUserInfo = async (id: string, params: API.UpdateUserInfoParams) => {
  return request<API.UserInfo>(`/qtapi/api/agent/agents/${id}`, {method: "put", data: params})
    .then(res=>({data: res}))
}
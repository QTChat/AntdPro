import { request } from 'umi';

export async function getEnterpriseInfo() {
  return request<API.EnterpriseInfo>('/qtapi/api/enterprise')
    .then(res=>({data: res}))
}
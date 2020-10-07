import { request } from 'umi';

export interface LoginParamsType {
  email: string;
  password: string;
  platform: string;
  remember: boolean;
}

interface accountLoginResult {
  ent_id: string;
  user_id: string;
  user_token: string;
}

export async function accountLogin(params: LoginParamsType) {
  return request<accountLoginResult>('/qtapi/signin', {method: 'POST', data: params});
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}

export async function outLogin() {
  return request('/api/login/outLogin');
}

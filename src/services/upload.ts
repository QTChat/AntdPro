import { request } from 'umi';

export const uploadAPI = "/qtapi/api/v1/upload";

export const getUploadApi = (ent_id: string, type: string) => {
    return `${uploadAPI}?ent_id=${ent_id}&type=${type}`
}

export async function uploadFile(fileType: "photo", type: "avatar", file: any) {
  return request<{expires_in: number, file_url: string}>(`/qtapi/api/v1/upload?type=${fileType}`, { data: {type, file}, method: "post"})
    .then(res=>({data: res}))
}
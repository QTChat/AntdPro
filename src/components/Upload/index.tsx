import React from 'react';
import { Upload as AntdUpload } from 'antd';
import { useModel } from 'umi';
import { getUploadApi } from '@/services/upload';
import {  UploadProps as AntdUploadProps } from 'antd/lib/upload/interface';

export enum uploadType {
    avatar = "avatar"
}

export enum uploadFileType {
    photo = "photo"
}

interface UploadProps extends AntdUploadProps {
    uploadType: uploadType;
}

const Upload: React.FC<UploadProps> = ({uploadType, ...args}) => {

    const { currentUser } = useModel("user");

    return (
        <AntdUpload
            action={getUploadApi(currentUser?.enterprise_id||"", uploadFileType.photo)}
            data={{uploadType}}
            showUploadList={false}
            {...args}
        />
    )
}

export default Upload;
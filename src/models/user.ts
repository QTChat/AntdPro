import { getUserInfo, updateUserInfo as updateUserInfoReq } from '@/services/user';
import { useState } from 'react';
import { useRequest } from 'umi';

export default function UserModal() {

  const [currentUser, setCurrentUser] = useState<API.UserInfo>()

  const { loading } = useRequest(getUserInfo, {
    onSuccess: ( data ) => {
      setCurrentUser(data)
    }
  });

  const { loading: updateLoading, run: updateUserInfo, error } = useRequest(
    (params: API.UpdateUserInfoParams) => updateUserInfoReq(currentUser?.id||"", params),
    {
      manual: true,
      onSuccess: ( data ) => {
        setCurrentUser(data)
      },
      onError: ( err ) => {
        console.log(err)
      }
    }
  )

  return {
    currentUser,
    loading,
    updateUserInfo,
    error,
    updateLoading
  };
}
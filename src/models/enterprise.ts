import { useRequest } from 'umi';
import { getEnterpriseInfo } from '@/services/enterprise';

const EnterpriseModal = () => {

    const { data: enterpriseInfo, loading } = useRequest(getEnterpriseInfo);

    return {
      enterpriseInfo,
      loading
    };
}

export default EnterpriseModal;
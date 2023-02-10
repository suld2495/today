import { useQuery } from '@tanstack/react-query';
import { setAuthorization } from 'services/api';
import * as authApi from 'services/api/auth.api';
import { userKey } from 'services/query-key/user';

const useAuth = () => {
  const userData = useQuery({
    queryKey: userKey.user,
    queryFn: async () => {
      const response = await authApi.refreshUser();

      if (!response) return null;

      const { token, user } = response;

      setAuthorization(token);

      return user;
    },
    onError: () => {},
  });

  return {
    user: userData.data,
    isUserFetched: userData.isFetched,
  };
};

export default useAuth;

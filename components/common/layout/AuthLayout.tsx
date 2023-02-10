import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import React from 'react';
import { useRecoilState } from 'recoil';
import { authorizedState } from 'store/auth';

interface Props {
  children: React.ReactElement;
}

export default function AuthLayout({ children }: Props) {
  const [, setAuthorized] = useRecoilState(authorizedState);
  const { user, isUserFetched } = useAuth();
  const router = useRouter();

  const authCheck = React.useCallback(() => {
    const publicPaths = ['/user/login', '/user/join'];

    if (user || publicPaths.includes(router.asPath)) {
      setAuthorized(false);
      return;
    }

    router.push({
      pathname: '/user/login',
      query: { returnUrl: router.asPath },
    });

    setAuthorized(true);
  }, [user, router, setAuthorized]);

  React.useEffect(() => {
    if (!isUserFetched) return;

    authCheck();
  }, [authCheck, isUserFetched]);

  return <>{children}</>;
}

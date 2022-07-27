import { useRouter } from 'next/router';
import { FormEvent, useCallback, useRef, useState } from 'react';

import { createHash } from 'crypto';
import fetchLoginInfo from '~/src/models/middlewares/login';

// import { fetchLoginInfo } from '~/model/middleware/login.js';

function useLogin() {
  // const [token, setToken] = useState(undefined);
  const [loading, setLoading] = useState<boolean | undefined>(undefined);
  const accountRef = useRef<HTMLInputElement | undefined>(undefined);
  const passwordRef = useRef<HTMLInputElement | undefined>(undefined);
  const router = useRouter();

  const { from } = /* location.state || */ {
    from: { pathname: '/admin/major' },
  };

  const handleRedirect = useCallback(() => {
    router.replace(from);
  }, [router, from]);

  const handleSubmit = useCallback(
    (e: FormEvent<HTMLFormElement | HTMLButtonElement>) => {
      e.preventDefault();
      setLoading(true);
      if (!accountRef.current?.value || !passwordRef.current?.value) return;

      const account = accountRef.current?.value;
      const password = createHash('sha256')
        .update(passwordRef.current.value)
        .digest('hex');

      fetchLoginInfo({
        loginInfo: { account, password },
        callback: { onSuccess: handleRedirect, onFailure: setLoading },
      });
    },
    [handleRedirect]
  );

  return { loading, accountRef, passwordRef, handleSubmit };
}

export default useLogin;

import { NextRouter } from 'next/router';
import { useEffect } from 'react';

import { Mode } from '~/pages/api/user';

export default function useInitUserModeByRoute(
    router: NextRouter,
    setMode?: (mode: Mode) => void
) {
    useEffect(() => {
        if (router.pathname.match(/^\/admin\/login$/)) setMode?.('admin');
    }, [router.pathname, setMode]);
}

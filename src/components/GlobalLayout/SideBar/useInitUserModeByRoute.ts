import { NextRouter } from 'next/router';
import { useEffect } from 'react';

import { updateMode } from '@/redux/actions/layout';
import { useAppDispatch } from '@/redux/hooks';
import { Mode } from '~/lib/session';

export default function useInitUserModeByRoute(router: NextRouter) {
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (router.pathname.match(/^\/admin\/login$/))
            dispatch(updateMode(Mode.admin));
        else if (router.pathname.match(/^\/$/))
            dispatch(updateMode(Mode.normal));
    }, [dispatch, router.pathname]);
}

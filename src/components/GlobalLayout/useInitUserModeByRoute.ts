import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

import { updateMode } from '@/redux/actions/layout';
import { useAppDispatch } from '@/redux/hooks';
import { Mode } from '~/lib/session';

export default function useInitUserModeByRoute() {
    const router = useRouter();
    const dispatch = useAppDispatch();

    const hasInit = useRef(false);

    useEffect(() => {
        if (hasInit.current) return;
        if (router.pathname.match(/^\/admin/)) dispatch(updateMode(Mode.admin));
        else if (router.pathname.match(/^\/(?!admin)/))
            dispatch(updateMode(Mode.normal));

        hasInit.current = true;
    }, [dispatch, router.pathname]);
}

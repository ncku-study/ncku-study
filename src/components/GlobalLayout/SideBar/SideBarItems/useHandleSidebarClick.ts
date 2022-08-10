import { useRouter } from 'next/router';
import { useCallback } from 'react';

import {
    updateLoginStatus,
    updateMode,
    updateSidebarStatus,
} from '@/redux/actions/layout';
import { useAppDispatch } from '@/redux/hooks';
import { useMedia } from '@/utils/index';
import { Mode, User } from '~/lib/session';

export default function useHandleSidebarClick() {
    const router = useRouter();
    const device = useMedia();
    const dispatch = useAppDispatch();

    const handleClick = useCallback(
        async (url: string) => {
            // 問卷
            if (url[0] !== '/') {
                window.open(url, '_blank')?.focus();
                return;
            }

            if (url === '/' || url === 'major') {
                dispatch(updateMode(Mode.normal));
            } else if (url === '/admin') {
                dispatch(updateMode(Mode.admin));
            } else if (url === '/admin/login') {
                const res: User = await (await fetch('/api/logout')).json();
                dispatch(updateLoginStatus(res.isLoggedIn));
            }

            router.push(url);

            if (device === 'PC') return;
            dispatch(updateSidebarStatus(false));
        },
        [dispatch, router, device]
    );

    return handleClick;
}

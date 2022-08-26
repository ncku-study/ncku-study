import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useMedia } from '@/utils/index';
import { Mode, User } from '~/lib/session';
import { updateLoginStatus, updateMode } from '~/src/redux/actions/layout';
import { useAppDispatch } from '~/src/redux/hooks';

interface UseSideBarClickInterface {
    handleClose: () => void;
}

export default function useSideBarClick({
    handleClose,
}: UseSideBarClickInterface) {
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

            if (url === '/' || url === 'major')
                dispatch(updateMode(Mode.normal));
            else if (url === '/admin') dispatch(updateMode(Mode.admin));
            else if (url === '/admin/login') {
                const res: User = await (await fetch('/api/logout')).json();
                dispatch(updateLoginStatus(res.isLoggedIn));
            }

            router.push(url);
            if (device !== 'PC') handleClose();
        },
        [dispatch, router, device, handleClose]
    );

    const handleToggle = useCallback(
        (event: KeyboardEvent) => {
            if (
                event.type === 'keydown' &&
                (event.key === 'Tab' || event.key === 'Shift')
            ) {
                return;
            }

            handleClose();
        },
        [handleClose]
    );

    return { handleClick, handleToggle };
}

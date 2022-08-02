import { useRouter } from 'next/router';
import { useCallback, useContext } from 'react';

import { useMedia } from '@/utils/index';
import { Session } from '~/pages/api/user';
import { GlobalLayoutContext } from '~/src/contexts/GlobalLayoutContext';

interface UseSideBarClickInterface {
    handleClose: () => void;
}

export default function useSideBarClick({
    handleClose,
}: UseSideBarClickInterface) {
    const router = useRouter();
    const device = useMedia();
    const { setLoginStatus } = useContext(GlobalLayoutContext);

    const handleClick = useCallback(
        async (url: string) => {
            // 問卷
            if (url[0] !== '/') {
                window.open(url, '_blank')?.focus();
                return;
            }
            if (url === '/admin/login') {
                const res: Session = await (await fetch('/api/logout')).json();
                setLoginStatus?.(res.isLoggedIn);
            }

            router.push(url);
            if (device !== 'PC') handleClose();
        },
        [router, device, handleClose]
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

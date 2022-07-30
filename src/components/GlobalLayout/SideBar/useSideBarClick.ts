import { useRouter } from 'next/router';
import { useCallback } from 'react';

import { useMedia } from '@/utils/index';

interface UseSideBarClickInterface {
    handleClose: () => void;
}

export default function useSideBarClick({
    handleClose,
}: UseSideBarClickInterface) {
    const router = useRouter();
    const device = useMedia();

    const handleClick = useCallback(
        (url: string) => {
            // 問卷
            if (url[0] !== '/') {
                window.open(url, '_blank')?.focus();
                return;
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

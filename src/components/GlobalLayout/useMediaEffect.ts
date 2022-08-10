import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';

import { useMedia } from '@/utils/index';
import { updateSidebarStatus } from '~/src/redux/actions/layout';

export default function useMediaEffect() {
    const device = useMedia();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (device === 'PC') dispatch(updateSidebarStatus(true));
        else dispatch(updateSidebarStatus(false));
    }, [device, dispatch]);
}

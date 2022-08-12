import { useAppDispatch } from '@/redux/hooks';
import { useEffect } from 'react';

import { useMedia } from '@/utils/index';
import { updateSideBarStatus } from '~/src/redux/actions/layout';

export default function useMediaEffect() {
    const device = useMedia();
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (device === 'PC') dispatch(updateSideBarStatus(true));
        else dispatch(updateSideBarStatus(false));
    }, [device, dispatch]);
}

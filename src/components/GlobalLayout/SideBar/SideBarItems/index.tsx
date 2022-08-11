import { useRouter } from 'next/router';
import { FC, ReactNode, useCallback } from 'react';

import {
    updateLoginStatus,
    updateMode,
    updateSidebarStatus,
} from '@/redux/actions/layout';
import { useAppDispatch } from '@/redux/hooks';
import { useMedia } from '@/utils/index';
import { Mode, User } from '~/lib/session';
import { ListItemText, StyledListemIcon, StyledListItemButton } from './style';

interface SidebarItemProps {
    data: {
        text: string;
        icon: ReactNode;
        url: string;
    };
}
const SideBarItems: FC<SidebarItemProps> = ({ data }) => {
    const router = useRouter();
    const device = useMedia();
    const dispatch = useAppDispatch();

    const handleClick = useCallback(async () => {
        // 問卷
        if (data.url[0] !== '/') {
            window.open(data.url, '_blank')?.focus();
            return;
        }

        if (data.url === '/' || data.url === 'major') {
            dispatch(updateMode(Mode.normal));
        } else if (data.url === '/admin') {
            dispatch(updateMode(Mode.admin));
        } else if (data.url === '/admin/login') {
            const res: User = await (await fetch('/api/logout')).json();
            dispatch(updateLoginStatus(res.isLoggedIn));
            dispatch(updateMode(Mode.admin));
        }

        router.push(data.url);

        if (device === 'PC') return;
        dispatch(updateSidebarStatus(false));
    }, [data.url, router, device, dispatch]);

    return (
        <StyledListItemButton onClick={handleClick}>
            <StyledListemIcon>{data.icon}</StyledListemIcon>
            <ListItemText>{data.text}</ListItemText>
        </StyledListItemButton>
    );
};

export default SideBarItems;

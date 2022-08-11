import { FC, useCallback } from 'react';

import { updateSidebarStatus } from '@/redux/actions/layout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarStatusSelector } from '@/redux/selectors/layout';
import { useMedia } from '@/utils/index';
import { Nav, StyledMenuIcon } from './style';
import Title from './Title';

interface BannerProps {
    isShowSearch: boolean;
}

const Banner: FC<BannerProps> = ({ isShowSearch }) => {
    const device = useMedia();
    const dispatch = useAppDispatch();

    const isSidebarOpen = useAppSelector(sidebarStatusSelector);

    const handleClick = useCallback(() => {
        dispatch(updateSidebarStatus(!isSidebarOpen));
    }, [dispatch, isSidebarOpen]);

    if (!device) return <div />;
    if (device === 'PC') return <Title isShowSearch={isShowSearch} />;

    return (
        <Nav>
            <StyledMenuIcon onClick={handleClick} />
            <Title isShowSearch={isShowSearch} />
        </Nav>
    );
};

export default Banner;

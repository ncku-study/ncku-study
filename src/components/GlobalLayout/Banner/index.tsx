import MenuIcon from '@mui/icons-material/Menu';
import { FC, useCallback } from 'react';

import { useMedia } from '@/utils/index';
import { updateSidebarStatus } from '~/src/redux/actions/layout';
import { useAppDispatch, useAppSelector } from '~/src/redux/hooks';
import { sidebarStatusSelector } from '~/src/redux/selectors/layout';
import { MenuIconStyle, Nav } from './style';
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

    // eslint-disable-next-line react/jsx-no-useless-fragment
    if (!device) return <></>;
    if (device === 'PC') return <Title isShowSearch={isShowSearch} />;

    return (
        <Nav>
            <MenuIcon style={MenuIconStyle} onClick={handleClick} />
            <Title isShowSearch={isShowSearch} />
        </Nav>
    );
};

export default Banner;

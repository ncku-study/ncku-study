import List from '@mui/material/List';
import { FC, useCallback, useMemo } from 'react';

import { updateSideBarStatus } from '@/redux/actions/layout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarStatusSelector, userSelector } from '@/redux/selectors/layout';
import { useMedia } from '@/utils/index';
import concatedRoutes from './routes';
import SideBarItems from './SideBarItems';
import { DrawerContent, drawerWidth, StyledDrawer } from './style';

const SideBar: FC = () => {
    const device = useMedia();
    const dispatch = useAppDispatch();

    const isSideBarOpen = useAppSelector(sidebarStatusSelector);

    const handleToggle = useCallback(() => {
        dispatch(updateSideBarStatus(!isSideBarOpen));
    }, [dispatch, isSideBarOpen]);

    const { isLoggedIn, mode } = useAppSelector(userSelector);

    const list = useMemo(
        () => concatedRoutes({ isLoggedIn, mode }),
        [isLoggedIn, mode]
    );

    return (
        <StyledDrawer
            open={isSideBarOpen}
            anchor="left"
            variant={device === 'PC' ? 'persistent' : 'temporary'}
            onClose={handleToggle}
            PaperProps={{
                sx: {
                    width: drawerWidth,
                },
            }}
        >
            <DrawerContent>
                <List component="nav">
                    {list.map((item) => (
                        <SideBarItems
                            key={item.text}
                            data={{
                                ...item,
                                url:
                                    typeof item.url === 'string'
                                        ? item.url
                                        : item.url[0],
                            }}
                        />
                    ))}
                </List>
            </DrawerContent>
        </StyledDrawer>
    );
};

export default SideBar;

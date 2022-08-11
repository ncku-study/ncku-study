import List from '@mui/material/List';
import { FC, useCallback, useMemo } from 'react';

import { updateSidebarStatus } from '@/redux/actions/layout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarStatusSelector, userSelector } from '@/redux/selectors/layout';
import { useMedia } from '@/utils/index';
import concatedRoutes from './routes';
import SideBarItems from './SideBarItems';
import { DrawerContent, drawerWidth, StyledDrawer } from './style';

const SideBar: FC = () => {
    const device = useMedia();
    const dispatch = useAppDispatch();

    const isSidebarOpen = useAppSelector(sidebarStatusSelector);

    const handleToggle = useCallback(() => {
        dispatch(updateSidebarStatus(!isSidebarOpen));
    }, [dispatch, isSidebarOpen]);

    const { isLoggedIn, mode } = useAppSelector(userSelector);

    const list = useMemo(
        () => concatedRoutes({ isLoggedIn, mode }),
        [isLoggedIn, mode]
    );

    return (
        <StyledDrawer
            open={isSidebarOpen}
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

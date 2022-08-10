import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import { FC, useCallback } from 'react';

import { updateSidebarStatus } from '@/redux/actions/layout';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { sidebarStatusSelector } from '@/redux/selectors/layout';
import { useMedia } from '@/utils/index';
import SideBarItems from './SideBarItems';
import { DrawerContent, useStyle } from './style';

const drawerWidth = 110;

const SideBar: FC = () => {
    const styles = useStyle();
    const device = useMedia();
    const dispatch = useAppDispatch();

    const isSidebarOpen = useAppSelector(sidebarStatusSelector);

    const handleToggle = useCallback(() => {
        dispatch(updateSidebarStatus(!isSidebarOpen));
    }, [dispatch, isSidebarOpen]);

    return (
        <Drawer
            anchor="left"
            className={styles.drawer}
            variant={device === 'PC' ? 'persistent' : 'temporary'}
            open={isSidebarOpen}
            onClose={handleToggle}
            style={{ width: drawerWidth }}
            classes={{
                paper: styles.drawerPaper,
            }}
        >
            <DrawerContent>
                <List component="nav">
                    <SideBarItems />
                </List>
            </DrawerContent>
        </Drawer>
    );
};

export default SideBar;

import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useRouter } from 'next/router';
import { FC, useContext, useMemo } from 'react';

import { useMedia } from '@/utils/index';
import { GlobalLayoutContext } from '~/src/contexts/GlobalLayoutContext';
import routes from './routes';
import { DrawerContent, ListItemText, useStyle } from './style';
import useInitUserModeByRoute from './useInitUserModeByRoute';
import useSideBarClick from './useSideBarClick';

const drawerWidth = 110;

function checkURLActivity(target: string, condition: string[] | string) {
    if (Array.isArray(condition)) {
        return condition.includes(target);
    }
    return target === condition;
}

interface SideBarProps {
    open: boolean;
    onClose: () => void;
}

const SideBar: FC<SideBarProps> = ({ open, onClose: handleClose }) => {
    const styles = useStyle();
    const router = useRouter();
    const device = useMedia();
    const { isLoggedIn, mode, setMode } = useContext(GlobalLayoutContext);

    useInitUserModeByRoute(router, setMode);
    const { handleClick, handleToggle } = useSideBarClick({
        handleClose,
    });

    const list = useMemo(() => routes(isLoggedIn, mode), [isLoggedIn, mode]);

    return (
        <Drawer
            anchor="left"
            className={styles.drawer}
            variant={device === 'PC' ? 'persistent' : 'temporary'}
            open={open}
            onClose={handleToggle}
            style={{ width: drawerWidth }}
            classes={{
                paper: styles.drawerPaper,
            }}
        >
            <DrawerContent>
                <List component="nav">
                    {list.map(
                        (item) =>
                            item && (
                                <ListItem
                                    button
                                    key={item.text}
                                    className={styles.listItem}
                                    component="a"
                                    onClick={() =>
                                        handleClick(
                                            Array.isArray(item.url)
                                                ? item.url[0]
                                                : item.url
                                        )
                                    }
                                >
                                    <ListItemIcon
                                        className={
                                            checkURLActivity(
                                                router.pathname,
                                                item.url
                                            )
                                                ? styles.listItemIconSelected
                                                : styles.listItemIcon
                                        }
                                    >
                                        {item.icon}
                                    </ListItemIcon>
                                    <ListItemText>{item.text}</ListItemText>
                                </ListItem>
                            )
                    )}
                </List>
            </DrawerContent>
        </Drawer>
    );
};

export default SideBar;

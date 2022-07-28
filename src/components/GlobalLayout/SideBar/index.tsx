import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useMemo } from 'react';

import { useMedia } from '@utils/index';
import { adminRouters, routers } from './routes';
import { DrawerContent, ListItemText, useStyle } from './style';
import useSideBarClick from './useSideBarClick';

const Drawer = dynamic(() => import('@mui/material/Drawer'), { ssr: false });
const ListItemIcon = dynamic(() => import('@mui/material/ListItemIcon'), {
  ssr: false,
});

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

export default function SideBar({ open, onClose: handleClose }: SideBarProps) {
  const styles = useStyle();
  const router = useRouter();
  const device = useMedia();

  const { handleClick, handleToggle } = useSideBarClick({
    handleClose,
  });

  const list = useMemo(
    () => (router.pathname.startsWith('/admin/') ? adminRouters : routers),
    [router.pathname]
  );

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
          {list.map((item) => (
            <ListItem
              button
              key={item.text}
              className={styles.listItem}
              component="a"
              onClick={() =>
                handleClick(Array.isArray(item.url) ? item.url[0] : item.url)
              }
            >
              <ListItemIcon
                className={
                  checkURLActivity(router.pathname, item.url)
                    ? styles.listItemIconSelected
                    : styles.listItemIcon
                }
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText>{item.text}</ListItemText>
            </ListItem>
          ))}
        </List>
      </DrawerContent>
    </Drawer>
  );
}

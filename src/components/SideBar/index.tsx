import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';

import useMedia from '@utils/useMedia';
import { adminRouters } from './routes';
import { DrawerContent, ListItemText, useStyle } from './style';
import useSideBarClick from './useSideBarClick';
import useSideBarEffect from './useSideBarEffect';
// import { useMedia } from '~/utils/index';

const Drawer = dynamic(() => import('@mui/material/Drawer'), { ssr: false });
const ListItemIcon = dynamic(() => import('@mui/material/ListItemIcon'), {
  ssr: false,
});

const drawerWidth = 110;

function checkIsActiveUrl(target: string, condition: string[] | string) {
  if (Array.isArray(condition)) {
    return condition.includes(target);
  }
  // return target === condition;
  return false;
}

interface SideBarProps {
  open: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export default function SideBar({ open, onClose, onOpen }: SideBarProps) {
  const classes = useStyle();
  const router = useRouter();
  const device = useMedia();

  const { handleClick } = useSideBarClick({ device: 'PC', onClose });
  useSideBarEffect({ device, onClose, onOpen });

  //   const arr = useMemo(
  //     () => (location.pathname.startsWith('/admin/') ? adminRouters : routers),
  //     [location]
  //   );

  return (
    <Drawer
      anchor="left"
      className={classes.drawer}
      variant="persistent"
      open={open}
      //   onClose={handleToggle({ 'left', false})}
      style={{ width: drawerWidth }}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <DrawerContent>
        <List component="nav">
          {adminRouters.map((item) => (
            <ListItem
              button
              key={item.text}
              className={classes.listItem}
              component="a"
              onClick={() =>
                handleClick(Array.isArray(item.url) ? item.url[0] : item.url)
              }
            >
              <ListItemIcon
                className={
                  checkIsActiveUrl(router.pathname, item.url)
                    ? classes.listItemIconSelected
                    : classes.listItemIcon
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

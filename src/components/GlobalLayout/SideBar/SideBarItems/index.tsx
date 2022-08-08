import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';

import { Mode } from '~/pages/api/user';
import { ListItemText, useStyle } from '../style';
import concatedRoutes from './routes';

function checkURLActivity(target: string, condition: string[] | string) {
    if (Array.isArray(condition)) {
        return condition.includes(target);
    }
    return target === condition;
}

interface SideBarItemsProps {
    isLoggedIn: boolean;
    mode: Mode;
    onClick: (url: string) => unknown;
}

const SideBarItems: FC<SideBarItemsProps> = ({
    isLoggedIn,
    mode,
    onClick: handleClick,
}) => {
    const styles = useStyle();
    const router = useRouter();

    const list = useMemo(
        () => concatedRoutes({ isLoggedIn, mode }),
        [isLoggedIn, mode]
    );

    return (
        <>
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
                                    checkURLActivity(router.pathname, item.url)
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
        </>
    );
};

export default SideBarItems;

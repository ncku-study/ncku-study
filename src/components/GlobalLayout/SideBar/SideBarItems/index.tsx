import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import { useRouter } from 'next/router';
import { FC, useMemo } from 'react';
import { useAppSelector } from '~/src/redux/hooks';
import { userSelector } from '~/src/redux/selectors/layout';

import { ListItemText, useStyle } from '../style';
import concatedRoutes from './routes';
import useHandleSidebarClick from './useHandleSidebarClick';

function checkURLActivity(target: string, condition: string[] | string) {
    if (Array.isArray(condition)) {
        return condition.includes(target);
    }
    return target === condition;
}

const SideBarItems: FC = () => {
    const styles = useStyle();
    const router = useRouter();

    const { isLoggedIn, mode } = useAppSelector(userSelector);

    const list = useMemo(
        () => concatedRoutes({ isLoggedIn, mode }),
        [isLoggedIn, mode]
    );

    const handleClick = useHandleSidebarClick();

    return (
        <>
            {list.map((item) => (
                <ListItem
                    button
                    key={item.text}
                    className={styles.listItem}
                    component="a"
                    onClick={() =>
                        handleClick(
                            Array.isArray(item.url) ? item.url[0] : item.url
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
            ))}
        </>
    );
};

export default SideBarItems;

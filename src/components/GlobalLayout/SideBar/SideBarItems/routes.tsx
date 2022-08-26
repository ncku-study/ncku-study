/* eslint-disable no-nested-ternary */
import BrightnessHighIcon from '@mui/icons-material/BrightnessHigh';
import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import LogoutIcon from '@mui/icons-material/Logout';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

import { Mode } from '~/lib/session';

const iconStyle = { width: '1.9rem', height: '1.9rem' };

const basicRoutes = (mode: Mode) => {
    switch (mode) {
        case Mode.normal:
            return [
                {
                    text: '轉輔雙主',
                    icon: <ImportContactsIcon style={iconStyle} />,
                    url: ['/', '/major'],
                    isLoggedIn: false,
                },
                {
                    text: '學業心得',
                    icon: <SchoolIcon style={iconStyle} />,
                    url: '/study',
                    isLoggedIn: false,
                },
                {
                    text: '我要分享',
                    icon: <PostAddIcon style={iconStyle} />,
                    url: '/post',
                    isLoggedIn: false,
                },
                {
                    text: '聯絡我們',
                    icon: <HowToVoteIcon style={iconStyle} />,
                    url: 'https://forms.gle/qqrnLmhQoLyZ1BULA',
                    isLoggedIn: false,
                },
                {
                    text: '進入後台',
                    icon: <BrightnessHighIcon style={iconStyle} />,
                    url: '/admin',
                    isLoggedIn: true,
                },
            ];
        case Mode.admin:
            return [
                {
                    text: '審查學業',
                    icon: <SchoolIcon style={iconStyle} />,
                    url: '/admin/study',
                    isLoggedIn: true,
                },
                {
                    text: '審查轉輔轉',
                    icon: <ImportContactsIcon style={iconStyle} />,
                    url: '/admin/major',
                    isLoggedIn: true,
                },
                {
                    text: '學院系設定',
                    icon: <SettingsIcon style={iconStyle} />,
                    url: '/admin/department',
                    isLoggedIn: true,
                },
                {
                    text: '公告設定',
                    icon: <ErrorOutlinedIcon style={iconStyle} />,
                    url: '/admin/announcement',
                    isLoggedIn: true,
                },
                {
                    text: '回到首頁',
                    icon: <HomeIcon style={iconStyle} />,
                    url: '/',
                    isLoggedIn: false,
                },
            ];
        default:
            return [];
    }
};

interface ConcatedRoutesInterface {
    isLoggedIn: boolean;
    mode: Mode;
}

const concatedRoutes = ({ isLoggedIn, mode }: ConcatedRoutesInterface) => {
    const routes = basicRoutes(mode);

    /** shared icons */
    routes.push({
        text: '登出',
        icon: <LogoutIcon style={iconStyle} />,
        url: '/admin/login',
        isLoggedIn: true,
    });

    if (!isLoggedIn)
        return routes.filter((route) => route.isLoggedIn === isLoggedIn);

    return routes;
};

export default concatedRoutes;

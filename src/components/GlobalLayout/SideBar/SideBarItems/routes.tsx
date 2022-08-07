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

import { Mode } from '~/pages/api/user';

const iconStyle = { width: '1.9rem', height: '1.9rem' };
const basicRoutes = (mode: Mode) => {
    switch (mode) {
        case Mode.normal:
            return [
                {
                    text: '轉輔雙主',
                    icon: <ImportContactsIcon style={iconStyle} />,
                    url: ['/', '/major'],
                },
                {
                    text: '學業心得',
                    icon: <SchoolIcon style={iconStyle} />,
                    url: '/study',
                },
                {
                    text: '我要分享',
                    icon: <PostAddIcon style={iconStyle} />,
                    url: '/post',
                },
                {
                    text: '聯絡我們',
                    icon: <HowToVoteIcon style={iconStyle} />,
                    url: 'https://forms.gle/qqrnLmhQoLyZ1BULA',
                },
            ];
        case Mode.admin:
            return [
                {
                    text: '回到首頁',
                    icon: <HomeIcon style={iconStyle} />,
                    url: '/',
                },
            ];
        default:
            return [];
    }
};

interface AdvancedRoutesInterface {
    isLoggedIn: boolean;
    mode: Mode;
}

const advancedRoutes = ({ isLoggedIn, mode }: AdvancedRoutesInterface) => {
    const routes = basicRoutes(mode);
    if (!isLoggedIn) return routes;

    switch (mode) {
        case Mode.normal: {
            routes.push({
                text: '進入後台',
                icon: <BrightnessHighIcon style={iconStyle} />,
                url: '/admin',
            });
            break;
        }
        case Mode.admin: {
            routes.push(
                {
                    text: '審查學業',
                    icon: <SchoolIcon style={iconStyle} />,
                    url: '/admin/study',
                },
                {
                    text: '審查轉輔轉',
                    icon: <ImportContactsIcon style={iconStyle} />,
                    url: '/admin/major',
                },
                {
                    text: '學院系設定',
                    icon: <SettingsIcon style={iconStyle} />,
                    url: '/admin/department',
                },
                {
                    text: '公告設定',
                    icon: <ErrorOutlinedIcon style={iconStyle} />,
                    url: '/admin/announcement',
                }
            );
            break;
        }
        default:
            break;
    }

    routes.push({
        text: '登出',
        icon: <LogoutIcon style={iconStyle} />,
        url: '/admin/login',
    });

    return routes;
};

export default advancedRoutes;

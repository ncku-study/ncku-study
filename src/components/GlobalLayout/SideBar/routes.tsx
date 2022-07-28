import ErrorOutlinedIcon from '@mui/icons-material/ErrorOutlined';
import HomeIcon from '@mui/icons-material/Home';
import HowToVoteIcon from '@mui/icons-material/HowToVote';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SchoolIcon from '@mui/icons-material/School';
import SettingsIcon from '@mui/icons-material/Settings';

const iconStyle = { width: '1.9rem', height: '1.9rem' };

export const routers = [
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

export const adminRouters = [
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
  },
  {
    text: '回到首頁',
    icon: <HomeIcon style={iconStyle} />,
    url: '/',
  },
];

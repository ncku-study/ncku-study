import styled from '@emotion/styled';
import MenuIcon from '@mui/icons-material/Menu';

import { color } from '~/styles/global';

export const Nav = styled('nav')({
    display: 'flex',
    alignItems: 'center',
});

export const StyledMenuIcon = styled(MenuIcon)({
    color: color.darkBlack,
    fontSize: 30,
});

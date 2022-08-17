import styled from '@emotion/styled';
import { Drawer } from '@mui/material';

import { color } from '~/styles/global';

export const drawerWidth = 110;

export const StyledDrawer = styled(Drawer)({
    width: drawerWidth,
});

export const DrawerContent = styled('div')({
    height: '100%',
    backgroundColor: color.white,
});

export const SelectContainer = styled('div')({
    width: '95%',
    height: '100%',

    position: 'absolute',
    top: 0,
    right: 0,

    display: 'grid',
    gridTemplateRows: '1fr 4fr 1fr',
});

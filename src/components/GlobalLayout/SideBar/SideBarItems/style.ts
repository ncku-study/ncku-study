import styled from '@emotion/styled';
import { ListItemButton, ListItemIcon } from '@mui/material';
import { color } from '~/styles/global';

export const StyledListItemButton = styled(ListItemButton)({
    height: '80px',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
});

export const StyledListemIcon = styled(ListItemIcon)({
    height: '35px',
    minWidth: '35px',
    marginBottom: '5px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: color.yellow,
    borderRadius: '5px',
});

export const ListItemText = styled.span`
    font-size: 1.4rem;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
`;

import styled from '@emotion/styled';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { color } from '~/src/theme/global';
import { StyleProps } from '../propsType';

export const Title = styled.div<StyleProps>`
    display: ${(props) => (props.display ? props.display : 'flex')};
    position: relative;
    font-size: ${(props) => (props.size ? props.size : '15px')};
    justify-content: ${(props) => (props.align ? props.align : 'center')};
    color: ${(props) =>
        props.color
            ? props.color
            : color.lightBlack}; // the color global theme doesn't exist
`;

export const DeleteButton = styled(HighlightOffIcon)<StyleProps>`
    color: ${color.red};
    font-size: ${(props) => (props.size ? props.size : '25px')};
    position: absolute;
    right: 0;
    cursor: pointer;
`;

import styled from '@emotion/styled';
import { colorMap } from '~/src/theme/global';
import { StyleProps } from '../propsType';

export default styled.div<StyleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  background-color: ${({ theme }) =>
    theme ? colorMap[theme].backgroundColor : ''};
  color: ${({ theme }) => colorMap[theme].color};
  grid-area: icon;
  width: 42px;
  height: 42px;
  border-radius: 42px;
  margin: 10px auto;
`;

import styled, { css } from 'styled-components';
import Button from '../StyledCompontents/Button';
import Floater from '../StyledCompontents/Floater';

export const StyledDifficultyControl = styled(Floater)`
    width: 200px;
    padding: 0 40px;
    background-color: lightgrey;
`

export const Option = styled(Button)`
    ${props => props.selected && css`
        border: 2px solid black;
    `}
    margin: 10px 0;
`;
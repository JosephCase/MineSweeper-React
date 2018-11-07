import styled, { css } from 'styled-components';
import Button from '../StyledCompontents/Button';
import Floater from '../StyledCompontents/Floater';
import config from '../../config';


export const StyledDifficultyControl = styled(Floater)`

    width: 200px;
    padding: 0 40px;
    background-color: lightgrey;

    @media (max-width: ${config.breakPoints.b1000}) {
        width: auto;
        padding: 10px 10px 0;
        flex-direction: row;
        flex-wrap: wrap;
    }
`

export const Option = styled(Button)`
    border: ${props => props.selected ? '2px solid black' : '2px solid white'};
    margin: 10px 0;

    @media (max-width: ${config.breakPoints.b1000}) {
        width: 140px;
        margin: 10px;
    }

`;
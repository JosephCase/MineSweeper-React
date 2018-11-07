import styled from 'styled-components';
import Floater from '../StyledCompontents/Floater';

export const StyledGameStatus = styled(Floater)`
    color: #fff;
    background-color: lightgrey;
    position: absolute;
    width: 300px;
    transition: transform 0.5s;
    transform: translateY(${props => props.hidden ? -100 : 0}%);
    align-items: center;
    p {
        margin-left: 10px;
        font-size: 18px;
        cursor: pointer;
    }
`
import styled from 'styled-components';
import Floater from '../StyledCompontents/Floater';
import config from '../../config';

export const StyledSizeControl = styled(Floater)`
    height: 120px;
    align-items: center;
    background-color: lightgrey;
    padding-right: 280px;
    &>button {
        width: 56px;
        height: 56px;
        padding: 0;
        margin: 0;
        font-size: 20px;
    }
    &>p {
        font-size: 28px;
        color: #fff;
        height: 56px;
        line-height: 56px;
        margin: 0 26px;
        width: 34px;
        text-align: center;
    }

    @media (max-width: ${config.breakPoints.b1000}) {
        padding-right: 0;
        height: 100px;
    }

    
`;
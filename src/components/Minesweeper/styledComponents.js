import styled from 'styled-components';
import Floater from '../StyledCompontents/Floater';
import config from '../../config';

export const StyledMineSweeper = styled(Floater)`
    height: 100vh;
`;

export const Wrapper = styled(Floater)`
    flex-grow: 1;
    @media (max-width: ${config.breakPoints.b1000}) {
        flex-direction: column;
    }
`;
import styled from 'styled-components';

const Panel = styled.div`
    margin: 0;
    overflow: hidden;
    display: flex;
    justify-content: center;
    flex-direction: ${props => props.vertical ? 'column' : 'row'};
`;

export default Panel;
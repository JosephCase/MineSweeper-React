import styled from 'styled-components';

const getBackgroundColor = ({ open, mine, marked, exploded }) => {

    if(open && mine && exploded) {
        return 'red';
    }
    if(open && mine) {
        return 'grey';
    }
    if(open) {
        return 'white';
    }
    if(!open && marked) {
        return 'black';
    }
    if(!open) {
        return 'lightgrey';
    }
}

const getColor = ({ open, marked, mistaken }) => {
    if(!open && marked && mistaken) {
        return 'red';
    }
    if(!open && marked) {
       return 'white';
    }
    return 'black';
}

export const StyledCell = styled.p`
    box-sizing: border-box;
    margin: 0;
    width: ${props => props.cellSize}px;
    height: ${props => props.cellSize}px;
    line-height: ${props => props.cellSize}px;
    text-align: center;
    border: 1px solid black;
    background: ${props => getBackgroundColor(props)};
    cursor: pointer;
    user-select: none;
    color: ${props => getColor(props)};
`;
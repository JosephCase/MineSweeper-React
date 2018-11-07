import styled from 'styled-components';

const calculateBgColor = ({ open, mine, marked, mistaken, exploded }) => {
    if(open) {
        if(mine) {
            if(exploded) {
                return 'red';
            }
            return 'grey';
        }
        return 'white';
    } else {
        if(marked) {
            return 'black';
        }
        return 'lightgrey';
    }
}

const calculateColor = ({ open, mine, marked, mistaken, exploded }) => {
    if(!open && marked) {
        if(mistaken) {
            return 'red';
        }
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
    background: ${props => calculateBgColor(props)};
    cursor: pointer;
    user-select: none;
    color: ${props => calculateColor(props)};
`;
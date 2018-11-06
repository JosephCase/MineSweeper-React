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
    margin: 0;
    width: 32px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid black;
    font-family: arial, sans-serif;
    background: ${props => calculateBgColor(props)};
    cursor: pointer;
    user-select: none;
    color: ${props => calculateColor(props)};
`;
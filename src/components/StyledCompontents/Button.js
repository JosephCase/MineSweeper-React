import styled from 'styled-components';

const Button = styled.button`
    display: block;
    box-sizing: border-box;
    border: none;
    font-family: arial, sans-serif;
    font-size: 18px;
    background: #fff;
    text-align: center;
    padding: 20px;
    cursor: pointer;
    :focus {
        outline: 0;
    }
`;

export default Button;
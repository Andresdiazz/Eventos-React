import styled, { css } from 'styled-components';

export const ContainerLogin = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;

    ${props => props.left && css`
        float: left;
    `}

    ${props => props.right && css`
        float: right;
    `}

    ${props => props.gris && css`
        background-color: #F9F9F9;
    `}
    
    ${props => props.azul && css`
        background: linear-gradient(#0D1319, #1D2E42);
        color: #ffffff;
    `}

`;
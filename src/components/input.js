import styled, {css} from 'styled-components';

export const Input = styled.input`
    border: none;
    width: 100%;
    padding: 10px 20px;
    font-size: 15px;

    ${props => props.space && css`
        margin: 10px 0;
    `}
`;
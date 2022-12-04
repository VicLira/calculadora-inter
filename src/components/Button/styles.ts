import styled, { css } from 'styled-components';

interface IButtonStyled {
    variant: string;
}

export const ButtonContainer = styled.button<IButtonStyled>`
    padding: 10px;  

    background-color: #000;
    color: #fff;
    
    font-size: 24px;
    font-weight: 700;

    flex: 1;
    height: 70px;

    ${({variant}) => variant !== "primary" && css`
        background: rgba(0, 0, 0, 0.5);
        box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(6.8px);
        -webkit-backdrop-filter: blur(6.8px);

    `}


    &:hover {
        opacity: 0.3;
        background-color: #fff;
        color: #a0a0a0;
        filter: blur(.5px);
        cursor: pointer;
    }
`;
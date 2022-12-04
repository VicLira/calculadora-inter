import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #cacaca;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const Content = styled.div`
    background-color: #FFF;
    width: 70%;
    max-width: 380px;
    min-height: 480px;
    padding: 10px;
    border-radius: 8px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    /* From https://css.glass */
    background: rgba(0, 0, 0, 0.5);
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(6.8px);
    -webkit-backdrop-filter: blur(6.8px);
    border: 1px solid rgba(255, 255, 255, 0.3);
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;
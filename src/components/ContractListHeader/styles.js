import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: var(--grey-1);
    margin: 0px 10px;
    padding: 10px;

    @media (max-width: 1440px){
        width: 1000px;
    }
`;

export const Text = styled.p`
    color: var(--white);
    font-weight: bold;

    @media (max-width: 1440px){
        font-size: 18px;
    }

    @media (max-width: 768px){
        font-size: 12px;
    }

`;



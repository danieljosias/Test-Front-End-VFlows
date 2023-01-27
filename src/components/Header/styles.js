import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;

    @media (min-width: 1024px){
        justify-content: space-around;
    }
`;

export const Logo = styled.img`
    max-width: 100px;
    
    @media (min-width: 768px){
        max-width: 150px;
    }
`;

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 90%;
    
    @media (min-width: 768px){
        font-size: 200%;
    }
`;

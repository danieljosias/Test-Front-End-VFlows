import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 100vh;
    background-color: var(--beige);
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px; 
    padding: 80px 20px;
    margin: 20px;
    border-radius: 15px;
    box-shadow: 2px 2px 5px 1px;
    background-color: var(--white);
    max-width: 550px;
    max-height: 450px;
    
    @media (max-width: 768px){
        padding: 40px 20px;
        max-width: 400px;
        max-height: 400px;
    }

    @media (max-width: 1440px){
        padding: 40px 20px;
        max-width: 400px;
        max-height: 400px;
    }
`;

export const Logo = styled.img`
    width: 50%;
`;

export const Title = styled.h3`
    text-transform: uppercase;
`;
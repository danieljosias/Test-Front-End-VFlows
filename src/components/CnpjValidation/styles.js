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
    border-radius: 15px;
    box-shadow: 2px 2px 5px 1px;
    width: 500px;
    height: 400px;
    background-color: var(--white);
`;

export const Logo = styled.img`
    width: 150px;
`;

export const Title = styled.h3`
    text-transform: uppercase;
`;
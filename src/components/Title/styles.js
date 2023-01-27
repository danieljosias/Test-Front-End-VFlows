import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    border: 1px solid var(--red);
    margin: 10px;
    border-radius: 5px;
    gap: 10px;
    padding: 10px;

    @media (max-width: 1024px){
        width: 800px;
    }  
    
    @media (max-width: 1440px){
        width: 1000px;
    }  
`;

export const Title = styled.h3``;
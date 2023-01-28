import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: 20px;
    width: 1000px;
    
    @media (max-width: 1440px){
        max-width: 1220px;
    }
    
    @media (max-width: 1360px){
        max-width: 1180px;
    }
    
    @media (max-width: 1024px){
        max-width: 1012px;
    }
    
    @media (max-width: 768px){
        max-width: 760px;
    }
    
`
export const Wrapper = styled.div`
    display: flex;
    gap: 20px;
`
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`;

export const Wrapper = styled.div`
    border: 1px solid var(--red);
    margin: 10px;
    border-radius: 5px;
    gap: 10px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px){
        width: 800px;
    }  
    
    @media (max-width: 1440px){
        width: 1000px;
    }  
`

export const Left = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
`;

export const Right = styled.div`
    padding: 10px;
`;

export const Text = styled.p`
`
export const Span = styled.span`
    font-weight: bold;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--red);
`;

export const Wrapper = styled.div`
    border: 1px solid var(--red);
    border-radius: 5px;
    width: 1000px;
    padding: 10px 10px;

    @media (max-width: 768px){
        width: 748px;
    }
`;

export const TextContainer = styled.div`
    display: flex;
    gap: 220px;
    margin: 20px 0px;
`;

export const Text = styled.p``;

export const Label = styled.label``;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 5px 60px;

    @media (max-width: 1440px){
        width: 1000px;
    }
`;

export const Label = styled.label``;

export const Input = styled.input``;

export const TextContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
`;

export const Text = styled.p`
    color: var(--black);
`;

export const PorcentageContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background-color: var(--blue);
    justify-content: center;
    width: 170px;
`

export const Porcentage = styled.p`
    color: var(--white);
`;

export const IconContainer = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    border-radius: 4px;
    background-color: var(--blue);
    padding: 5px;
`;

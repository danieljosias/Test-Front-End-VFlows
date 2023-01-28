import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 10px;
    gap: 10px;
`;

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--grey-2);
    padding: 5px 60px;
    width: 1000px;

    @media (max-width: 768px){
        width: 748px;
    }
`;

export const Label = styled.label``;

export const Input = styled.input`
    cursor: pointer;
`;

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

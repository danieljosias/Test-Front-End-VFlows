import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Wrapper = styled.div`
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

export const Label = styled.label`
`;

export const InputFileLabel = styled.label`
    background-color: var(--grey-3);
    padding: 10px;
    cursor: pointer;
`;

export const FieldSet = styled.fieldset`
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 1px solid var(--red);
    border-radius: 5px;
`;

export const TaxesRetention = styled.div`
     margin-bottom: 60px;
`;

export const TechnicalRetention = styled.div``;

export const Invoices = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;
`;

export const Checkbox = styled.div`
    display: flex;
    gap:20px;
    margin-bottom: 20px;

`;
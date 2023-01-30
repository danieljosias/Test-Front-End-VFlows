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

export const InputFile = styled.input`
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
    align-items: center;
    gap: 20px;
`;

export const Checkbox = styled.div`
    display: flex;
    gap:20px;
    margin-bottom: 20px;

`;

export const Total = styled.div`
    display: flex;
    gap: 20px;
    padding: 20px;
    border: 1px solid var(--red);
    border-radius: 5px;
    width: 100%;
    max-width: 1000px;
`

export const Title = styled.p``
export const TitleContainer = styled.div``

export const Percentual = styled.div`
    width: 470px;
    background: var(--grey-3);
    padding: 5px;
    height: 30px;
`

export const Value = styled.div`
    width: 470px;
    background: var(--grey-3);
    padding: 5px;
    height: 30px;
`

export const Trash = styled.button`
    border-radius: 5px;
    background: var(--red);
    padding: 5px;
`


import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Input = styled.input`
    width: ${(p) => p.props.width};
    height: ${(p) => p.props.heigth};

    @media (max-width: 768px){
        width: 160px;
    }

`;

export const Label = styled.label``;
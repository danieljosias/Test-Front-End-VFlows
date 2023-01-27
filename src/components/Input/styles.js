import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Input = styled.input`
    width: ${(p)  => p.props.width};
    height: ${(p)  => p.props.height};
`;

export const Label = styled.label``;
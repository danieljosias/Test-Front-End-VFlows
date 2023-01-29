import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column; 
`;

export const Input = styled.input`
    width: ${(p) => p.props.width};
    height: ${(p) => p.props.height};
    background: ${(p) => p.props.background};
`;

export const Label = styled.label`
`;
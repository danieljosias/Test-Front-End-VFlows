import styled from 'styled-components';

export const Button = styled.button`
    display: flex;
    justify-content: center;
    text-align: center;
    width: ${(p) => p.props.width};
    padding: ${(p) => p.props.padding};
    background-color: ${(p) => p.props.background};
    color: ${(p) => p.props.color};
`;
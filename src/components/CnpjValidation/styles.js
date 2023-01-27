import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    border: 1px solid;
    width: 500px;
    height: 400px;
`;

export const Logo = styled.img`
    width: 150px;
`;

export const Title = styled.h3`
    text-transform: uppercase;
`;
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
`

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1000px;

    @media (max-width: 768px){
        width: 720px;
    }
`;

export const Logo = styled.img`
    width: 150px;
`;

export const Text = styled.p`
    color: var(--grey-1);
`;
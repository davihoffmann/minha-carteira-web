import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.grey};
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 40px;
    width: 40px;
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;
`;

export const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 50px;
`;

export const MenuItem = styled(Link)`
    color: ${props => props.theme.colors.info};
    text-decoration: none;
    margin: 7px 0;
    display: flex;
    align-items: center;

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    > svg {
        font-size: 18px;
        margin-right: 5px;
    }
`;

import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

interface IContainerProps {
    isOpen: boolean;
}

export const Container = styled.div<IContainerProps>`
    grid-area: AS;
    background-color: ${props => props.theme.colors.secondary};
    padding-left: 20px;
    border-right: 1px solid ${props => props.theme.colors.grey};
    position: relative;

    @media (max-width: 600px) {
        width: 170px;
        padding-left: 7px;
        position: fixed;
        z-index: 2;

        height: ${props => (props.isOpen ? '100vh' : '70px')};
        overflow: hidden;

        ${props =>
            !props.isOpen &&
            css`
                border: none;
                border-bottom: 1px solid ${props => props.theme.colors.grey};
            `};
    }
`;

export const Header = styled.header`
    height: 70px;
    display: flex;
    align-items: center;
`;

export const Logo = styled.img`
    height: 40px;
    width: 40px;

    @media (max-width: 600px) {
        display: none;
    }
`;

export const Title = styled.h3`
    color: ${props => props.theme.colors.white};
    margin-left: 10px;

    /* @media (max-width: 600px) {
        display: none;
    } */
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

export const MenuItemButton = styled.button`
    font-size: 16px;
    color: ${props => props.theme.colors.info};

    border: none;
    background: none;

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

export const ToogleMenu = styled.button`
    height: 40px;
    width: 40px;
    border-radius: 5px;
    font-size: 22px;
    background-color: ${props => props.theme.colors.warning};
    color: ${props => props.theme.colors.white};

    transition: opacity 0.3s;

    &:hover {
        opacity: 0.7;
    }

    display: none;

    @media (max-width: 600px) {
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;

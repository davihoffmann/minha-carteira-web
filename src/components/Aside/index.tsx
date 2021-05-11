import React from 'react';
import { MdDashboard, MdArrowDownward, MdArrowUpward, MdExitToApp } from 'react-icons/md';
import logoImg from '../../assets/logo.svg';
import { Container, Header, Logo, Title, MenuContainer, MenuItem } from './styles';

const Aside: React.FC = () => {
    return (
        <Container>
            <Header>
                <Logo src={logoImg} alt="Logo Minha Carteira" />
                <Title>Minha Carteira</Title>
            </Header>

            <MenuContainer>
                <MenuItem to="/">
                    <MdDashboard />
                    Dashboard
                </MenuItem>
                <MenuItem to="/list/entry-balance">
                    <MdArrowDownward /> Entradas
                </MenuItem>
                <MenuItem to="/list/exit-balance">
                    <MdArrowUpward /> Saídas
                </MenuItem>
                <MenuItem to="#">
                    <MdExitToApp />
                    Sair
                </MenuItem>
            </MenuContainer>
        </Container>
    );
};

export default Aside;

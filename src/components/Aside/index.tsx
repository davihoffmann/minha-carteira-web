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
                <MenuItem href="#">
                    <MdDashboard />
                    Dashboard
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowDownward /> Entradas
                </MenuItem>
                <MenuItem href="#">
                    <MdArrowUpward /> Saídas
                </MenuItem>
                <MenuItem href="#">
                    <MdExitToApp />
                    Sair
                </MenuItem>
            </MenuContainer>
        </Container>
    );
};

export default Aside;

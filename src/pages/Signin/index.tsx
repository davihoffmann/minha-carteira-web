import React from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { Container, Logo, Form, FormTitle } from './styles';

import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {
    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="MInha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={() => {}}>
                <FormTitle>Entrar</FormTitle>

                <InputText type="email" required placeholder="E-mail" />
                <InputText type="password" required placeholder="Senha" />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
};

export default Signin;

import React, { useState, SyntheticEvent } from 'react';
import InputText from '../../components/InputText';
import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import { Container, Logo, Form, FormTitle } from './styles';

import logoImg from '../../assets/logo.svg';

const Signin: React.FC = () => {
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const { signIn } = useAuth();

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        if (email && password) {
            signIn(email, password);
        }
    };

    return (
        <Container>
            <Logo>
                <img src={logoImg} alt="MInha Carteira" />
                <h2>Minha Carteira</h2>
            </Logo>

            <Form onSubmit={e => handleSubmit(e)}>
                <FormTitle>Entrar</FormTitle>

                <InputText type="email" required placeholder="E-mail" onChange={e => setEmail(e.target.value)} />
                <InputText type="password" required placeholder="Senha" onChange={e => setPassword(e.target.value)} />

                <Button type="submit">Acessar</Button>
            </Form>
        </Container>
    );
};

export default Signin;

import React, { useState } from 'react'
import { CardButton, Container } from '../NoticiaCard/NoticiaCardElements'
import { Title } from '../Noticias/NoticiasElements'
import Spinner from '../Spinner/Spinner'
import { InputContainer, StyledEntryCard, StyledInput, StyledInputGroup } from '../Cadastro/CadastroInputElements'
import securityService from '../../services/SecurityService'
import { useNavigate } from "react-router-dom";

export default function LoginInput({}) {

    const [carregando, setCarregando] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();
        
        const usuario = {
            "username": username,
            "password": password
        };

        console.log(usuario)

        securityService.login(usuario)
            .then((response) => {
                // eslint-disable-next-line no-unused-expressions
                alert("Logado com sucesso"),
                localStorage.setItem("user", response.data.token),
                navigate("/")
        });
    }
    
    
    return (
        <>
            <Container>
                <Title>Login</Title>
                <InputContainer>
                    <StyledEntryCard>
                        <StyledInputGroup>
                            <form>
                                <StyledInput type="text" placeholder="Nome de usuário" required onChange={(e) => setUsername(e.target.value)}></StyledInput>
                                <StyledInput type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}></StyledInput>
                                <CardButton onClick={handleSubmit}>Logar-se</CardButton>
                            </form>
                        </StyledInputGroup>
                    </StyledEntryCard>
                </InputContainer>
            </Container>
            {<Spinner carregando={carregando} />}
        </>
    )
}

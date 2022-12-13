import React, { useState, useEffect } from 'react'
import Button from '../Button/Button'
import { Card, CardButton, CardContainer, Container } from '../NoticiaCard/NoticiaCardElements'
import { Title } from '../Noticias/NoticiasElements'
import Spinner from '../Spinner/Spinner'
import { InputContainer, StyledEntryCard, StyledInput, StyledInputGroup } from './CadastroInputElements'
import securityService from '../../services/SecurityService'
import { useNavigate } from 'react-router-dom'

export default function CadastroInput({}) {

    const [carregando, setCarregando] = useState(false)
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        const usuario = {
            "name": username,
            "password": password
        };

        await securityService.cadastrar(usuario).then(res => {
            if(res.status === 200) {
                alert("Usuário cadastrado com sucesso!")
                navigate("/")
            }
        });
    }
    
    return (
        <>
            <Container>
                <Title>Cadastro</Title>
                <InputContainer>
                    <StyledEntryCard>
                        <StyledInputGroup>
                            <form>
                                <StyledInput type="text" placeholder="Nome de usuário" required onChange={(e) => setUsername(e.target.value)}></StyledInput>
                                <StyledInput type="password" placeholder="Senha" required onChange={(e) => setPassword(e.target.value)}></StyledInput>
                                <CardButton onClick={handleSubmit}>Cadastrar</CardButton>
                            </form>
                        </StyledInputGroup>
                    </StyledEntryCard>
                </InputContainer>
            </Container>
            {<Spinner carregando={carregando} />}
        </>
    )
}

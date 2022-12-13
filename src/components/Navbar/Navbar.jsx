import React from 'react'
import Button from '../Button/Button'
import LoginButton from '../Button/Button'
import { Nav, NavLink, Bars, NavMenu, NavLogo, SignUpLink, LoginLink } from './NavbarElements'

export default function Navbar() {

    const usuarioLogado = localStorage.getItem("user") !== null;

    function renderCadastroLogin() {
        console.log(localStorage.getItem("user"))
        return (
        <>
            <SignUpLink to="/cadastro" activeStyle>
                Cadastre-se
            </SignUpLink> 
            <LoginLink to="/login" activeStyle>
                Log in
            </LoginLink>
        </>
        )
    }

    return (
        <>
            <Nav>
                <NavLogo to="/">
                    <h1>Guacamole News</h1>
                </NavLogo>
                <Bars />
                <NavMenu >
                    <NavLink to="/esportes" activeStyle>
                        Esportes
                    </NavLink>
                    <NavLink to="/politica" activeStyle>
                        Política
                    </NavLink>
                    <NavLink to="/economia" activeStyle>
                        Economia
                    </NavLink>
                    {!usuarioLogado && renderCadastroLogin()}
                </NavMenu>
            </Nav>
        </>
  )
}

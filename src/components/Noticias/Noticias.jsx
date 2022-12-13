import React, { useState, useEffect } from 'react'
import { buscarPorAssunto, buscarTodas } from '../../services/NoticiaMockService'
import NoticiaCard from '../NoticiaCard/NoticiaCard'
import { CardContainer, Container } from '../NoticiaCard/NoticiaCardElements'
import Spinner from '../Spinner/Spinner'
import { Title } from './NoticiasElements'

export default function Noticias({assunto}) {
    
    const [noticiasBuscadas, setNoticiasBuscadas] = useState([])
    const [carregando, setCarregando] = useState(true)

    async function getNoticias() {
        try {
            if(!assunto){
                var noticias = await buscarTodas();
            } else {
                var noticias = await buscarPorAssunto(assunto);
            }
            setNoticiasBuscadas(noticias)
        } finally {
            setCarregando(false)
        }
    }

    function renderNoticias(){
        if (noticiasBuscadas.length === 0) {
            return null;
        }


        return noticiasBuscadas.map(noticia => {
            return <NoticiaCard noticia={noticia} />
        })
    }

    function renderTitutlo(){
        if(assunto){
            return <Title>{assunto}</Title>
        }
        
        return <Title>Principais Notícias</Title>
    }

    useEffect(() => {
            getNoticias();
    }, [])
    
    return (
        <>
            <Container>
                {renderTitutlo()}
                <CardContainer>
                    {renderNoticias()}
                </CardContainer>
            </Container>
            {<Spinner carregando={carregando} />}
        </>
    )
}

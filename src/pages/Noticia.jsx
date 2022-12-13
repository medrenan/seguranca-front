import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NoticiaCompleta from '../components/Noticia/NoticiaCompleta';
import { Container } from '../components/NoticiaCard/NoticiaCardElements'
import Spinner from '../components/Spinner/Spinner';
import { buscarPorId } from '../services/NoticiaMockService';

export default function Noticia() {

    const [noticiaBuscada, setNoticiaBuscada] = useState({})
    const [carregando, setCarregando] = useState(true);

    const { id } = useParams();

    async function getNoticia() {
        try {
            const noticia = await buscarPorId(parseInt(id));
            setNoticiaBuscada(noticia[0]);
        } finally {
            setCarregando(false);
        }
    }

    function renderNoticia() {
        return <NoticiaCompleta noticia={noticiaBuscada} />
    }

    useEffect(() => {
        getNoticia();
    }, [])

    return (
        <>
            <Container>
                {renderNoticia()}
            </Container>
            <Spinner carregando={carregando} />
        </>
    )
}

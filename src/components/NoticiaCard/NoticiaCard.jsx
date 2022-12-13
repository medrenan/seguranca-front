import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardButton, CardContent, CardHeader, CardInfo } from './NoticiaCardElements'

export default function NoticiaCard({noticia}) {

    const navigate = useNavigate();
    const handleClick = useCallback(() => navigate(`/noticia/${noticia.id}`, {replace: true}), [navigate]);

    return (
        <Card>
            <CardContent>
                <CardHeader>{noticia.titulo}</CardHeader>
                <CardInfo>{noticia.subTitulo}</CardInfo>
                <CardButton onClick={handleClick}>Veja mais</CardButton>
            </CardContent>
        </Card>
    )
}

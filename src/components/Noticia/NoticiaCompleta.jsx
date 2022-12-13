import React from 'react'
import { NoticiaBody, NoticiaBodyInner, NoticiaContent, NoticiaTitle } from './NoticiaElements'

export default function NoticiaCompleta({noticia}) {
  
  return (
      <>
        <NoticiaBody>
          <NoticiaTitle>{noticia.titulo}</NoticiaTitle>
          <NoticiaBodyInner>
            <NoticiaContent>
                {noticia.conteudo}
            </NoticiaContent>
          </NoticiaBodyInner>
        </NoticiaBody>
      </>
    )
}

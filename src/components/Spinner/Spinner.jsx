import React from 'react'
import { SyncLoader } from 'react-spinners'
import { CenteredDiv } from '../Noticias/NoticiasElements'

export default function Spinner({carregando}) {
    return (
        <CenteredDiv>
            <SyncLoader loading={carregando} color={"#ffffff"}/>
        </CenteredDiv>
    )
}

import React, { useEffect, useState } from "react";
import Noticias from "../components/Noticias/Noticias";
import TermoModal from "../components/TermoModal/TermoModal";
import tosService from "../services/ToSService";

export default function Home() {

    const [termoAceito, setTermoAceito] = useState(undefined);
    const [modalOpen, setModalOpen] = useState(false);

    async function isTermoAceito() {
        var termo = await (await tosService.verificar()).data
        setTermoAceito(termo);
    }

    async function aceitarTermo() {
        await tosService.aceitar();
        
        setTermoAceito(true)
        setModalOpen(false);
    }

    function onCloseModal() {
        if(!termoAceito) {
            alert("É necessário que você aceite os termos de uso")
            return;
        }

        setModalOpen(false);
    }

    function renderModalTermo() {
        if(!localStorage["user"]) {
            return;
        }

        return <TermoModal modalIsOpen={modalOpen}
            closeModal={onCloseModal}
            aceitarTermo={aceitarTermo}/>
    }

    useEffect(() => {
        isTermoAceito();
        setModalOpen(!termoAceito);
    }, [termoAceito])

    return (
        <>
            <Noticias/>
            {!termoAceito && renderModalTermo()}
        </>
    );
}
import React, { useEffect, useState } from 'react'
import Modal from 'react-modal'
import tosService from '../../services/ToSService'

export default function TermoModal({modalIsOpen, closeModal, aceitarTermo}) {

    const [termo, setTermo] = useState({})

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
    };

    async function getTermo() {
        var ultimoTermo = await (await tosService.ultimoTermo()).data
        setTermo(ultimoTermo);
        console.log(ultimoTermo)
    }

    useEffect(() => {
        getTermo();
    }, [])

    return (
        <>
            <Modal isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <h2>Termos de Uso e Privacidade</h2>
                <span>{termo.description}</span>
                <p></p>
                <button onClick={aceitarTermo}>Estou ciente</button>
            </Modal>
        </>
    )
}

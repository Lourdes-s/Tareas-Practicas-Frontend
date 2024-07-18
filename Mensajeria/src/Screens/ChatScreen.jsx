import React from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../Components/Chat'

export const ChatScreen = () => {
    const MOOK_MENSAJES = [
        {
            author: 'pepe',
            text: 'Ayudame loco',
            estado: 'visto',
            day: 'ayer',
            hour: '23:50',
            id: '1'
        },
        {
            author: 'yo',
            text: '??????????',
            estado: 'visto',
            day: 'hoy',
            hour: '05:37',
            id: '2'
        },
        {
            author: 'pepe',
            text: 'Mati me tiene encerrado en el sotano, necesito ayuda',
            estado: 'visto',
            day: 'hoy',
            hour: '06:07',
            id: '3'
        },
    ]
    return (
        <div>
            <ChatHeaderInfo/>
            <ListaMensajes mensajesChat={MOOK_MENSAJES}/>
            <MensajeForm/>
        </div>
    )
}

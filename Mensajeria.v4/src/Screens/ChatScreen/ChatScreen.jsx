import React, { useState } from 'react'
import { ChatHeaderInfo, ListaMensajes, MensajeForm } from '../../Components/Chat'
import './ChatScreen.css'


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

    const[newMessageInfo, setNewMessageInfo] = useState (MOOK_MENSAJES)
    
    const handleSubmitNewMessage = (e) => {
        e.preventDefault()
        const newMessage = {
            author: 'yo',
            text: e.target.mensaje.value,
            estado: 'visto',
            day: 'hoy',
            hour: '06:07',
            id: '7'
        }
        setNewMessageInfo([...newMessageInfo, newMessage])
    }
    return (
        <div style={{height:'100%'}}>
            <ChatHeaderInfo/>
            <ListaMensajes mensajesChat={newMessageInfo}/>
            <MensajeForm handleSubmitNewMessage={handleSubmitNewMessage}/>
        </div>
    )
}

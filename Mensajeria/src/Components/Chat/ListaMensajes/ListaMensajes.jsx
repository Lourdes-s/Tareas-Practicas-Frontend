import React from 'react'
import './ListaMensajes.css'
import { Mensaje } from '../Mensaje/Mensaje'

export const ListaMensajes = ({ mensajesChat }) => {
    return (
            < >
                {mensajesChat.map((mensajeInfo2, index) => <Mensaje mensajeInfo={mensajeInfo2} key={'mensaje' + index}/>)}
            </>
)
}


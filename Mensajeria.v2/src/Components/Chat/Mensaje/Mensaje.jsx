import React from 'react'
import './Mensaje.css'

export const Mensaje = ({ mensajeInfo }) => {
    const { author, text, estado, day, hour } = mensajeInfo
    let direccion
    let color
    if(author === 'yo'){
    direccion = 'end'
    color = 'rgba(245, 245, 245, 0.253)'
    }
    return (
        <div className='container-chats' style={{justifyContent: direccion}}>
            <div className='container' style={{backgroundColor: color}}>
                    <span className='author'>{author}</span>
                    <p className='text'>{text}</p>
                <div className='info'>
                    <span className='timeSince'>{day} {hour}</span>
                    <span className='timeSince'>{estado}</span>
                </div>
            </div> 
        </div> 
    )
}





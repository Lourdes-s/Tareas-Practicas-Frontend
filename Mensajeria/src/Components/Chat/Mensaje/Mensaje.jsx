import React from 'react'
import './Mensaje.css'

export const Mensaje = ({ mensajeInfo }) => {
    const { author, text, estado, day, hour } = mensajeInfo
    return (
        <div className='container-chats'>
            <div className='container'>
                    <span className='author'>{author}</span>
                    <p className='text'>{text}</p>
                <div className='info'>
                    <span className='dia-hora'>{day} {hour}</span>
                    <span className='estado'>{estado}</span>
                </div>
            </div> 
        </div> 
    )
}





import React from 'react'
import './Mensaje.css'

export const Mensaje = ({ mensajeInfo }) => {
    const { author, text, estado, day, hour } = mensajeInfo
    return (
        <div className='container'>
            <div className='author'>
                <span>{author}</span>
            </div>
            <div className='text'>
                <p>{text}</p>
            </div>
            <div className='info'>
                <span>{estado}</span>
                <span>{day}</span>
                <span>{hour}</span>
            </div>
        </div>
    )
}

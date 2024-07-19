import React from 'react'
import './headerInfo.css'
import pepe from '../assets/pepe.jpg'

export const ChatHeaderInfo = () => {
    return (
        <div className='header'>
            <div className='contenedor-contacto'>
                <img src={pepe} className="foto" alt="foto de perfil" />
                <h3 className='nombre'>+54 9 11 6229-23...</h3>
            </div>
            <div className='btns-header'>
                <button ><i className="bi bi-telephone"></i></button>
                <button ><i className="bi bi-camera-video"></i></button>
                <button><i className="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
    )
}

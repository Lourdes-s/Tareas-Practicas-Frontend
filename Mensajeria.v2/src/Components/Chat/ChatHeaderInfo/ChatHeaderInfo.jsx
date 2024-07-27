import React from 'react'
import './headerInfo.css'
import pepe from '../assets/pepe.jpg'

export const ChatHeaderInfo = () => {
    return (
        <div className='header'>
            <div className='contact-container'>
                <img src={pepe} className="profile-picture" alt="foto de perfil" />
                <h3 className='name'>+54 9 11 6229-2369</h3>
            </div>
            <div className='header-buttons'>
                <button className='button'><i className="bi bi-telephone"></i></button>
                <button className='button'><i className="bi bi-camera-video"></i></button>
                <button className='button'><i className="bi bi-three-dots-vertical"></i></button>
            </div>
        </div>
    )
}

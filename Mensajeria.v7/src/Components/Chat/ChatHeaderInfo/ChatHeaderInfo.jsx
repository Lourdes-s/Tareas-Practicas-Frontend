import React from 'react'
import './headerInfo.css'
import pepe from '../assets/pepe.jpg'
import { Link } from 'react-router-dom'


export const ChatHeaderInfo = () => {
    return (
        <div className='header'>
            <div className='contact-container'>
                <Link to={'/'} className='button'><i className="bi bi-arrow-left-short"></i></Link>
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

import React from 'react'
import { MOOK_CONTACTOS } from '../../../Screens/Mook'
import { Link } from 'react-router-dom'
import './Contacts.css'

const Contacts = () => {
    return (
        <div className='contacts-container'>
            {MOOK_CONTACTOS.map(contact =>{
                return(
                    <Link className='contact-list' to = {'/chat/' + contact.id} key={contact.id}>
                        <img className='profile-pic-contacts' flssrc= {contact.thumbnail} alt='foto de perfil' />
                        <div className='text-contacts'>
                            <span className='contact-name'>{contact.nombre} {contact.apellido}</span>
                            <p className='contact-mensaje-text'> {contact.mensajes[0].text}</p>
                            <span className='contact-time'>{contact.mensajes[0].hour}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Contacts
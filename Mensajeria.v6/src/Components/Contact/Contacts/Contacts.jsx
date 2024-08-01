import React from 'react'
import { MOOK_CONTACTOS } from '../../../Screens/Mook'
import { Link } from 'react-router-dom'
import './Contacts.css'

const Contacts = () => {
    return (
        <div className='contacts-container'>
            {MOOK_CONTACTOS.map(contact =>{
                return(
                    <Link className='contact-container' to = {'/chat/' + contact.id} key={contact.id}>
                        <h2>{contact.id}</h2>
                        <img className='profile-pic-contacts' flssrc= {contact.thumbnail} alt='foto de perfil' />
                        <div>
                            <span>{contact.nombre} {contact.apellido}</span>
                            <p> {contact.mensajes[0].text}</p>
                            <span>{contact.mensajes[0].hour}</span>
                        </div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Contacts
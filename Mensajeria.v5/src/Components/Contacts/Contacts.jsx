import React from 'react'
import { MOOK_CONTACTOS } from '../../Screens/Mook'
import { Link } from 'react-router-dom'

const Contacts = () => {
    return (
        <div>
            {MOOK_CONTACTOS.map(contact =>{
                return(
                    <Link to = {'/chat/' + contact.id} key={contact.id}>
                        <h2>{contact.id}</h2>
                        <img src= {contact.thumbnail} alt='foto de perfil' />
                        <div>
                            <span>{product.nombre} {product.apellido}</span>
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
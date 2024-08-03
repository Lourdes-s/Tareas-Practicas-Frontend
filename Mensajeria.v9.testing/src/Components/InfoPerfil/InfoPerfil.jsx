import React from 'react'
import { MOOK_CONTACTOS } from '../../Screens/Mook'
import { Link, useParams } from 'react-router-dom';


const InfoPerfil = ({ contact }) => {
/*     const {contactId} = useParams();
    const contact = MOOK_CONTACTOS.find(contact => contact.id === Number(contactId)) 
 */
            return (
                <h2>hola</h2>
/*                 
                    <div className='container'>
                        <Link className='flecha' to = {"/chat/" + contact.id}><i class="bi bi-arrow-left"></i></Link>
                            <div className='container-nombre-foto'>
                                <span className='nombres'>{contact.nombre} {contact.apellido}</span>
                                <img className='photo' src= {contact.thumbnail} alt="profile-photos" />
                                <span className='telefono'>{contact.telefono} </span>
                            </div>
                            <div className='contenedor_data'>
                            <p className='estado'>{contact.estado} </p>
                                <span className='email'>{contact.email}</span>
                                <span className='direccion'>{contact.direccion} </span>
                            </div>
                    </div>  */
                )}

export default InfoPerfil


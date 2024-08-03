import React, { useEffect, useState } from 'react'
import './ContactsHeader.css'
import { obtenerContactos } from '../../../Fetching/contacts.fetching';

const ContactsHeader = () => {

    const [searchString, setSearchString] = useState('')
    const [listaContactos, setListaContactos] = useState([])

    useEffect(
        () =>{
            setTimeout(
                () => {
                    obtenerContactos()
            .then(
                (contacts) => {
                    console.log('contactos', contacts)
                    if(searchString){
                        const newContactsList = contacts.filter(
                            contact => 
                                contact.nombre.toLowerCase().includes(searchString.toLocaleLowerCase())
                        )
                        setListaContactos(newContactsList)
                    }
                    else{
                        setListaContactos(contacts)
                    }
                }
            )
                },
                2000
            )
            
        },
        [searchString]
    )

    const handleChangeValue = (e) =>{
        console.log(e.target.value)
        setSearchString(e.target.value)
    }

    return (
        <div className='contact-header-container'>
            <div className='contact-header-title'>
            <h2 className='contacts-header-contact'>Contactos</h2>
            </div>
            <input placeholder='Buscar contacto' onChange={handleChangeValue} value={searchString} />
{/*             {searchString != '' ?} */}
        </div>
    );
};

export default ContactsHeader


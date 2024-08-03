import React from 'react'
import { RiSearch2Line } from "react-icons/ri";
import './ContactsHeader.css'

const ContactsHeader = () => {
    return (
        <div className='contact-header-container'>
            <h2 className='contact-header'>Contactos</h2>
            <span className='search-header'><RiSearch2Line /></span>
        </div>
    )
}

export default ContactsHeader
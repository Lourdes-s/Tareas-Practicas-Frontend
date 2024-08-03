import React, { useState } from 'react'
import { RiSearch2Line } from "react-icons/ri";
import './ContactsHeader.css'

const ContactsHeader = () => {

    return (
        <div className='contact-header-container'>
            <div className='contact-header-title'>
            <h2 className='contacs-header-contact'>Contactos</h2>
            </div>
{/*             <input type="text" /> */}
            <span className='search-header'><RiSearch2Line /></span>
        </div>
    );
};

export default ContactsHeader


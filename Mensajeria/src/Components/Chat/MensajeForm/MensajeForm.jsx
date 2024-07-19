import React from 'react'
import './MensajeForm.css'

export const MensajeForm = () => {
    return (
        <div className='form-mensaje'>
            <form className='formulario'>
                <input className="input-texto" type="text"/>
                <button className="boton" type='submit'><i className="bi bi-send"></i></button>
            </form>
        </div>
    )
}

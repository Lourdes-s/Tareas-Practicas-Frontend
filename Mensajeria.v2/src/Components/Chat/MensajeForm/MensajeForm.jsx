import React from 'react'
import './MensajeForm.css'

export const MensajeForm = ({handleSubmitNewMessage}) => {
    return (
        <div  className='form-mensaje'>
            <form onSubmit={handleSubmitNewMessage} name='text' className='formulario'>
                <input className="input-texto" type="text" id='mensaje' name='mensaje'/>
                <button className="boton" type='submit'><i className="bi bi-send"></i></button>
            </form>
        </div>
    )
}

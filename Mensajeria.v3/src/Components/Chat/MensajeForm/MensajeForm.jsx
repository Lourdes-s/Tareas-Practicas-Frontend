import React from 'react'
import './MensajeForm.css'

export const MensajeForm = ({handleSubmitNewMessage}) => {
    return (
        <div  className='form-message'>
            <form onSubmit={handleSubmitNewMessage} name='text' className='form'>
                <input className="input-text" type="text" id='mensaje' name='mensaje'/>
                <button className="button-submit" type='submit'><i className="bi bi-send"></i></button>
            </form>
        </div>
    )
}

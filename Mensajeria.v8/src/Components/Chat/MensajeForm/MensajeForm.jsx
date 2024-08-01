import React, { useState } from 'react'
import './MensajeForm.css'

export const MensajeForm = ({handleSubmitNewMessage}) => {
    const [inputValue, setInputValue] = useState('')
    const handleSubmit = (e) => {
        handleSubmitNewMessage(e)
        setInputValue('')
        
    }
    const handleOnChange = (e) => {
        setInputValue(e.target.value)
    }
    return (
        <div  className='form-message'>
            <form onSubmit={handleSubmit} name='text' className='form'>
                <input className="input-text" type="text" id='mensaje' name='mensaje' value={inputValue} onChange={handleOnChange}/>
                <button className="button-submit" type='submit'><i className="bi bi-send"></i></button>
            </form>
        </div>
    )
}

const formLoginHTML = document.getElementById('form-login')

const validarUsuario = (username) =>{
    return (Boolean(username) && username.length > 4 && username != username.toLowerCase() && username.includes('-'))
}

const validarPassword = (password) =>{
    return (Boolean(password) && password != password.toLowerCase() && password.includes('#'))
}

const validarEmail = (email) => {
    (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}



const handleLogin = (evento) => {
    evento.preventDefault()
    console.log('se envio el formulario')
    const formulario = evento.target
    const username = formulario.username.value 
}
}

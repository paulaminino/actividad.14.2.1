document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nombre = document.getElementById('nombre');
    const apellido = document.getElementById('apellido');
    const email = document.getElementById('email');
    const password1 = document.getElementById('password1');
    const password2 = document.getElementById('password2');
    const terminosCheckbox = document.getElementById('terminos')



form.addEventListener('submit', (event) => {
    event.preventDefault();

    nombre.setCustomValidity('');
    apellido.setCustomValidity('');
    email.setCustomValidity('');
    password1.setCustomValidity('');
    password2.setCustomValidity('');

    if (nombre.value === '') {
        nombre.setCustomValidity('Debe ingresar un nombre.');
        nombre.classList.add('is-invalid') 
    } else {
        nombre.classList.add('is-valid');
    }

    if (apellido.value === '') {
        apellido.setCustomValidity('Debe ingresar un apellido.');
        apellido.classList.add('is-invalid')
    } else {
        apellido.classList.add('is-valid');
    }

    if (email.value === '') {
        email.setCustomValidity('Debe ingresar un email.');
        email.classList.add('is-invalid') 
    } else {
        email.classList.add('is-valid');
    }

    if (password1.value.length && password2.value.length < 6) {
        password1.setCustomValidity('Debe ingresar una contraseña con al menos 6 caracteres.');
        password1.classList.add('is-invalid');
    } else {
        password1.classList.add('is-valid');
        password2.classList.add('is-valid');
    }

    if (validacion() === false) {
        password2.setCustomValidity('Debe ser igual a "contraseña"');
    }  
    }

    if (!checkbox.checked)  {
    terminosCheckbox.setCustomValidity('Debe aceptar los terminos y condiciones');
    terminosCheckbox.classList.add('is-invalid');

    } else {
    terminosCheckbox = true;
    terminosCheckbox.classList.add('is-valid');

})

function validacion () {
    if (password1.value != password2.value) {
        return false; 
    } else {
        return true;
    }
    
}

});
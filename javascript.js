let nombre = document.getElementById('name').value
let password = document.getElementById('pass')
let boton = document.getElementById('boton')

function entrar () {
    if (password.value === '123Car') {
        alert('Bienvenido a PGIRHS')
        window.location.href = 'https://carlosdevops2530.github.io/pgirhs-2/PaginaPrincipal/index2.html'
    } else {
        alert('contraseña incorrecta')
        return false
    }

    console.log(window.location)
}
boton.addEventListener('click', entrar)

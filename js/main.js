$(document).ready(function() {
    tema()
})

/** Define el tema claro u obscuro */
function tema() {
    if (localStorage.getItem('darkMode') === 'true') {
        $('html').attr('data-theme', 'dark')
        $('#dark-mode').attr('value', "true")
        $('#dark-mode').prop('checked', true)
        cambioIconos('white')
    }
    $('#dark-mode').change(function() {
        if ($(this).is(':checked')) {
            $('html').attr('data-theme', 'dark')
            cambioIconos('white')
            localStorage.setItem('darkMode', true)
        } else {
            $('html').attr('data-theme', 'light')
            cambioIconos('black')
            localStorage.setItem('darkMode', false)
        }
    })
}

/** Cambia los iconos para estar a corde al tema */
function cambioIconos(color) {
    let iconos = [
        'github',
        'linkedin',
        'info'
    ]
    iconos.forEach(icono => {
        let viejoLogo = $(`#${icono}-logo`).attr('src')
        let nuevoLogo = viejoLogo.replace(
            color === 'white' ? 'black' : 'white',
            color
        )
        $(`#${icono}-logo`).attr('src', nuevoLogo)
    })
}
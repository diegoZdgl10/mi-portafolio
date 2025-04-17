$(document).ready(function() {
    menuAmburguesa()
    // TODO refactorizar funcion de tema()
    tema()
})

/* Manejo de navbar */
function menuAmburguesa() {
    // The following code is based off a toggle menu by @Bradcomp
    // source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
    var $burger = $('.burger')
    var $menu = $('#' + $burger.data('target'))

    $burger.on('click', function() {
        $burger.toggleClass('is-active')
        $menu.toggleClass('is-active')
        $('#navbar').toggleClass('is-fixed-top is-transparent is-hidden-desktop')
    })
}

/** Define el tema claro u obscuro */
function tema() {
    if (localStorage.getItem('darkMode') === null) {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            cambioTema('light')
        } else {
            cambioTema('dark')
        }
    } else {
        if (localStorage.getItem('darkMode'), false) {
            cambioTema('light')
        } else {
            cambioTema('dark')
        }
    }

    $('#tema-sistema').on('click', function() {
        localStorage.setItem('darkMode', null)
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            cambioTema('light')
        } else {
            cambioTema('dark')
        }
    })
    $('#tema-claro').on('click', function() {
        localStorage.setItem('darkMode', false)
        cambioTema('light')
    })
    $('#tema-obscuro').on('click', function() {
        localStorage.setItem('darkMode', true)
        cambioTema('dark')
    })
}

/** Funcion auxiliar para cambiar el tema */
function cambioTema(tema) {
    $('html').attr('data-theme', tema)
    if (tema === 'dark') {
        cambioIconos('white')
    } else {
        cambioIconos('black')
    }
}

/** Cambia los iconos para estar a corde al tema */
function cambioIconos(color) {
    let iconos = [
        'github',
        'linkedin',
        'info',
        'gd',
        'sistema',
        'claro',
        'obscuro',
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
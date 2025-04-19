$(document).ready(function() {
    menuAmburguesa()
    tema()
})

/* Manejo de navbar */
function menuAmburguesa() {
    // The following code is based off a toggle menu by @Bradcomp
    // source: https://gist.github.com/Bradcomp/a9ef2ef322a8e8017443b626208999c1
    let burger = $('.burger')
    let menu = $('#' + burger.data('target'))

    burger.on('click', function() {
        burger.toggleClass('is-active')
        menu.toggleClass('is-active')
        $('#navbar').toggleClass('is-fixed-top is-transparent is-hidden-desktop')
    })
}

/** Define el tema claro u obscuro */
function tema() {
    let darkMode = localStorage.getItem('darkMode')
    darkMode = darkMode === 'null' ? null : darkMode

    // Aplica el tema inicial
    if (darkMode === 'true' ||
        (darkMode === null && temaSistema() === 'dark')) {
        cambioTema('dark')
    }

    // Maneja los clics de los botones de tema
    $('#tema-sistema').on('click', function () {
        localStorage.setItem('darkMode', null)
        cambioTema(temaSistema())
    })

    $('#tema-claro').on('click', function () {
        localStorage.setItem('darkMode', 'false')
        cambioTema('light')
    })

    $('#tema-obscuro').on('click', function () {
        localStorage.setItem('darkMode', 'true')
        cambioTema('dark')
    })
}

/** Regresa el tema del sistema */
function temaSistema() {
    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
        return 'dark'
    }
    return 'light'
}

/** Funcion auxiliar para cambiar el tema */
function cambioTema(tema) {
    $('html').attr('data-theme', tema)

    let logos = $('.invert-logo')
    logos.each(function() {
        if (tema === 'dark') {
            $(this).addClass('to-white')
        } else {
            $(this).removeClass('to-white')
        }
    })
}

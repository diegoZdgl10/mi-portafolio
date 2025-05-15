// Bloqueo para notificacion
let toastBloqueado = false

$(document).ready(function() {
    menuAmburguesa()
    tema()
    bloqueoDevTools()
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

/** Detecta opciones de desarrollador */
function bloqueoDevTools() {
    // Bloquea clic derecho
    $(document).on('contextmenu', function (e) {
        errorDesarrollador(e)
    })

    // Bloquea atajos comunes de DevTools
    $(document).on('keydown', function (e) {
        // F12
        if (e.key === "F12") {
            errorDesarrollador(e)
        }
        // Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C
        if (
            e.ctrlKey &&
            e.shiftKey &&
            (e.key === "I" || e.key === "J" || e.key === "C")
        ) {
            errorDesarrollador(e)
        }
        // Ctrl+U (ver código fuente)
        if (e.ctrlKey && e.keyCode === 85) {
            errorDesarrollador(e)
        }
    })
}

/** Previene abrir opciones de desarrollador */
function errorDesarrollador(evento) {
    evento.preventDefault()

    if (toastBloqueado) {
        return
    }

    toastBloqueado = true
    bulmaToast.toast({
        message: "Opciones de desarrollador desactivadas",
        type: "is-warning",
        position: "bottom-center",
        duration: 3000,
        closeOnClick: true,
        pauseOnHover: true,
    })

    setTimeout(() => {
        toastBloqueado = false;
    }, 3000)
}
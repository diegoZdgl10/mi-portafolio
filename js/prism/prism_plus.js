$(document).ready(function () {
    temaPrisma()
    botonCopiar()
})

/** Boton para copiar codigo */
function botonCopiar() {
    $('.copy-btn').on('click', function () {
        let $button = $(this)
        let code = $button.next().find('code').text()

        navigator.clipboard
            .writeText(code)
            .then(function () {
                $button.text('Copiado')
                setTimeout(function () {
                    $button.text('Copiar')
                }, 2000)
            })
            .catch(function (err) {
                console.error('Error al copiar:', err)
            })
    })
}

/** Define el tema claro u obscuro del visualizador de codigo */
function temaPrisma() {
    let darkMode = localStorage.getItem('darkMode')
    if ((darkMode === null || darkMode === 'null') &&
        window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
    }
    if (darkMode === 'true') {
        $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
    }

    $('#tema-sistema').on('click', function() {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            $('link[href$="prism-one-dark.css"]').attr('href', '../../css/prism/prism-one-light.css')
        } else {
            $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
        }
    })
    $('#tema-claro').on('click', function() {
        $('link[href$="prism-one-dark.css"]').attr('href', '../../css/prism/prism-one-light.css')
    })
    $('#tema-obscuro').on('click', function() {
        $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
    })
}

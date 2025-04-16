$(document).ready(function () {
    botonCopiar()
    temaPrisma()
})

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
    if (localStorage.getItem('darkMode') === 'true') {
        $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
    }
    $('#dark-mode').change(function() {
        if ($(this).is(':checked')) {
            $('link[href$="prism-one-light.css"]').attr('href', '../../css/prism/prism-one-dark.css')
        } else {
            $('link[href$="prism-one-dark.css"]').attr('href', '../../css/prism/prism-one-light.css')
        }
    })
}


$(document).ready(function() {
    tema()
})

function leerJson(archivo, callback) {
    $.getJSON(archivo, function(data) {
        callback(data)
    }).fail(function() {
        console.log('ERROR: al leer ' + archivo)
    })
}

function tema() {
    if (localStorage.getItem('darkMode') === 'true') {
        $('html').attr('data-theme', 'dark')
        $('#dark-mode').attr('value', "true")
        $('#dark-mode').prop('checked', true)
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

function cambioIconos(color) {
    $('#github-logo').attr('src', `/assets/svg/github-${color}.svg`)
    $('#linkedin-logo').attr('src', `/assets/svg/linkedin-${color}.svg`)
    $('#info-logo').attr('src', `/assets/svg/info-${color}.svg`)
}
var darkMode = false

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
    if (darkMode) {{
        $('html').attr('data-theme', 'dark');
    }}
    $('#dark-mode').change(function() {
        if ($(this).is(':checked')) {
            darkMode = true
            $('html').attr('data-theme', 'dark');
            cambioIconos('white')
        } else {
            darkMode = false
            $('html').attr('data-theme', 'light');
            cambioIconos('black')
        }
    })
}

function cambioIconos(color) {
    $('#github-logo').attr('src', `/assets/svg/github-${color}.svg`)
    $('#linkedin-logo').attr('src', `/assets/svg/linkedin-${color}.svg`)
    $('#info-logo').attr('src', `/assets/svg/info-${color}.svg`)
}
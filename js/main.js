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
        } else {
            darkMode = false
            $('html').attr('data-theme', 'light');
        }
    })
}
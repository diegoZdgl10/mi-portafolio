var ejercicio = 'aux'

$(document).ready(function() {
    componentesGenerales()
})

function leerJson(archivo, callback) {
    $.getJSON(archivo, function(data) {
        callback(data)
    }).fail(function() {
        console.log('ERROR: al leer ' + archivo)
    })
}

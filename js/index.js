let actividades = [
    'dos_sumas',
    'num_palindromo',
]

$(document).ready(function() {
    actividades.forEach(element => {
        let archivo = `/jsons/${element}.json`
        cargaComponente('actividades', 'preview')
        leerJson(archivo, function(data) {
            let previewAct = $('#preview-actividad')
            previewAct.attr('id', `preview-${data.id}`)
            previewAct.find('img').attr('src', `/assets/${data.solucion}`)
            previewAct.find('a').attr('href', `/views/portafolio/${element}.html`)
            previewAct.find('a').text(data.titulo)
        })
    })
})


function leerJson(archivo, callback) {
    $.getJSON(archivo, function(data) {
        callback(data)
    }).fail(function() {
        console.log("ERROR: al leer " + archivo)
    })
}
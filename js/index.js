let actividades = [
    'dos_sumas',
    'num_palindromo',
]

$(document).ready(function() {
    generaPreviewEjericios()

    $('#actividades').on('click', 'a', function(event) {
        localStorage.setItem('ejercicio',  $(this).attr('act'))
    })
})

function generaPreviewEjericios() {
    actividades.forEach(element => {
        let archivo = `/jsons/${element}.json`
        cargaComponente('actividades', 'preview')
        leerJson(archivo, function(data) {
            generaRecuadro(data, element)
        })
    })
}

function generaRecuadro(data, element) {
    let previewAct = $('#preview-actividad')
    previewAct.attr('id', `preview-${data.id}`)
    previewAct.find('img').attr('src', `/assets/${data.solucion}`)
    previewAct.find('a').attr('href', '/views/ejercicio.html')
    previewAct.find('a').attr('act', element)
    previewAct.find('a').text(data.titulo)
}

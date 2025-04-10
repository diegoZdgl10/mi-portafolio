let actividades = [
    'dos_sumas',
    'num_palindromo',
    'merge_listas_ord',
    'parentesis_correctos',
]

$(document).ready(function() {
})

function generaPreviewEjericios() {
    actividades.forEach(element => {
        let archivo = `/jsons/ejercicios/${element}.json`
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
    previewAct.find('a').attr('href', `/views/ejercicios/${element}.html`)
    previewAct.find('a').attr('act', element)
    previewAct.find('a').text(data.titulo)
}

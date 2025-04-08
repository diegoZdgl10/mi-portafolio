$(document).ready(function() {
    generarVistaSolucion()
})

function generarVistaSolucion() {
    if (localStorage.getItem('ejercicio') == null) {
        window.location.href = '/index.html'
    }
    let archivo = `/jsons/${localStorage.getItem('ejercicio')}.json`
    leerJson(archivo, function(data) {
        $('#titulo').text(data.titulo)
        $('#descripcion').append(data.descripcion)
        $('#solucion').attr('src', `/assets/${data.solucion}`)
    })
}

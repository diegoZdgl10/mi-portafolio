$(document).ready(function() {
    generarVistaSolucion()
})

function generarVistaSolucion() {
    let archivo = `/jsons/${localStorage.getItem('ejercicio')}.json`
    leerJson(archivo, function(data) {
        console.log(data)
        $('#titulo').text(data.titulo)
        $('#descripcion').append(data.descripcion)
        $('#solucion').attr('src', `/assets/${data.solucion}`)
    })
}

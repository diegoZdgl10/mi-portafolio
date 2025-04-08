/**
 * Funcion que carga componentes de la vista
 * @param {*} id el id del componente html donde se colocara el nuevo componente
 * @param {*} componente la ruta del nuevo componente
 */
function cargaComponente(id, componente) {
    $.get(`/views/components/${componente}.html`, function(data) {
        $(`#${id}`).prepend(data)
    })
}

/**
 * Funcion que carga los componentes utilizados en toda la pagina
 */
function componentesGenerales() {
    let componentes = [
        {'id': 'navbar', 'componente':'navbar'},
        {'id': 'footer', 'componente':'footer'},
        {'id': 'head', 'componente':'head'},
    ]

    componentes.forEach(element => {
        cargaComponente(element.id, element.componente)
    })
}

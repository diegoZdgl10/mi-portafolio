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

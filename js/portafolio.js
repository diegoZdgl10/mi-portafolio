$(document).ready(function() {
    llenaTabla()
    configuraTabla('tab-ejercicios')
})

/* Llena la tabla de ejercicios */
function llenaTabla() {
    let tabla = $('#ls-ejercicios')

    ejercicios.forEach(ejercicio => {
            tabla.append(generaFila(ejercicio))
    })
}

/* Genera cada fila para llenar la tabla */
function generaFila(ejercicio) {
    return `
    <tr>
        <th>
            <a href="./ejercicios/${ejercicio.solucion}.html"
                class="has-text-link"
                >
                ${ejercicio.titulo}
            </a>
        </th>
        <td>
            ${ejercicio.descripcion}
        </td>
        <td class="${colorDificultad(ejercicio.dificultad)}">
            <b>${ejercicio.dificultad}</b>
        </td>
        <td>
            ${generaTags(ejercicio.tags)}
        </td>
    </tr>
    `
}

/* Escoge el color segun la dificultad del ejercicio */
function colorDificultad(dificultad) {
    switch (dificultad) {
        case 'Fácil':
            return 'has-text-success'
        case 'Media':
            return 'has-text-warning'
        default:
            return 'has-text-danger'
    }
}

/* Genera los tags del ejercicio */
function generaTags(tags) {
    let etiquetas = ''
    tags.forEach(tag => {
        etiquetas += `<span class="tag mx-1">${tag}</span>`
    })
    return etiquetas
}

/* Configura la tabla */
function configuraTabla(idTabla) {
    $(`#${idTabla}`).DataTable({
        language: {
            entries: {
                _: 'ejercicios',
                1: 'ejercicio'
            },
            lengthMenu:
                'Mostrar <select>' +
                '<option value="5">5</option>' +
                '<option value="10">10</option>' +
                '<option value="15">15</option>' +
                '<option value="20">20</option>' +
                '<option value="-1">todos</option>' +
                '</select>',
            search: 'Filtrar ejercicios:',
            info: 'Mostrar página _PAGE_ de _PAGES_'
        },
        'pageLength': 5
    })
}
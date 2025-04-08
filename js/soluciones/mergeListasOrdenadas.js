$(document).ready(function() {
    pruebas()
})


function mergeListasOrdenadas(lista1, lista2) {
    return mergeListas(lista1, lista2, [])
}

function mergeListas(lista1, lista2, mezcla) {
    if (lista1.length == 0) {
        return mezcla.concat(lista2)
    }
    if (lista2.length == 0) {
        return mezcla.concat(lista1)
    }
    if (lista1[0] < lista2[0]) {
        mezcla.push(lista1[0])
        lista1.splice(0, 1)
    } else {
        mezcla.push(lista2[0])
        lista2.splice(0, 1)
    }
    return mergeListas(lista1, lista2, mezcla)
}

function pruebas() {
    console.log(mergeListasOrdenadas([2,7,11,15], []))
    // Output: [2,7,11,15]

    console.log(mergeListasOrdenadas([3,4,4], [-1,0,15]))
    // Output: [-1,0,3,4,4,15]

    console.log(mergeListasOrdenadas([1,2,3,4,5], [3,4,5,6,7]))
    // Output: [1,2,3,3,4,4,5,5,6,7]
}
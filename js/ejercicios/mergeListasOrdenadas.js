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

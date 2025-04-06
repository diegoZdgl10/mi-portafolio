$(document).ready(function() {
    pruebas()
})


function esPalindromo(x) {
    let xStr = x.toString()
    let i = 0, j = xStr.length-1
    while (i <= j) {
        if (xStr[i] !== xStr[j]) {
            return false
        }
        i++
        j--
    }
    return true
}

function pruebas() {
    console.log(esPalindromo(121))
    // Output: true

    console.log(esPalindromo(-121))
    // Output: false

    console.log(esPalindromo(10))
    // Output: false
}
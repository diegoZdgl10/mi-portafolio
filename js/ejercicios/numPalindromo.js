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

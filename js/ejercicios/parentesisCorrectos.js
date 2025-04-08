$(document).ready(function() {
    pruebas()
})


function parentesisCorrectos(s) {
    let apertura = {
        '{': 1,
        '(': 2,
        '[': 3
    }
    let cierre = {
        '}': 1,
        ')': 2,
        ']': 3
    }
    if (s.length % 2 === 1) {
        return false
    }
    if (Object.keys(cierre).includes(s[0])) {
        return false
    }
    let stack = [s[0]]
    for (let i = 1; i < s.length; i++) {
        let char = s[i]
        if (Object.keys(cierre).includes(char)) {
            if (cierre[char] !== apertura[stack.pop()]) {
                return false
            }
        } else {
            stack.push(char)
        }
    }
    return stack.length == 0
}

function pruebas() {
    console.log(parentesisCorrectos('[{}(())]'))
    // Output: true
    
    console.log(parentesisCorrectos('[]()(){}'))
    // Output: true

    console.log(parentesisCorrectos('[{}()}'))
    // Output: false

    console.log(parentesisCorrectos('}}]]'))
    // Output: false
}
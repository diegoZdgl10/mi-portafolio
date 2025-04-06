$(document).ready(function() {
    pruebas()
})


function dosSumas(nums, objetivo) {
    for (let i = 0; i < nums.length-1; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (nums[i] + nums[j] == objetivo) {
                return [i, j]
            }
        }
    }
    return null
}

function pruebas() {
    console.log(dosSumas([2,7,11,15], 9))
    // Output: [0,1]

    console.log(dosSumas([3,2,4], 6))
    // Output: [1,2]

    console.log(dosSumas([3,3], 6))
    // Output: [0,1]

    console.log(dosSumas([3,1], 6))
    // Output: null
}
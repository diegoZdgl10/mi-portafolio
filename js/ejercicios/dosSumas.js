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

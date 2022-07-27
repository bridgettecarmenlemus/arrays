// Write a JavaScript function to get the last element of the last element

function findLast(arr) {
    const row = arr.length - 1
    const col = arr[0].length -1
    return arr[row] [col]
}

console.log(findLast([]))
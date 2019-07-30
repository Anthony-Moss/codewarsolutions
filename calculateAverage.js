


// first attempt
function find_average(array) {
    let total = array.reduce((total, number) => total + number)
    return (total/array.length)
}


// refactored
function find_average(array) {
    return array.reduce((total, number) => total + number) / array.length
}
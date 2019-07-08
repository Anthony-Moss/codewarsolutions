// Oh no, our Math object was "accidently" reset. Can you re-implement some of those functions? We can assure, that only non-negative numbers are passed as arguments. So you don't have to consider things like undefined, null, NaN, negative numbers, strings and so on.

// Here is a list of functions, we need:

// Math.round()
// Math.ceil()
// Math.floor()

// Simply put the object is to create functions that operate as 
//  Math.round(), Math.ceil(), and Math.floor() without any access to the
// Math object

// First function attempt one 
Math.round = function(number) {
    let result = ''
    let numStr = number.toString()
    let dot = numStr.indexOf(".")
    if (dot >=0) { 
        if (parseInt(numStr[dot+1]) >= 5) {
            result += (parseInt(numStr.slice(0,dot)) + 1)
        } else if (parseInt(numStr[dot+1]) < 5) {
            result += parseInt(numStr.slice(0,(dot)))
        }
        return(parseInt(result))
    } else {
        return number
    }
};
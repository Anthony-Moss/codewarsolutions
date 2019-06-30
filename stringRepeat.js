// Write a function called repeatStr which repeats the given string string exactly n times.

// repeatStr(6, "I") // "IIIIII"
// repeatStr(5, "Hello") // "HelloHelloHelloHelloHello"

// first  try
function repeatStr (n, s) {
    let result = ''
    for (i=1; i<=n; i++) {
        result = result.concat(s)
    }
    return result;
}

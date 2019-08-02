// write a function that takes amount, which is a dollar amount
// and returns the least number of bills that can be given as change
// using 10s, 5s and 2s. 
// If exact change cannot be given using those bills retun null


function returnChange(amount){
    let tens = 0
    let fives = 0
    let twos = 0
    if (amount === 1 ||  amount === 3){
        return null
    }
    while (amount !== 0 && amount > 0) {
        console.log(amount)
        if (amount > 13 || amount === 12 || amount === 10) {
            tens += 1
            amount -= 10
        } else if (amount >= 5 && amount !== 8 && amount !== 6) {
            fives += 1;
            amount -= 5
        } else {
            twos += 1;
            amount -= 2;
        }
    }
    let result = {
        tens : `${tens}`,
        fives : `${fives}`,
        twos : `${twos}`
    }
    console.log(result)
    return result
}

returnChange(9)


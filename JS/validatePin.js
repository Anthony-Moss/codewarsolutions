// ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// eg:

// validatePIN("1234") === true
// validatePIN("12345") === false
// validatePIN("a234") === false


// first attempt solution
// very messy but test cases were pretty absurd
function validatePIN (pin) {
    let pinArr = pin.split('')
    if (pin < 0 || pin.includes(".") || pin.includes('\n')) {
        return false
    }
    if (pinArr.length === 4 || pinArr.length === 6) {
        let arrCheck = pinArr.map(number => {
            if (isNaN(number) === true) {
                return false
            }
        })
        if (arrCheck.includes(false)) {
            return false
        }
        return true
    } else {
        return false
    }
}


// best practice solution from codewars to analyze / breakdown later
function validatePIN(pin) {
    return /^(\d{4}|\d{6})$/.test(pin)
}
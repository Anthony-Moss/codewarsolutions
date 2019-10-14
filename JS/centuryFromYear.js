// Introduction
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.

// Task :
// Given a year, return the century it is in.

// Input , Output Examples ::
// centuryFromYear(1705)  returns (18)
// centuryFromYear(1900)  returns (19)
// centuryFromYear(1601)  returns (17)
// centuryFromYear(2000)  returns (20)
// Hope you enjoy it .. Awaiting for Best Practice Codes

// Enjoy Learning !!!

// first correct attempt (2nd total)
// complely redid problem
// using simple math
function century(year) {
    return Math.ceil(year/100)
}

// first attempt, doesnt really work
// went about solving wrong way
function century(year) {
    console.log(year.toString().split(""))
    let arrayYear = year.toString().split("")
    console.log(arrayYear[3])
    if (year < 101) {
        return 1
    } else if (arrayYear[3] == 0 && arrayYear.length < 5) {
        return Math.floor(year*.01);
    } else {
        if (arrayYear[arrayYear.length-1] == 0) {
        return Math.floor(year*.01)
    } else {
        return Math.floor((year*.01) + 1)
        }
    }
}


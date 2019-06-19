
function whoIsNext(names, r){
  let startingPeopleArray = names
  let number = r;

  if (number === 1) {
    return startingPeopleArray[0]
  } else if (number <= names.length) {
    return startingPeopleArray[(r-1)]
  } else { 
    for (i=0; i<=(r-1); i++) {
      let actualName = startingPeopleArray.shift()
        for (j = 0; j <= 1; j++) {
          startingPeopleArray.push(actualName);
        }
      }
    }
  return(startingPeopleArray[0])
}


// origional attempts
// function whoIsNext(names, r){
//   let counter = 0;
//   let number = r;
//   let howManyAdded = 1;
//   console.log(names)
//   console.log(r)
  
//   for (i = 0; i<= r; i++) {
//     if (number === 1) {
//         return names[i]
//     } else {
//       if (counter === names.length) {
//         howManyAdded += 1
//       }
//       names.shift(names[i]);
//       for (j = 0; j <= howManyAdded; j++) {
//         names.push(names[i]);
//         }
//       counter += 1
//       console.log(names);
//     }
//   }
//   return(names[0])
// }


// function whoIsNext(names, r){
// let startingPeopleArray = names
// let number = r;

// if (number === 1) {
//   return startingPeopleArray[0]
// } else {
//   for (i = 0; i<= r - 1; i++) {
//   if (number <= startingPeopleArray.length) {
//     return startingPeopleArray[(r-1)]
//     } else {
//     let nameToAdd = startingPeopleArray.shift();
//     let actualName = nameToAdd.toString()
// //         console.log(`'${nameToAdd}' is drinking `);
//     for (j = 0; j <= 1; j++) {
//       startingPeopleArray.push(actualName);
//     }
//   }
// }
// }
// return(startingPeopleArray[0])
// }


// function whoIsNext(names, r){
// let startingPeopleArray = names
// let number = r;

// if (number === 1) {
//   return startingPeopleArray[0]
// } else if (number <= startingPeopleArray.length) {
//   for (i = 1; i<= r - 1; i++) {
//     return startingPeopleArray[(r-1)]
//   }
// } else { 
//   let actualName = startingPeopleArray.shift()
//   for (j = 0; j <= 1; j++) {
//     startingPeopleArray.push(actualName);
//   }
// }
// return(startingPeopleArray[0])
// }
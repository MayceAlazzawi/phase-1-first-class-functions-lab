const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];


const returnFirstTwoDrivers = (arr) => {
  return [arr[0] , arr[1]]
}
returnFirstTwoDrivers(drivers);

const returnLastTwoDrivers = (arr) => {
        let last = arr[arr.length -1]
        let beforelast = arr[arr.length -2]
        return [beforelast, last]
    
  }
  returnLastTwoDrivers(drivers);
  
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

// function createFareMultiplier(num) {
//   return num * num
// }

// const fareMultiplier = createFareMultiplier(2);
// console.log(fareMultiplier)














// // Code your solution in this file!
// const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// function returnFirstTwoDrivers() {
//   return [ drivers[0] ,drivers[1] ]
// }
// console.log(returnFirstTwoDrivers(drivers))

// function returnLastTwoDrivers() {
//   return [ drivers[2], drivers[3] ];
  
// }
// returnLastTwoDrivers(drivers)

// let selectingDrivers = [];
// selectingDrivers[0] = returnFirstTwoDrivers;
// selectingDrivers[1] = returnLastTwoDrivers;
// console.log(selectingDrivers[1](drivers));



// function createFareMultiplier() {
//   return  function fareMultiplier(num) {
//     const fareQuintupler = 5;
//     return fareQuintupler * num;
//   }
// }
// console.log(createFareMultiplier(fareMultiplier(5), ))
// function a(num) {
//   return num;
// }
// function multiplier(a) {
//  return a * a;
// }
// multiplier(a(5))

// function fareMultiplier(num) {
//   return num;
// }
// function fareQuintupler(num) {
//   return num;
// }
function createFareMultiplier(a) {
  return function func(b) {
    return a * b
  }
 }
const fareMultiplier = createFareMultiplier(2);
const fareQuintupler = createFareMultiplier(5);

function fareDoubler(num) {
   return 2  * num;
}
console.log(fareDoubler(10));

function fareTripler(num) {
  return num * 3
}
console.log(fareTripler(12));

// function selectDifferentDrivers(arrayOfDrivers, callback1) {
//   return selectingDrivers[0](arrayOfDrivers);
// }
// console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers))


function selectDifferentDrivers(arrayOfDrivers, func) {
  if (func === returnLastTwoDrivers ) {
    return selectingDrivers[1](arrayOfDrivers)
  } else if (func === returnFirstTwoDrivers ) {
    return selectingDrivers[0](arrayOfDrivers)
  }
}
selectDifferentDrivers(drivers, returnFirstTwoDrivers)
selectDifferentDrivers(drivers, returnLastTwoDrivers)

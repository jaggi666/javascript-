// // // date and time

// // let date = new Date();

// // console.log(date);
// // // Example output: Fri Dec 29 2025 14:30:45 GMT+0530 (India Standard Time)
// // console.log(date.toString());
// // // Example output: Fri Dec 29 2025 14:30:45 GMT+0530 (India Standard Time)
// // console.log(date.toDateString());
// // // Example output: Fri Dec 29 2025
// // console.log(date.toTimeString());
// // // Example output: 14:30:45 GMT+0530 (India Standard Time)
// // console.log(date.toISOString());
// // // Example output: 2025-12-29T09:00:45.320Z
// // console.log(date.toJSON());
// // // Example output: 2025-12-29T09:00:45.320Z
// // console.log(date.toLocaleDateString());
// // // Example output: 12/29/2025
// // console.log(date.toLocaleTimeString());
// // // Example output: 2:30:45 PM
// // console.log(date.toLocaleString());
// // // Example output: 12/29/2025, 2:30:45 PM
// // console.log(date.toUTCString());
// // // Example output: Fri, 29 Dec 2025 08:00:45 GMT

// // console.log(typeof date);
// // // Example output: object

// // let createdate = new Date(2023,0,23);
// // console.log(createdate.toDateString());
// // // Example output: Mon Jan 23 2023

// // let createdate2 = new Date("2023-01-23");
// // console.log(createdate2.toLocaleString());
// // // Example output: 1/23/2023, 12:00:00 AM

// //  let timestamp = Date.now();
// //  console.log(timestamp);
//  // Example output: 1672309845320
 
// // console.log(createdate2.getTime()); 

// let newDate = new Date();
// console.log(newDate.getDate());
// // Example output: 29

// console.log(newDate.getMonth());
// // Example output: 11

// console.log(newDate.getFullYear());
// // Example output: 2025

// console.log(newDate.getTime());
// // Example output: 1672309845320    

// console.log(newDate.getHours());
// // Example output: 14

// console.log(newDate.getMinutes());
// // Example output: 30

// console.log(newDate.getSeconds());
// // Example output: 45

// console.log(newDate.getMilliseconds());
// // Example output: 320

let newDate = new Date(2025, 11, 15); // December is 11
console.log(newDate.toDateString());
// // Example output: Fri Dec 15 2025


console.log(newDate.toLocaleString('default',{
    month: 'long',
    year: 'numeric',
    day: 'numeric'
}));
// // Example output: January 15, 2025


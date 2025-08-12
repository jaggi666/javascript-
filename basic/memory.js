//----------memory -------
//  stack (primitive) ,heap (NON primitive)


 let myYoutubeName= " jaggi"


// let anotherName = myYoutubeName;
// anotherName = "another ji";

// console.log(myYoutubeName);
// console.log(anotherName);

let userone= {
    email: "userone@example.com",
    upi: "userone@upi"
}
let usertwo = userone;
 usertwo.email = "usertwo@example.com";

 console.log(userone);
 console.log(usertwo);
 
    // stack me copy milti hai
    // aur heap me reference milta hai
    // reference ka mtalb hai ki jab 
    // humupdate karte hai toh original value me hota hai 
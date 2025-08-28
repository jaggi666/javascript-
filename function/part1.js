// function
// function ek reusable block hunda hai code da
// jide vich asi kuch specific kam karan layi logic likh sakde haan
// function nu call karke asi oh logic baar-baar use kar sakde haan


// function myName() {
//     console.log("John Doe");
//     console.log("Jane Smith");

//     console.log("Jim Brown");

// }

// myName();

// (num1, num2) parmeter
function add(num1, num2) {
//    let result=(num1 + num2);
//    return result;
return (num1 + num2);
}
const result = add(5, 10);
// (5, 10); agruments
console.log("result: ", result); // undefined

// checking jruri hai data type di


function login(user="ji") {
    if(typeof user === "undefined") {
        console.log("Please provide a username");
        return; 
    }
    return `${user} is logged in.`;
}
console.log(login());


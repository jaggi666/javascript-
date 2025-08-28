// const tinderuser=new Object();

const tinderuser={}
// Adding properties to the tinderuser object
tinderuser.id="123abc";

tinderuser.name="John Doe";
tinderuser.age=25;
console.log(tinderuser);

const regularUser={
    id: "456def",
    fullname:{
        user:{
            first: "Jane",
            last: "Smith"
        }
    },
    age: 28
}
console.log(regularUser.fullname.user.first);

// Creating an object with dynamic keys
const obj1={1: "one", 2: "two", 3: "three"};
const obj2={4: "four", 5: "five", 6: "six"};

const mergedObj={...obj1,...obj2};
// console.log(mergedObj); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }
// spread kita janda hai
const obj3=Object.assign({},obj1,obj2);
// assign kita janda hai do object ek bn janda hai 
// console.log(obj3); // { '1': 'one', '2': 'two', '3': 'three', '4': 'four', '5': 'five', '6': 'six' }

const users=[{
    id: "789ghi",
    name: "Alice Johnson",
    age: 30
}, {
    id: "012jkl",
    name: "Bob Brown",
    age: 35
}, {
    id: "345mno",
    name: "Charlie Davis",
    age: 40
}
];

users[0].id;
console.log(users[0].id); // "789ghi"

console.log(Object.keys(tinderuser));
// array bn janda hai
console.log(Object.values(tinderuser));
// values bn janda hai
console.log(Object.entries(tinderuser));

// key-value pair bn janda hai

console.log(tinderuser.hasOwnProperty("name"));



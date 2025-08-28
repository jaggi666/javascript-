// arrow function

const add = (num,num1) => {
    return num + num1;
};

console.log(add(2,3)); // 5

// arrow function line
const add1 = (num,num1) =>  num + num1;

console.log(add1(2,7)); // 9

// object me arrow function
const obj = {
    add: (name) => ({ "jaggi": name })
};

console.log(obj.add("name")); // {jaggi: "name"}



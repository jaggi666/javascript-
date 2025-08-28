function carts(...num1) {
    return num1 ;
}
console.log(carts(5,6,9));

// rest operator ...num1
// array milda jis loop la sakde aa

function carts(val1,val2,...num1) {
    return num1 ;
}
console.log(carts(5,6,9));
// output: [9]
// val1=5
// val2=6
// num1=[9]

const user={
    name: "John",
    age: 30,
    email: "john@example.com"
};

function handle(any) {
    console.log(`Name: ${any.name}`);
    console.log(`Age: ${any.age}`);
    console.log(`Email: ${any.email}`);

}
handle(user);
// object as parameter
// function ch object pass kar sakde haan
// function ch object pass karan te asi ohde properties nu access kar sakde haan
// asi object di properties nu destructure v kar sakde haan function ch


const myarr=[14566,2346,367,446,557];

function re(get) {
    return get[2];
}

console.log(re(myarr));


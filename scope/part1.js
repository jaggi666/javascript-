



if (true) {
    const a = 40;
    let b = 50;
    var c = 60;
 console.log(a); 
console.log(b); 
console.log(c); // 60
}





console.log(c); // 60


// var  block nu nhi manda 
// console.log(a); // ReferenceError: a is not defined
// console.log(b); // ReferenceError: b is not defined
// console.log(c); // 60
//  var print ho janda hai scope es te kam nhi karda 

// {} block scope
// let and const are block scoped
// var is function scoped
// block scope
// global scope
// lexical scope
// function scope
// variable scope 

// role of scope

// child value le sakde ne parents to
// pr parents value nahi le sakde child to 

// line by line code execution  hundi hai


function one() {
    const user="jaggji"
    function Two(){
        const age=20;
        console.log(user); // jaggji

        console.log(age); // 20     

    }   
    Two();

    console.log(user); // jaggji
    // console.log(age); // ReferenceError: age is not defined

}
one();

if (true) {
    const name="hello"
    console.log(name); // hello
    if(true){
        const age=20;
        console.log(name); // hello
        console.log(age); // 20
    }

    // console.log(age); // ReferenceError: age is not defined
    
}

// inner if global if to value le sakda hai
// par global if inner if to value nahi le sakda


const course={
    id: "js101",
    title: "JavaScript Basics",
    price: 29.99,
    instructor: "John Doe",
    duration: "4 weeks"
};

const {title:sir,price:mam}=course;
// name v chota kar sakde haan

console.log(sir);
console.log(mam);

// destructuring ki madad naal assi object de properties nu easily access kar sakde haan.
// more dtails
// destructuring naal assi code nu concise te readable bana sakde haan.
// es naal assi easily multiple properties nu ek hi line ch access kar sakde haan.

// example react
// destructuring in functional components
// use = const navbar =(props.company)
// const navbar=({company})=>{
//     const {name,logo}=company;
//     return(
//         <div>
//             <img src={logo} alt={name} />
//             <h1>{name}</h1>
//         </div>
//     );
// }


// api
// backend values aondi hai ehnu aap kive likhde haan
// pehla value aondi xml format ch hun aondi hai json vich {}
// xml ch <name>John</name> hunda hai te json ch {"name":"John"} hunda hai
// json ch values hamesha double quotes ch hundi hai

// json ch key-value pairs hunde hai
// example: {"name":"John","age":30}

// api object {} de format vich mildi
// example: {"name":"John","age":30}
//  api ek array de roop ch v mildi jis vich objects hunde ne
// example: [{"name":"John","age":30},{"name":"Jane","age":25}]

// json data nu samjn lyi tool vrte jande ne ...json format  use tree nal vadia samj aonda 

// json data nu javascript object ch convert karan lyi JSON.parse() method vrte janda hai
// example: const obj = JSON.parse('{"name":"John","age":30}');


// array

let fruits = [1, "banana", "cherry", true, null, undefined, { name: "John" }, [1, 2, 3]];
// array me kuch bhi ho sakta hai jaise ki string, number, boolean, object, array, null, undefined 
// array ke andar hum kisi bhi type ke data ko store kar sakte hain
console.log(fruits.length); // array ki length batata hai
console.log(fruits[0]); // array ki index 0 se start hoti hai 0 se first element ko access karta hai
console.log(fruits[3]); // index 3 se fourth element ko access karta hai
console.log(fruits[fruits.length - 1]); // last element ko access karta hai
console.log(Array.isArray(fruits)); // check karta hai ki ye array hai ya nahi
console.log(fruits instanceof Array); // check karta hai ki ye array hai ya nahi   
console.log(fruits.toString()); // array ko string me convert karta hai
console.log(fruits.join(" - ")); // array ke elements ko join karta hai with specified separator
console.log(fruits.indexOf("cherry")); // array me specified element ka index batata hai
console.log(fruits.includes(true)); // check karta hai ki specified element array me hai
console.log(fruits.slice(1, 4)); // array ke specified range ke elements ko nikalta hai
console.log(fruits.concat(["mango", "grape"])); // do arrays ko jodta hai
console.log(fruits.reverse()); // array ke elements ko reverse karta hai
console.log(fruits.sort()); // array ke elements ko sort karta hai (string ke liye)
console.log(fruits.pop()); // array ke last element ko remove karta hai aur return karta hai
console.log(fruits.push("orange")); // array ke end me naya element add karta hai aur new length return karta hai
console.log(fruits.shift()); // array ke first element ko remove karta hai aur return karta hai
console.log(fruits.unshift("kiwi")); // array ke start me naya element add karta hai aur new length return karta hai
console.log(fruits.splice(2, 2, "pear", "peach")); // specified index se elements ko remove karta hai aur naya element add karta hai
console.log(fruits); // final array ko print karta hai
console.log(fruits.length); // final length of the array
console.log(fruits);    
// final array after all operations

// Note: Array methods like sort() may not work as expected with mixed data types.
// isliye array me same type ke elements rakhna better hota hai for consistent behavior.
// jaise ki sirf strings ya sirf numbers rakhna better hota hai.
// agar mixed types rakhne hain to unka handling alag se karna padega.
// jaise ki custom sorting function dena padega sort() method me.
// ya phir filter karna padega specific type ke elements ko before performing operations.
// is tarah se hum array ke different properties aur methods ko use kar sakte hain JavaScript me.
// ye sab methods original array ko modify karte hain except slice(), concat(), join(), toString(), includes(), indexOf(), isArray(), instanceof.
// in methods ka use karke hum array ke elements ko manipulate kar sakte hain as per our requirements.

// array ke andar hum kisi bhi type ke data ko store kar sakte hain lekin best practice yehi hai ki same type ke elements rakhna chahiye for better performance and consistency.

// shallow copy aur deep copy ka concept bhi array me apply hota hai.
// shallow copy me sirf reference copy hota hai jabki deep copy me actual data copy hota hai.
// isliye agar array me objects ya arrays hain to unka handling alag se karna padega for deep copy.
// jaise ki JSON.parse(JSON.stringify(array)) se deep copy kar sakte hain.
// ya phir spread operator (...) ka use karke shallow copy kar sakte
// hain lekin ye sirf primitive types ke liye hi sahi hota hai.
// objects ya arrays ke liye spread operator se shallow copy hota hai jo ki reference copy hota hai.
// isliye deep copy ke liye alag se method use karna padega.
// ye sab cheezein dhyan me rakhni chahiye jab hum arrays ke saath kaam karte hain JavaScript me.



const myHeros = ["thor", "spiderman", "ironman"];
const dcHeros = ["batman", "superman", "flash"];

const allHeros = myHeros.concat(dcHeros);
console.log(allHeros);
// concat() method do ya do se zyada arrays ko jodne ke liye use hot
// ta hai aur ek naya array return karta hai without modifying the original arrays.

const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
numbers.sort(); // ye string ke hisab se sort karta hai
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
// agar numbers ko ascending order me sort karna hai to hume compare function dena padega
numbers.sort((a, b) => a - b);  // ascending order
console.log(numbers); // [1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9]
numbers.sort((a, b) => b - a);  // descending order
console.log(numbers); // [9, 6, 5, 5, 5, 4, 3, 3, 2, 1, 1]
// is tarah se hum numbers ko ascending ya descending order me sort kar sakte hain.
// ye compare function do arguments leta hai aur return karta hai
// negative number agar pehla argument chhota hai dusre se
// positive number agar pehla argument bada hai dusre se
// zero agar dono barabar hain
// is tarah se sort() method ko customize kar sakte hain apne hisab se
// ye sab cheezein dhyan me rakhni chahiye jab hum arrays ke saath kaam karte hain JavaScript me.

let array1 = [1, 2, 3];
let array2 = array1; // reference copy
array2.push(4);
console.log(array1); // [1, 2, 3, 4]
console.log(array2); // [1, 2, 3, 4]
// dono arrays me change reflect hoga kyunki dono same reference ko point kar rahe hain
let array3 = [...array1]; // shallow copy using spread operator
array3.push(5);
console.log(array1); // [1, 2, 3, 4]
console.log(array3); // [1, 2, 3, 4, 5]
// array1 me change nahi hoga kyunki array3 ek naya array hai jo array1 ke elements ko copy karke bana hai
let array4 = JSON.parse(JSON.stringify(array1)); // deep copy using JSON methods
array4.push(6);
console.log(array1); // [1, 2, 3, 4]
console.log(array4); // [1, 2, 3, 4, 6]
// array1 me change nahi hoga kyunki array4 ek naya array hai jo array1 ke elements ko deep copy karke bana hai
// is tarah se hum arrays ke saath kaam karte waqt shallow copy aur deep copy ka dhyan rakh sakte hain
// taaki unwanted side effects na ho aur data integrity bani rahe.  

// pop(), push(), shift(), unshift(), splice() ye sab methods original array ko modify karte hain
// jabki slice(), concat(), join(), toString(), includes(), indexOf(), isArray(), instanceof() ye sab methods original array ko modify nahi karte hain
// isliye in methods ka use karte waqt dhyan rakhna chahiye ki kaunse method se original array change hoga aur kaunse se nahi
// taaki hum apne code me bugs na laayein aur expected behavior mile.
// pop()
 const arrPop = [1, 2, 3, 4, 5];
 const poppedElement = arrPop.pop(); // removes the last element
 console.log(poppedElement); // 5
 console.log(arrPop); // [1, 2, 3, 4]
// push()
 const arrPush = [1, 2, 3];
 const newLengthPush = arrPush.push(4); // adds a new element at the end
 console.log(newLengthPush); // 4
 console.log(arrPush); // [1, 2, 3, 4]
// shift()
 const arrShift = [1, 2, 3, 4, 5];
 const shiftedElement = arrShift.shift(); // removes the first element
 console.log(shiftedElement); // 1
 console.log(arrShift); // [2, 3, 4, 5]
// unshift()
 const arrUnshift = [2, 3, 4];
 const newLengthUnshift = arrUnshift.unshift(1); // adds a new element at the beginning
 console.log(newLengthUnshift); // 4
 console.log(arrUnshift); // [1, 2, 3, 4]
// splice()
 const arrSplice = [1, 2, 3, 4, 5];
 const removedElements = arrSplice.splice(1, 2, 'a', 'b'); // removes 2 elements from index 1 and adds 'a' and 'b'
 console.log(removedElements); // [2, 3]
 console.log(arrSplice); // [1, 'a', 'b', 4, 5]
// slice()
 const arrSlice = [1, 2, 3, 4, 5];
 const slicedArray = arrSlice.slice(1, 4); // extracts elements from index 1 to 3
 console.log(slicedArray); // [2, 3, 4]
 console.log(arrSlice); // [1, 2, 3, 4, 5]
// concat()
 const arrConcat1 = [1, 2, 3];
 const arrConcat2 = [4, 5, 6];
 const concatenatedArray = arrConcat1.concat(arrConcat2); // merges two arrays
 console.log(concatenatedArray); // [1, 2, 3, 4, 5, 6]
 console.log(arrConcat1); // [1, 2, 3]
 console.log(arrConcat2); // [4, 5, 6]
// join()
 const arrJoin = [1, 2, 3];
 const joinedString = arrJoin.join('-'); // joins array elements into a string with specified separator
 console.log(joinedString); // "1-2-3"
 console.log(arrJoin); // [1, 2, 3]
// toString()
 const arrToString = [1, 2, 3];
 const stringRepresentation = arrToString.toString(); // converts array to string
 console.log(stringRepresentation); // "1,2,3"
 console.log(arrToString); // [1, 2, 3]
// includes()
 const arrIncludes = [1, 2, 3, 4, 5];
 const hasThree = arrIncludes.includes(3); // checks if array contains the specified element
 console.log(hasThree); // true
 console.log(arrIncludes); // [1, 2, 3, 4, 5]
// indexOf()
 const arrIndexOf = [1, 2, 3, 4, 5];
 const index = arrIndexOf.indexOf(3); // returns the index of the specified element
 console.log(index); // 2
 console.log(arrIndexOf); // [1, 2, 3, 4, 5]
// isArray()
 const arrIsArray = [1, 2, 3];
 const isArrayCheck = Array.isArray(arrIsArray); // checks if the variable is an array
 console.log(isArrayCheck); // true
 console.log(arrIsArray); // [1, 2, 3]
// instanceof
 const arrInstanceOf = [1, 2, 3];
 const isInstanceOfArray = arrInstanceOf instanceof Array; // checks if the variable is an array
 console.log(isInstanceOfArray); // true
 console.log(arrInstanceOf); // [1, 2, 3]


// flat() method
let nestedArray = [1, 2, [3, 4], [5, 6, [7, 8]]];
let flattenedArray = nestedArray.flat(); // default depth is 1
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, [7, 8]]
let deeplyFlattenedArray = nestedArray.flat(2); // flattening with depth 2
console.log(deeplyFlattenedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// flat() method nested arrays ko flatten karta hai specified depth tak
// agar depth specify nahi kiya to default depth 1 hota hai
// agar array bahut zyada nested hai to hum Infinity bhi specify kar sakte hain
let veryNestedArray = [1, [2, [3, [4, [5]]]]];
let completelyFlattenedArray = veryNestedArray.flat(Infinity);
console.log(completelyFlattenedArray); // [1, 2, 3, 4, 5]
// is tarah se hum nested arrays ko flatten kar sakte hain as per our requirements
// ye method original array ko modify nahi karta hai, ek naya flattened array return karta hai
// isliye hum original nested array ko bhi preserve kar sakte hain agar zarurat ho
// ye sab cheezein dhyan me rakhni chahiye jab hum arrays ke saath kaam karte hain JavaScript me.   


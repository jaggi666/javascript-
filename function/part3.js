// addone(5); pehla call karn nal error nhi karda function pr koi value nahi mildi
function addone(num) {
   
   return num +1;
}
addone(5); // 6

// addTwo(5); //  ReferenceError: Cannot access 'addTwo' before initialization
// kio ki function variable vich hold hat te oper call kita ies lyi error aya 

const addTwo = function(num) {
   return num + 2;
}

addTwo(5); // 7
let health = 100 ; // This is a block variable. 

var name = 'Adan' ; // This would be a global scope variable.

console.log(health) ;

let x = 20 ; // This is another block variable.

console.log(x) ;

let y = 30 ;
let z = x * y ;

document.getElementById("equation").innerHTML = x + " " + "times" + " " + y +" " + "makes the product:" + " " + z ;

let firstName = 'Adan' ; // This is a string variable.
console.log(firstName) ;

const person = {
    bestName : "Rod",
    lastName : "Serling",
    age      : 50,
    eyeColor : "brown"
};

document.getElementById("constant").innerHTML = person.bestName + person.lastName + " was " + person.age + " years old when he died. "
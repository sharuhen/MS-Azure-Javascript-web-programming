console.log("Hello World");
console.log('hello web 102');
console.log('Goodmorning');

console.log(myNumber); //Will display "undefined" because it is not declared yet.

//Because of "hoisting", the function "greetings" declared below will be hoisted up to the loop.
greetings('This should not work');


var myNumber=10; //Declaring a variable
console.log('My number is '+myNumber); 
console.log(myNumber+ ' is my number');
var myName='Sharuhen';
console.log(myName+ ' is awesome, his number is '+myNumber);

function greetings(inputName){ //possible to use the arguments in the function
    console.log('Good morning '+inputName);
}

greetings('shaurhen');
greetings('sooraj');
//Camelcase examples": sayGoodMorning, fetchUserAcountDetails
//reserved JS Objects: Array, Object, Number, String, Class

//Using "var"
var myFruit='apple';
//Using "let" and "const"

let anotherFruit='orange'; //similar to var
const color='orange';
console.log(myFruit);
console.log(anotherFruit);
console.log(color);

// color='green'; //Won't be displayed as it was defined as a constant earlier.
anotherFruit='grapes';
console.log('anotherFruit after reassignment' + anotherFruit);

function fruitColor(fruit){
    let color ;
    let error;
    if (fruit=='apple'){
        color='red';

    } else if (fruit == 'orange') {
        color='orange';
    } else {
        color='I dunno';
        //const and let cannot be referenced outside of this "else" block because it is confined within the scope
        //wheras 'var' can leak outside of this scope, making it available past this point
        error='fruit not found';
        console.log(error)
    }
    console.log('The color of root '+fruit+' is '+color);
    
}
fruitColor('apple');



console.log(1==true);
console.log(0==false);
console.log(''==false);
/////////////////////////////////////////////////////////////////////////////////////

console.log(1===true); // triple equal to check if the value is exactly the same

const myArray=[1,2,3,4];
if (myArray.length){
    //do something
}
console.log('0' == false);
console.log(0==false);



//Function declaration vs function expression

const myFunction=function(studentName){ //THis is the function expression
    //THis function is only available after the point of assignment is made
    return 'Good morning '+studentName;
    console.log('this will not happen'); // THis code wont be executed as it is written below the return key.
}
myFunction('Sharuhen')

const greetingsen=myFunction('Sharuhen');
console.log('Good day, and '+greetingsen);

//Passing in function to another function
const generateGreeting = function(morningGreeting,studentName){
    const greetings=morningGreeting(studentName);
    console.log('Hello & Welcome '+greetings);

}

generateGreeting(myFunction,'Sharuhen');

//Immediately invoked function expression(IIFE);
(function(){
    const myFunction=function(name){
    console.log('HELLO'+name);
    }
    myFunction('Sharuhen');
}()); // this function is used to run the enclosed function


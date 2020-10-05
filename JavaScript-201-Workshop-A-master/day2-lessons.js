// const greetings = function (name) {
//     console.log('Hello', name);
// }

// greetings('Sooraj');

// const anotherGreeting = (name) => {
//     console.log('Hello again', name);
// };

// anotherGreeting('Sooraj');



// const sum = function(x,y) {
//     return x+y;
// }

// console.log(sum(2,7));

// const newSum = (x,y) => (x + y);
// console.log('using the new arrow function: ', sum(10,11));

// const displayValues = (value) => console.log(value);
// const logAndCalcSum = (log, x,y,z) => {
//     log(x);
//     log(y);
//     log(z);
//     return x + y + z;
// };
// const sum = logAndCalcSum((value) => console.log('value is '), 1,2,3);
// console.log('the sum is: ', sum);

const fruits = ['apple', 'banana', 'orange'];
const sentences = fruits.map((fruitName) => 'You should eat the fruit ' + fruitName);
console.log(sentences); 

const work = () => (x) => console.log(x);
/*
Same as writing:
work = function(){
    return function(x) {
        console.log(x;
    }
}
*/
const myFunction = work();
myFunction();

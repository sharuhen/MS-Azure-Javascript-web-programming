const greetings=function (name){
    console.log('Hello world',name);
}
greetings('kingston');
const anotherGreeting =(name) =>{
    console.log('Hello again',name)
};

anotherGreeting('Kingston');










// const sum=function (x,y){
//     return x+y;
// }
// console.log(sum(3,6));

// const newSum=(x,y) => (x+y);
// console.log('using the new arrow function',sum(6,3));


const logAndCalculateSum=(log,x,y,z)=>{
    log(x);
    log(y);
    log(z);
    
return x+y+z;
};
const sum=logAndCalculateSum((value) =>console.log('value is',value),1,2,3);
console.log('the sum is',sum);



const fruits=['apple','banana','orange'];
const sentences=fruits.map((fruitName)=>'The fruit you should eat is '+fruitName);

console.log(sentences);

const work=()=>(x) =>console.log(x);
/*
Same as writing:
work=function(){
    return function(x){
        console.log(x);
    }
}
*/
const myFunction=work();
myFunction();


let numbers=[2,3,4,5,6];
// let output=[];
// for (let i = 0;  i< numbers.length; i++) {
//     const element = numbers[i];
//     const result=element*element;
//     output.push(result);
    
// }
// const square=element=>element*emement;
// const square=x=>x*x;

// const result=numbers.map(function(element){
//     return element*element
// })


// const result=numbers.map( x => x*x )
//  console.log(result);

const bigger=numbers.filter(x=>x>3);
console.log(bigger);

const isbigger=numbers.find(x=>x>4);   //find will find the instant bigger element from an array
console.log(isbigger);
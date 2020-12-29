const students=[
    {name:'kalfan',id:15},
    {name:'kamar',id:16},
    {name:'baman',id:17},
    {name:'samar',id:18},
    {name:'balar',id:19},

];

// let empty=[];
// for (let i = 0;  i< students.length; i++) {
//     const element = students[i];                       // this is the longer way
//     const names=element.name;
//     empty.push(names);
     

    
// }
// console.log(empty);

const names=students.map(x=>x.name);
console.log(names);
const ids=students.map(x=>x.id);
console.log(ids);

const bigger=students.filter(x => x.id > 16);
console.log(bigger);

const biggerOne=students.find(x => x.id>17);
console.log(biggerOne);
// true:
// number=true without zero
// []=true
// {}=true
// 'false'=true
// falsy:
// 0=false
// NaN=false
// undefined=false
// null=false
// false=false;
// empty-string=false

const name={};
if(name){
    console.log('this is true');
}
else{
    console.log('this is false');
}
var y= 1;//global
function sum(){
    var x= 34;//local
    console.log(x+y);
}
sum();
console.log(x+y);

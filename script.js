//shotest js code is empty js file
/*
    even there is no code to execute the js engine also create globla execution context
    and this keyword in the GEC is refer to the window object
*/

console.log(window);
console.log(this); //both are same here

//GEC
//everything out side the function is GEC


var s=10; //global space
function  anyFunc(){
    let a = 10; //it is not in global space
}

console.log(this.s);

//undefind & not defind 

console.log(num);//undefind

var num =12;

//this is the concept of hosting 

/**
 * undefind is a special keyword which act as a placeholder for any variable which got memery allocation
 */

var a;

if(a === undefined)
{
    console.log("a is undefined");
}
else{
    console.log("a is not undefind");
}
//expected out put is a is undefined that means undefind is something

//laxical enviroment

let anyValue=10;

function firstFinc(){
    anyValue =  20;
    console.log(anyValue);
    secFunc();
    function secFunc(){
        console.log(anyValue);
    }
}

/**
 * whien secFunc is called the anyvalue is searched at the scope of the secFunc if it is not there then it is searchhed at its parents scope it is called ad laxical enviroment but vice-versa is not true-->

 */

//TEmpotal dead zone
/**
 * In case of let and const there is also undefind is assigned to the variable before the 2nd phase completed
 * 
 * the area of declare let/const variable to the area of initialised it it is know as temporal dead zone
 * 
 * There is also hoisting concept is  still applicable for the let and const variable-->
 * 
 * But it is stored in a different memory spacce before initialised it it can't be accesed->
 */

console.log(a); //refference error can't accesed
console.log(b); //undefined -- global space
var b =20;//(line no 73 to 75 temporal dead zone)
let a = 20;
//let var con't be re decalred
//const is expect assign the value at the same line
// and it can't reassigned



/** ## block and shadowoing */

/**
 * block is compound ststement
 * inside {}
 */

//special case
{
    var w = 10;//out side the block it is accesible
    let y= 30;
    const p = 30;
}
//here let and const is block level scpope but var w is global scope
//

var shadow =100;
{
    var shadow =10;
    //let shadow =100// is fine
    console.log(shadow); //10
}
console.log(shadow); // 10 bcz it change the value 
/* //it is not fine illigal shadowing
let sha = 10;
{
    var sha = 20;
} */
//var has a function scope 

function anc(){
    var value=100;
}
//can't acesses out side
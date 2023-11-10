// promise


let myPromise = new Promise((resolve, reject)=>{

    let num = Math.floor(Math.random()*10)+1;
    if(num<5)
    {
        reject("week no");
    }
    resolve("myPromise resoolved");
});

//handleing error in promise
myPromise.then((res)=> console.log(res)).catch((error)=> console.log(error));


// async function always returns a promise-->

let  check = async ()=>{
    console.log("this is a async function");
}

console.log(check());

/**
 * 
 * In case of promis there is3  state 
 * either fulfilled , pending or rejected
Promise {<fulfilled>: undefined}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
undefined
 */

//Async and await

/**
 * It is used to handel the promises
 * 
 * and await is used only inside the async function
 */
//ex
const p = new Promise((resolve, reject)=>{
    resolve("promise resolved");
})

async function handelPromise(){
    let result = await p;
    console.log(result)
}

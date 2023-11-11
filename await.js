let find = new Promise((res, rej)=>{
    setTimeout(()=>{
        res("resolved");
    },1000);
});

let sec = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Resolve after 20 sec");
    },1000);
});
//to slow down the process 
/* for(let i=0;i<100000;i++)
{
    if(i%23 == 0)
    {
        console.log(i);
    }
} */
async function getFind(){
    let result = await find;
    console.log(result);
    let res2 = await sec;
    console.log(res2);
}
//for error catching you can use .catch() when call the async function or inside the async function warp in try catch block
getFind().catch((err)=> console.log(err));
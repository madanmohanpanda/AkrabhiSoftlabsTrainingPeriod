let arr = [2,4,5,69];

let newArr = arr.map((ele)=>{
    return ele*2;
})

console.log(arr);
console.log(newArr);

//to make binary
let binary = arr.map((ele)=>{
    return ele.toString(2);
})

console.log(binary);

let list= new Map();

list.set("madan", "23");
console.log(list.get("madan"));

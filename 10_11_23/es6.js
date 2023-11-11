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


//filter 
let evenEle = arr.filter((ele)=> ele%2==0);
console.log(evenEle);

//reduce method

let sum = arr.reduce((sum , ele)=> sum+= ele);
console.log(sum);

//destructureing 

let myObj = {
    name: "madan",
    mark: 98,
    loc: "bbsr",
};

let {name, mark, loc} = myObj;

console.log(`${name} is secured ${mark}`);
//giving different name is also possible
let {name: fname} = myObj;

console.log(fname); // name is not defind if you try to log name
//destrunctureing array
let names = ["madan", "ram", "sai", "sita", "gita"];

let [first, second, ...other] = names;
console.log(`${first} ${second} `);
console.log(other);


//every 
//checks and return true if every elements are following the condition otherwise returns false
nums = [2,4,8,20,100];
let res = nums.every((ele)=> ele%2== 0);
console.log(res);

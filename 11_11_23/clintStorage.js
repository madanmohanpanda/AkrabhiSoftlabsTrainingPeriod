document.cookie = 'name=madan; expires=' + new Date(2024, 0, 11).toUTCString();
document.cookie = 'lastName=Panda'
console.log(document.cookie)

localStorage.setItem('name', 'madan');

let name = localStorage.getItem('name');

if (name === 'madan') {
    console.log(`Wellcome  ${name}`)
}

let cookies = document.cookie;
let long;
if(cookies.indexOf(';')>-1)
{
    long = cookies.split(';'); 
    cookies = long.join('=')  ;
}

console.log(cookies)
let map = new Map();
if (cookies) {
    let cookieData = cookies.split('=');
    console.log(cookieData);

    let key;
    let mapValue;
    for(let j=0;j<2;j++){
    for (let i = 1; i <= cookieData.length; i++) {
        if (i % 2 != 0) {
            key = cookieData[i - 1];
        }
        if (i % 2 == 0) {
            mapValue = cookieData[i - 1];
        }
        

    }
    map.set(key, mapValue);
}
}
console.log(map);

sessionStorage.setItem('madan','panda');
console.log(sessionStorage);
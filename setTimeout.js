//this case only one i is used for all the itteration of the loop this problem is solved by the let
function varImpl(){
    for(var i=1;i<=5;i++)
    {
        setTimeout(()=>{
            console.log(i);
        },i*1000);
    }
    console.log("hello there");
}
varImpl();

function letImple(){
    for(let j=1;j<=5;j++)
    {
        setTimeout(()=>{
            console.log(j);
        },j*1000);
    }
}

console.log(letImple());

//by applying closer concept we can easyly get result

function varWithCloser(){
    for(var i=1;i<=5;i++)
    {
        function close(i){
            setTimeout(()=>{
                console.log(i);
            },i*1000);
        }
        close(i);
    }
}
varWithCloser();
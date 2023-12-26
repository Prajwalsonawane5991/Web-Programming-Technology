function makeadder(x)
{
   return function (y)
   {
    return x+y;
   }

}
let add5=makeadder(5)
let add10=makeadder(10)

console.log(add5(5))
console.log(add10(20))
console.log(add5(1),add10(20))


function dojob(f1)
{
    for(let i=1;i<10;i++)
    {
        f1();
    }
}
dojob(function(){console.log("heyyy...")})
dojob(()=>{console.log("hello.....")})

function test()
{
    console.log("hiiiiiiiiiiiii")
}
dojob(test)
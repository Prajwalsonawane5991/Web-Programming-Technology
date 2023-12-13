//function add(x,y)
//{
   // return (x+y)
//}
//console.log(add(20,40,50,10))
//console.log(add("pjdhf","nnjdn"))

//function add(x=10,y=20,...nums)
//{
  //  return (x+y+nums)
//}
//console.log(add(20,34))
//console.log(add("nnjdn"))
function add(...num)
{
    let sum=0
    for(i=0;i<num.length;i++)
    {
         sum=sum+num[i]
    }
    return sum
}
console.log(add(1,2,4,5,8,7,9,6,3))
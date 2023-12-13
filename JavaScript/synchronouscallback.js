let arr=["raj","prajwal","sahil","arjun"]

arr.forEach((element)=>{console.log(element)})
console.log("----------------------------------------------------")
let call=(ele)=>{console.log(ele)}
arr.forEach(call)

console.log("----------------------------------------------------")
let arr1=[1,2,3,4,5,6,7,8,9]
let square=arr1.map((ele)=>{return Math.pow(ele,2)})
console.log(square)
console.log("----------------------------------------------------")
let divideby2=arr1.filter((ele)=>{
    if(ele%2==0)
    {
        return false
    }
    else
    {
      return true
    }
})
console.log(divideby2)

console.log("end of prog")
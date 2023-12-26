// let arr=[1,8,5,4,6,9]
// //console.log(arr.sort())
// arr.sort((n1,n2)=>{
//     if(n1>n2) return 1;
//     if(n1<n2) return -1;
//     else return 0;
// })
// console.log(arr)
// var arr2 = [{fname:'supriya',age:20,marks:88},{fname:'trisha',age:22,marks:82},{fname:'swamini',age:19,marks:78},{fname:'sharvari',age:23,marks:66}]
// arr2.sort((s1,s2)=>{
//     if(s1.marks>s2.marks) return 1;
//     if(s1.marks<s2.marks) return -1; 
//     else return 0
// })

// console.log(arr2)



var arr2 = [{fname:'supriya',age:20,marks:88},{fname:'trisha',age:22,marks:82},{fname:'swamini',age:19,marks:78},{fname:'sharvari',age:23,marks:66}]
//get the list of all names from above array 
var names = arr2.map((element)=>{return element.fname})
var oddnames = arr2.map((element,i)=>{
    if(i%2 != 0)
    return element.fname
})
console.log("arr2=",arr2)
console.log("names=",names)
console.log("oddnames=",oddnames)

names.forEach((element,i)=>{console.log(i,element)})
names.forEach((element)=>{console.log(element)})

let arr3=[7,8,9,55,4]
let square=arr3.map((ele)=>{
    return ele*ele
})
console.log(square)
let divisibleby4=arr3.filter((ele)=>{
    if(ele%4==0)
    return true
  else 
     return false
})
console.log(divisibleby4)
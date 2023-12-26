let obj={product:"maggie",cost:"30"}
console.log(obj)
let {product:a,cost:b}=obj
console.log(a,b)
let {product,cost}=obj
console.log(product,cost)

let arr=[1,2,3,4]
// let x=arr[1]
// let y=arr[2]
let [,,x ,y]=arr
console.log(x,y)
let arr2=[100,200,arr]
console.log(arr2[2][1])
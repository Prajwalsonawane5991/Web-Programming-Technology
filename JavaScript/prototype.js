let obj = {name:'prachi',city:'pune' }
let pro = {age:45,qualification:'ME'}
//let pro2 = {hobby:'xyz'}
//EXPLICTLY doing PROTOTYPE CHAINING --------------
Object.setPrototypeOf(obj,pro)
//Object.setPrototypeOf(pro,pro2)

console.log(
    Object.getPrototypeOf(obj),
    Object.getPrototypeOf(pro),
   // Object.getPrototypeOf(pro2)
   )
console.log(obj.name,obj.city ,obj.qualification,obj.age)

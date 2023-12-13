let obj={
    Name:"Animal",
    Director:"Sandip Reddy Wangga",
    Hero:["Ranveer kapoor","Bobby Deoal"],
    Heroin:["Rashmika madhana","Alia bhat"],
    Comedian:["Arjun kapoor","Sidhu Paji"],
    DateofRelese:"12/12/2023",
    Budget:1250000,
    kids:true


}
//console.log(obj);
console.log(obj.Name)
console.log(obj.Director)
console.log(obj.Hero[1])
console.log(obj.Hero)
console.log(obj.kids)
console.log(obj.DateofRelese)
let c=obj.Comedian.length;
let a= obj.Hero.length;
let b=obj.Heroin.length;
let totalcast=a+b+c
console.log("Total character in movies :"+totalcast)
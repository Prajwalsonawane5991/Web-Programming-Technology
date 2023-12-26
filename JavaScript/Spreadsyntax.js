let obj={  song:"pqr",
            singer:"sonu nigam",
            album:{
                movie:"jeet",
                year:2000
            },
            cast:{
                hero:"sunnydeol",
                heroine:"karishma"
            }
}

//let obj2=obj
//console.log(obj2.cast)
//obj2.singer="ar rehman"
//console.log(obj.singer)
//console.log(obj.singer)
let obj2={...obj}
console.log(obj2)
obj2.singer="ar rehman"
console.log(obj.singer)
//obj.album.movie="housefull"
//console.log(obj2.album.movie)

let ob2={...obj,album:{...obj.album},cast:{...obj.cast}}
ob2.album.movie="housefull"
console.log(ob2.album.movie)
console.log(obj.album.movie)


let arr=[10,20,30]
//let arr2=[10,arr]
//console.log(arr2.length)
let arr2=[10,[10,20,30]]
console.log(arr2.length)

console.log(arr2[1][1])//to print 20
let arr3=[10,...arr]
console.log(arr3.length)

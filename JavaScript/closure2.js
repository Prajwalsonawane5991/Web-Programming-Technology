function counterfactory(x)
{
    let cnt=x
    function increment()
    {
        return ++cnt
    }
    return increment
} 
let incr=counterfactory(200)
console.log(incr(),incr(),incr())
let cnt=99
console.log(incr(),incr(),incr())

let incr1=counterfactory(500)
console.log(incr1(),incr1(),incr1())
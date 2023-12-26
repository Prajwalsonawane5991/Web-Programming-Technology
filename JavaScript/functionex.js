function sayhi(choice,greeting)
{
    function indian(name)
    {
        console.log(greeting);
        console.log("namaste",name)
    }
    function us(name)
    {
        console.log("hiii",name)
    }
    function japnese(name)
    {
        console.log("konichiva",name)
    }
    switch(choice)
    {
        case 1:return indian; break;
        case 2:return us; break;
        case 3:return japnese; break;
        case 4:return (w)=>{console.log("hola",w)}
    }
}
let p=sayhi(1,"goodmorning")
console.log(typeof(p))
p("prajakta")
let pr=sayhi(3,"goodmorning")
pr("prajakta")
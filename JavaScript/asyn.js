let callback=()=>{console.log("hi")}
 
let intervalId=setInterval(callback,500)
setTimeout(()=>{
    console.log("Sttimeout callback function run calling clearinterval")
     clearInterval(intervalId)},7000)

console.log("end ")
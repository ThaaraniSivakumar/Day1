import { add , sub } from "./day12";


const find=(a,b,d,e)=>{
   return  {sum :add(a,b),sub:sub(d,e)}
}
console.log(find(8,7,6,5))



let timer = 60;
console.log(timer)
const quz= setInterval(() => {
    timer -=1;
    console.log(timer)
    if(timer <= 0){
        clearInterval(quz)
    }
}, 1000);


const add =(a, callback)=>{
    console.log(a)
    callback()
}
const sub = ()=>{
    console.log("Thaarani")
}
add("Hi",sub)



const trig = async()=>{
    const res = await fetch("https://restcountries.com/v3.1/independent?status=true")
    const result = await res.json()
     console.log(result)
}
trig()
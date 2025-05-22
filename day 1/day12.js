export const add=(a,b)=>{
      c = a+ b
      return c
}

export const sub=(d,e)=>{
    try{
        f=d-e
    return f
    }
    catch{
        return {d,e}
    }
    finally{
        console.log("no value matched")
    }
}



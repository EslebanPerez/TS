(()=>{
  const fullName = ( firstName:string, ...restArg:string[]): string =>{
    return `${firstName} ${restArg.join(" ")}`
  }
  const superman = fullName("Clark", "Joseph")
  console.log({superman});
})()
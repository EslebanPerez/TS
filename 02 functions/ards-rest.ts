(()=>{
  const fullName = ( firstName:string, ...restArg:string[]): string =>{
    return `${firstName} ${restArg.join(" ")}`
  }

  const superman = fullName("Clark");
  const superman2 = fullName("Clark", "Joseph");
  const superman3 = fullName("Clark", "Joseph", "Kent" );
  const superman4 = fullName("Clark", "Joseph", "Kent", "Superman" );

  console.log({superman});
  console.log({superman2});
  console.log({superman3});
  console.log({superman4});
})()
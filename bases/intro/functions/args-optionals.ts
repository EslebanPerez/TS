(()=>{
  const fullName= (firstName:string, lastName?:(string)):string => {
    return `${firstName} ${lastName || "-"}`;
  }

  const name = fullName("Steve");
  console.log({name});
})()
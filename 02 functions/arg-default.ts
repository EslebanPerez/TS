(() =>{
  const fullName = (firstName: string, lastname?: string, upper: boolean= true): string =>{
    if(upper){
      return `${firstName} ${lastname || '---'}`.toLocaleUpperCase();
    }else{
      return `${firstName} ${lastname || '---'}`;
    }
  }

  const name = fullName("Steve", "Rogers", false);
  console.log({name});
})()
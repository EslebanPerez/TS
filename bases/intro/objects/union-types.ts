(()=>{

  type Hero = {
    name: string;
    age?: number;
    powers: number[];
    getName?: () => string
  }

  let myCustomVariable: ( string | number | Hero )= 'Evan';

  console.log(typeof myCustomVariable);
  
  myCustomVariable = 20
  
  console.log(typeof myCustomVariable);
  
  myCustomVariable={
    name: 'Evan',
    age: 26,
    powers: [1,2]
  }
  
  console.log(typeof myCustomVariable);
})()
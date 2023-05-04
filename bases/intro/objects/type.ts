(()=>{

  type Hero = {
    name: string;
    age?: number;
    powers: string[];
    getName?: () => string
  }
  
  let flash: Hero= {
    name: 'Barry Allen',
    age: 24,
    powers: ['Super velocidad', 'Viajar por el tiempo']
  }

  let Superman:Hero = {
    name: 'Clark Ken',
    age: 60,
    powers: ['Super Fuerza'],
    getName(){
      return this.name
    }
  }

})()

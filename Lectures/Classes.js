class Person{
   constructor(name){
     this.name = name
   }
   sayMyName(){
    console.log('my name is',this.name)
   }
   /*instead of writing it in here i was able to add sleeps using prototype*/
}
class Brah extends Person{
   constructor(name, baseballhat){
     super(name)
     this.baseballhat = true; 
  }
}
let Chad = new Brah('chad') 

class Nerd extends Person{
   constructor(name, pocketprotector, glasses, score){
      super(name, glasses)
      this.pocketprotector = pocketprotector;
      this.glasses = glasses
      this.score = score;
   } 
}

let Niko = new Nerd('niko', false, 'soon', 0)

Niko.sayMyName()
Person.prototype.sleeps = function(){
  console.log(this.name, ' is sleeping')
}

Niko.sleeps()
Chad.sleeps()

Brah.prototype.playBeerPong = function(){
  console.log(this.name, ' is playing an epic game of beer pong')
}

Nerd.prototype.playDungeonsAndDragons = function(){
  let roll = Math.floor(Math.random()*20);
  console.log(this.name, ' just rolled his twenty sided dice and rolled a', roll)
  this.roll = roll;
}
Niko.playDungeonsAndDragons()
console.log(Niko)

let Eek = new Nerd('eek!', true, true)

Eek.playDungeonsAndDragons()
console.log(Eek)

Brah.prototype.playBeerPong = function(){
  console.log('game over')
}

Brah.prototype.burps = function(){
  console.log('BELCH!!!')
}; 
console.log(Chad)
Chad.playBeerPong()
Chad.burps()

let Brice = new Brah('brice')
Brice.burps()

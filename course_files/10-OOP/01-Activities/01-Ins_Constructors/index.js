const jon = {
  name: 'jon',
  age: 28,
  location: 'San Diego'
}

const juan = {
  name: 'Juan',
  age: 28,
  location: 'LA'
}

const nick = {
  name: 'Nick',
  age: 28,
  location: 'LA'
}

function Person(name, age, location) {
  this.name = name;
  this.age = age;
  this.location = location;
}

new Person('Jon', 28, 'San Diego');
new Person('Juan', 28, 'LA');

console.log(jon.age);
console.log(juan.age);
console.log(jon.location);



function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
}


// Constructor function which can be used to create objects containing the properties "raining", "noise", and the "makeNoise()" function
function Animal(raining, noise) {
  this.raining = raining;
  this.noise = noise;
  
  this.makeNoise = () => {
    if (this.raining === true) {
      console.log(this.noise);
    }
  };
}

// Sets the variables "dogs" and "cats" to be animal objects and initializes them with raining and noise properties
const dogs = new Animal(true, 'Woof!');
const cats = new Animal(true, 'Meow!');

// Calling dogs and cats makeNoise methods
dogs.makeNoise();
cats.makeNoise();

// If we want, we can change an object's properties after they're created
// cats.raining = true;
// cats.makeNoise();

const massHysteria = (dogs, cats) => {
  if (dogs.raining === true && cats.raining === true) {
    console.log('DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!');
  }
};

massHysteria(dogs, cats);

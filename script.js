//Exercise 1

const book = {
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    pages: 239,
    read: function() {
    return `Currently reading ${this.title} by ${this.author}.`;
    }
};

console.log(book.read()); 


// Exercise 2

const horse = new Animal("horse", "Monkey", "neiiiigggghhh");
const dog = new Animal("dog", "Stella", "woof");

function Animal(species, name, sound) {
    this.species = species;
    this.name = name;
    this.sound = sound;
    this.makeSound = function () {
        return `${this.name} says ${this.sound}`;
    }
};

console.log(horse.makeSound());
console.log(dog.makeSound());

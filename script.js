//Exercise 1 - Create a simple object

const book = {
    //Properties of paired values
    title: "To Kill a Mockingbird", 
    author: "Harper Lee", 
    pages: 239,
    //Method: a function stored inside an object
    read: function() { 
    return `Currently reading ${this.title} by ${this.author}.`; //"this" refers to book objects 
    }
};
// calls method and logs the message
console.log(book.read()); 


// Exercise 2 - Build a Constructor function
//Properties of the variables for the Animal objects
const horse = new Animal("horse", "Monkey", "neiiiigggghhh"); // new tells js that we're makign a fresh or new object based on the constructor function
const dog = new Animal("dog", "Stella", "woof");

// Constructor function. Constructors start with capital letters)
function Animal(species, name, sound) {
    //each new animal object will have the following properties
    this.species = species;
    this.name = name;
    this.sound = sound;
    //Defined method inside the constructor
    this.makeSound = function () {
        return `${this.name} says ${this.sound}`; // this is used to access the object's properties
    }
};
// call the methods and logs the messages
console.log(horse.makeSound());
console.log(dog.makeSound());

// Exercise 3 - Expand the Blueprint
// student variables and info
const alice = new Student("Alice", 11, "Mathematics");
const ella = new Student("Ella", 8, "Science");
const bob = new Student("Bob", 5, "Lunch");

// Constructor function for Students
function Student(name, grade, subject) {
    //assigning properties to each new student object
    this.name = name;
    this.grade = grade;
    this.subject = subject;
    
    // 1st Method: introduce the students
    this.introduce = function () {
        return `Hi, I am ${this.name}, studying ${subject} in grade ${grade}.` // returns a string that introduces the student
    };

    // 2nd method: finishesSchoolYear
    this.finishesSchoolYear = function() {
        const next = this.grade + 1; //raises the student up one grade
        if (next >= 12) { //if grade becomes 12 or higher, prints the following graduation message. 
            this.grade=12;
            console.log(`Congratulations, ${this.name} has graduated!`);
        } else { // Othewrise, moves them up one grade and says this message. 
            this.grade = next;
            console.log(`${this.name} has moved up to grade ${this.grade}.`);
        }
    };

}
// call the methods and logs the messages
console.log(alice.introduce());
alice.finishesSchoolYear();

console.log(ella.introduce());
ella.finishesSchoolYear();

console.log(bob.introduce());
bob.finishesSchoolYear();


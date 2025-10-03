# JavaScript Objects Exercises

## Overview
This project contains exercises from the Objects PDF that was within the Week 3 resources. In particular, the JavaScript objects that are part of these exercises involve objects, constructor functions, and methods. 
These were completed as part of CodeX Academy – Week 3 coursework.

## Files
- script.js
- gitignore - git ignored files
- license - MIT License

## Exercises

### Exercise 1: Simple Object
- Created a `book` object with properties (`title`, `author`, `pages`) and a `read()` method.
- Demonstrates how to access object properties and methods using `this`.

### Exercise 2: Constructor Function
- Created an `Animal` constructor function with properties (`species`, `name`, `sound`) and a `makeSound()` method.
- Shows how to use the `new` keyword to create multiple objects from the same blueprint.

### Exercise 3: Student Blueprint
- Created a `Student` constructor function with:
  - `name`, `grade`, and `subject` properties
  - `introduce()` method
  - `finishesSchoolYear()` method (increments grade, caps at 12, prints graduation message)
- Demonstrates conditional logic and state changes inside objects.

## Key Takeaways
- Object literals are great for one-off objects, as used in the 1st exercise.
- Constructor functions + `new` let you create many similar objects, as used in the 2nd exercise. 
- The `this` keyword references the current object.  
- Reserved keywords like `new` cannot be reused, but names like `read` are user-defined.


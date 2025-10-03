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



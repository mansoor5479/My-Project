// Global scope
// Function Scope
// block scope


//Global scape - variable are declared & access globally  anywhere in document
//for example

// let v1 = "mobiles"
// var v2 = "Laptop"
// const v3 = "gadgets"

// function accessories() {
//     document.write(v1 + "<br>");
//     document.write(v2 + "<br>");
//     document.write(v3);
// }

// accessories();


//Function scope - Variable can declared & access inside functions
// for example

// function books() {
//     let b1 = "History books"
//     var b2 = "Chemistry books"
//     const b3 = "Mathematics books"
//     document.write(b1 + "<br>" + b2 + "<br>" + b3)
// }
// books()


//Block scope - only var keyword variables can be access outside block scope
// let & Const keyword can declared & access inside block scope
// let & Const keyword cannot access outside block scope & inside function scope.

function bread() {
    if (10 < 20) {
        let name1 = alert("this let keyword can access in block scope")
        const name2 = alert("this const keyword can access in block scope")
        var name3 = alert("this var keyword can access in & out of block scope")
        document.write(name1);
        document.write(name2);
    }
    document.write(name3);
}
bread();
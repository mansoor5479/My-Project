
var woman = confirm("Are you female?");
if (woman) {
    let name = prompt("Hi Mrs Please Enter your name");
    document.write("Hello Madam  " + name + "\n", "Welcome to my page");
} else {
    let name = prompt("Hi Mr Please Enter your name");
    document.write("Hello Mr  " + name + "\n", "Welcome to my page");
}
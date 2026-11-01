let Name = prompt("Please provide your valid name");

let Marks = prompt("Please provide your marks to validate");

switch (true) {
    case Marks > 90 && Marks <= 100:
        result = "Congratulations you are Qualified in distinction grade"
        break;
    case Marks > 65 && Marks <= 90:
        result = "Congratulations you are  Qualified in First grade"
        break;
    case Marks >= 40 && Marks < 65:
        result = "Congratulations you are  Qualified in second grade"
        break;
    case Marks >= 30 && Marks <= 40:
        result = "Congratulations you are  Qualified in Third grade"
        break;
    default:
        result = "Sorry you failed Better Luck Next Time"
}

document.write("Hello " + Name + "<h2>" + result + "</h2>")
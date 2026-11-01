function ambryWorld() {
    let label1 = Number(prompt("Please enter your age"));
    let label2 = Number(prompt("Please enter your weight"));
    let useConfirmation = confirm("Are you sure you want to check your Actual weight as per age?")
    let result = "";
    switch (true) {
        case label1 == 30 && label2 == 80 && label2 <= 100:
            result = "Your Actual weight must be below 70 Please do exercises"
            break
        case label1 == 40 && label2 > 60 && label2 <= 75:
            result = "Your Actual weight is exact as per your age"
            break
        case label1 == 60 && label2 > 45 && label2 <= 60:
            result = "Your Actual weight must be 65 Please do exercises"
            break
        default:
            result = "Error"
    }

    document.write("Considering your age & weight <h2>" + result + "</h2>");
}

ambryWorld();
function calc() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operation = document.getElementById("operation");
    let operator = operation.options[operation.selectedIndex].value;

    switch(operator) {
        case "none":
            // error handling
            if(isNaN(num1) && isNaN(num2))
                document.getElementById("answer").innerHTML = "Select an operator and enter numbers to calculate.";
            else if (isNaN(num1))
                document.getElementById("answer").innerHTML = "Select an operator and enter the first number to calculate.";
            else if (isNaN(num2))
                document.getElementById("answer").innerHTML = "Select an operator and enter the second number to calculate.";
            else
                document.getElementById("answer").innerHTML = "Select an operator.";
            break;
        case "add": 
            document.getElementById("answer").innerHTML = num1 + num2; 
            break;
        case "sub":
            document.getElementById("answer").innerHTML = num1 - num2;
            break;
        case "mul":
            document.getElementById("answer").innerHTML = num1 * num2;
            break;
        case "div":
            document.getElementById("answer").innerHTML = num1 / num2;
            break;
        case "mod":
            document.getElementById("answer").innerHTML = num1 % num2;
            break;
        case "pow":
            document.getElementById("answer").innerHTML = num1 ** num2;
            break;
    }

    if(operator != "none") {
        // error handling
        if(isNaN(num1) && isNaN(num2))
            document.getElementById("answer").innerHTML = "Enter numbers to calculate.";
        else if (isNaN(num1))
            document.getElementById("answer").innerHTML = "Enter the first number to calculate.";
        else if (isNaN(num2))
            document.getElementById("answer").innerHTML = "Enter the second number to calculate.";
    }
}

function reset() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("answer").innerHTML = "";
    document.getElementById("none").selected = "true";
}

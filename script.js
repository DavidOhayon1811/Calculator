function calc() {
    let num1 = parseFloat(document.getElementById('num1').value);
    let num2 = parseFloat(document.getElementById('num2').value);
    let operation = document.getElementById('operation');
    let operator = operation.options[operation.selectedIndex].value;

    switch(operator) {
        case "none":
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
}
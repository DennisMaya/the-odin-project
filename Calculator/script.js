let lastOperationScreen = document.getElementById("lastOperationScreen");
let currentOperationScreen = document.getElementById("currentOperationScreen");
let firstOperand = '';
let secondOperand = '';
let currentOperation = null;
let shouldResetScreen = false;

function appendValue(value){
    if(currentOperationScreen.textContent==="0"||shouldResetScreen) {
        resetScreen();
    }
    currentOperationScreen.textContent += value;
}

function allClear(){
    console.log("all clear");
    currentOperationScreen.textContent = "0";
    lastOperationScreen.textContent = "";
    firstOperand = '';
    secondOperand = '';
    currentOperation = null;
    shouldResetScreen = false;
}

function resetScreen(){
    currentOperationScreen.textContent = "";
    shouldResetScreen = false
}

function deleteLast(){
    console.log("delete")
    currentOperationScreen.textContent = currentOperationScreen.textContent.slice(0,-1);
    if(currentOperationScreen.textContent === null){
        currentOperation.textContent += "0";
    } 
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate();
    firstOperand = currentOperationScreen.textContent;
    currentOperation = operator
    lastOperationScreen.textContent = `${firstOperand} ${currentOperation}`
    shouldResetScreen = true
  }

function evaluate(){
    
}

function operate(a,b,operator){
    result = null;
    switch(operator) {
        case '+':
            result = add(a,b);
            break;
        case '-':
            result = subtract(a,b);
            break;
        case '*':
            result = multiply(a,b);
            break;
        case '/':
            if(b!==0){
                result = divide(a,b);
            }
            break;
    }
    return result;
}

function add(a,b){
    return a + b;
}

function subtract(a,b){
    return a- b;
}

function multiply(a,b){
    return a * b;
}

function divide(a,b){
    return a / b;
}
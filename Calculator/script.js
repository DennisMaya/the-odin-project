let display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = ""
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
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
const numButtons = document.querySelectorAll('.numBtn');
const clearBtn = document.getElementById('clearBtn');
const inputBox = document.querySelector('.inputBox');
const operatorBtns = document.querySelectorAll('.operator');
var input = '';

numButtons.forEach(button => {
    button.addEventListener('click', function(){
        input += this.textContent;
        handleClick(input);
    });
});

clearBtn.addEventListener('click', function(){
    input = '';
    handleClick(input);
});

operatorBtns.forEach(operator => {
    operator.addEventListener('click', function(){
        if(operator != clearBtn){
            input += this.textContent;
            console.log(input);
            handleClick(input);
        }
    });
});

function handleClick(input){
    inputBox.textContent = input;
}


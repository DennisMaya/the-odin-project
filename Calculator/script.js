document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.querySelector(".inputBox");
    let currentInput = "";
    document.querySelectorAll(".numBtn").forEach(button => {
        button.addEventListener("click", function () {
            currentInput += this.textContent;
            inputBox.textConent = currentInput;
        });
    });
});
    
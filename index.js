const subButton = document.querySelector("button");
const customErrorMsg = document.querySelector("p");
const input = document.querySelector("input");

function showErrorMsg() {
    if (input.value === "") {
        customErrorMsg.style.visibility = "visible";
    }
}

subButton.addEventListener("click", showErrorMsg);
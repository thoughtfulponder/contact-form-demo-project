const subButton = document.querySelector("button");
const customErrorMsg = document.querySelector("p");
const input = document.querySelector("input");

function showErrorMsg() {
    if (input.value === "") {
        customErrorMsg.style.visibility = "visible";
    } else {
        customErrorMsg.style.visibility = "hidden";
    }
}

subButton.addEventListener("click", showErrorMsg);
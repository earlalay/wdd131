// document.forms[0] woudl also work
const theForm = document.querySelector("#practiceform");

function processForm(event) {
    event.preventDefault();
    console.log("event:", event);
    console.log("this:", this);
}

theForm.addEventListener("submit", processForm);
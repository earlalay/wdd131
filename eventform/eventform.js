const form = document.querySelector("#eventForm");
const personType = document.querySelector("#personType");
const accessCodeContainer = document.querySelector("#accessCodeContainer");
const INumberContainer = document.querySelector("#INumberContainer");
const accessCode = document.querySelector("#accessCode");
const studentINum = document.querySelector("#studentINum");
const output = document.querySelector("#output");

function updateAuthentificationField() {
    const value = personType.value;
    if (value === "student") {
        INumberContainer.hidden = false;
        accessCodeContainer.hidden = true;
    }
    else if (value === "guest") {
        INumberContainer.hidden = true;
        accessCodeContainer.hidden = false;
    }
    else {
        INumberContainer.hidden = true;
        accessCodeContainer.hidden = true;
    }
}

personType.addEventListener("change", updateAuthentificationField);

function isPastDate(value) {
    const today = new Date();
    const chosen = new Date(value);
    return chosen < today;
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = form.firstName.value.trim();
    const lastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const type = form.personType.value.trim();
    const eventDate = form.eventDate.value.trim();
    const accessCodeNote = form.accessCode.value.trim();
    const studentINumNote = form.studentINum.value.trim();

    if (personType.value === "student" && studentINumNote === '') {
        output.textContent = 'Please enter your student ID number.';
        return;
    }
    
    if (personType.value === "guest" && accessCodeNote === '') {
        output.textContent = 'Please enter your guest access code.';
        return;
    }

    if (isPastDate(eventDate)) {
        output.textContent = 'Please choose a later date.';
        return;
    }

    output.innerHTML = `
    <h2>Ticket Created</h2>
    <p>${firstName} ${lastName}</p>
    <p>${type}</p>
    <p>${eventDate}</p>
    `;

    form.reset();
    updateAuthentificationField();
});
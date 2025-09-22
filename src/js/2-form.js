let formData = {
    email: "",
    message: ""
};

const form = document.querySelector(".feedback-form");
let input = form.elements.email;
let textarea = form.elements.message;

let stor = localStorage.getItem("feedback-form-state");

if (stor !== null) {
    stor = JSON.parse(stor);
    if (stor.email !== undefined) {
        input.value = stor.email;
        formData.email = stor.email;
    };
    if (stor.message !== undefined) {
        textarea.value = stor.message;
        formData.message = stor.message;
    }
}

form.addEventListener("input", formInput);

function formInput(event) {
    if (event.target.type === "email") {
        formData.email = event.target.value.trim();
    } else {
        formData.message = event.target.value.trim();
    };
    const formStr = JSON.stringify(formData);
    localStorage.setItem("feedback-form-state", formStr);
}

form.addEventListener("submit", formSubmit);

function formSubmit(event) {
    event.preventDefault();
    if (input.value === "" || textarea.value === "") {
        alert("Fill please all fields");
    } else {
        console.log(formData);
        form.reset();
        localStorage.removeItem("feedback-form-state");
        formData.email = "";
        formData.message = "";
    }
}
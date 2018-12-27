const form = document.querySelector("form"),
    input = form.querySelector("input"),
    greeting = document.querySelector(".js-greetings");


const USER_LC = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LC, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentUser = input.value;
    printName(currentUser);
    saveName(currentUser);
}

function askForName() {
    form.classList.add(SHOWING_CN);
    form.addEventListener("submit", handleSubmit);
}

function printName(text) {
    form.classList.remove(SHOWING_CN);
    greeting.classList.add(SHOWING_CN);
    greeting.innerText = `Hello ${text}`;
}

function loadName() {
    const currentUser = localStorage.getItem(USER_LC);
    if (currentUser === null) {
        //로컬스토리지에 사용자가 등록되어 있지 않아서 값을 가져올 수 없는 경우
        askForName();
    } else {
        //로컬스토리지에 사용자가 등록되어 있는 경우
        printName(currentUser);
    }
}

function init() {
    loadName();
}
init();
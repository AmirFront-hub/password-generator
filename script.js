let generateButton = document.getElementById("generate-button");
let passwordLength = 15;

const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz".split("");
const numberChars = "0123456789".split("");
const symbolChars = "~`!@#$%^&*()_-+={[}]|:;<>.?/".split("");

const uppercaseCheckbox = document.getElementById("uppercase");
const lowercaseCheckbox = document.getElementById("lowercase");
const numbersCheckbox = document.getElementById("numbers");
const symbolsCheckbox = document.getElementById("symbols");

function generatePassword() {
    let charactersPool = [];

    if (uppercaseCheckbox.checked) {
        charactersPool = charactersPool.concat(uppercaseChars);
    }
    if (lowercaseCheckbox.checked) {
        charactersPool = charactersPool.concat(lowercaseChars);
    }
    if (numbersCheckbox.checked) {
        charactersPool = charactersPool.concat(numberChars);
    }
    if (symbolsCheckbox.checked) {
        charactersPool = charactersPool.concat(symbolChars);
    }

    if (charactersPool.length === 0) {
        return "Select one option!";
    }

    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
        const randomIndex = Math.floor(Math.random() * charactersPool.length);
        randomPassword += charactersPool[randomIndex];
    }
    return randomPassword;
}

generateButton.addEventListener("click", function () {
    const password = generatePassword();
    document.getElementById("password").textContent = password;
});

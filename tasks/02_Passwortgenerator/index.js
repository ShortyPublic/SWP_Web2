const uppercaseLetters = "ABCDEFGHIJKLMNOPQRTSUVXYZ"
const lowercaseLetters = "abcdefghijklmnopqrstuvxyz"
const numbers = "0123456789"
const special = "#+*'\"\\/!§$%&/()=?}][{"

const properties = {
    useUppercase: () => {
        return document.getElementById("uppercase").checked
    },
    useLowercase: () => {
        return document.getElementById("lowercase").checked
    },
    useNumbers: () => {
        return document.getElementById("numbers").checked
    },
    useSpecial: () => {
        return document.getElementById("special").checked
    },
    length: () => {
        return parseInt(document.getElementById("len").value)
    }
}

const generate = () => {
    let availableChars = ""
    if (properties.useUppercase()) availableChars += uppercaseLetters
    if (properties.useLowercase()) availableChars += lowercaseLetters
    if (properties.useSpecial()) availableChars += special
    if (properties.useNumbers()) availableChars += numbers
    let generated = ""
    for (let i = 0; i < properties.length(); i++) {
        generated += availableChars.charAt(Math.random() * availableChars.length)
    }
    document.getElementById("result").innerHTML = generated
}
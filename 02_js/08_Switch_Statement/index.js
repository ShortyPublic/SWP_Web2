// Erstelle eine Zufallszahl zwischen 5 und 10

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.

let num = Math.round(Math.random() * 5) + 5
let numNames = { 5: "Five", 6: "Six", 7: "Seven", 8: "Eight", 9: "Nine", 10: "Ten"}
switch (num) {
    case 10:
    case 9:
    case 8:
    case 7:
    case 6:
    case 5:
        console.log(numNames[num])
        break
    default:
        console.log("HMmmm?")
}
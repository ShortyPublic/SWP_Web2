// Erstelle zwei Zufallszahl zwischen 0 und 100

// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"

let zahl1 = Math.random() * 100
let zahl2 = Math.random() * 100

if (zahl1 < zahl2 && zahl1 < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
}
if (zahl1 < 30 || zahl2 < 30) {
    console.log("Eine der beiden Zahlen ist kleiner als 30")
}
if (zahl1 < 50 && zahl2 !== 50) {
    console.log("Erste Zahl klein, zweite kein 50er")
}
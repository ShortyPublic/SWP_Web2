// 1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist.
let age = 22
let fuehrerschein = false
let probezeit = false
if (age >= 24 || (fuehrerschein && !probezeit)) {
    console.log("Darfst fahren")
} else {
    console.log("Darfst ned fahren")
}
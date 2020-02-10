// ASSESSMENT 1: INTRO TO JAVASCRIPT
// Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

var temp1 = 35
var temp2 = 350
var temp3 = 212

const isBoiling = water => {
    if (water < 212) {
        return `${water} is below boiling point`
    }
    else if (water > 212) {
        return `${water} is above boiling point`
    }
    else if (water === 212) {
        return `${water} is at boiling point`
    } 
    else {
        return "That is not water in the pot"
}
}
console.log(isBoiling(temp1))
console.log(isBoiling(temp2))
console.log(isBoiling(temp3))



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]

var myNumbers1 = [3, 7, 0, 6, -9]

const mult5 = (arrMult5) => {
    let answerMult5 = []
    for (let i=0; i<arrMult5.length; i++){
    answerMult5.push(arrMult5[i] * 5)
  }
  return answerMult5
}
console.log(mult5(myNumbers1))

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]

var myNumbers2 = [8, -7, 0, 6, 2]

const mapMult5 = (array) => {
  let answerMapMult5 = array.map(value => value * 5)
  return answerMapMult5
    }
console.log(mapMult5(myNumbers2))

// --------------------4) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

const noVowel = (noVowelArray) => {
    let eachLetter = noVowelArray.split("")
    let bangAeiou = eachLetter.filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u")
    let lettersAnswer = bangAeiou.join("")
    return lettersAnswer
    }
console.log(noVowel(stringWithVowels1))
console.log(noVowel(stringWithVowels2))

// --------------------5) Expand the logic from #4 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var notAString1 = true
var notAString2 = 42
var notAString3 = "Richie" 
const extendedNoVowel = (value) => {
    if (typeof (value) === "string") {
            let exEachLetter = value.split("")
            let exBangAeiou = exEachLetter.filter(value => value !== "a" && value !== "e" && value !== "i" && value !== "o" && value !== "u")
            let exLettersAnswer = exBangAeiou.join("")
            return exLettersAnswer
        }
    else {
    return (value) + " is not a string"
    }
}
console.log(extendedNoVowel(notAString1))
console.log(extendedNoVowel(notAString2))
console.log(extendedNoVowel(notAString3))
// --------------------6) Create a function that takes the toonimals array and returns an array with only the toon objects that are cats.
// Expected output: [ { name: "Stimpy", animal: "cat" }, { name: "Scratchy", animal: "cat" }, { name: "Felix", animal: "cat" } ]


var toonimals = [ {name: "Itchy", animal: "mouse"}, {name: "Stimpy", animal: "cat"}, {name: "Daffy", animal: "duck"}, {name: "Scratchy", animal: "cat"}, {name: "Ren", animal: "dog"}, {name: "Felix", animal: "cat"}]

const toonCats = toonimals.filter(value => value.animal === "cat")
console.log(toonCats)

// --------------------7) Using the toonimals variable from #6, create a function that returns only the names of the non-cats.
// Expected output: "Itchy" "Daffy" "Ren"

var toonNotCats = toonimals.filter(value => value.animal !== "cat")
var toonNotCatsNames = toonNotCats.map(value => value.name)

console.log(toonNotCatsNames)
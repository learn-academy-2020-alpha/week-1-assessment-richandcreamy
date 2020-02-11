// ASSESSMENT 1: INTRO TO JAVASCRIPT TESTING WITH JEST
// Coding practical questions

// To set up the testing environment run the following commands in terminal
// $ npm -g install yarn
// $ yarn add jest

// Practice red-green refactor developmentyar
// $ yarn jest


// --------------------1a) Create a test for a function called addThemUp that takes two numbers as arguments and returns the sum.

describe ("addThemUp", () => {
    test ("takes two numbers as arguments and returns the sum", () => {
        expect(addThemUp(2,4)).toEqual(6)
})
})

// --------------------1b) See the test fail. THEN write the code to make the test pass.

const addThemUp = (num1,num2) => {
   let numSum = (num1+num2)
   return numSum
}


// --------------------2a) Create a test for a function called triangleArea that takes the base and the height of a triange and returns the area. The area of a triange is the base times the height divided by two.

describe ("triangleArea", () => {
    test ("triangleArea that takes the base and the height of a triange and returns the area", () => {
        expect(triangleArea(2,4)).toEqual((4))
})
})

// --------------------2b) See the test fail. THEN write the code to make the test pass.

const triangleArea = (base, height) => {
    let answerTriArea = (base*height/2)
    return answerTriArea
}




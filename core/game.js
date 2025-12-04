import input from "analiza-sync";

function askRiddle(riddleObj = Object) {
    console.log(`The riddle name is: ${riddleObj.name}`)
    console.log(`The riddle is: ${riddleObj.taskDescription}`)
    while (true) {
        if (riddleObj.hasOwnProperty("choices")) {
            console.log(riddleObj.choices)
            const answerChoice = input("Enter your choice in numbers ")
            if (answerChoice === String(riddleObj.choices.indexOf(riddleObj.correctAnswer) + 1)) {
                console.log("Correct!")
                break
            } else {
                console.log("Not Correct! Try again")
            }
        } else {
        const answer = input("Enter your answer: ")
        if (answer === riddleObj.correctAnswer) {
            console.log("Correct!")
            break
        } else {
            console.log("Not Correct! Try again")
        }
    }
    } 
}

function measureSolveTime(fn) {
    return Number
}


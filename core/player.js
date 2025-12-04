import calc from "./utills.js"

const createPlayer = (name) => {
    return {
        name: name,
        times: []
    }
}

const addSolveTime = (player = Object, seconds) => player.times.push(seconds)




function showStats(player = Object) {
    const sum = calc.getTotal(player.times)
    console.log(`The total time to solve riddles is: ${sum}`)
    console.log(`The avarage time to solve riddles is: ${calc.getAvarage(player.times, sum)}`)
}


export default { createPlayer, addSolveTime, showStats }
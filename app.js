import input from "analiza-sync";
import riddles from "./riddles/all-riddles.js";
import game from "./core/game.js";
import playerFile from "./core/player.js";

function init(){
    console.log("Welcome to Riddle Game")
    const name = input("Plaese enter your name: ")
    return name    
}


function play(arr=[Object], player=Object){
    for (let i = 0; i < arr.length; i++){
        playerFile.addSolveTime(player, game.measureSolveTime(()=> game.askRiddle(arr[i])))
    }
    console.log("Great Job, you hit the finish line")
    playerFile.showStats(player)
}

play(riddles, playerFile.createPlayer(init()))
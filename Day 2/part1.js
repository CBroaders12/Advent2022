const fs = require('fs');

let data = fs.readFileSync(`${__dirname}\\input.txt`, "utf-8").split("\r\n");

let roundList = data.map((round) => round.replaceAll(/A|X/g, "Rock").replace(/B|Y/g, "Paper").replace(/C|Z/g, "Scissors").split(" "));

let score = 0
for (round of roundList) {
    score += playRound(round[0], round[1]);
}

console.log(score);

function playRound(opponent, me) {
    let score = 0;
    if (opponent === me) score += 3;

    switch (me) {
        case "Rock":
            score += 1;
            if (opponent === "Scissors" ) score += 6; 
            break;
        case "Paper":
            score += 2;
            if (opponent === "Rock" ) score += 6; 
            break;
        case "Scissors":
            score +=3;
            if (opponent === "Paper" ) score += 6; 
            break;
        default:
            break;
    }

    return score;
}
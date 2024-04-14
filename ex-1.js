// Exercise #1: Decrease the Student Scores
let scores = [89, 70, 60, 50, 100, 71];

function decrease10(inputScoresArray){
    let newArray = [];
    for (let i = 0; i < inputScoresArray.length; i++){
        newArray.push(inputScoresArray[i] - 10);
    }
    return newArray
}
let result = decrease10(scores);
console.log(result);

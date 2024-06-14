// 문제 - 사탕사기
function buyCandy(score) {
    let scoreBox = score.split(" ");
    
    let filterdScoreBox = scoreBox.filter((elem, index, arr) => {
        return arr.indexOf(elem) === index;
    })
    filterdScoreBox = filterdScoreBox.sort((a, b) => {
        return b-a;
    })

    let thirdScore = filterdScoreBox[2];

    let result = [];
    for (let value of scoreBox) {
        value >= thirdScore ? result.push(value) : null;
    }

    return result.length;
}
console.log("=================================")
console.log("사탕사기")

console.log(buyCandy("97 86 75 66 55 97 85 97 97 95"));

console.log("=================================")


// 문제 - 문자열속 숨은 문자 찾기

function findStr (str, find) {
    let foundWord = str.indexOf(find);
    console.log(foundWord);
}

console.log("문자찾기");

findStr("pineapple is yummy", "is");

console.log("=================================")

// 문제 - 행렬 곱하기
// 1번 문제 -  DOM 메모리 누수

// 돔의 값이 이미 변수에 할당되었기 때문에 돔이 삭제 되어도 그 값은 남아있습니다.
// 실제 DOM은 삭제되었지만 변수 two 안에는 값이 남아있고 그래서 값이 출력됩니다.
// 수정 방법 : 변수를 함수 안에 넣는다.
// 이렇게 하면 함수가 종료될 때 메모리에 남아있던 변수가 사라지기 때문에 two의 값이 다시 호출되지 않습니다.

function notAct() { // 코드 실행 방지용 함수

// 정답
one.addEventListener("click", function() {
    const one = document.getElementById("one");
    const two = document.getElementById("two");
    two.remove();
    console.log(two);
})

}

// 2번 문제 - 소수 구하기

function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if(n % i === 0)
            return false;
    }
    return true;
}
console.log("2번 문제")
console.log(isPrime(31));
console.log(isPrime(10));
console.log("=================================");


// 3번 문제 - 소인수분해

function primeFactor(n) {
    let arr = [];
    let result = [];
    for (let i = 2; i < n; i++) {
        if(n % i === 0)
            arr.push(i);
    }

    for (let i = 0; i < arr.length; i++) { 
        for(let j = 2; j <= arr[i]; j++) {
            if (arr[i] === j){
                result.push(arr[i]);
            }
            if(arr[i] % j === 0) {
                break;
            }
        }
        
    }
    return result;
}

console.log("3번 문제")

console.log(primeFactor(130));
console.log("=================================");


// 4번 문제 - 십진수를 이진수로 변환

function base10ToString(n) {
    let result = [];
    base10ToStringHelper(n);
    result.push(n%2);

    function base10ToStringHelper(n) {
        if(n !==1) {
            n = parseInt(n/2);
            base10ToStringHelper(n);
            result.push(n%2);
        }
    }
    result = result.join("");
    return Number(result);
}

console.log("4번 문제")
console.log(base10ToString(100));
console.log("=================================");

// 5번 문제 - 배열 출력

function swap(strArr, idx1, idx2) {
    let temp = strArr[i];

}

function permute(strArr, begin, end) {
    
}

function permuteArray(strArr) {
    
}

console.log("5번 문제");
permuteArray(["1", "2", "3"]);
console.log("=================================");






// 6번 문제 - 회문 판별

function isPalindromeRecursive(word) {
    let str = "";
    if(word.length === 1)
        return true;
    let beginPos = 0;
    str = isPalindromeRecursiveHelper(word, beginPos, word.length-1)
    return word === str ? true : false;
}

function isPalindromeRecursiveHelper(word, beginPos, endPos) {
    let temp = "";
    if(beginPos < word.length - 1) {
        temp = isPalindromeRecursiveHelper(word, beginPos+1, endPos-1)
    }
    return temp + word[beginPos];

}


console.log("6번 문제")
console.log(isPalindromeRecursive("appleelppa")) 
console.log(isPalindromeRecursive("appleelpaa")) 
console.log(isPalindromeRecursive("tomato"))
console.log(isPalindromeRecursive("noon"))
console.log("=================================");



// 7번 문제 - 공통항목 찾기

function commonElements(kArray) {
    for (let i = 0; i < kArray.length; i++) {
        const filterdArr = kArray[i].filter((elem, index, arr)=> {
            return arr.indexOf(elem) === index;
        })
        kArray[i] = filterdArr;
    }

    let maxArr = []
    maxArr = kArray[0].length > kArray[1].length ? kArray[0] : kArray[1];
    if(kArray.length > 2) {
        for(let i = 2; i < kArray.length; i++) {
            maxArr = maxArr.length > kArray[i].length ? maxArr : kArray[i];
        }
    }
    let check = false;
    let result = [];

    for (let i = 0; i < maxArr.length; i++) {
        for(let j = 0; j < kArray.length; j++) {
            check = kArray[j].includes(maxArr[i]);
            if(!check) break;
        }
        if(!check) continue;
        result.push(maxArr[i]);
    }
    return result.length === 0 ? "모든 배열에 똑같이 존재하는 값이 없습니다" : result;
}


console.log("7번 문제")

console.log(commonElements([[1, 2, 3],[1,1,1,2,2,3,3,3], [1, 2, 3, 4], [1, 2, 3], [2,3,4,5,6],[2,3,4,5,6]]));
function solution(binomial) {
    var answer = 0;
    let arr = binomial.split(' ');
    let a = Number(arr[0]);
    let b = Number(arr[2]);
    if(arr[1]==="+"){
        answer = a + b;
    } else if (arr[1] === "-"){
        answer = a - b;
    } else if(arr[1] === "*"){
        answer = a * b;
    }
    return answer;
}
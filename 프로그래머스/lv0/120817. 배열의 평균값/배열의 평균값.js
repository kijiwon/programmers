function solution(numbers) {
    var answer = 0;
    for(let i of numbers){
        answer = answer+i;
    }
    let result = answer/numbers.length;
    return result;
}
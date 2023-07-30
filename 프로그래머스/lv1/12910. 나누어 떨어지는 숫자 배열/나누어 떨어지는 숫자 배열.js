function solution(arr, divisor) {
    var answer = [];
    arr = arr.sort((a,b)=>a-b);
    for(let i of arr){
        if(i%divisor===0){
            answer.push(i);
        } 
    }
    if(answer.length<=0){
        return [-1];
    }
    return answer;
}
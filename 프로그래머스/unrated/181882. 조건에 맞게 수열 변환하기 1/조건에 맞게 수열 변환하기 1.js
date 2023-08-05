function solution(arr) {
    var answer = [];
    for(let i of arr){
        if(i>=50 && i%2===0){
            i = i/2;
        } else if(i<50 && i%2 !==0){
            i = i*2;
        } 
        answer.push(i);
    }
    return answer;
}
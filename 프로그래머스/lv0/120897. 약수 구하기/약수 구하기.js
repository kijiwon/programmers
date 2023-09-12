function solution(n) {
    var answer = [];
    for(let i=0; i<=n; i++){
        if(n%i===0){
            if(!answer.includes(i)){
                answer.push(i);
            }
        }
    }
    return answer;
}
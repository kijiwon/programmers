function solution(n) {
    var answer = 0;
    for(let i=0; i<=n; i++){
        if(n%2!==0){
            if(i%2!==0){
                answer +=i;
            }
        } else if(n%2===0){
            if(i%2===0){
                answer +=i*i;
            }
        }
    }
    return answer;
}
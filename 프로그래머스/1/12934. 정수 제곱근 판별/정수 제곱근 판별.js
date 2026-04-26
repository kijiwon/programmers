function solution(n) {
  let answer =0;
    for(let x=1; x**2<=n; x++){
        if(x**2===n){
            answer = (x+1)**2;
        } 
    }
    return answer != 0? answer : -1;
}
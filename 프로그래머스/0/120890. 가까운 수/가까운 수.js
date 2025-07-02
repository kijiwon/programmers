function solution(array, n) {
    var answer = 0;
    let result = Infinity;
    let arr = array.sort((a,b)=> a-b);
    // 절대값 비교
    for(let i of arr){
        if(Math.abs(n-i)<result){
            result = Math.abs(n-i);
            answer = i;
        }
       
    }
    return answer;
}
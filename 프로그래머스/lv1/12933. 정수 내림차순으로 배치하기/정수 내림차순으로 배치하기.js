function solution(n) {
    var answer = '';
    let arr = n.toString().split('').sort((a,b)=>b-a);
    for(let i=0; i<arr.length; i++){
        answer += arr[i]
    }
    return Number(answer);
    
    
}
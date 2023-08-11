function solution(cipher, code) {
    var answer = [];
    for(let i=code; i<cipher.length+1; i++){
        if(i%code===0){
            answer.push(cipher[i-1]);
        }
    }
    return answer.join('');
}
function solution(a, b) {
    let answer1 = parseInt(a.toString()+b.toString());
    let answer2 = parseInt(b.toString()+a.toString());
    if(answer1>answer2){
        return answer1;
    }else{
        return answer2;
    }
}
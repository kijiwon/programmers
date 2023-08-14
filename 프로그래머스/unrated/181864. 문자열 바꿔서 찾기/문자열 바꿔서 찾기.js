function solution(myString, pat) {
    var answer = myString.split('');
    for(let i=0; i<answer.length; i++){
        if(answer[i]==="A"){
            answer[i] = "B";
        } else if(answer[i]==="B"){
            answer[i]="A";
        }
    }
    if(answer.join('').includes(pat))return 1;
    return 0;
}
function solution(s) {
    var answer = '';
    answer = s.split('').sort((a,b)=>{  
       return a==b? 0 : a>b? -1:1;}).join('');
    return answer;
}
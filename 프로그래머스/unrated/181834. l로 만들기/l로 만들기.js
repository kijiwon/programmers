function solution(myString) {
    let arr = myString.split('');
    let answer = '';
    let alpha = ['a','b','c','d','e','f','g','h','i','j','k'];
    
    arr.map((el)=> {
        if(alpha.includes(el)){
            el = 'l'
        };
        answer += el;
    })
    return answer;
}
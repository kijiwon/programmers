function solution(my_string) {
    var answer = [];
    let str = my_string.toUpperCase();
    for(let i=0; i<my_string.length; i++){
        if(my_string[i]===str[i]){
            answer.push(my_string[i].toLowerCase());
        } else{
            answer.push(my_string[i].toUpperCase());
        }
    }
    
    return answer.join('');
}
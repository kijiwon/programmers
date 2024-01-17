function solution(my_string, is_suffix) {
    let answer = 0;
    for(let i=0; i<my_string.length; i++){
        let str = my_string.slice(i);
        if(str===is_suffix){
            answer = 1
        }
    }
    return answer;
}
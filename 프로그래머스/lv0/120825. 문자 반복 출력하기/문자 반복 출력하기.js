function solution(my_string, n) {
    var answer = '';
    let arr = my_string.split('');
    answer = arr.map((el)=> el.repeat(n)).join('');
    return answer;
}
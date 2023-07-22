function solution(my_string) {
    var answer = '';
    let str = 'aeiou'
    let arr = my_string.split('');
    answer = arr.filter((el)=> (!str.includes(el))).join('')
    return answer;
}
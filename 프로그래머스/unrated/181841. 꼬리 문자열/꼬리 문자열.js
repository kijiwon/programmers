function solution(str_list, ex) {
    var answer = [];
    answer = str_list.filter((el)=> !el.includes(ex));
    return answer.join('');
}
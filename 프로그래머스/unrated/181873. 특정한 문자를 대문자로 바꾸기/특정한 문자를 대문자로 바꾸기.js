function solution(my_string, alp) {
    let str = [...my_string].map((el)=> el===alp? el.toUpperCase() : el);
    return str.join('');
}
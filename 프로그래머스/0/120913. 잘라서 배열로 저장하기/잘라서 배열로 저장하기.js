function solution(my_str, n) {
    // 정규표현식
    // return my_str.match(new RegExp(`.{1,${n}}`,'g'));
    let result = [];
    for(let i=0; i<my_str.length; i+=n){ // n만큼 건너뛰기
        result.push(my_str.slice(i, i+n));
    }
    return result;
}

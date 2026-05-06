function solution(x) {
    let arr_str = x.toString().split('');
    let sum = 0;
    for(let i of arr_str){
        sum += Number(i);
    }
    return x%sum === 0? true:false;
}
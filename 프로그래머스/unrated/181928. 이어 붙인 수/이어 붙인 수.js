function solution(num_list) {
    var answer = 0;
    let even = [];
    let odd = [];
    for(let i of num_list){
        if(i%2===0){
            even.push(i);
        } else{
            odd.push(i)
        }
    }
    answer = Number(even.join('')) + Number(odd.join(''));
    return answer;
}
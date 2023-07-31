function solution(num_list) {
    let sum = 0;
    let mul = 1;
    for(let i of num_list){
        sum = sum+i;
        mul = mul*i;
    }
    if(sum*sum >mul) return 1;
    return 0;
}
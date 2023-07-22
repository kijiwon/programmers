function solution(my_string) {
    let newArr = [];
    let arr = my_string.split('');
    for(let i=0; i<arr.length; i++){
        newArr.unshift(arr[i]);
    }
    return newArr.join('');
}
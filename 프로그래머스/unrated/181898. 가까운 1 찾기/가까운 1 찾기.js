function solution(arr, idx) {
    for(let i=idx; i<arr.length; i++){
        let cnt = arr[i];
        if(cnt===1) return i;
    }
    return -1;
}
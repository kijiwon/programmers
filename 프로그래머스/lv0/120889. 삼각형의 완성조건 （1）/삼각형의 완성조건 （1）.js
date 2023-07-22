function solution(sides) {
    let arr = sides.sort();
    if(arr[2]<arr[0]+arr[1]){
        return 1;
    }
    return 2;
}
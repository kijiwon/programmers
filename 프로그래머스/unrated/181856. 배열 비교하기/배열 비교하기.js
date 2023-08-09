function solution(arr1, arr2) {
    if(arr1.length>arr2.length) return 1;
    if(arr1.length<arr2.length) return -1;
    if(arr1.length===arr2.length){
        let sum1 = 0;
        let sum2=0;
        arr1.forEach((el)=>sum1+=el);
        arr2.forEach((el)=> sum2+=el);
        if(sum1>sum2) return 1;
        if(sum1<sum2) return -1;
        if(sum1===sum2) return 0;
        
    }
}
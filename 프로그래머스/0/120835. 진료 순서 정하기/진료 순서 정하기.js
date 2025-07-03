function solution(emergency) {
    var answer = [];
    let arr = emergency.slice().sort((a,b)=>b-a); // 배열 복사 후 내림차순 정렬
   answer = emergency.map(i=> arr.indexOf(i)+1); // 원본 배열의 요소를 arr의 index위치를 가져와 +1
    return answer;
}
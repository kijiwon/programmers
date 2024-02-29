function solution(s) {
    var answer = '';
    // 대문자 < 소문자
    // 큰 -> 작 정렬
    answer = s.split('').sort((a,b)=>{  if (a > b) return -1;
  if (a < b) return 1;
  return 0;}).join('');
    return answer;
}
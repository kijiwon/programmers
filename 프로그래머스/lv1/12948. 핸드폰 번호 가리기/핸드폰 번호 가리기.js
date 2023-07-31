function solution(phone_number) {
    var answer = '';
    // 뒤 4자리를 제외한 숫자는 *로 바꿔줌 + 뒤 4자리만 잘라와서 붙여주기
    answer = phone_number.slice(0,-4).replace(/[0-9]/g,'*') + phone_number.slice(-4);
    return answer;
}
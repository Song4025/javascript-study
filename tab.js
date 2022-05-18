// tab버튼 누르면 해당 div 보여줌
// 좋은 관습 : 반복적인 셀렉터는 변수에 넣어서 쓰기
let button = document.querySelectorAll('.tab-button');
let content = document.querySelectorAll('.tab-content');
let jButton = $('.tab-button');
let jContent = $('.tab-content');
/*
button[0].addEventListener('click', ()=>{
    // 모든버튼에 있던 클래스명 제거 - 자바스크립트로는 요소 하나하나 지워야하기때문에 제이쿼리 사용
    // 만약 곧 죽어도 자바스크립트로 클래스명을 지운다면? 아래 3줄을 입력해줘야함 그래서 소스가 길어져서 그냥 제이쿼리써요.
    // document.querySelectorAll('.tab-button')[0].classList.remove('orange');
    // document.querySelectorAll('.tab-button')[1].classList.remove('orange');
    // document.querySelectorAll('.tab-button')[2].classList.remove('orange');
    jButton.removeClass('orange');
    // 버튼에 orange 클래스명 추가
    button[0].classList.add('orange');
    // 모든 div에 있던 클래스명 제거
    jContent.removeClass('show');
    // div에 show 클래스명 추가
    content[0].classList.add('show');
});

button[1].addEventListener('click', ()=>{
    jButton.removeClass('orange');
    button[1].classList.add('orange');
    jContent.removeClass('show');
    content[1].classList.add('show');
});

button[2].addEventListener('click', ()=>{
    jButton.removeClass('orange');
    button[2].classList.add('orange');
    jContent.removeClass('show');
    content[2].classList.add('show');
});
*/

// 근데 위 코드가 계속 반복되네? 그럼 반복문을 이용해서 코드를 줄여보자.
for(let i = 0; i < jButton.length; i++){
    button[i].addEventListener('click', ()=>{
        jButton.removeClass('orange');
        button[i].classList.add('orange');
        jContent.removeClass('show');
        content[i].classList.add('show');
    });
}


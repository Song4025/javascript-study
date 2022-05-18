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


// 근데 위 코드가 계속 반복되네? 그럼 반복문을 이용해서 코드를 줄여보자.
for(let i = 0; i < jButton.length; i++){
    button[i].addEventListener('click', ()=>{
        jButton.removeClass('orange');
        button[i].classList.add('orange');
        jContent.removeClass('show');
        content[i].classList.add('show');
    });
}

// 재사용성을 위해 함수로 만들어버리자.
for(let i = 0; i < jButton.length; i++){
    button[i].addEventListener('click', ()=>{
        openTab(i);
    });
}

function openTab(p) {
    jButton.removeClass('orange');
    button[p].classList.add('orange');
    jContent.removeClass('show');
    content[p].classList.add('show');
}


// addEventListener를 1개만 쓰게 만들어보자. (이벤트리스너를 사용하면 램을 쓰기때문이다.)
$('.list').click(function(e){
    // if (e.target == document.querySelectorAll('.tab-button')[0] ){
    //     openTab(0);
    // }else if(e.target == document.querySelectorAll('.tab-button')[1] ){
    //     openTab(1);
    // }else if(e.target == document.querySelectorAll('.tab-button')[2] ){
    //     openTab(2);
    // }else if(e.target == document.querySelectorAll('.tab-button')[3] ){
    //     openTab(3);
    // }else if(e.target == document.querySelectorAll('.tab-button')[4] ){
    //     openTab(4);
    // }
    for(let i = 0; i < jButton.length; i++){
        if (e.target == document.querySelectorAll('.tab-button')[i]){
            openTab(i);
        }
    }
});

function openTab(p) {
    jButton.removeClass('orange');
    button[p].classList.add('orange');
    jContent.removeClass('show');
    content[p].classList.add('show');
}
*/

// 문법 : html에 data-작명="값" 을 입력하면 사용자는 볼 수 없는 숨겨진 값을 넣을 수 있음.
// 브라우저콘솔 에서 document.querySelector('.tab-button').dataset.id 하면 찾을 수 있음
$('.list').click(function(e){
    // 지금누른게 버튼 0이면 버튼 0에 orange클래스명 추가 거시기 어쩌구
    // 그런데 만약 data-작명="값"의 문법을 알고있다면?
    // 함수(지금누른 버튼에 숨겨져있는 data-작명);
    openTab(e.target.dataset.id);
    console.log(parseInt(e.target.dataset.id));
});

function openTab(p) {
    jButton.removeClass('orange');
    button[p].classList.add('orange');
    jContent.removeClass('show');
    content[p].classList.add('show');
}

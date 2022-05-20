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


// document.querySelector('.form-select').addEventListener('click', (e) =>{
//     let selected = $('.form-select');
//     // if(e.target.value == '셔츠'){
//     //     selected.eq(1).removeClass('none');
//     // }else{
//     //     selected.eq(1).addClass('none');
//     // }
//     e.target.value == '셔츠'? selected.eq(1).removeClass('none') : selected.eq(1).addClass('none');
// });

//input이벤트 : input의 값이 변경될 때마다 .
$('.form-select').eq(0).on('input' , (e)=>{
    // var value = $('.form-select').eq(0).val(); 여기나 아래나 같아요.
    // let value = this.value; 
    let value = e.currentTarget.value;
    if(value == '셔츠'){
        $('.form-select').eq(1).removeClass('none');
        let 셔츠사이즈 = `<option>사이즈: 90</option>
        <option>사이즈: 100</option>`;
            $('.form-select').eq(1).html(셔츠사이즈);
    }else if(value == '바지'){
        let pants = [28, 30, 32];
        $('.form-select').eq(1).removeClass('none');
        $('.form-select').eq(1).html('');
        pants.forEach((p, i)=>{
            $('.form-select').eq(1).append('<option>사이즈: '+ p +'</option>');
        })
    }
    else{
        $('.form-select').eq(1).addClass('none');
    }
});

// 오브젝트안에 반복문의 값을 다 쓰고싶을때?
let obj = {name: 'yang' , age : 30}
for (let key in obj){
    console.log(obj[key]);
}
// 반복문의 용도 1. 코드반복. 2.array,object데이터 전부 꺼내고 싶을때

// 자바스크립트 html 생성 (성능면으로 추천. 아래보다 2배빠름)
// let a = document.createElement('P');
//     a.innerHTML= '안녕?';
// document.querySelector('#test').appendChild(a);

let 템플릿 = '<p>안녕하세요</p>';
// insertAdjacentHTML(어느위치에추가할지, 추가할문자) : 문자형 html넣어주는 함수 
document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿);
$('#test').append(템플릿);
// 다 갈아치우고싶으면 innerHTML 이지요

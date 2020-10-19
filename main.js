'use strict';

// Make navbar 투명하게 만들건데 올라가면투명 아니면 노랑색
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    console.log(window.scrollY);
    console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight){
        // 스크롤이 내려가게되면 진하게 만들어주는 부분
        navbar.classList.add('navbar--dark');
    }else{
        // 스크롤링이 많이 되지않았으면 navbar--dark를 없애줌
        navbar.classList.remove('navbar--dark');
    }
});





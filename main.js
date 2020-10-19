'use strict';

// Make navbar 투명하게 만들건데 올라가면투명 아니면 노랑색
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;
document.addEventListener('scroll', () => {

    if(window.scrollY > navbarHeight){
        // 스크롤이 내려가게되면 진하게 만들어주는 부분
        navbar.classList.add('navbar--dark');
    }else{
        // 스크롤링이 많이 되지않았으면 navbar--dark를 없애줌
        navbar.classList.remove('navbar--dark');
    }
});

// Handle scrolling when tapping on the navbar menu
const navbarMenu = document.querySelector('.navbar__menu'); //navbar에 있는 메뉴의 요소를 navbarMenu변수에 할당함
navbarMenu.addEventListener('click', (event) => { 
    const target = event.target;    
    const link = target.dataset.link;//클릭시 해당되는거 링크해줌
    if(link == null) {
        return;
    }

    scrollIntoView(link);
});

//Handle click on "contact me" button on home
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () =>{
   scrollIntoView('#contact')
});

// Make home slowly fade to transparent as the window scrolls down
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', () => {
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

//Show "arrow up" button when scrolling down
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight /2) {
        arrowUp.classList.add('visible');
    } else {
        arrowUp.classList.remove('visible');
    }
});

//Handle click on the "arrow up" button
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

// Projects
const workBtnContainer = document.querySelector('.work__categories');
const ProjectContainer = document.querySelector('.work__projects');
const Projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if(filter == null){
        return;
    }

    ProjectContainer.classList.add('anim-out');
    setTimeout(() => {
        Projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter === '*' || filter === project.dataset.type){  // 전부 다 거나 클릭한 필터와 데이터 타입이 매칭하면 보여줘야되니까 안보여주는 
                project.classList.remove('invisible');              // 클래스를 빼고 만약에 타입이 필터랑 동일하지 않으면 안보여줘야 되니까 안보여줘야되는 클래스를 등록해준다 
            }else {
                project.classList.add('invisible');
            }
        });
        ProjectContainer.classList.remove('anim-out');
    }, 300);
});


function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth' });
}
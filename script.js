let menuicon =document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let isclicked=true;

 
menuicon.onclick=()=>{
    menuicon.classList.toggle('bx-x');
    menuicon.classList.toggle('active');
    if(isclicked){
    navbar.style.display="block";
isclicked=false;
    }else{
        navbar.style.display="none";
        isclicked=true;
    }
}






// scroll section  active link
let section=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a')


window.onscroll=()=>{
    sections.forEach(sec =>{
        let top=window.scrollY;
        let offset=sec.offsetTop-150;
        let height=sec.offsetHeight;
        let id=sec.getAttribute('id');
         
        if(yop>=offset && top< offset+height){
                navLinks.forEach(links =>{
                    links.classList.remove('active');
                    document.querySelector('header nav a[href='+ id +']').classList.add('active');

                })
        }
    })
}
/*sticky navbar*/
let header =document.querySelector('header');
header.classList.toggle('sticky',window.scrollY>100);




ScrollReveal({ reset: true,
distance:'80px',
duration:2000,
dealy:1000
});
ScrollReveal().reveal('.home-content, .heading,.myphoto', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-img,.about-content,.portfolio-layer', { origin: 'right' });
ScrollReveal().reveal('.about-img', { origin: 'left' });
/*===toggle icon navbar ===*/
let menuIcon = document.querySelector('.drawer');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');   
    navbar.classList.toggle('active'); 
    console.log("Hello");  
}; 

/*===scroll section active link ===*/
let section = document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav a');

window.onscoll = () => {
    section.forEach(sec => {
        let top =window.scrollY;
        let offset =sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scroll > 100);

    /*===remove toggle icon and navbar when click navbar  link ===*/
    menuIcon.classList.remove('bx-x');   
    narbar.classList.remove('active');  
};

 /*===scroll reveal ===*/
 ScrollReveal({
     reset:true,
     distance:'80px',
     duration:2000,
     delay: 200
});
scrollReveal().reveal('.home-content, .heading',{origin: 'top'});
scrollReveal().reveal('.home-img, .serviced-container, .contact form',{origin: 'bottom'});
scrollReveal().reveal('.home-content h1, .about-img',{origin: 'left'});
scrollReveal().reveal('.home-content p, .about-content',{origin: 'right'});

 /*===typed js ===*/
 const typed = new Typed('multiple-text',{
    strings:['Frontend Developer', 'YouTube','Belogger'],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
 })
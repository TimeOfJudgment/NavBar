const navSlide = () =>{
    const polo = document.querySelector(".polo");
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li')
    

    polo.addEventListener('click' ,()=>{
        nav.classList.toggle('nav-active');


        navLinks.forEach((link, index)=>{
            if(link.style.animation){
                link.style.animation = ''
            } else {
             link.style.animation = `navFade 0.5s ease forwards ${index / 4.5 + 0}s`;
            }

        });
        polo.classList.toggle('toggle')
    });


}

navSlide();
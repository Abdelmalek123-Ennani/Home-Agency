

window.onscroll =  function() {
        
        if (window.scrollY >= 54) {
            document.querySelector('.nav-bar-top').classList.add('fixed');
        }else {
            document.querySelector('.nav-bar-top').classList.remove('fixed');
        }
}




/*jquery just for the class active when I click on one link*/
$(document).ready(function() {
    $('.navbar-nav .nav-item').on('click' , function() {

        $(this).addClass('active').siblings().removeClass('active');
        
    });
})



// the script of the smooth navBar 

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

    });
});
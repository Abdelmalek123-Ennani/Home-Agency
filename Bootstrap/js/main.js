var one  = document.getElementsByClassName('nav-bar')[0].clientHeight,
    two = document.getElementsByClassName('navbar')[0].clientHeight,
    three = document.getElementsByClassName('slider'),
    carouselItem = document.getElementsByClassName('carousel-inner');


three[0].style.height = (window.innerHeight - (one + two)) + 'px';

for (var i=0 ; i<carouselItem[0].childElementCount ; i++){
    carouselItem[0].children[i].style.height = (window.innerHeight - (one + two)) + 'px';
}


/*the buttons of all and ...*/
let childrenIl = Array.from(document.querySelector('.list-unstyled').children);
let holyShit1 = Array.from(document.querySelector('.allImg').firstElementChild.children);
let holyShit2 = Array.from(document.querySelector('.allImg').lastElementChild.children);

console.log(holyShit1 );

childrenIl.filter((x , index) => {
    childrenIl[index].onclick = function(){
        for (var i=0 ; i<childrenIl.length ; i++){
            childrenIl[i].classList.remove('active');
        }
        childrenIl[index].classList.add('active');
        
        if(childrenIl[index].dataset.name === '.All'){
            holyShit1.forEach((x) => {
                x.style.opacity = '1';
            })
            holyShit2.forEach((x) => {
                x.style.opacity = '1';
            })
            
        }else {
            holyShit1.forEach((x) => {
                x.style.opacity = '.3';
            })
            holyShit2.forEach((x) => {
                x.style.opacity = '.3';
            })
            
             document.querySelector(this.dataset.name).parentElement.style.opacity = '1';
            
            
        }
    }
})




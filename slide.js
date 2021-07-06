const slide = document.querySelector('.slide-items');
const Left = document.querySelector('.buttonBack');
const Right = document.querySelector('.buttonNext');

function btnclk() {
    let a = '0';
    return function lft(event) {
        if (event.target.dataset.left){
            if(a > -1100) {
            a=a-405;
            slide.style.transform = `translateX(${a}px)`;
            }
        }
        else if (event.target.dataset.right){
            if (a < -10) {
            a=a+405;
            slide.style.transform = `translateX(${a}px)`;
            }
        }
    }
}

let fLeft = btnclk();

Left.addEventListener('click',fLeft);
Right.addEventListener('click',fLeft);

/*
let timerId = setInterval(fSlide, 2000);

function fSlide (){
    a=0;
    if (a>-1100) {
        a=a-405;
        slide.style.transform = `translateX(${a}px)`;
    }
    else if (a<-10) {
        a=a+405;
        slide.style.transform = `translateX(${a}px)`;
    }
}*/

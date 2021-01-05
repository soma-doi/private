/*
const slide = document.getElementsByClassName('js-slide');

document.getElementById('next-btn').addEventListener('click',function(){
    var active = document.getElementsByClassName('js-active')[0];
    var slideIndex = [].slice.call(slide).indexOf(active);

    active.classList.remove('js-active');
    document.getElementById('prev-btn').style.display = "block";

    if( slideIndex == slide.length -1 ){
        active.classList.add('js-active');
        document.getElementById('next-btn').style.display = "none";
    }else{
        active.nextElementSibling.classList.add('js-active');
    }

    document.getElementsByClassName('js-active').scrollIntoView({
        behavior:"smooth",
        block:"nearest",
        inline:"nearest"
    });
});


document.getElementById('prev-btn').addEventListener('click',function(){
    var active = document.getElementsByClassName('js-active')[0];
    var slideIndex = [].slice.call(slide).indexOf(active);

    active.classList.remove('js-active');
    document.getElementById('next-btn').style.display = "block";

    if( slideIndex == 0 ){
        active.classList.add('js-active');
        document.getElementById('prev-btn').style.display = "none";
    }else{
        active.previousElementSibling.classList.add('js-active');
    }

    document.getElementsByClassName('js-active').scrollIntoView({
        behavior:"smooth",
        block:"nearest",
        inline:"nearest"
    });
});
*/

var slides = document.getElementById("slides");
var num = 0;

document.getElementById('next-btn').addEventListener('click',function(){

    document.getElementById('prev-btn').style.display = "block";

    if(num < slides.children.length -2) {
        slides.children[num+1].scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"nearest"
        });
        num++;
    }else if(num == slides.children.length -2){
        slides.children[num+1].scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"nearest"
        });
        num++;
        document.getElementById('next-btn').style.display = "none";
    }else{
        console.log("eroor");
    }
});

document.getElementById('prev-btn').addEventListener('click',function(){

    document.getElementById('next-btn').style.display = "block";

    if(num-1 > 0) {
        slides.children[num-1].scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"nearest"
        });
        num--;
    }else if(num-1 == 0){
        slides.children[num-1].scrollIntoView({
            behavior:"smooth",
            block:"nearest",
            inline:"nearest"
        });
        num--;
        document.getElementById('prev-btn').style.display = "none";
    }else{
        console.log("error");
    }
});
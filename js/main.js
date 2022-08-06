let slideIndex = 1;
let remaningTime = 70000;

function setTime(){
    if(remaningTime === 0) return;
    let h = Math.floor(remaningTime/3600);
    let m = Math.floor((remaningTime%3600)/60)
    let s = (remaningTime%3600)%60;
    document.querySelector('#hours').innerHTML = h;
    document.querySelector('#minutes').innerHTML = m;
    document.querySelector('#seconds').innerHTML = s;
}

setInterval(() => {
    remaningTime -= 1;
    setTime()
}, 1000);










function setSlide(input , index){
    slideIndex = index;
    let item = document.querySelector(`#${input}`);
    let slides = [...document.querySelector('.sliders').children]
    slides.forEach((element)=>{
        element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
    slideIndex +=1;
    if(slideIndex===4){
        slideIndex=1;
    }
    setSlide(`slide${slideIndex}` , slideIndex)
} , 5000)
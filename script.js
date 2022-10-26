const checker = new IntersectionObserver((entries) => {
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
   });
});
const waveHand = new IntersectionObserver((entries) => {
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.remove('wave');
    }else{
        entry.target.classList.add('wave');
    }
   });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => {
    checker.observe(elem);
});

const hand = document.querySelector(".hand");
waveHand.observe(hand);


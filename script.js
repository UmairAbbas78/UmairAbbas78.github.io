const checker = new IntersectionObserver((entries) => {
   entries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add('show');
    }else{
        entry.target.classList.remove('show');
    }
   });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((elem) => {
    checker.observe(elem);
});
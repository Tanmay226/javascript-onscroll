let section = document.querySelector("section")
let text = document.querySelector(".text")
let inner_text = document.querySelector(".inner-text")

window.addEventListener("scroll", function(){
    let value = window.scrollY;
    // console.log(value);
    text.style.left = 100 - value /5+"%";
    inner_text.style.left = 100 - value /5+"%";
    section.style.clipPath = 'circle('+value+'px at center center)';
})






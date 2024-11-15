
let scrollContainer =  document.querySelector("body main .slider2 .lista ");
let tarjeta = document.querySelector("body .main .slider2 .lista .tarjeta")
let prevBtn = document.getElementById("prevbtn");
let nextBtn = document.getElementById("nextbtn");
let boton = document.querySelectorAll("body main .slider .list .tarjeta button");
let span = document.querySelector("body main .slider .list .tarjeta button span");
scrollContainer.addEventListener("wheel", (evt)=>{
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
})
 nextBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior= "smooth";
    scrollContainer.scrollLeft += 500;
 });
 prevBtn.addEventListener("click",()=>{
    scrollContainer.style.scrollBehavior= "smooth";

    scrollContainer.scrollLeft -= 500;
 });


 
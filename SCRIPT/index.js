
let scrollContainer =  document.querySelector("body main .slider2 .lista ");
let tarjeta = document.querySelector("body .main .slider2 .lista .tarjeta")
let prevBtn = document.getElementById("prevbtn");
let nextBtn = document.getElementById("nextbtn");

let span = document.querySelector("body main .slider .list .tarjeta  button  ");





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


window.addEventListener("load",async()=>{
      let api = await fetch("https://fakestoreapi.com/products")
      let productos = await api.json();
      let tecnologia = document.querySelector("body main .slider .list ")
      productos.forEach(producto => {
          if (producto.category == "electronics"){
            let productoNuevo = document.createElement("div")
            productoNuevo.classList.add("tarjeta");
            productoNuevo.innerHTML= `
                       <a href="">
                           <img src="${producto.image}"
                               alt="">
                           <p class="descripcion">${producto.description}
                           </p>
                           <span class="precio">$${producto.price}</span>
                       </a>
                           <button>
                               <i class="fa-solid fa-cart-shopping"></i>
                               <span>Agregar</span>
                           </button>
             `
            tecnologia.appendChild(productoNuevo);   
          }
      });  
   let botones = document.querySelectorAll("body main .slider .list .tarjeta  button ");
   let ventanaCarrito = document.querySelector ("body header .main-header .main-header-nav .usuario-carrito .ventana-carrito")
   let contadorCarrito = 1;
   botones.forEach((boton)=>{
   boton.addEventListener("click",()=>{
      ventanaCarrito.style.display = "flex";
      ventanaCarrito.innerHTML = contadorCarrito++;
   })
})
})




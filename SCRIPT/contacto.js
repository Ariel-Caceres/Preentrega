
let mail = document.getElementById("inputA")
let contraseña = document.getElementById("inputB")
let confirmarContraseña = document.getElementById("inputC")
let botonEnviar = document.querySelector ("body main .container button")
let passIncorrecto = document.querySelector("body main .container .letrero-incorrecto")
let xs = document.querySelectorAll("body main .container div .fa-regular" )
let singUpMail = document.querySelector("#inputD")
let singUpPass = document.querySelector("#inputF")
let btnSingUp = document.querySelector("#botonSingUp")


botonEnviar.addEventListener("click",()=>{
    let email=(mail.value);
    let pass = (contraseña.value);
    let confPass =(confirmarContraseña.value);
    
    if (pass == confPass){
        if ( email != ""){
            localStorage.setItem("emailUser",email)
            localStorage.setItem("passUser",pass)   
            mail.value = "";
            contraseña.value = "";
            confirmarContraseña.value = "";
            console.log("Se registro con exito")
            alert("Se registro con exito")
            console.log(localStorage.getItem("emailUser"));
            console.log(localStorage.getItem("passUser"));
        }else{
            alert("ingrese mail");
        }
    }else{
        contraseña.classList.add("incorrecto");
        confirmarContraseña.classList.add("incorrecto");
        console.log("la contraseña no councide")
        passIncorrecto.style.display = "flex"
        xs.forEach((x)=>{
            x.style.display = "flex";
            x.addEventListener("click",()=>{
                contraseña.classList.remove("incorrecto");
                confirmarContraseña.classList.remove("incorrecto");
                contraseña.value = "";
                confirmarContraseña.value = "";
                passIncorrecto.style.display = "none";
                xs.forEach(x => {
                    x.style.display = "none";
                });
            })
        })
    };
 })
    btnSingUp.addEventListener("click",()=>{
    const mailUsuario = localStorage.getItem("emailUser")
    const passUsuario = localStorage.getItem("passUser")
    let SUMmail = (singUpMail.value)
    let SUMpass = (singUpPass.value)
    console.log(SUMmail, SUMpass);
    console.log("SUMmail, SUMpass");
    
    if(SUMmail  == mailUsuario && SUMpass == passUsuario){
        console.log("inicio de secion exitosa");
        singUpMail.value = "";
        singUpPass.value = "";
        alert("inicio de secion exitosa");
    }else{
        alert("contraseña incorrecta");
        
    };
         
})


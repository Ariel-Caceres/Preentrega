function getChracters(done) {
    const results = fetch("https://rickandmortyapi.com/api/character")
    results
        .then(response => response.json())
        .then(data => {
            done(data)
        })
        
    }

    getChracters(data => {
        data.results.forEach(personaje => {
            let tarjeta = document.querySelector("body main div")
            let divnuevo = document.createElement("div");
            divnuevo.classList.add("tilin");
            divnuevo.innerHTML=`
                <div>
                <div class="personaje">
                <div class="image-container ">
                <img src="${personaje.image}" alt="">
                </div>
                <span>Nombre:</span>
                <h2>${personaje.name}</h2>
                <span>Estado:</span>
                <span>${personaje.status}</span>
                </div>
                </div>
                `;
                tarjeta.appendChild(divnuevo)   
                              
                console.log(data);
            });
        });





































function getPokemones(done) {
const results = fetch("https://rickandmortyapi.com/api/character")
results
        .then(response => response.json())
        .then(datos => {
         done(datos)
})
                
}
getPokemones(datos => {
                datos.results.forEach(pokemon => {
                    let tarjeta = document.querySelector("body main div")
                    let divnuevo = document.createElement("div");
                    divnuevo.classList.add("tilin");
                    divnuevo.innerHTML=`
                        <div>
                        <div class="pokemon">
                        <div class="image-container ">
                        <img src="${pokemon.image}" alt="">
                        </div>
                        <h2>${pokemon.name}</h2>
                        <span>${pokemon.status}</span>
                        </div>
                        </div>
                        `;
                        tarjeta.appendChild(divnuevo)   
                                      
                        console.log(data);
                    });
                });
        

let contenedorPersonaje = document.querySelector(".contenedorPersonaje");
let contenedorEpisodio = document.querySelector(".contenedorEpisodio");
let templatePersonaje = document.getElementById("templatePersonaje");
let templateEpisodios = document.getElementById("templateEpisodios");
let contentImage = document.querySelector(".contentImagen");
let contentImagen2 = document.querySelector(".contentImagen2");




//PAGINA DE PERSONAJES
document.addEventListener("DOMContentLoaded", async()=>{
    try {
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        let datosPersonaje = await respuesta.json();
        crearCardsPersonaje(datosPersonaje);
    } catch (error) {
        console.log(error);
    }

});
//CREAMOS LAS CARDS DE LOS PERSONAJES
function crearCardsPersonaje(datos){
    let fragment = document.createDocumentFragment();

    datos.results.forEach(element => {
        let clone = templatePersonaje.content.cloneNode(true);
        clone.querySelector(".nombre").textContent = element.name
        clone.querySelector(".specie").textContent = element.species
        clone.querySelector("img").src = element.image
        // console.log(element);
        fragment.appendChild(clone);
    })
    contenedorPersonaje.appendChild(fragment);
    };


    // PAGINA DE EPISODIOS

    contentImage.addEventListener("click", ()=>{
        console.log("me diste click");
    })
    

document.addEventListener("DOMContentLoaded", async()=>{
    try {
        let resp = await fetch("https://rickandmortyapi.com/api/episode");
        let datoEpisodio = await resp.json();
        contentImagen2.innerHTML = "";
        contentImage.innerHTML = "";
        //Pintamos por temporada los episodios
        contentImage.addEventListener("click", ()=>{
            
            // crearCardsEpisode(datoEpisodio);
            mostrarPorTemp1(datoEpisodio);
        })
        contentImagen2.addEventListener("click", ()=>{
            
            mostrarPorTemp2(datoEpisodio);
        })
    }
     catch (error) {
        console.log(error);
    }
})
// CREAMOS LAS CARDS PARA LOS EPISODIOS
function crearCardsEpisode(datos){
    let frag = document.createDocumentFragment();

    datos.results.forEach(element =>{
        let clone = templateEpisodios.content.cloneNode(true);
        clone.querySelector(".numeroDeEpisodio").textContent = element.episode;
        clone.querySelector(".nombreEpisodio").textContent = element.name;
        clone.querySelector(".fechaLanzamiento").textContent = element.air_date
        // console.log(element);
        frag.appendChild(clone);
    })
    contenedorEpisodio.appendChild(frag);
};

//Mostrar los de la temporada 1
function mostrarPorTemp1(datos){
    let fragment = document.createDocumentFragment();
    
    //Guardo en un nuevo arreglo los episodios de la S01 para poder mostrar esos con la funcion startWith
    let temp1 = datos.results.filter(element => {
        return element.episode.startsWith("S01");
    })
    // console.log(typeof(datos.results[0].episode));
    // console.log(temp1);
    temp1.forEach(element =>{
        let clone = templateEpisodios.content.cloneNode(true);
        clone.querySelector(".numeroDeEpisodio").textContent = element.episode;
        clone.querySelector(".nombreEpisodio").textContent = element.name;
        clone.querySelector(".fechaLanzamiento").textContent = element.air_date;
        fragment.appendChild(clone);
    })
    contenedorEpisodio.appendChild(fragment);
}

//mostrar los de la temporada 2
function mostrarPorTemp2(datos){
    let fragment = document.createDocumentFragment();
    //Guardo en un nuevo arreglo los episodios de la S01 para poder mostrar esos con la funcion startWith
    let temp2 = datos.results.filter(element => {
        return element.episode.startsWith("S02");
    })
    // console.log(typeof(datos.results[0].episode));
    // console.log(temp1);
    temp2.forEach(element =>{
        let clone = templateEpisodios.content.cloneNode(true);
        clone.querySelector(".numeroDeEpisodio").textContent = element.episode;
        clone.querySelector(".nombreEpisodio").textContent = element.name;
        clone.querySelector(".fechaLanzamiento").textContent = element.air_date;
        fragment.appendChild(clone);
    })
    contenedorEpisodio.appendChild(fragment);
}

let contenedorPersonaje = document.querySelector(".contenedorPersonaje");
let contenedorEpisodio = document.querySelector(".contenedorEpisodio");
let templatePersonaje = document.getElementById("templatePersonaje");
let templateEpisodios = document.getElementById("templateEpisodios");


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
        clone.querySelector(".lead").textContent = element.species
        clone.querySelector("img").src = element.image
        // console.log(element);
        fragment.appendChild(clone);
    })
    contenedorPersonaje.appendChild(fragment);
    };


    // PAGINA DE EPISODIOS

document.addEventListener("DOMContentLoaded", async()=>{
    try {
        let resp = await fetch("https://rickandmortyapi.com/api/episode");
        let datoEpisodio = await resp.json();
        crearCardsEpisode(datoEpisodio);
    } catch (error) {
        console.log(error);
    }
})
//CREAMOS LAS CARDS PARA LOS EPISODIOS
function crearCardsEpisode(datos){
    let frag = document.createDocumentFragment();

    datos.results.forEach(element =>{
        let clone = templateEpisodios.content.cloneNode(true);
        clone.querySelector(".numeroDeEpisodio").textContent = element.episode;
        clone.querySelector(".nombreEpisodio").textContent = element.name;
        console.log(element);
        frag.appendChild(clone);
    })
    contenedorEpisodio.appendChild(frag);
};


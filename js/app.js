let contenedorPersonaje = document.querySelector(".contenedorPersonaje");
let contenedorEpisodio = document.getElementById("contenedorEpisodio");
let template = document.getElementById("template");
let templateEpisodios = document.getElementById("templateEpisodios");



document.addEventListener("DOMContentLoaded", async()=>{
    try {
        let respuesta = await fetch("https://rickandmortyapi.com/api/character");
        let resp = await fetch("https://rickandmortyapi.com/api/episode");
        let datosPersonaje = await respuesta.json();
        let datoEpisodio = await resp.json();
        console.log(datoEpisodio.results);
        // console.log(datosPersonaje);
        crearCardEpisode(datoEpisodio);
        crearCardsPersonaje(datosPersonaje);
    } catch (error) {
        console.log(error);
    }

})

function crearCardsPersonaje(datos){
    let fragment = document.createDocumentFragment();

    datos.results.forEach(element => {
        let clone = template.content.cloneNode(true);
        clone.querySelector(".nombre").textContent = element.name
        clone.querySelector(".lead").textContent = element.species
        clone.querySelector("img").src = element.image
        fragment.appendChild(clone);
    })
    contenedorPersonaje.appendChild(fragment);
    };

function crearCardEpisode(datos){
    let fragment = document.createDocumentFragment();

    datos.results.forEach(element =>{
        console.log(element);
        let clone = templateEpisodios.content.cloneNode(true);
        clone.querySelector(".numeroDeEpisodio").textContent = element.episode;
        clone.querySelector(".nombreEpisodio").textContent = element.name;

        fragment.appendChild(clone);
    })
    contenedorEpisodio.appendChild(fragment);
}


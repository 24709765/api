let traepersonajes = " ";

async function fetchMovies() {
  const response = await fetch("https://rickandmortyapi.com/api/character")

  const personajes = await response.json();
  traepersonajes = personajes.results;
  myfun(traepersonajes);
}

fetchMovies();

function myfun(traepersonajes) {
  
  const personajes = traepersonajes.map(function (persona) {
    return document.getElementById('rick').innerHTML+=`
    <div class="cartas">
            <img src='${persona.image}' alt="">
            <div class="contenido-cartas">
            <a href=""><h1>${persona.name}</h1></a>
                <p>Last known location:</p>
                <p></p>
                <p>Gender:</p>
                <p></p>
            </div>
        </div>

    `;
  });
 
}




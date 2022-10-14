RadioBtns = document.getElementsByName("Movies");
ListMovieHere = document.getElementById("container");

// Bij het openen van de pagina zijn alle objecten van de movies array te zien

// Om alle films te laten zien heb ik gekozen voor een radio button met All movies

document.addEventListener("DOMContentLoaded", function () {
  ListAllMovies(movies);
});

for (let i of RadioBtns) {
  i.addEventListener("change", function (event) {
    target = event.target;
    selector = target.id;
    HandleOnChangeEvent(target, selector);
  });
}

// Search functie werkt maar is case sensative. Hoe maak ik de waarde van value zowel upper als lower case? 

document.getElementById("searchBar").addEventListener("search", MyFunction);
function MyFunction() {
  let x = document.getElementById("searchBar");
  value = x.value;
  selector = "searchBar";
  HandleOnChangeEvent(selector, value);
}

// Deze handler is voor de verzamelde radio-btns als de search functie

function HandleOnChangeEvent() {
  switch (selector) {
    case "latest":
      ByLatest = movies
        .filter((movies) => movies.year > "2014")
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByLatest);
      console.log(ByLatest);
      break;

    case "Avenger":
      ByAvenger = movies
        .filter((movies) => movies.title.includes("Avengers"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByAvenger);
      console.log(ByAvenger);
      break;

    case "Xmen":
      ByXmen = movies
        .filter((movies) => movies.title.includes("X-Men"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByXmen);
      console.log(ByXmen);
      break;

    case "Princess":
      ByPrincess = movies
        .filter((movies) => movies.title.includes("Princess", "princess"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByPrincess);
      console.log(ByPrincess);
      break;

    case "Batman":
      ByBatMan = movies
        .filter((movies) => movies.title.includes("Batman"))
        .map((movies) => movies);
      ResetAll();
      ListAllMovies(ByBatMan);
      console.log(ByBatMan);
      break;

    case "allMovies":
      ByAllmovies = movies;
      ResetAll();
      ListAllMovies(ByAllmovies);
      console.log(ByAllmovies);
      break;

    case "searchBar":
      BySearchMovies = movies
        .filter(
          (movies) =>
            movies.title.toLowerCase().includes(value.toLowerCase()) +
            movies.year.includes(value) +
            movies.type.includes(value)
        )
        .map((movies) => movies);        
      ResetAll();

      // een if statement zodat er een melding komt "No results found"

      if (BySearchMovies.length == 0) {
        searchBar.value = "No results found";
        console.log(searchBar.value)
        return;
      } else ListAllMovies(BySearchMovies);
      console.log(BySearchMovies);
      break;
  }
}

const ResetAll = function () {
  const nodes = document.getElementById("container").getElementsByTagName("img");
  for (var i = 0, len = nodes.length; i != len; ++i) {
    nodes[0].parentNode.removeChild(nodes[0]);
  }
};

const ListAllMovies = function (movies) {
  movies.forEach((movies) => {
    const ListA = document.createElement("a");
    const ListImg = document.createElement("img");

    // Ik wilde een target_blank toevoegen maar dat is mij niet gelukt.
        
    ListA.href = "https://www.imdb.com/title/" + movies.imdbID ;
    ListA.target = "_blank";
    ListImg.src = movies.poster;
    ListMovieHere.appendChild(ListA);
    ListA.appendChild(ListImg);
  });
};
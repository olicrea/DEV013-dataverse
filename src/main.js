import { sortData, filterData, computeStats, computeStatsScore } from './dataFunctions.js';
import { renderItems, renderItemsStadistics } from './view.js';
import data from './data/dataset.js';
let currentMovies = [...data];

const toggleMovieCards = () => {
  const movieCards = document.querySelector(".cards");
  movieCards.classList.toggle("cards-menu");
}

function renderAndAppendToRoot(data) {
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    const renderedHTML = renderItems(data);
    rootElement.innerHTML = renderedHTML;
  }
}
renderAndAppendToRoot(data);

function renderAndAppendToRootStadistics(data, title, percent) {
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    const renderedHTML = renderItemsStadistics(data, title, percent);
    rootElement.innerHTML = renderedHTML;
  }
}

const resetCardDiv = () => {
  statisticsCountrySelect.selectedIndex = "";
  if (cardDiv) {
    cardDiv.style.display = 'none';
    while (cardDiv.firstChild) {
      cardDiv.removeChild(cardDiv.firstChild);
    }
  }
};

const btnFilterGenre = document.getElementById("genre");
btnFilterGenre.addEventListener("change", (e) => {

  const filterGenre = filterData(data, "genreValue", e.target.value);
  currentMovies = [...filterGenre];
  //console.log("Estoy ordenando por género", filterGenre);
  renderAndAppendToRoot(filterGenre);
  resetCardDiv();
  toggleMovieCards();
}
);


const btnOrdenName = document.getElementById("alfa");
btnOrdenName.addEventListener("change", (e) => {

  const orderedData = sortData(currentMovies, "name", e.target.value);
  currentMovies = [...orderedData];
  //console.log("Estoy ordenando alfabéticamente", orderedData);
  renderAndAppendToRoot(orderedData);
  resetCardDiv();
  toggleMovieCards();
}
);


const btnOrderYear = document.getElementById("year");
btnOrderYear.addEventListener("change", (e) => {

  const orderYear = sortData(currentMovies, "yearMovie", e.target.value);
  currentMovies = [...orderYear];
  //console.log(orderYear);
  renderAndAppendToRoot(orderYear);
  resetCardDiv();
  toggleMovieCards();


}
);

// Este btn limpia los imputs en el menú de selección
const btn = document.querySelector("#btn");

let statisticsCountrySelect = document.querySelector("#statistics-country");
const resetfilters = () => {
  resetCardDiv();

  const genreSelect = document.getElementById("genre");
  const alfaSelect = document.getElementById("alfa");
  const yearSelect = document.getElementById("year");
  const statisticsSelect = document.getElementById("statistics");
  statisticsCountrySelect = document.getElementById("statistics-country");

  if (genreSelect) {
    genreSelect.selectedIndex = "";
  }

  if (alfaSelect) {
    alfaSelect.selectedIndex = "";
  }

  if (yearSelect) {
    yearSelect.selectedIndex = "";
  }

  if (statisticsSelect) {
    statisticsSelect.selectedIndex = "";
  }

  if (statisticsCountrySelect) {
    statisticsCountrySelect.selectedIndex = "";
  }

  currentMovies = [...data];
  renderAndAppendToRoot(data);
  toggleMovieCards();


};
btn.addEventListener("click", resetfilters);


const openMenu = document.querySelector(".open-menu");
let menuOpen = false;
openMenu.addEventListener("click", function () {
  const menuInputs = document.querySelector(".inputs");
  toggleMovieCards();

  if (!menuOpen) {
    menuInputs.style.display = "flex";
    menuOpen = true;
    
  } else {
    menuInputs.style.display = "none";
    menuOpen = false;
  }
});

/*if (!menuOpen) {
  menuInputs.style.display = "flex";
  menuOpen = true;
} setTimeout(function () {
  menuInputs.style.display = "none";
  menuOpen = false;
}, 9000);
});*/

//crear una constante para que en la pantalla no aparezca ninguna tarjeta renderizada
const resetViewport = () => {
  currentMovies = [];
  renderAndAppendToRoot(currentMovies);
};

let cardDiv;
let statistics;
const btnStatistics = document.querySelector("#statistics-country");
btnStatistics.addEventListener("change", () => {
  resetViewport();
  cardDiv = document.createElement("div");
  cardDiv.className = "cards-two";

  if (cardDiv) {
    cardDiv.style.display = 'block'; 
  }
  statistics = computeStats(data);

  // Crear un div para la tarjeta de estadística por países
  //const positionHeader = document.querySelector("#position-header");
  //document.body.insertBefore(cardDiv, positionHeader.nextSibling);

  // Crear un título para la data dentro del div
  const countryTitleParagraph = document.createElement("p");
  countryTitleParagraph.innerHTML = "<strong>Películas tecnológicas por país en la data MovieDev:</strong>";
  cardDiv.appendChild(countryTitleParagraph);

  // Iterar sobre los resultados de computeStats para acumular películas por países
  const keys = Object.keys(statistics);
  for (let i = 0; i < keys.length; i++) {
    const countryMovie = keys[i];
    const countryInfo = statistics[countryMovie];

    // Crear un párrafo para cada país
    const countryInfoParagraph = document.createElement("p");
    countryInfoParagraph.textContent = `${countryMovie}: ${countryInfo.count}`;

    // Añadir el párrafo al div
    cardDiv.appendChild(countryInfoParagraph);
  }
  const inputsElement = document.querySelector(".inputs");

  // Insertar el div después de ".inputs"
  if (inputsElement && inputsElement.parentNode) {
    inputsElement.parentNode.insertBefore(cardDiv, inputsElement.nextSibling);
  }
  currentMovies = [...data];

  // Insertar el div después del primer hijo del body
  //console.log(statistics);
});


let orderData = [];
const selectStadistics = document.querySelector("#statistics");
//const stadisticsButton = document.querySelector("#statistics");
//Función del select Stadistics
//let stadistics = [];
selectStadistics.addEventListener('change', (e) => {
  resetCardDiv();

  orderData = [];
  //btnFilterGenre.setAttribute('disabled', 'true');
  //console.log(e.target.value)
  if (e.target.value === "score50") {
    orderData = computeStatsScore(data);
    //console.log("Data order: " + orderData);
    return renderAndAppendToRootStadistics(orderData.scoreOut50, "Puntuación entre 50% y 70% de aprobación.", orderData.perOut50);
  } else if (e.target.value === "score70") {
    orderData = computeStatsScore(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut70, "Puntuación entre 70% y 90% de aprobación.", orderData.perOut70);
  } else if (e.target.value === "score90") {
    orderData = computeStatsScore(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut90, "Puntuación entre 90% y 100% de aprobación.", orderData.perOut90);
  }
})
/*const estadistica = computeStatsScore(data);

stadisticsButton.addEventListener("click", function () {
  renderAndAppendToRoot(estadistica);
  resetCardDiv();

  //Escuchar click y cambiar display:none/flex
  const elementClick = document.querySelector(".header-icons");
  elementClick.addEventListener("click", function () {
    const elementDiv = document.querySelector(".inputs");
    if (elementDiv.style.display === "none") {
      elementDiv.style.display = "flex";
      //console.log(elementDiv);
    } else {
      elementDiv.style.display = "none";
      //console.log(elementDiv);
    }

  });

  computeStatsScore(data);
  //console.log(estadistica);

});*/

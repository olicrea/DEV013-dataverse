import { sortData, filterData, computeStats, computeStatsScore } from './dataFunctions.js';
import { renderItems, renderItemsStadistics } from './view.js';
import data from './data/dataset.js';
let currentMovies = [...data];


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
    const renderedHTML = renderItemsStadistics(data,title, percent);
    rootElement.innerHTML = renderedHTML;
  }
}


const btnFilterGenre = document.getElementById("genre");
btnFilterGenre.addEventListener("change", (e) => {

  const filterGenre = filterData(data, "genreValue", e.target.value);
  currentMovies = [...filterGenre];
  renderAndAppendToRoot(filterGenre);
  //console.log("Estoy ordenando por género", filterGenre);
}
);


const btnOrdenName = document.getElementById("alfa");
btnOrdenName.addEventListener("change", (e) => {

  const orderedData = sortData(currentMovies, "name", e.target.value);
  currentMovies = [...orderedData];
  // console.log(ordenName);
  renderAndAppendToRoot(orderedData);
  //console.log("Estoy ordenando alfabéticamente", ordenName);
}
);


const btnOrderYear = document.getElementById("year");
btnOrderYear.addEventListener("change", (e) => {

  const orderYear = sortData(currentMovies, "yearMovie", e.target.value);
  currentMovies = [...orderYear];
  renderAndAppendToRoot(orderYear);
  // console.log(ordenYear);
}
);


const btn = document.getElementById("btn");

const resetfilters = () => {
  const genreSelect = document.getElementById("genre");
  const alfaSelect = document.getElementById("alfa");
  const yearSelect = document.getElementById("year");
  const statisticsSelect = document.getElementById("statistics");

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

  const renderedHTML = renderItems(data);
  currentMovies = [...data];
  document.querySelector("#root").innerHTML = renderedHTML;

};
btn.addEventListener("click", resetfilters);


const openMenu = document.querySelector(".open-menu");
let menuOpen = false;
openMenu.addEventListener("click", function () {
  const menuInputs = document.querySelector(".inputs");

  if (!menuOpen) {
    menuInputs.style.display = "flex";
    menuOpen = true;
  } else {
    menuInputs.style.display = "none";
    menuOpen = false;
  }
});


const btnStatistics = document.querySelector("#statistics");
btnStatistics.addEventListener("change", () => {
  const statistics = computeStats(data);

  // Crear un div para la tarjeta de estadística por países
  const cardDiv = document.createElement("div");
  cardDiv.className = "cards-two";
  document.body.appendChild(cardDiv);

  // Crear un título para la data dentro del div
  const countryTitleParagraph = document.createElement("p");
  countryTitleParagraph.textContent = "Películas por país";
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

  console.log(statistics);
});


const selectStadistics = document.querySelector("#statistics");
const stadisticsButton = document.querySelector("#statistics");
//Función del select Stadistics
//let stadistics = [];
let orderData = [];
selectStadistics.addEventListener('change', (e) => {
  //console.log(e.target.value)
  if (e.target.value === "score50") {
    orderData = computeStatsScore(data);
    console.log("Data order: " + orderData);
    return renderAndAppendToRootStadistics(orderData.scoreOut50, "Puntuación Entre 50% y 70% de Aprobación", orderData.perOut50);
  } else if (e.target.value === "score70") {
    orderData = computeStatsScore(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut70, "Puntuación Entre 70% y 90% de Aprobación", orderData.perOut70);
  } else if (e.target.value === "score90") {
    orderData = computeStatsScore(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut90, "Puntuación Entre 90% y 100% de Aprobación", orderData.perOut90);
  }
})
const estadistica = computeStatsScore(data);

stadisticsButton.addEventListener("click", function () {
  renderAndAppendToRoot(estadistica);
  //Escuchar click y cambiar display:none/flex
  const elementClick = document.querySelector(".header-icons");
  elementClick.addEventListener("click", function () {
    const elementDiv = document.querySelector(".inputs");
    if (elementDiv.style.display === "none") {
      elementDiv.style.display = "flex";
      console.log(elementDiv);
    } else {
      elementDiv.style.display = "none";
      console.log(elementDiv);
    }

  });

  computeStatsScore(data);
  console.log(estadistica);

});

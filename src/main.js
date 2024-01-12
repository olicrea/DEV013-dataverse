import { sortData, filterData, sortYear } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';


const renderedHTML = renderItems(data);
//console.log(renderedHTML);
document.querySelector("#root").innerHTML = renderedHTML;

const btnOrdenName = document.getElementById("alfa");
btnOrdenName.addEventListener("change", () => {
  const selectValue = btnOrdenName.value;

  if (selectValue === "asc" || selectValue === "desc") {
    const ordenName = sortData(data, "name", selectValue);
    
    const renderedOrderedData = renderItems(ordenName);
    document.querySelector("#root").innerHTML = renderedOrderedData;
    //console.log("Estoy ordenando alfabéticamente", ordenName);
  }

});

const btnOrderYear = document.getElementById("year");
btnOrderYear.addEventListener("change", () => {
  const selectValue = btnOrderYear.value;

  if (selectValue === "asc" || selectValue === "desc") {
    const ordenYear = sortYear(data, "yearMovie", selectValue);

    const renderedOrderedData = renderItems(ordenYear); 
    document.querySelector("#root").innerHTML = renderedOrderedData;
  }
});

const btnFilterGenre = document.getElementById("genre");
btnFilterGenre.addEventListener("change", () => {
  const selectValue = btnFilterGenre.value;

  if (selectValue === "fiction" || selectValue === "animation" || selectValue === "thriller" || selectValue === "documental" || selectValue === "drama" ) {
    const filterGenre = filterData(data, "genreValue", selectValue);
    
    const renderedOrderedData = renderItems(filterGenre);
    document.querySelector("#root").innerHTML = renderedOrderedData;
    //console.log("Estoy ordenando por género", filterGenre);
  }
});


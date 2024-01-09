
import { ordenAlfaAsc, ordenYearsAsc, ordenAlfaDesc, ordenYearsDes  } from './dataFunctions.js';
import { renderItems, renderFiltThriller, renderMoviesGenre  } from './view.js';


import data from './data/dataset.js';

//console.log(example, renderItems(data), data);
  
const alfaAsc = ordenAlfaAsc(data);
console.log("estoy ordenando A-Z", alfaAsc);

const alfaDes = ordenAlfaDesc(data);
console.log("estoy ordenando Z-A", alfaDes);

const yearsAsc = ordenYearsAsc(data);
console.log("estoy ordenando por años de manera ascendente", yearsAsc);

const yearsDes = ordenYearsDes(data);
console.log("estoy ordenando por años de manera descendente", yearsDes);

const filtThriller = renderFiltThriller(data);
console.log("estoy filtrando por género Thriller", filtThriller);

const renderedHTML = renderItems(data);
console.log(renderedHTML);

const thrillerHtml = renderMoviesGenre (data, "Thriller");
console.log(thrillerHtml);

const documentalHtml = renderMoviesGenre (data, "Documental");
console.log(documentalHtml);

document.querySelector('#root').innerHTML = renderedHTML;
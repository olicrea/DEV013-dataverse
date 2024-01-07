import { ordenAlfaAsc, ordenYearsAsc, ordenAlfaDesc, ordenYearsDes, filtrarThriller } from './dataFunctions.js';
import { renderItems,renderFiltThriller } from './view.js';

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

document.querySelector('#root').innerHTML = renderedHTML;

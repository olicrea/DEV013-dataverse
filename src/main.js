import { ordenAlfaAsc, ordenYearsAsc, ordenAlfaDesc, ordenYearsDes, filterData } from './dataFunctions.js';
import { renderItems } from './view.js';

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

const renderedHTML = renderItems(data);
console.log(renderedHTML);

document.querySelector('#root').innerHTML = renderedHTML;

const filter = document.querySelector('#genre')
filter.addEventListener('change',(e)=>{
  console.log('voy a filtrar por género: ', e.target.value); //verificando "escuchar"
  let datafiltrada = filterData(data,'genreMovie', e.target.value);  // filterData deberia retornar un arreglo con la data filtrada
  console.log('array filtro por genero: ', datafiltrada)
  document.querySelector('#root').innerHTML = renderItems(datafiltrada); // renderizar el arreglo

})

//const selection = document.querySelector('select');
const button = document.querySelector("button")
button.addEventListener("click", function(){
  document.querySelector("select").value="";
})

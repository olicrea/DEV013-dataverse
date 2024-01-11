import { filterData, sortData, computeStats} from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// Lugar de asignación de resultado rendered
const renderedHTML = renderItems(data);
// console.log(renderedHTML);
const rootElement = document.querySelector('#root');
if (rootElement) {
  rootElement.innerHTML = renderedHTML;
}

// Lugar a obtener valor de las opciones
const selectElementYear = document.querySelector("#year");
const selectElementAlfa = document.querySelector("#alfa");

// Escuchar ese evento addEventListener("change", (event) => {}); year/alfa
selectElementYear.addEventListener("change", (e) => {
  console.log('voy a ordednar por año: ', e.target.value);
  const dataOrdenada = sortData(data, "yearMovie", e.target.value);
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    rootElement.innerHTML = renderItems(dataOrdenada);
    console.log('array ordenar por año: ', e.target.value,  dataOrdenada)
  }
});

selectElementAlfa.addEventListener("change", (e) => {
  console.log('voy a filtrar por alfabeto: ', e.target.value);
  const dataOrdenada = sortData(data, "name", e.target.value);
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    rootElement.innerHTML = renderItems(dataOrdenada);
    console.log('array ordenar por nombre: ', e.target.value, dataOrdenada)
  }
});


const filter = document.querySelector('#genre')
filter.addEventListener('change',(e)=>{
  console.log('voy a filtrar por género: ', e.target.value); //verificando "escuchar"
  const datafiltrada = filterData(data,'genreMovie', e.target.value);  // filterData deberia retornar un arreglo con la data filtrada
  console.log('array filtro por genero: ', datafiltrada)
  document.querySelector('#root').innerHTML = renderItems(datafiltrada); // renderizar el arreglo

})

//const selection = document.querySelector('select');
const button = document.querySelector("button")
button.addEventListener("click", function(){
  document.querySelectorAll("select").forEach(unselect =>{
    unselect.value=''
  })
})

const estadistica = computeStats(data)
console.log(estadistica)
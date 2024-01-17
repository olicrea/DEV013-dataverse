import { filterData, sortData, computeStats} from './dataFunctions.js';
import { renderItems, renderItemsStadistics} from './view.js';
import data from './data/dataset.js';

function renderAndAppendToRoot(data) {
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    const renderedHTML = renderItems(data);
    rootElement.innerHTML = renderedHTML;
  }
}

function renderAndAppendToRootStadistics(data, title, percent) {
  const rootElement = document.querySelector('#root');
  if (rootElement) {
    const renderedHTML = renderItemsStadistics(data,title, percent);
    rootElement.innerHTML = renderedHTML;
  }
}

//Renderizado Original En página original con un total de 24 objetos
renderAndAppendToRoot(data);

// Lugar a obtener valor de las opciones
const selectElementYear = document.querySelector("#year");
const selectElementAlfa = document.querySelector("#alfa");
const selectFilter = document.querySelector('#genre')
const selectStadistics = document.querySelector('#stadistics')
const button = document.querySelector('button[data-testid="button-clear"]');

// Array para depositar la data que se filtrará,
let orderData = [];

//Hay tres únicos arrays a ordenar y depositar en orderData[]  Data/Filtrar/Stadistics

// Escuchar ese evento addEventListener("change", (event) => {}); GENERO  Cien/Ficc/Doc/...
selectFilter.addEventListener('change', (e) => {
  // Filtra la data y guarda el resultado en datafiltradaOrdenar[]
  orderData = filterData(data, 'genreValue', e.target.value);
  selectStadistics.setAttribute('disabled', 'true');
  renderAndAppendToRoot(orderData);
});

if (orderData.length === 0) {
  console.log("El arreglo está vacío.");
  orderData = data
}
// Escuchar ese evento addEventListener("change", (event) => {}); YEAR Asc/Des
selectElementYear.addEventListener("change", (e) => {
  //console.log('voy a ordednar por año: ', e.target.value);
  const dataOrdenada = sortData(orderData, "yearMovie", e.target.value);
  renderAndAppendToRoot(dataOrdenada)
  //console.log('array ordenar por año: ', e.target.value,  dataOrdenada)
});

// Escuchar ese evento addEventListener("change", (event) => {}); ALFA Asc/Des
selectElementAlfa.addEventListener("change", (e) => {
  //console.log('voy a filtrar por alfabeto: ', e.target.value);
  const dataOrdenada = sortData(orderData, "name", e.target.value);
  renderAndAppendToRoot(dataOrdenada)
  //console.log('array ordenar por nombre: ', e.target.value, dataOrdenada)
});

 
//Función del select Stadistics
//let stadistics = [];
selectStadistics.addEventListener('change', (e) => {
  orderData = []
  selectFilter.setAttribute('disabled', 'true');
  //console.log(e.target.value)
  if(e.target.value === "score50"){
    orderData = computeStats(data);
    console.log("Data order: "+orderData)
    return renderAndAppendToRootStadistics(orderData.scoreOut50,"Puntuación Entre 50% y 70% de Aprobación", orderData.perOut50);
  } else if(e.target.value === "score70"){
    orderData = computeStats(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut70,"Puntuación Entre 70% y 90% de Aprobación", orderData.perOut70);
  } else if(e.target.value === "score90"){
    orderData = computeStats(data);
    return renderAndAppendToRootStadistics(orderData.scoreOut90,"Puntuación Entre 90% y 100% de Aprobación", orderData.perOut90);
  } 
})


//Función del botón para limpiar los select
button.addEventListener("click", function(){
  document.querySelectorAll("select").forEach(unselect =>{
    unselect.value='a'
    selectFilter.removeAttribute('disabled');
    selectStadistics.removeAttribute('disabled');
    orderData=[];
  })
  renderAndAppendToRoot(data)
})

//Escuchar click y cambiar display:none/flex
const elementClick = document.querySelector(".header-icons")
elementClick.addEventListener("click", function(){
  const elementDiv = document.querySelector(".inputs");
  if(elementDiv.style.display==="none"){
    elementDiv.style.display="flex"
    console.log(elementDiv)
  }else{
    elementDiv.style.display="none"
    console.log(elementDiv)
  }

})


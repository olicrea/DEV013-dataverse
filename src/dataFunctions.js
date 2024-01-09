// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//import { data } from "../test/data";

export const ordenAlfaAsc = (array) => {
  const copyArray = [...array];
  return copyArray.sort((a,b) => a.name.localeCompare(b.name));
};

export const ordenAlfaDesc = (array) => {
  const copyArray = [...array];
  return copyArray.sort((a, b) => b.name.localeCompare(a.name));
};

export const ordenYearsAsc = (array) => {
  const copyArray = [...array];
  return copyArray.sort((a,b) => a.facts.yearMovie - b.facts.yearMovie);
};

export const ordenYearsDes = (array) => {
  const copyArray = [...array]
  return copyArray.sort((a,b)=> b.facts.yearMovie - a.facts.yearMovie);
};

export const filterData = (data, filterBy, value) => {
  /*filterData(data, filterBy, value): esta función recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar. El tercer parámetro, value, indica el valor de campo que queremos filtrar.*/

  const filterMovie = data.filter(film => film.facts[filterBy] === value);  //Accediendo a la propiedad 'genreMovie' de manera dinámica usando la notación de corchetes
  // return filterMovie
  //Pasar el renderizado al view.js
  return filterMovie;
};

/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada, esta función debe usar el método reduce.*/



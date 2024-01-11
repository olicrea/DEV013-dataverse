// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  /*filterData(data, filterBy, value): esta función recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, filterBy, nos dice con respecto a cuál de los campos de la data se quiere filtrar. El tercer parámetro, value, indica el valor de campo que queremos filtrar.*/

  const filterMovie = data.filter(film => film.facts[filterBy] === value);  //Accediendo a la propiedad 'genreMovie' de manera dinámica usando la notación de corchetes
  // return filterMovie
  //Pasar el renderizado al view.js
  return filterMovie;
};

/*sortData(data, sortBy, sortOrder): esta función sort u ordenar recibe tres parámetros. El primer parámetro, data, nos entrega los datos. El segundo parámetro, sortBy, nos dice con respecto a cuál de los campos de la data se quiere ordenar. El tercer parámetro, sortOrder, indica si se quiere ordenar de manera ascendente o descendente.

computeStats(data): la función compute o calcular, nos permitirá hacer cálculos estadísticos básicos para ser mostrados de acuerdo a la data proporcionada, esta función debe usar el método reduce.*/



export const sortData = (data, sortBy, sortOrder) => {
  const sortedData = data.sort((a, b) => {
    if (sortOrder === "asc") {
      if (typeof a.facts[sortBy] === 'number') {
        return a.facts[sortBy] - b.facts[sortBy];
      } else {
        return String(a[sortBy]).localeCompare(String(b[sortBy]));
      }
    } else {
      if (typeof a.facts[sortBy] === 'number') {
        return b.facts[sortBy] - a.facts[sortBy];
      } else {
        return String(b[sortBy]).localeCompare(String(a[sortBy]));
      }
    }
  });

  return sortedData;
};

export const computeStats = (data) => {
  //  Quitar porcentaje en score   data.extraInfo.rottenTomatoesScore
  const scoreWithoutPerc = data.map((film) => parseFloat(film.extraInfo.rottenTomatoesScore));
  //Tres array filtrado de acuerdo
  const scoreOut50 = scoreWithoutPerc.filter((film) => {
    return 50 <= film && film < 70;
  });
  const scoreOut70 = scoreWithoutPerc.filter((film) => {
    return 70 <= film && film < 90;
  });
  const scoreOut90 = scoreWithoutPerc.filter((film) => {
    return 90 <= film && film <= 100;
  });
  console.log("muestro array sobre 90: "+ scoreOut90)


  const perOut50 = Math.round(((scoreOut50.length)*100)/data.length);
  console.log(perOut50)
  const perOut70 = Math.round((scoreOut70.length * 100) / data.length);
  console.log(perOut70)
  const perOut90 = Math.round((scoreOut90.length * 100) / data.length);
  console.log(perOut90)
  return {
    scoreOut50
    //scoreOut70,
    //scoreOut90,
  };
}




// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

export const filterData = (data, filterBy, value) => {
  const filterMovie = data.filter(film => film.facts[filterBy] === value); 
  return filterMovie;
};

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
/*
export const computeStats = (data) => {
  //  Quitar porcentaje en score   data.extraInfo.rottenTomatoesScore
  const scoreWithoutPerc = data.map((film) => parseFloat(film.extraInfo.rottenTomatoesScore));
  
  const scoreOut50 = scoreWithoutPerc.filter((film) => {
    return 50 <= film && film < 70;
  });
  console.log("muestro array sobre 50: "+ scoreOut50)
  //console.log("array de pelis con puntajw mayor a 50 y menor 70: "+ scoreOut50 );
  console.log(typeof(scoreOut50))

  const scoreOut70 = scoreWithoutPerc.filter((film) => {
    return 70 <= film && film < 90;
  });
  console.log("muestro array sobre 70: "+ scoreOut70)
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
    //scoreOut50
    scoreOut70,
    //scoreOut90,
  };
}*/

export const computeStatsScore = (data) => {
  //  Quitar porcentaje en score   data.extraInfo.rottenTomatoesScore
  const scoreOut50 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore); 
    return 50 <= score && score < 70;
  });

  //console.log("Array de películas con puntaje mayor a 50 y menor a 70:");
  //console.log(scoreOut50);

  const scoreOut70 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore);
    return 70 <= score && score < 90;
  });

  //console.log("Array de películas con puntaje mayor a 70 y menor a 90:");
  //console.log(scoreOut70);

  const scoreOut90 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore);
    return 90 <= score && score <= 100;
  });

  //console.log("Array de películas con puntaje mayor o igual a 90 y menor o igual a 100:");
  //console.log(scoreOut90);

  const perOut50 = Math.round((scoreOut50.length * 100) / data.length);
  //console.log("Porcentaje de películas con puntaje mayor a 50 y menor a 70:");
  //console.log(perOut50);

  const perOut70 = Math.round((scoreOut70.length * 100) / data.length);
  //console.log("Porcentaje de películas con puntaje mayor a 70 y menor a 90:");
  //console.log(perOut70);

  const perOut90 = Math.round((scoreOut90.length * 100) / data.length);
  //console.log("Porcentaje de películas con puntaje mayor o igual a 90 y menor o igual a 100:");
  //console.log(perOut90);

  return {
    scoreOut50,
    scoreOut70,
    scoreOut90,
    perOut50,
    perOut70,
    perOut90
  };
};

export const computeStats = (data) => {
  const countryFrequencies = data.map((movie) => {
    const country = movie.extraInfo.countryMovie;
    const name = movie.name;
    
    return {
      country,
      movieName: name,
    };
  });
  const countryFrequency = countryFrequencies.reduce((acumulador, movie) => {
    const country = movie.country;
    // Verificar si el país ya está en el acumulador
    if (!acumulador[country]) {
      acumulador[country] = {
        count: 0,
        movies: []
      };
    }
    // Incrementar la frecuencia y agregar la película a la lista
    acumulador[country].count += 1;
    acumulador[country].movies.push(movie.movieName);
    return acumulador;
  }, {});
  // Devolver la frecuencia de películas por país directamente
  return countryFrequency;
};







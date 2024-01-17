
export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(film => film.facts[filterBy] === value);
  return filteredData;
};


export const sortData = (data, sortBy, sortOrder) => {
  //console.log(sortBy);
  const copyArray = [...data];
  if (sortBy === "name") {
    return copyArray.sort((a, b) => (sortOrder === "asc" ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy])));
  } else if (sortBy === "yearMovie") {
    return copyArray.sort((a, b) => (sortOrder === "asc" ? a.facts[sortBy] - b.facts[sortBy] : b.facts[sortBy] - a.facts[sortBy]));
  }
};


//Función para calcular frecuencia de países.
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
    acumulador[country].movies.push(name);

    return acumulador;
  }, {});

  // Devolver la frecuencia de películas por país directamente
  return countryFrequency;
};

export const computeStatsScore = (data) => {
  //  Quitar porcentaje en score   data.extraInfo.rottenTomatoesScore
  const scoreOut50 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore);
    return 50 <= score && score < 70;
  });

  console.log("Array de películas con puntaje mayor a 50 y menor a 70:");
  console.log(scoreOut50);

  const scoreOut70 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore);
    return 70 <= score && score < 90;
  });

  console.log("Array de películas con puntaje mayor a 70 y menor a 90:");
  console.log(scoreOut70);

  const scoreOut90 = data.filter((film) => {
    const score = parseFloat(film.extraInfo.rottenTomatoesScore);
    return 90 <= score && score <= 100;
  });

  console.log("Array de películas con puntaje mayor o igual a 90 y menor o igual a 100:");
  console.log(scoreOut90);

  const perOut50 = Math.round((scoreOut50.length * 100) / data.length);
  console.log("Porcentaje de películas con puntaje mayor a 50 y menor a 70:");
  console.log(perOut50);

  const perOut70 = Math.round((scoreOut70.length * 100) / data.length);
  console.log("Porcentaje de películas con puntaje mayor a 70 y menor a 90:");
  console.log(perOut70);

  const perOut90 = Math.round((scoreOut90.length * 100) / data.length);
  console.log("Porcentaje de películas con puntaje mayor o igual a 90 y menor o igual a 100:");
  console.log(perOut90);

  return {
    scoreOut50,
    scoreOut70,
    scoreOut90,
    perOut50,
    perOut70,
    perOut90
  };
};



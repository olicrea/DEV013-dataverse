//import data from "./data/dataset";

export const renderItems = (data) => {
  //console.log(data)
  let html = '';
  data.forEach(function (film) { 
    html += `<li class="uno" itemscope itemtype="movie">
              <dl>
                <img src="${film.imageUrl}" alt="Imagen de la película ${film.name}"/>
                <dt></dt><dd itemprop="name">${film.name}</dd>
                <dt></dt><dd itemprop="shortDescription">${film.shortDescription}</dd>
                <dt></dt><dd itemprop="genreMovie">${film.facts.genreMovie}</dd>

              </dl>
              </li>`
  });

  html = '<ul>' + html + '</ul>';
  return html;
};

export const renderFiltThriller = (data) => {
  
  //obtener un nuevo renderizado con películas de género de Thriller 
  //1o búsqueda de coincidencias en genero
  //2o agregarle estructura microdatos en HTML
  //3o retornar el arreglo
  let html = '';
  data.forEach(function (film) { 
    if(film.facts.genreMovie === "Thriller"){
      //arrayThriller.push(film);
      html += `<li class="dos" itemscope itemtype="movie">
                  <dl>
                    <img src="${film.imageUrl}" alt=${film.name} />
                    <dt></dt><dd itemprop="name">${film.name}</dd>
                    <dt></dt><dd itemprop="shortDescription">${film.shortDescription}</dd>
                    <dt></dt><dd itemprop="yearMovie">${film.facts.yearMovie}</dd>

                  </dl>
                </li>`
    }
  });
  html = '<ul>' + html + '</ul>';
  return html
};
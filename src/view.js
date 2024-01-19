//import data from "./data/dataset";


export const renderItems = (data) => {
  //console.log(data)
  let html = '';
  data.forEach(function (film) { 
    html += `<li class="cards" itemscope itemtype="movie">
              <dl>
                <img src="${film.imageUrl}" alt=Imagen de la película: ${film.name} />
                <dt></dt><dd class="name-movie" itemprop="name"><strong>${film.name}</strong></dd>
                <dt></dt><dd class="year-movie" itemprop="yearMovie"><strong>(${film.facts.yearMovie})</strong></dd>
                <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
                <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>

              </dl>
              </li>`
  });

  html = '<ul>' + html + '</ul>';
  return html;
};

export const renderItemsStadistics = (data,title,percent) => {
  let html = '';
  data.forEach(function (film) { 
    html += `
              <li class="cards" itemscope itemtype="movie">
              <dl>
                <img src="${film.imageUrl}" alt=${film.name} />
                <dt></dt><dd class="tittle" itemprop="name"><strong>${film.name}</strong></dd>
                <dt></dt><dd class="tittle" itemprop="year"><strong>(${film.facts.yearMovie})</strong></dd>
                <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
                <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>
                <dt></dt><dd itemprop="rottenTomatoesScore"><strong>Puntuación: </strong>${film.extraInfo.rottenTomatoesScore}</dd>
              </dl>
              </li>`
  });

  html = `<h2>${title}</h2>
          <h4>Estas películas representan el ${percent}% de la data de MovieDev:</h4> 
            <ul>${html}</ul>`;
  return html;
};
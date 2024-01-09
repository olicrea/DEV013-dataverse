//import data from "./data/dataset";


export const renderItems = (data) => {
  //console.log(data)
  let html = '';
  data.forEach(function (film) { 
    html += `<li class="cards" itemscope itemtype="movie">
              <dl>
                <img src="${film.imageUrl}" alt=${film.name} />
                <dt></dt><dd class="tittle" itemprop="name"><strong>${film.name}</strong></dd>
                <dt></dt><dd class= "info-movie" itemprop="shortDescription">${film.shortDescription}</dd>
                <dt></dt><dd itemprop="genreMovie"><strong>Género: </strong>${film.facts.genreMovie}</dd>

              </dl>
              </li>`
  });

  html = '<ul>' + html + '</ul>';
  return html;
};
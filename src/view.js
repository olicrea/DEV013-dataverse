//import data from "./data/dataset";


export const renderItems = (data) => {
  //console.log(data)
  let html = '';
  data.forEach(function (film) { 
    html += `<li itemscope itemtype="movie">
              <dl>
                <img src="${film.imageUrl}" alt=${film.name} />
                <dt></dt><dd itemprop="name"><strong>${film.name}</strong></dd>
                <dt></dt><dd itemprop="shortDescription">${film.shortDescription}</dd>
                <dt></dt><dd itemprop="yearMovie">${film.facts.yearMovie}</dd>

              </dl>
              </li>`
  });

  html = '<ul>' + html + '</ul>';
  return html;
};

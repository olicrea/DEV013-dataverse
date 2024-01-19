import { filterData, sortData, computeStats, computeStatsScore } from '../src/dataFunctions.js';
import { data } from './data.js';

console.log(data);

describe('filterData', () => {

  it('verifica si data es un arreglo, si es así regresa true', () => {
    expect(Array.isArray(data)).toBe(true);
  });

  it('si data  es un arreglo y filterBy es "genreValue" y value es "thriller" debo recibir un arreglo con la propiedad name: "Hackers" ', () => {
    expect(filterData(data, "genreValue", "thriller")[0]).toHaveProperty("name", "Hackers");
  });

  it('si data  es un arreglo y filterBy es "name" y value es carlos debo recibir un arreglo con la propiedad name  = carlos ', () => {
    expect(filterData(data)).toEqual([{name:"Short Circuit"}]);
  });

  it('si data  es un arreglo y filterBy es "name" y value es carlos debo recibir un arreglo con la propiedad name  = carlos ', () => {
    expect(filterData([{name:"carlos"}, {name:"olimar"}], 'name', 'carlos')).toEqual([{name:"carlos"}]);
  });
});

describe('sortData', () => {

  it('returns `anotherExample`', () => {
    expect(sortData(data)).toBe('OMG');
  });
});

describe('computeStats', () => {

  it('returns `anotherExample`', () => {
    expect(computeStats(data)).toBe('OMG');
  });
});

describe('computeStatsScore', () => {

  it('returns `anotherExample`', () => {
    expect(computeStatsScore(data)).toBe('OMG');
  });
});

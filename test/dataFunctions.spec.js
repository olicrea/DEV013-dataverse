import { filterData, sortData, computeStats, computeStatsScore } from '../src/dataFunctions.js';
import { data } from './data.js';

console.log(data);

describe('filterData', () => {

  it('si portionData no es un arreglo regresa vacío `', () => {
    expect(filterData(data)).toEqual([]);
  });

  it('si data  es un arreglo y filterBy es "name" y value es carlos debo recibir un arreglo con la propiedad name  = carlos ', () => {
    expect(filterData([{name:"carlos"}, {name:"olimar"}], 'name', 'carlos')).toEqual([{name:"carlos"}]);
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

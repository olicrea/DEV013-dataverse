// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//import { data } from "../test/data";

export const ordenAlfaAsc = (array) => {
  const copyArray = [...array];
  return copyArray.sort((a,b) => a.name.localeCompare(b.name));
};

export const ordenYearsAsc = (array) => {
  const copyArray = [...array];
  return copyArray.sort((a,b) => a.facts.yearMovie - b.facts.yearMovie);
};
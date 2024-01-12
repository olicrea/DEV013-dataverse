// Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

//import { data } from "../test/data";

export const filterData = (data, filterBy, value) => {
  const filteredData = data.filter(genreValue => genreValue.facts[filterBy] === value);
  return filteredData;
};

export const sortData = (data, sortBy, sortOrder) => {
  const copyArray = [...data];
  return copyArray.sort((a, b) => (sortOrder === "asc" ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy])));
};

export const sortYear = (data, sortBy, sortOrder) => {
  const copyArray = [...data];
  return copyArray.sort((a, b) => (sortOrder === "asc" ? a.facts[sortBy] - b.facts[sortBy] : b.facts[sortBy] - a.facts[sortBy]));
};

/*export const sortData = (data, sortBy, sortOrder) => {
    const copyArray = [...data];
    if (sortBy === "name") {
      return copyArray.sort((a, b) => (sortOrder === "asc" ? a[sortBy].localeCompare(b[sortBy]) : b[sortBy].localeCompare(a[sortBy])));
    } else if (sortBy === "year") {
      return copyArray.sort((a, b) => (sortOrder === "asc" ? a.facts[sortBy] - b.facts[sortBy] : b.facts[sortBy] - a.facts[sortBy]));
    }
  };*/
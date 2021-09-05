const fs = require("fs");

var pelisTipoJSON = fs.readFileSync("pelis.json").toString();
//allFilms pasa a ser un Array de Objetos
const allFilms = JSON.parse(pelisTipoJSON);

//Esta funcion retorna todo el Array de objeto
const getAll = () => {
  return allFilms;
};

//Esta funcion ordena el Array de peliculas
//en base a su valor UNICODE
const sortValue = (value) => {
  var datos = getAll();

  const result = datos.sort(function (a, b) {
    if (a[value] > b[value]) {
      return 1;
    }
    if (a[value] < b[value]) {
      return -1;
    }
    return 0;
  });
  return result;
};

//Value es el valor de la Key(tag)
const tagValue = (value) => {
  var datos = getAll();

  const result = datos.filter((r) => r.tags.includes(value));
  return result;
};

//Devuelve un nuevo Array ya sea que Value
//este incluido en "title" or "tags"
const searchValue = (value) => {
  var datos = getAll();
  const result = datos.filter(function (item) {
    return item.title.includes(value);
  });

  return result;
};

const direccionarPorKey = (item) => {
  var resultado = getAll();

  if (item.sort) {
    resultado = sortValue(item.sort);
  }
  if (item.search) {
    resultado = searchValue(item.search);
  }
  if (item.tag) {
    resultado = tagValue(item.tag);
  }
  if (Object.keys(item).includes("no-format")) {
    return (resultado = JSON.stringify(resultado));
  }

  return resultado;
};

exports.direccionarPorKey = direccionarPorKey;

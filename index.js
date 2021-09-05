const pelis = require("./pelis");

//Trasnforma en objeto al Inputs de entrada
const asignarInputs = (argv) => {
  const respuesta = {};

  argv.forEach(function (item, ind) {
    if (item.startsWith("--")) {
      const itemSinGuiones = item.slice(2); //Se le quitan -- a los inputs
      respuesta[itemSinGuiones] = argv[ind + 1]; //Se le asigna el siguiente valor al parametro anterior
    }
  });

  return respuesta;
};

function main() {
  const inputArray = asignarInputs(process.argv.slice(2));
  const resultado = pelis.direccionarPorKey(inputArray);
  console.table(resultado);
}
main();

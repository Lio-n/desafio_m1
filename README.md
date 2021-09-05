## Condiciones

La aplicación tiene que recibir argumentos a través de la terminal y mostrar un listado de películas en el formato que quieras.

## Arquitectura

Los archivos deben tener estos nombres:

### **index.js**

- Recibe argumentos, los procesa y delega las acciones a pelis.js.

### **pelis.json**

- Tiene los datos de las películas.
- Es una colección (array de objetos).

### **pelis.js**

- Tiene que leer el archivo JSON y exponer funciones para interactuar con los datos.

## Escenarios posibles

- Si no le pasás ningún argumento, la aplicación tiene que devolver todas las películas.

### **node index.js --sort {nombre de la propiedad}**

- El argumento --sort debe ordenar la salida en base a ese parámetro
  (ej: node index.js --sort title devuelve las películas en orden alfabético basándose en su título)

### **node index.js --search {searchCriteria}**

- El argumento --search debe devolver las películas que tienen el texto del argumento (ej: node index.js --search magic debería devolver las películas que tengan la palabra "magic" en su titulo).

### **node index.js --tag {searchCriteria}**

- Si le pasás el argumento --tag debe devolver las películas que tienen ese tag
  (ej: node index.js --tag accion debería devolver las películas que tengan el tag acción.)

- Si le pasás el parámetro --no-format debería devolver el JSON completo de la respuesta.

## Todos los argumentos se pueden combinar

- **node index.js --tag accion --sort rating --search x --no-format**

Este comando devuelve las películas que tengan el tag terror, al menos una "r" en su título, ordenadas alfabéticamente y en formato JSON.

- **node index.js --tag accion --sort rating --no-format**

Este comando tiene que devolver las películas que tengan el tag accion, ordenadas por rating y en formato JSON.

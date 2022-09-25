# Dificultades encontradas

Al realizar el proyecto, se han encontrado diversas situaciones adversas. Un ejemplo lo podríamos encontrar en los filtros: se deben de mantener dos listas, una con los elementos filtrados y otra con todos los elementos y a su vez una lista con todos los filtros siendo este no necesario. Esta última lista (la de filtros) aportaba una solución bastante completa, ya que se han diseñado filtros genéricos, de esta forma, se podrían añadir nuevas columnas y sus filtros concretos.

La maquetación debido a la "responsividad" aporta cierta dificultad, sobre todo tratando con tablas ya que en móviles no se puede ver una gran cantidad de información a la vez, a su vez afectando a la experiencia de usuario. Más adelante hablaremos de una mejora con respecto a este punto.

No se han mostrado diseños del visualizar empleado y del añadir empleado.

# Mejoras aportadas

- Los salarios aportados en el JSON no se encuentran relacionados con los que aparecen en el diseño, por lo que se han multiplicado a la cantidad de meses que hay en un año simulando así el salario anual.
- En el diseño no se muestra ningún botón para eliminar filtro, por lo que se ha añadido un botón "Reiniciar" para eliminar todos los filtros puestos.
- Tampoco es mostrado en el diseño un mensaje cuando el filtro no concreta ninguno de los empleados existentes, por lo que se ha añadido.
- Los botones se han incrementado en tamaño debido a que el usuario en un entorno "mobile" ha de poder hacer "tap" correctamente en los distintos botones. Esto lo podemos ver más concretamente en la paginación.
- Despliegues automáticos utilizando Render(https://render.com/).

# Mejoras por aplicar

- Dado que se trata de un diseño "Mobile first" sólo se han aplicado estilados para la responsividad y por tanto se podría realizar un diseño más relacionado al entorno web de escritorio.
- Otra posible mejora que se podría realizar sería la aparición de unos componentes que facilitasen el borrado de filtros uno a uno, esto se encuentra preparado, ya que se podría eliminar un filtro en concreto, sin embargo, no se ha creado componente para ello.
- Añadir un sistema "Toast" que aporte feedback al usuario de: eliminar empleado, añadir empleado, error en la introducción de datos.
- Control de errores del usuario en formulario de creación de empleado.

# Metodologías y tecnologías utilizadas

BEM: Metodología para la nomenclatura de los distintos elementos css.
"kebap-casing": Nomenclatura para los ficheros.
Typescript: Otorga tipado estático para las variables dando errores en el propio editor.
Sass: Procesador css que otorga facilidades a la hora de realizar la nomenclatura de las distintas clases.
Testing library y Jest.
Git.
Render: aplicativo para realizar los despliegues integrados en el flujo de git.

# Como ponerlo en funcionamiento

Se ha de tener instalado "node" y para ponerlo en funcionamiento.

- Modo desarrollo:

  - Instalar los paquetes con el comando "npm install".
  - Ejecutar en modo desarrollo el proyecto con "npm run start".

- Modo producción:

  - Instalar los paquetes con el comando "npm install".
  - Generar los estáticos con "npm run build".
  - Subir los estáticos del directorio "build" generados por el comando anterior.

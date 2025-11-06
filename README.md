# IV
Trabajo de la asignatura de Infraestructura Virtual
## MatriculaT
### Descripción del problema
Soy un estudiante de la universidad de Granada y he tenido que estar un día entero para cuadrar mis asignaturas a la hora de hacer la matrícula. Y es que surgen muchos problemas: coinciden las horas de asignaturas, encontrar los subgrupos que mejor me vengan, buscar las asignaturas de mi mención y para estudiantes de doble grado saber si tienes clase en facultades distintas. Todos estos problemas tengo que solucionarlos atendiendo a muchas condiciones y a veces hasta se elige la opción menos eficiente (dejar asignaturas u horarios con mucha carga un mismo día).

### [Ver archivo de configuración](config_git/documentacion.md)

### [Ver archivo de historias de usuario](docs/HU.md)

Tras un estudio del problema del usuario y las necesidades que pueden presentar, se han escrito distintas historias de usuario. Cada historia de usuario consta de un problema individual que pertenece a un tipo de usuario y que dará paso a soluciones.

### [Ver archivo de milestones](docs/milestones.md)

Para presentar las soluciones al diseño del producto se han creado unos milestones, que representan los productos mínimamente viables que habrá que cumplir ordenadamente para realizar el desarrollo ágil y dar valor al cliente.

### Lenguaje de programación 

Para realizar este proyecto se ha elegido el lenguaje de TypeScript, ya que es perfecto para el desarrollo de una infraestructura vistual. Puesto que es robusto por su estricto sistema de tipos, escalable y mantenible ya que permite usar abstracciones de programación (como clases y funciones) para crear componentes de infraestructura reutilizables, facilitando la gestión de sistemas complejos a medida que crecen.

### Gestores

También se ha tomado la elección de escoger entre varios gestores.
- El runtime escogido ha sido Deno. [Justificación](docs/runtime.md)
- El gestor de dependencias escogido ha sido el incluido en Deno. [Justificación](docs/dependencias.md)
- El gestor de tareas elegido ha sido Deno task. [Justificación](docs/tareas.md)

### Tutorial

Para facilitar al usuario utilizar el proyecto se ha creado el siguiente archivo a modo de tutorial con los comandos básicos y algunos parámetros interesantes del deno .json.
[Tutorial](/docs/tutorial_denojson.md)


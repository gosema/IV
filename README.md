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

### Tests

Para la elección de herramientas de automatización de test se ha tomado la decisión de utlizar las herramientas nativas de Deno en base a lo debatido en [Justificación](docs/tests.md).

### Comandos básicos

  deno run main.tsm -> ejecuta el programa
  deno task dev -> utiliza el gestor de tareas integrado en Deno (deno.json)
  deno test -> ejecuta los test del proyecto (archivo_test.ts)
  deno lint -> revisa el código fuente sin ejecutar en busca de posibles errores
  deno task check -> comprueba la sintaxis y los tipos de los archivos
  deno task test -> lanza los tests

### Elección del lenguaje.
Para el proyecto hemos acordado usar TypeScript como puede observarese en la [issue #7](https://github.com/gosema/IV/issues/7). Es una buena elección porque proporciona un sistema de tipos estático que mejora la robustez del código frente a JS, facilita el mantenimiento a largo plazo y permite estructurar proyectos de manera más clara y escalable.

### Ejecución de tests con Docker

La imagen base que se ha elegido ha sido la oficial de Deno con alpine, esto se ha justficado en el siguiente [documento](docs/imagen.md).
Para poder ejecutar los tests con Docker se debe ejecutar el siguiente comando:
```bash
 docker run -u 1001 -t -v `pwd`:/app/test gosema/objetivo-5
 ```
o en mi caso en Windows:
```bash
 docker run -u 1001 -t -v ${PWD}:/app/test gosema/objetivo-5
 ```
.

# Gestor de tareas

Un gestor de tareas (task runner o task manager) es una herramienta utilizada en el desarrollo de software para automatizar operaciones repetitivas del proyecto. Permite definir scripts o comandos complejos con nombres sencillos para ser ejecutados desde la línea de comandos, simplificando el workflow del desarrollador.

Estas tareas comunes incluyen: la ejecución de tests, el chequeo de sintaxis o tipado (linting), formateo de código, compilación o transpilación (por ejemplo, de TypeScript a JavaScript) y construcción de paquetes (building o bundling).

# Comparativa de Gestores de Tareas: Deno Task, Make y Drake

Para la orquestación y automatización de tareas del proyecto (scripts de build, test, lint, etc.), evaluaré tres alternativas basándome en criterios técnicos objetivos.
Compararé las opciones considerando la **portabilidad multiplataforma** (que funcione idénticamente en Windows/Linux/Mac) y la necesidad de **dependencias externas** (si requiere instalar software adicional en el sistema)

## Deno Task

Es la herramienta de automatización integrada en el runtime de Deno y se configura dentro del deno.json. [Enlace a deno task](https://docs.deno.com/runtime/reference/cli/task/).
Sobre la necesidad de **dependencias externas**, al ser una herramienta nativa no requiere ninguna instalación adicional (como requiere Make) ni la importación de librería de terceros (como requiere Drake).
Su **portabilidad multiplataforma** es total, ya que implementa su propio intérprete de shell ligero multiplataforma en deno task.

## Make

Es una herramienta clásica de automatización ampliamente utilizada en entornos UNIX. [Enlace a Make](https://www.gnu.org/software/make/manual/make.html).
Sobre la necesidad de **dependencias externas** es alta pero a diferencia de las herramientas integradas en el runtime, Make es un binario externo y no existe de forma nativa en Windows.
Con respecto a la **portabilidad multiplataforma** es baja ya que Make delega a la ejecución de comandos al shell del SO, eso significa que comandos que funcionan en Linux pueden fallar en la consola estándar de Windows.

## Drake

Es una librería de terceros inspirada en Make, pero diseñada específicamente para Deno.[Enlace a drake](https://github.com/srackham/drake).
Sobre la necesidad de **dependencias externas** no requiere instalar software a nivel de SO como en Make pero tampoco viene integrado en el runtime como deno task, requiere instalar una librería de terceros.
Con respecto a la **portabilidad multiplataforma** es alta, al ejecutarse sobre el runtime de Deno hereda su capacidad multiplataforma.

## Conclusión: Deno Task

Finalmente, para mi proyecto desarrollado en TypeScript y con runtime Deno he decidido optar por Deno task para mi gestor de tareas. Ya que en general es la herramienta que menos deuda técnica me genera, puesto que es la opción más equilibrada, simple y con una integración nativa para Deno. Esta elección evita la introducción de dependencias externas, lo cuál me va a permitir mantener en mi proyecto un código con un claro flujo de trabajo siguiendo las buenas prácticas.


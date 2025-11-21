# RUNTIME

Para empezar a crear la infraestructura de nuestro proyecto, debemos tener en cuenta las **buenas prácticas de desarrollo** y tomar decisiones informadas respecto a la **deuda técnica** que estas decisiones puedan generar. Siguiendo estos criterios, el primer paso, tras elegir el lenguaje de programación (en este caso **TypeScript**), es estudiar y seleccionar el **runtime** más adecuado.
 
## Criterios de elección 

Para elegir un runtime específico en mi proyecto voy a considerar ciertos criterios que me servirán para comparar las opciones que se presentan y poder escoger la que mejor se adapte a mis necesidades. 
Voy a considerar el **rendimiento** del runtime según los benchmarks de [Enlace a Betterstack](https://betterstack.com/community/guides/scaling-nodejs/nodejs-vs-deno-vs-bun/), así como si contiene **herramientas integradas** (como gestores de paquetes, test runners, etc...) y si el runtime ofrece una **librería estándar** que evite depender de paquetes de terceros.

Actualmente, para proyectos escritos en **TypeScript**, existen tres runtimes principales que conviene analizar y comparar:

## Node.js

[Enlace a Node](https://nodejs.org/en)
Su funcionamiento depende de gestores externos como npm, yarn o pnpm, es decir **no posee herramientas integradas**.
A nivel de **rendimiento**, aunque sigue siendo robusto, suele ser más lento cuando se compara con alternativas más recientes como Deno y Bun.
Sobre la **librería estándar** viene integrada en el ejecutable, pero es limitada para necesidades modernas lo que obliga a instalar paquetes de terceros mantenidos por la comunidad, con riesgos de seguridad o abandono.

## Deno

[Enlace a Deno](https://deno.com/)
Incluye un gestor de dependencias y tareas totalmente integrado. Además proporciona **herramientas integradas** (batteries-included) como `deno task`, test runner, linter y formatter. En cuanto a **rendimiento** es superior a Node.js, pero ligeramente por detrás de Bun en velocidad de ejecución pura.
Sobre su **librería estándar**, es su gran diferenciador con respecto a las otras opciones pues posee una librería oficial que garantiza herramientas básicas sin instalar paquetes de terceros.

## Bun

[Enlace a Bun](https://bun.com/)
Cumple sobradamente con el criterio de **herramientas integradas**, ya que ofrece un ecosistema 'todo en uno'. Incluye de forma nativa un gestor de paqueteS, un bundler y un test runner.
Su principal fortaleza es el **rendimiento**, superando ampliamente a Deno y Node.js en tiempos de inicio y velocidad de ejecución.
Sobre su **librería estándar**, al heredar parte de la filosofía de Node carece de una propia.

## Conclusión: Deno

Después de analizar exhaustivamente las características de estos tres runtimes he tomado la elección de usar en mi proyecto **Deno**. Es cierto que Bun suena como una opción muy interesante por su rendimiento y las herramientas integradas. Sin embargo, Deno posee una librería estándar que garantiza las herramientas básicas sin depender de paquetes de terceros, algo de lo Bun carece que depende de la compatibilidad de paquetes de Node, además Deno evita la fragmentación que sufre el ecosistema Node y Bun. Y rechazo usar Node por la alta deuda técnica que se genera por la fragmentación de las herramientas, la elección de gestores de dependencias externos que añaden coste de mantenimiento extra y rendimiento. 

Por lo tanto, considero a Deno como la elección más óptima y equilibrada. Su ventaja decisiva radica en cómo cumple el criterio de herramientas integradas: ofrece una suite "todo en uno" que centraliza la gestión de dependencias y la automatización de tareas. Esto se alinea perfectamente con mi objetivo de reducir la complejidad de configuración y el mantenimiento a largo plazo.




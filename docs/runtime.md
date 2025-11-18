# RUNTIME

Para empezar a crear la infraestructura de nuestro proyecto, debemos tener en cuenta las **buenas prácticas de desarrollo** y tomar decisiones informadas respecto a la **deuda técnica** que estas decisiones puedan generar. Siguiendo estos criterios, el primer paso, tras elegir el lenguaje de programación (en este caso **TypeScript**), es estudiar y seleccionar el **runtime** más adecuado.

## ¿Qué es un runtime?

El **runtime** o **entorno de ejecución** es el software que proporciona los recursos y el contexto necesarios para que un programa pueda ejecutarse e interactuar con el sistema operativo.  

Elegir correctamente el runtime es fundamental, ya que la forma en que este maneja las **dependencias**, el **entorno de ejecución**, la **seguridad** y las **herramientas integradas** varía considerablemente entre opciones. Estas diferencias afectan directamente la gestión del proyecto, las herramientas de automatización y la facilidad de mantenimiento a largo plazo.
 
## Criterios de elección 

Para elegir un runtime específico en mi proyecto voy a considerar ciertos criterios que me servirán para comparar las opciones que se presentan y poder escoger la que mejor se adapte a mis necesidades. 
Voy a considerar el **rendimiento** del runtime así como si contiene **herramientas integradas** (como gestores de paquetes, test runners, etc...),también que sea una herramienta con una **comunidad** amplia y sea estable (siga en uso y reciba actualizaciones).

Actualmente, para proyectos escritos en **TypeScript**, existen tres runtimes principales que conviene analizar y comparar:

## Node.js

Node.js es el entorno de ejecución pionero (lanzado en 2009) que utiliza el motor V8 de Google.[Enlace a Node](https://nodejs.org/en)
Su funcionamiento depende de gestores externos como npm, yarn o pnpm, es decir **no posee herramientas integradas**.
A nivel de **rendimiento**, aunque sigue siendo robusto, suele ser más lento cuando se compara con alternativas más recientes como Deno y Bun, los benchmarks de rendimiento confirman esta diferencia en tiempos de respuesta y procesamiento inferiores. Además genera el conocido y voluminoso directorio node_modules.
Es la opción más madura y estable. Posee un ecosistema gigantesco y su **comunidad** consolidada lo mantienen como una opción confiable y ampliamente adoptada para proyectos de todo tipo.

## Deno

Deno fue creado por el desarrollador original de Node.js (Ryan Dahl) para corregir fallos de diseño, utilizando Rust y el motor V8. [Enlace a Deno](https://deno.com/)
La **comunidad** es más pequeña que la de Node pero aún así es muy técnica y se ha consolidado como una opción madura, la herramienta garantiza soporte a largo plazo además de ser utilizada en proyectos de muchas empresas.
Incluye un gestor de dependencias y tareas totalmente integrado. Además proporciona **herramientas integradas** (batteries-included) como `deno task`, test runner, linter y formatter. En cuanto a **rendimiento** es superior a Node.js, pero ligeramente por detrás de Bun en velocidad de ejecución pura.

## Bun

Bun es el runtime más reciente (lanzado en 2021), centrado en la velocidad extrema, escrito en Zig y utilizando el motor JavaScriptCore de WebKit. [Enlace a Bun](https://bun.com/)
Cumple sobradamente con el criterio de **herramientas integradas**, ya que ofrece un ecosistema 'todo en uno'. Incluye de forma nativa un gestor de paquetes (compatible con npm), un bundler y un test runner, todo unificado en una sola herramienta de velocidad sobresaliente.
Su principal fortaleza es el **rendimiento**, superando ampliamente a Deno y Node.js en tiempos de inicio y velocidad de ejecución. Sin embargo, su mayor debilidad es su inmadurez: aún en fase beta, con un ecosistema pequeño y una **comunidad** menos desarrollada, carece de la estabilidad y profundidad que ofrece Node.js.

## Conclusión: Deno

Después de analizar exhaustivamente las características de estos tres runtimes he tomado la elección de usar en mi proyecto **Deno**. Es cierto que Bun suena como una opción muy interesante por su rendimiento pero siendo una herramienta tan reciente he considerado que la rapidez que me ofrece en un principio me va a generar una deuda técnica en el futuro por su inestabilidad e incertidumbre, estar atento a versiones nuevas más estables y tener una limitada base de usuarios para el soporte de bugs. Y en cuanto a Node, aunque sea la opción más estable y usada por los usuarios, no me atrae nada el hecho de no tener soporte nativo TypeScript y además es alta la deuda técnica que se genera por la fragmentación de las herramientas, la elección de gestores de dependencias externos que añaden coste de mantenimiento extra y rendimiento. 

Por lo tanto, considero a Deno como la elección más óptima y equilibrada. Representa el punto medio perfecto: su rendimiento es sólido (superando a Node) y su comunidad ha demostrado ser madura y estable (un riesgo mucho menor que Bun). Su ventaja decisiva radica en cómo cumple el criterio de herramientas integradas: ofrece una suite "todo en uno" que centraliza la gestión de dependencias y la automatización de tareas. Esto se alinea perfectamente con mi objetivo de reducir la complejidad de configuración y el mantenimiento a largo plazo.

## Bibliografía 

[Enlace a Hamzakhan](https://dev.to/hamzakhan/nodejs-vs-bun-vs-deno-who-rules-the-server-in-2025-gl0)
[Enlace a Betterstack](https://betterstack.com/community/guides/scaling-nodejs/nodejs-vs-deno-vs-bun/)
[Enlace a Zeromastery](https://zerotomastery.io/blog/deno-vs-node-vs-bun-comparison-guide/)

# RUNTIME

Para empezar a crear la infraestructura de nuestro proyecto, debemos tener en cuenta las **buenas prácticas de desarrollo** y tomar decisiones informadas respecto a la **deuda técnica** que estas decisiones puedan generar. Siguiendo estos criterios, el primer paso, tras elegir el lenguaje de programación (en este caso **TypeScript**), es estudiar y seleccionar el **runtime** más adecuado.

## ¿Qué es un runtime?

El **runtime** o **entorno de ejecución** es el software que proporciona los recursos y el contexto necesarios para que un programa pueda ejecutarse e interactuar con el sistema operativo.  

Elegir correctamente el runtime es fundamental, ya que la forma en que este maneja las **dependencias**, el **entorno de ejecución**, la **seguridad** y las **herramientas integradas** varía considerablemente entre opciones. Estas diferencias afectan directamente la gestión del proyecto, las herramientas de automatización y la facilidad de mantenimiento a largo plazo.

## Criterios para elegir un runtime

Al evaluar un runtime debemos considerar varios factores clave para reducir la deuda técnica y validar nuestra elección:

- **Compatibilidad nativa con TypeScript**: por ejemplo, si puede ejecutar archivos `.ts` sin necesidad de una fase de compilación adicional.  
- **Gestión de dependencias y tareas**: si el runtime ofrece herramientas integradas o depende de gestores externos (como `npm`, `yarn` o `pnpm`).  
- **Seguridad**: especialmente en lo referente al acceso al sistema de archivos, red y variables de entorno.  
- **Rendimiento**: tanto en la velocidad de inicio como en la ejecución del código y el consumo de recursos.  
- **Ecosistema y comunidad**: estabilidad del proyecto, madurez de sus herramientas, disponibilidad de bibliotecas y calidad de la documentación.  

## Runtimes disponibles para TypeScript

Actualmente, para proyectos escritos en **TypeScript**, existen tres runtimes principales que conviene analizar y comparar:

## Node.js

Node.js es el entorno de ejecución pionero (lanzado en 2009) que utiliza el motor V8 de Google. Es la opción más madura y estable. [Enlace a Node](https://nodejs.org/en)

### Compatibilidad nativa con TypeScript
- Inconveniente: No es nativa. Requiere flags experimentales (`--experimental-strip-types`) o herramientas externas (como `ts-node` o bundlers) para transpilación y ejecución.

### Gestión de dependencias y tareas
- Ventaja: Impulsado por npm, garantiza acceso a una inmensa cantidad de paquetes.
- Inconveniente: Requiere gestores externos (`npm`, `yarn`, `pnpm`) y genera un pesado directorio `node_modules`.

### Seguridad
- Inconveniente: Carece de sandbox de seguridad y modelo de permisos por defecto. El acceso al sistema de archivos y red es irrestricto, requiriendo implementaciones de seguridad manuales.

### Rendimiento
- Inconveniente: Se considera el más lento en benchmarks de ejecución y tiempos de inicio en comparación con Deno y Bun.

### Ecosistema y comunidad
- Ventaja: Es su punto fuerte. Ecosistema vasto, comunidad madura, documentación abundante y un soporte sólido para la implementación en todos los principales proveedores de nube.


## Deno

Deno fue creado por el desarrollador original de Node.js (Ryan Dahl) para corregir fallos de diseño, utilizando Rust y el motor V8. [Enlace a Deno](https://deno.com/)

### Compatibilidad nativa con TypeScript
- Ventaja: Soporte nativo de primera clase. Transpila archivos `.ts` automáticamente sin configuración ni herramientas externas, simplificando el flujo de trabajo.

### Gestión de dependencias y tareas
- Ventaja: Totalmente integrado. Las dependencias se cargan directamente desde URLs, eliminando la necesidad de npm y `node_modules`.  
  Incluye herramientas integradas (batteries-included) como `deno task`, test runner, linter y formatter.

### Seguridad
- Ventaja: Su mayor fortaleza. Por defecto, funciona como un sandbox y requiere permisos explícitos (ej. `--allow-net`, `--allow-read`) para interactuar con el sistema, mitigando riesgos de seguridad de dependencias.

### Rendimiento
- Ventaja: Superior a Node.js.
- Inconveniente: Ligeramente por detrás de Bun en velocidad de ejecución pura.

### Ecosistema y comunidad
- Inconveniente: Ecosistema de módulos más pequeño y menos maduro que Node.js.
- Ventaja: Fuerte adherencia a los APIs de la plataforma web (Fetch, Request, Response).


## Bun

Bun es el runtime más reciente (lanzado en 2021), centrado en la velocidad extrema, escrito en Zig y utilizando el motor JavaScriptCore de WebKit. [Enlace a Bun](https://bun.com/)

### Compatibilidad nativa con TypeScript
- Ventaja: Soporte nativo de primera clase. Ejecuta `.ts` y `.tsx` directamente.

### Gestión de dependencias y tareas
- Ventaja: Gestor de paquetes integrado que es compatible con npm (`package.json`), pero es ultrarrápido. Integra bundler y test runner en una sola utilidad.

### Seguridad
- Inconveniente: Inmaduro. Carece de un modelo de permisos o sandboxing similar al de Deno, lo que es una preocupación para aplicaciones de misión crítica.

### Rendimiento
- Ventaja: Es el más rápido. Tiempos de inicio y ejecución ultrarrápidos, superiores a Node.js y Deno.

### Ecosistema y comunidad
- Inconveniente: El menos estable y maduro (fase beta). Su ecosistema y comunidad son pequeños y carecen de la profundidad de recursos de Node.js.


## Otra Información a Tener en Cuenta

**Almacenamiento Integrado (SQLite):**  
Tanto Node.js (experimental) como Bun ofrecen un driver de SQLite integrado en su núcleo, lo que es útil para prototipos rápidos.  
Deno requiere una dependencia externa para SQLite o cualquier otra base de datos. Esto no significa que Deno no pueda usar bases de datos, solo que no viene preinstalado.


## Conclusión: Deno

Después de analizar exhaustivamente las caracterísitcas de estos tres runtimes he tomado la elección de usar en mi proyecto **Deno**. Es cierto que Bun suena como una opción muy interesante por su rendimiento pero siendo una herramienta tan reciente he considerado que la rapidez que me ofrece en un principio me va a generar una deuda técnica en el futuro por su inestabilidad e incertidumbre, estar atento a versiones nuevas más estables y tener una limitada base de usuarios para el soporte de bugs. Y en cuanto a Node, aunque sea la opción más estable y usada por los usuarios, no me atrae nada el hecho de no tener soporte nativo TypeScript y además es alta la deuda técnica que se genera por la fragmentación de las herramientas, la elección de gestores de depenencias externos que añaden coste de mantenimiento extra y la poca seguridad y rendimiento .
Es por todo esto por lo que considero a Deno como la elección más óptima siendo un punto medio entre las otras dos con respecto al rendimiento y la madurez, además de ofrecer automatización para el gestor de dependencias integrado y tener su propio soporte nativo para las tareas y sobretodo destacar su seguridad y que este diseñado para ser totalmente compatible con TypeScript.

## Bibliografía 

[Enlace a Hamzakhan](https://dev.to/hamzakhan/nodejs-vs-bun-vs-deno-who-rules-the-server-in-2025-gl0)
[Enlace a Betterstack](https://betterstack.com/community/guides/scaling-nodejs/nodejs-vs-deno-vs-bun/)
[Enlace a Zeromastery](https://zerotomastery.io/blog/deno-vs-node-vs-bun-comparison-guide/)

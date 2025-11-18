# Gestor de dependencias

Un gestor de dependencias es una herramienta de software que automatiza el proceso de identificar, descargar, instalar, actualizar y resolver conflictos entre las bibliotecas y paquetes de terceros que necesita un proyecto para funcionar. Su propósito es asegurar que todas las dependencias requeridas (y las dependencias de esas dependencias, o dependencias transitivas) estén disponibles en las versiones correctas.

## Criterios de elección

Para elegir el gestor de dependencias, evaluaré las opciones disponibles según varios criterios clave. Al igual que con el runtime, consideraré el tamaño de la **comunidad** y el **rendimiento** (tanto en instalación como en almacenamiento).

Además, daré prioridad a las soluciones que sigan la filosofía del proyecto: **herramientas nativamente integradas** que no requieran componentes externos. No obstante, analizaré también las principales alternativas externas. El objetivo es no sesgar la decisión y estudiar objetivamente si ofrecen ventajas claras que justifiquen su uso.

Las herramientas a analizar serán estas cuatro:

## npm

Node Package Manager, es el gestor de dependencias original y el que viene instalado por defecto en Node. [Enlace a npm](https://docs.npmjs.com/)
En cuánto a **rendimiento** su velocidad ha mejorado en sus versiones más modernas pero sigue por detrás con respecto a las otras herramientas. Sobre su almacenamiento es también el menos eficiente por su tendencia a crear carpetas node_modules hinchadas. Por último cuenta con el ecosistema de paquetes más grande y una **comunidad** masiva, estable y confiable.
No es una herramienta **integrada** con Deno, es una herramienta completamente externa que pertenece al ecosistema Node.js.

## pnpm

Performant npm se diseñó específicamente para solucionar los dos grandes problemas de **rendimiento** npm: la velocidad y el espacio en disco.
Utiliza la carpeta node_modules de forma más eficiente ahorrando espacio. Aunque utiliza el mismo registro que npm, algunas herramientas más antiguas pueden no funcionar correctamente.
En cuanto a la **comunidad**, ha ganado una adopción masiva en los últimos años y es mantenido activamente. Es considerado el estándar moderno en muchos proyectos de código abierto, por lo que su soporte y estabilidad son muy robustos.
Al igual que npm, no es una herramienta **integrada** en Deno. Es una alternativa externa que pertenece al ecosistema de Node.js. [Enlace a pnpm](https://pnpm.io/)

## Yarn

Fue creado por Facebook para solucionar los problemas de velocidad y fiabilidad que tenía npm en sus inicios. Está dividido en dos versiones muy diferentes: Classic y Berry con una filosofía totalmente distinta. [Enlace a Yarn Berry](https://github.com/yarnpkg/berry)
Berry utiliza Pnp, mantiene las dependencias dentro de archivos .zip cacheados. Por lo que en **rendimiento** tiene instalaciones muy rápidas y un almacenamiento eficiente.
En cuanto a su **comunidad**, se considera igual de maduro y estable para producción que npm.
Al igual que npm y pnpm, no es una herramienta **integrada** en Deno. Es una herramienta externa que pertenece al ecosistema Node.js

## Utilizar la herramienta incluida en el runtime Deno

Es la única opción que cumple con el criterio de ser una herramienta nativa **integrada**, al ser parte del propio runtime elimina la necesidad de instalar o configurar gestores externos.
En cuanto a **rendimiento** utiliza un caché global centralizado que le permite ahorrar espacio en disco comparado con npm (node_modules).
Respecto a la **comunidad**, aunque es más pequeña que las de npm o Yarn, es muy técnica y activa.

## Conclusión

A modo de conclusión, se nos presentan dos opciones: replantear el proyecto y cambiar de runtime escogido por las notorias ventajas que pueda proporcionar el gestor de dependencias (npm, pnpm o Yarn) y su reducción de deuda técnica, o continuar con la herramienta nativa de Deno y poder justificar completamente su elección como runtime frente a todas las posibilidades que hay tanto de otros runtimes y a su vez gestores de dependencias. 
Tras estudiar las posibilidades he decidido continuar con **Deno**. Además de las ventajas de compatibilidad y de que sea la opción diseñada e integrada para la que se construyó el runtime, me ofrece utilizar la gestión de dependencias nativa de Deno, también he valorado la integración total que tiene con TypeScript, que evita los problemas de tener la carpeta node_modules mediante la importación por URLs.

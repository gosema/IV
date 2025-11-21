# Gestor de dependencias

Un gestor de dependencias es una herramienta de software que automatiza el proceso de identificar, descargar, instalar, actualizar y resolver conflictos entre las bibliotecas y paquetes de terceros que necesita un proyecto para funcionar. Su propósito es asegurar que todas las dependencias requeridas (y las dependencias de esas dependencias, o dependencias transitivas) estén disponibles en las versiones correctas.

## Criterios de elección

Para elegir el gestor de dependencias, evaluaré las opciones disponibles según varios criterios clave. Daré prioridad a las soluciones que sigan la filosofía del proyecto: **herramientas nativamente integradas** que no requieran componentes externos. No obstante, analizaré también las principales alternativas externas. El objetivo es no sesgar la decisión y estudiar objetivamente si ofrecen ventajas claras que justifiquen su uso. Las herramientas a analizar serán estas cuatro:

## npm
[Enlace a npm](https://docs.npmjs.com/)
Node Package Manager, es el gestor de dependencias original y el que viene instalado por defecto en Node. [Enlace a npm](https://docs.npmjs.com/)
No es una herramienta **integrada** con Deno, es una herramienta completamente externa que pertenece al ecosistema Node.js.

## pnpm
[Enlace a pnpm](https://pnpm.io/)
Al igual que npm, no es una herramienta **integrada** en Deno. Es una alternativa externa que pertenece al ecosistema de Node.js.

## Yarn

[Enlace a Yarn](https://yarnpkg.com/)
Es una gestor para el ecosistema Node que surge como alternativa de npm. Al igual que npm y pnpm, no es una herramienta **integrada** en Deno. Es una herramienta externa que pertenece al ecosistema Node.js

## Utilizar la herramienta incluida en el runtime Deno

Es la única opción que cumple con el criterio de ser una herramienta nativa **integrada**, al ser parte del propio runtime elimina la necesidad de instalar o configurar gestores externos. Utiliza un caché global centralizado que le permite ahorrar espacio en disco comparado con npm (node_modules).

## Conclusión

A modo de conclusión, se nos presentan dos opciones: replantear el proyecto y cambiar de runtime escogido por las notorias ventajas que pueda proporcionar el gestor de dependencias (npm, pnpm o Yarn) y su reducción de deuda técnica, o continuar con la herramienta nativa de Deno y poder justificar completamente su elección como runtime frente a todas las posibilidades que hay tanto de otros runtimes y a su vez gestores de dependencias. 
Tras estudiar las posibilidades he decidido continuar con **Deno**. Además de las ventajas de compatibilidad y de que sea la opción diseñada e integrada para la que se construyó el runtime, me ofrece utilizar la gestión de dependencias nativa de Deno, también he valorado la integración total que tiene con TypeScript, que evita los problemas de tener la carpeta node_modules mediante la importación por URLs.

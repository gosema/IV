# Gestor de dependencias

Un gestor de dependencias es una herramienta de software que automatiza el proceso de identificar, descargar, instalar, actualizar y resolver conflictos entre las bibliotecas y paquetes de terceros que necesita un proyecto para funcionar. Su propósito es asegurar que todas las dependencias requeridas (y las dependencias de esas dependencias, o dependencias transitivas) estén disponibles en las versiones correctas.
Las herramientas a analizar serán estas cuatro:

## npm

Node Package Manager, es el gestor de dependencias original y el que viene instalado por defecto en Node.js. Usa una estructura de node_modules. En cuánto a rendimiento su velocidad ha mejorado en sus versiones más modernas pero sigue por detrás con respecto a las otras herramientas. Sobre su almacenamiento es también el menos eficiente por su tendencia a crear carpetas node_modules hinchadas. Por último cuenta con el ecosistema de paquetes más grande y una comunidad masiva estable y confiable.

## pnpm

Performant npm se diseñó específicamente para solucionar los dos grandes problemas de npm: la velocidad y el espacio en disco.
Utiliza la carpeta node_modules de forma más eficiente ahorrando espacio. Aunque utiliza el mismo registro que npm, algunas herramientas más antiguas pueden no funcionar correctamente.

## Yarn

Fue creado por Facebook para solucionar los problemas de velocidad y fiabilidad que tenía npm en sus inicios. Está dividido en dos versiones muy diferentes: Classic y Berry con una filosofía totalmente distinta. Que utiliza Pnp, mantiene las dependencias dentro de archivos .zip cacheados.Por lo que tiene instalaciones muy rápidas y un almacenamiento eficiente. Cabe destacar que esta herramienta introduce una curva de aprendizaje bastante compleja.

## Utilizar la herramienta incluida en el runtime Deno

Es un runtime alternativo para JavaScript y TypeScript. El directorio del proyecto solo contiene el código fuente y opcionalmente un .json y lock, no hace falta instalar la carpeta node_modules. Evita que en el proyecto se hagan instalaciones ya que importa dependencias directamente desde URLs en el código fuente. Es extremadamente rápido y eficiente. Además tiene una integración nativa con TypeScript.

## Conclusión

A modo de conclusión, se nos presentan dos opciones: replantear el proyecto y cambiar de runtime escogido por las notorias ventajas que pueda proporcionar el gestor de dependencias (npm, pnpm o Yarn) y su reducción de deuda técnica, o continuar con la herramienta nativa de Deno y poder justificar completamente su elección como runtime frente a todas las posibilidades que hay tanto de otros runtimes y a su vez gestores de dependencias. 
Tras estudiar las posibilidades he decidido continuar con **Deno**. Además de las ventajas de compatibilidad y de que sea la opción diseñada e integrada para la que se construyó el runtime, me ofrece utilizar la gestión de dependencias nativa de Deno, también he valorado la integración total que tiene con TypeScript, que evita los problemas de tener la carpeta node_modules mediante la importación por URLs.

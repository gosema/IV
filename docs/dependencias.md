# Gestor de dependencias

Un gestor de dependencias es una herramienta de software que automatiza el proceso de identificar, descargar, instalar, actualizar y resolver conflictos entre las bibliotecas y paquetes de terceros que necesita un proyecto para funcionar. Su propósito es asegurar que todas las dependencias requeridas (y las dependencias de esas dependencias, o dependencias transitivas) estén disponibles en las versiones correctas.

Para elegir la herramienta que manejará todo esto tendremos que evaluarla atendiendo a estas características:
la **arquitectura** para estudiar como gestiona o instala los paquetes y si usa la carpeta node_modules, **rendimiento** o cómo de rápido se instala y actualiza las dependencias, el **almacenamiento** para analizar el espacio en disco que ocupa, **fiabilidad** que representa como asegura que todos los desarrolladores tengan las mismas dependencias y la **compatibilidad y ecosistema**.
Las herramientas a analizar serán estas cuatro:

## npm

Node Package Manager, es el gestor de dependencias original y el que viene instalado por defecto en Node.js. En cuanto a su **arquitectura** usa una estructura de node_modules. Cabe destacar que puede crear "phantom dependencies", el código puede importar paquetes que no se declararon explícitamente, simplemente porque otra dependencia los necesitaba. En cuánto a **rendimiento** su velocidad ha mejorado en sus versiones más modernas pero sigue por detrás con respecto a las otras herramientas. Sobre su **almacenamiento** es también el menos eficiente por su tendencia a crear carpetas node_modules hinchadas que consumen una cantidad significativa de espacio en disco a medida que los proyectos crecen. En **fiabilidad** genera un package-lock.json que asegura instalaciones idénticas en todas las máquinas. Por último para la **compatibilidad** es total al ser el estándar y con el ecosistema de paquetes más grande y una comunidad masiva estable y confiable.

## pnpm

Performant npm se diseñó específicamente para solucionar los dos grandes problemas de npm: la velocidad y el espacio en disco.
Sobre su **arquitectura** su diferencia principal radica en como gestiona la carpeta node_modules, utiliza un almacén global de contenido direccionable (en ~/.pnpm-store) y luego usa enlaces simbólicos (symlinks) en la carpeta node_modules del proyecto, ahorrando espacio y evitando "phantom dependencies". En **rendimiento** es el más rápido de todos, al igual que en **almacenamiento** es el más eficiente. En cuanto a **fiabilidad** usa un archivo pnpm-lock.yaml y su arquitectura estricta de node_modules previene errores de importación. Por último en cuanto a la **compatibilidad** aunque utiliza el mismo registro que npm, algunas herramientas más antiguas pueden no funcionar correctamente por su enfoque arquitectónico basado en enlaces simbólicos (symlinks).

## Yarn

Fue creado por Facebook para solucionar los problemas de velocidad y fiabilidad que tenía npm en sus inicios. Hoy en día, Yarn está dividido en dos versiones muy diferentes: Classic que es una versión similar a npm más moderna pero sin una mejora destacable y Berry con una filosofía totalmente distinta que es la que estudiaremos.
Sobre su **arquitectura** utiliza Pnp, mantiene las dependencias dentro de archivos .zip cacheados y genera un único archivo .pnp.cjs que le dice a Node.js exactamente dónde encontrar cada paquete. Esto implica en **rendimiento** instalaciones muy rápidas, que el **almacenamiento** sea eficiente al estar en zips y una **fiabilidad** alta por Pnp. En cuanto a la **compatibilidad** requiere una configuración adicional. Cabe destacar que esta herramienta introduce una curva de aprendizaje bastante compleja.

## Utilizar la herramienta incluida en el runtime Deno

Es un runtime alternativo para JavaScript y TypeScript. Sobre su **arquitectura** no existen package.json ni node_modules tiene un enfoque de gestión de dependencias completamente distinto, importando dependencias directamente desde URLs en el código fuente. Para el **rendimiento** y **almacenamiento** Deno descarga estas URLs una sola vez y las almacena en una caché global inmutable para que las siguientes veces que se ejecute el código se use la versión cacheada. Es extremadamente rápido y eficiente en disco. En cuanto a la **fiabilidad** para que las URLs no cambien se utiliza deno.lock. Por último **la compatibilidad y el ecosistema** es totalmente distinto al de Node, no usa el ecosistema de npm, tiene su propia librería estándar y su registro de módulos.

## Conclusión

A modo de conclusión, se nos presentan dos opciones: replantear el proyecto y cambiar de runtime escogido por las notorias ventajas que pueda proporcionar el gestor de dependencias (npm, pnpm o Yarn) y su reducción de deuda técnica, o continuar con la herramienta nativa de Deno y poder justificar completamente su elección como runtime frente a todas las posibilidades que hay tanto de otros runtimes y a su vez gestores de dependencias. 
Tras estudiar las posibilidades he decidido continuar con **Deno**. Además de las ventajas de compatibilidad y de que sea la opción diseñada e integrada para la que se construyó el runtime, me ofrece utilizar la gestión de dependencias nativa de Deno, también he valorado la integración total que tiene con TypeScript, que evita los problemas de tener la carpeta node_modules mediante la importación por URLs, la seguridad y fiabilidad al estar construido sobre un modelo de seguridad (permisos explícitos) y fiabilidad (uso de deno.lock para asegurar la integridad de las dependencias remotas).

# Tutorial Deno

## Instalación

irm https://deno.land/install.ps1 | iex
PS C:\Users\gomez\Desktop\IV\IV> deno init
✅ Project initialized
  
## deno.json

### task: 
Cada par clave: valor es un nombre de tarea y el comando que ejecuta.
dev: crear la tarea y ejecuta
check: comprueba tipos
lint: ejecuta el linter
test: ejecuta los tests
[Enlace info](https://docs.deno.com/runtime/reference/cli/task/)

### lint:
Analiza el código en busca de errores, malas prácticas y bugs
rules: el conjunto de reglas que se va a buscar
"tags": ["recommended"]: conjunto de reglas recomendadas por defecto en Deno
"include": ["ban-untagged-todo"]: obliga a etiquetar tus comentarios para buenas prácticas
"exclude": ["no-unused-vars"]: desactiva que por defecto avise de error si declaras variable que no usas

[Enlace info](https://docs.deno.com/runtime/reference/cli/lint/)
[Ejemplo de lint](https://oliverservin.com/deno-clean)

### fmt
Cambia automáticamente el formato del código
"useTabs": true : usa tabs en vez de sangría
"lineWidth": 80, : ancho de línea maximo
"indentWidth": 4, : ancho de tabulación de 4 max
"semiColons": true, :usar ; al final de las sentenciaas
"singleQuote": true, : usar comillas simples antes que dobles
"proseWrap": "preserve" : no intentará formatear los parrafos

[Enlace info](https://docs.deno.com/runtime/reference/cli/fmt/)

### imports
Permite usar "alias" o nombres cortos para tus dependencias, en lugar de URLs largas.
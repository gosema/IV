# Gestor de tareas

Un gestor de tareas (task runner o task manager) es una herramienta utilizada en el desarrollo de software para automatizar operaciones repetitivas del proyecto. Permite definir scripts o comandos complejos con nombres sencillos para ser ejecutados desde la línea de comandos, simplificando el workflow del desarrollador.

Estas tareas comunes incluyen: la ejecución de tests, el chequeo de sintaxis o tipado (linting), formateo de código, compilación o transpilación (por ejemplo, de TypeScript a JavaScript) y construcción de paquetes (building o bundling).


# Comparativa de Gestores de Tareas: Deno Task, Make y Drake

En el desarrollo con **TypeScript y Deno**, la elección del gestor de tareas adecuado es fundamental para mantener un flujo de trabajo eficiente y reducir la deuda técnica. Existen tres alternativas principales que suelen considerarse: **Deno Task**, **Make** y **Drake**. Cada una ofrece un enfoque distinto en cuanto a simplicidad, integración y mantenimiento del proyecto.


## Deno Task

Es la opción nativa del runtime Deno y destaca por su simplicidad y coherencia con el ecosistema. No requiere herramientas externas ni dependencias adicionales, ya que las tareas se definen directamente en el archivo `deno.json`. Esto favorece una configuración centralizada, segura y multiplataforma, reduciendo la complejidad técnica y facilitando la colaboración entre desarrolladores. Su principal limitación es que no permite establecer dependencias entre tareas ni ejecutar lógica condicional, por lo que resulta menos adecuado para flujos muy complejos. Aun así, su integración directa con Deno y su bajo coste de mantenimiento lo convierten en una solución práctica y sostenible para la mayoría de proyectos.

## Make

Es una herramienta clásica de automatización ampliamente utilizada en entornos UNIX. Su principal ventaja es la madurez y estabilidad que ofrece, además de permitir la definición de flujos de tareas complejos con dependencias. Sin embargo, su sintaxis anticuada y dependiente del shell puede dificultar la portabilidad y el mantenimiento del código. Además, carece de integración con Deno o TypeScript, lo que genera redundancia y una posible acumulación de deuda técnica.

## Drake

Representa una opción intermedia, ya que está escrito en TypeScript y diseñado específicamente para Deno. Permite escribir tareas con lógica programática, dependencias y condiciones utilizando el propio lenguaje del proyecto, lo que mejora la legibilidad y coherencia técnica. No obstante, su configuración es más compleja, requiere permisos adicionales para su ejecución y cuenta con una comunidad más pequeña. En consecuencia, aunque ofrece mayor flexibilidad, puede incrementar la complejidad del proyecto si se emplea para tareas sencillas.


## Conclusión: Deno Task

Finalmente, para mi proyecto desarrollado en TypeScript y con runtime Deno he decidido optar por Deno task para mi gestor de tareas. Ya que en general es la herramienta que menos deuda técnica me genera, puesto que es la opción más equilibrada, simple y con una integración nativa para Deno. Esta elección evita la introducción de dependencias externas, lo cuál me va a permitir mantener en mi proyecto un código con un claro flujo de trabajo siguiendo las buenas prácticas.


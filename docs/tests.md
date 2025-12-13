# Herramientas para los tests 

En cualquier proyecto, es crucial validar que el código cumple con los requisitos del cliente. Para ello, se implementan tests automatizados que aseguran la calidad y previenen regresiones.

La elección de herramientas para gestionar estos tests es una decisión estratégica; una elección incorrecta puede generar deuda técnica y ralentizar el desarrollo.

Las herramientas de testing se dividen en 3 niveles de abstracción. En este documento, analizaré las mejores opciones para cada nivel, considerando nuestro entorno específico: TypeScript como lenguaje y Deno como runtime.

Dado que Deno incluye su propio conjunto de herramientas ("batteries included"), un punto clave del análisis será determinar cuándo es apropiado usar las herramientas nativas y cuándo justificar el uso de alternativas externas.

## Aserciones 

Son las funciones que realizan la comprobación final y muestran un OK o NOK para mostrar si el test ha pasado o no.
Se establecen como criterios:

- **Integración**: se da prioridad a soluciones que requieran un mínimo de configuración y herramientas externas, alineándose así con la filosofía de Deno.

- **Estilo**: Se busca un código declarativo (BDD) que valide el comportamiento funcional esperado. El objetivo es que los tests describan qué hace el sistema en lugar de cómo se comprueba internamente

Las tres opciones estudiadas han sido:

- [Opción nativa de Deno (std/assert)](https://docs.deno.com/runtime/reference/std/assert/): 
Es la biblioteca de aserciones básica de Deno 
La integración es máxima, no requiere de nada externo.
Su estilo es imperativo centrado en el estado interno del código

- [Opción nativa de Deno BDD (std/expect)](http://docs.deno.com/runtime/reference/std/expect/):
Es otra biblioteca oficial de Deno diseñada para el Behaviour-Driven Development.
Integridad máxima y no requiere nada externo.
Su estilo declarativo se centra en describir una especificación del comportamiento del sistema

- [Chai](https://www.chaijs.com/): 
Biblioteca de aserciones del ecosistema Node.js.
Requiere de dependencias externas, rompiendo la idea de mantener todo integrado.
Su estilo es híbrido, permite tanto un estilo imperativo como declarativo.

Finalmente el debate está entre las dos bibliotecas de Deno ya que se adaptan mejor a los criterios que he establecido con anterioridad y por tanto menos deuda técnica me generan. La elección final se basa en el estilo del código, donde std/expect gana pues adopta el estilo BDD moderno permitiendo que los tests sirvan eficazmente como documentación del comportamiento del sistema.

## Frameworks

Estructura las aserciones, le da nombres descriptivos y ejecuta tareas de preparación antes y después de las pruebas.

Los criterios a estudiar serán los siguientes:

- **Integración**: se da prioridad a soluciones que requieran un mínimo de configuración y herramientas externas, alineándose así con la filosofía de Deno.
- **Estilo**: Se busca un código declarativo, se prioriza una estructura que permita agrupar y describir funcionalidades (metodología BDD) en lugar de una lista plana de ejecuciones imperativas.

Se nos presentan estas tres alternativas:

- [Opción nativa de Deno](https://docs.deno.com/runtime/fundamentals/testing/): 
Sobre su integridad, no se necesita importar nada para definir un test, ya que Deno.test es una global del runtime.
Es un estilo imperativo que tiende a crear listas largas de tests sin anidación jerárquica clara.

- [Opción nativa de Deno-BDD](https://jsr.io/@std/testing/doc): 
En cuanto a su integridad es parte de la biblioteca estándar de Deno. Requiere importar funciones básicas pero no añade dependencias de terceros.
Su estilo es declarativo centrado en BDD permite una estructura jerárquica.

- [Mocha](https://mochajs.org/)
Para el criterio de integridad no es fácil su integración al proyecto ya que añade demasiadas herramientas externas
Ofrece un estilo muy similar a Deno BDD, es declarativo.

El debate se centra entre las dos opciones nativas de Deno, ya que Mocha queda descartado por incumplir el criterio de Integración: que genera una deuda técnica innecesaria para obtener una sintaxis que Deno ya ofrece de forma nativa.
Entre las opciones nativas, se elige Deno BDD (std/testing/bdd) basándose en el criterio de estilo. Aunque requiere una importación, aporta la estructura semántica y jerárquica necesaria para un desarrollo guiado por comportamiento.

## Herramientas CLI

Es el comando que se escribe en la terminal para que se ejecuten todos los archivos de prueba y de un informe final.

El criterio tomado es la **integración**, se da prioridad a soluciones que requieran un mínimo de configuración y herramientas externas, alineándose así con la filosofía de Deno.

Para este apartado no existe debate viable: la elección es la herramienta nativa [deno test](https://docs.deno.com/runtime/fundamentals/testing/).
Aplicando el criterio de integración, cualquier opción externa (como [Vitest](https://vitest.dev/)) queda descartada automáticamente porque viola el principio fundamental de nuestra elección tecnológica de reducir la deuda técnica. Ignorar el runner nativo para configurar una herramienta externa añadiría complejidad innecesaria.
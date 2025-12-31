# Imagen docker

Una imagen Docker es un paquete reproducible que contiene el entorno necesario para ejecutar una aplicación o en el caso de nuestro proyecto, lanzar las pruebas de los tests de forma aislada y consistente. Esta imagen se construye siguiendo las buenas prácticas y sirve como plantilla para crear contenedores en los que la aplicación se puede probar.

## Criterios de elección

Los criterios impuestos para determinar la imagen más conveniente para el proyecto serán los siguientes:

- **Ligereza**: la imagen debe incluir únicamente los componentes esenciales para garantizar un funcionamiento correcto, reduciendo así su tamaño. Se comprueba analizando los tamaños finales de la imagenes de docker (docker images).

- **Eficiencia**: aunque una imagen ligera no siempre implica un despliegue más rápido, se prioriza igualmente que su rendimiento sea óptimo. Para ello se ha llevado a cabo un benchmark comparativo utilizando la herramienta (Hyperfine)[https://github.com/sharkdp/hyperfine], en el que se mide el tiempo total desde que Deno inicia el proceso de tests hasta que termina y devuelve un resultado.

- **Seguridad**: no presentar vulnerabilidades relevantes, garantizando así un entorno de pruebas fiable y seguro. Comprobado mediante la herramienta de (Snyk)[https://snyk.io/es/].

## Análisis de ejecución de tests en contenedores Deno

Para ejecutar los tests en los distintos contenedores se ha realizado una configuración estandarizada de prueba con un usuario no-root con permisos limitados, una copia de archivos de configuración (deno.json y deno.lock) durante la construcción para ejecutar deno cache y usando volumenes de Docker para el código fuente y los datos y un entrypoint para ejecutar deno task test.

## Comparación objetiva con los criterios

Imagenes oficiales de Deno a considerar, [enlace a las imagenes docker](https://hub.docker.com/r/denoland/deno):

- [denoland/deno:alpine](https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile).
    - Sobre su seguridad, en el análisis con [snyk](snyk_alpine.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 182.98 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 790.2 ms.

- [denoland/deno:debian](https://github.com/denoland/deno_docker/blob/main/debian.dockerfile)
    - Sobre su seguridad, en el análisis con [snyk](snyk_debian.png) se encontraron 23 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.29 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 735.0 ms.

- [denoland/deno:ubuntu](https://github.com/denoland/deno_docker/blob/main/ubuntu.dockerfile)
    - Sobre su seguridad, en el análisis con [snyk](snyk_ubuntu.png) se encontraron 16 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 281.43 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 566.0 ms.

Imagenes base a considerar:

- [Ubuntu](https://hub.docker.com/_/ubuntu).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_ubuntu.png) se encontraron 8 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.62 MB
    - En los [benchmarks](benchmark_general.md) se ha obtenido una media de 1.457 s.

- [Debian](https://hub.docker.com/_/debian).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_debian.png) se encontraron 23 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.51 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 1.315 s.

- [Alpine](https://hub.docker.com/_/alpine).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_alpine.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 164.46 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 858.0 ms.

Imagenes de terceros a considerar:

- [Tundra soft deno](https://hub.docker.com/r/tundrasoft/deno).
    - Sobre su seguridad, en el análisis con [snyk](snyk_tundra.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 208.53 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 728.8 ms.

## Conclusión

Tras analizar todas las opciones en base a los criterios objetivos planteados, se ha llegado a la conclusión de elegir [denoland/deno:alpine](https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile). Destaca frente al resto de las imagenes por tener 0 vulnerabilidades en el análisis que se ha hecho (al igual que la imagen base de alpine y deno tundra). Además, tiene una buena velocidad de ejecución de los tests (790.2 ms), solo siendo superado por deno tundra y por deno ubuntu (566 ms) y deno debian (735 ms) que quedaban descartadas antes por poseer muchas vulnerabilidades. Deno alpine vuelve a destacar en la ligereza donde supera a todas las imagenes (182.98 MB) excepto a la imagen base de alpine (164.46 MB) que quedaba descartada por empeorar en eficiencia.
Por tanto, se ha elgido deno:alpine por cumplir de forma estable con todos los criterios, destacando en todos.   

# Imagen docker

Una imagen Docker es un paquete reproducible que contiene el entorno necesario para ejecutar una aplicación o en el caso de nuestro proyecto, lanzar las pruebas de los tests de forma aislada y consistente. Esta imagen se construye siguiendo las buenas prácticas y sirve como plantilla para crear contenedores en los que la aplicación se puede probar.

## Criterios de elección

Los criterios impuestos para determinar la imagen más conveniente para el proyecto serán los siguientes:

- **Ligereza y eficiencia**: la imagen debe incluir únicamente los componentes esenciales para garantizar un funcionamiento correcto, reduciendo así su tamaño y el tiempo de construcción. Aunque una imagen ligera no siempre implica un despliegue más rápido, se prioriza igualmente que su rendimiento sea óptimo. Para ello se ha llevado a cabo un benchmark comparativo utilizando la herramienta Hyperfine.

- **Seguridad**: no presentar vulnerabilidades relevantes, garantizando así un entorno de pruebas fiable y seguro. Comprobado mediante la herramienta de Snyk.

## Análisis de ejecución de tests en contenedores Deno

Para ejecutar los tests en los distintos contenedores se ha realizado una configuración estandarizada de prueba con un usuario no-root con permisos limitados, una copia de archivos de configuración (deno.json y deno.lock) durante la construcción para ejecutar deno cache y usando volumenes de Docker para el código fuente y los datos y un entrypoint para ejecutar deno task test.

## Comparación objetiva con los criterios

Imagenes oficiales de Deno a considerar, [enlace a las imagenes docker](https://hub.docker.com/r/denoland/deno):

- [denoland/deno:alpine](https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile).
    - Sobre su seguridad, en el análisis con [snyk](snyk_alpine.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 182.98 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 4.874 s.

- [denoland/deno:debian](https://github.com/denoland/deno_docker/blob/main/debian.dockerfile)
    - Sobre su seguridad, en el análisis con [snyk](snyk_debian.png) se encontraron 23 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.29 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 4.866 s.

- [denoland/deno:ubuntu](https://github.com/denoland/deno_docker/blob/main/ubuntu.dockerfile)
    - Sobre su seguridad, en el análisis con [snyk](snyk_ubuntu.png) se encontraron 16 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 281.43 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 4.854 s.

Imagenes base a considerar:

- [Ubuntu](https://hub.docker.com/_/ubuntu).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_ubuntu.png) se encontraron 8 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.62 MB
    - En los [benchmarks](benchmark_general.md) se ha obtenido una media de 3.436 s.

- [Debian](https://hub.docker.com/_/debian).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_debian.png) se encontraron 23 vulnerabilidades.
    - Respecto al tamaño, el peso de la imagen final es de 280.51 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 3.243 s.

- [Alpine](https://hub.docker.com/_/alpine).
    - Sobre su seguridad, en el análisis con [snyk](snyk_pure_alpine.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 164.46 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 4.882 s.

Imagenes de terceros a considerar:

- [Tundra soft deno](https://hub.docker.com/r/tundrasoft/deno).
    - Sobre su seguridad, en el análisis con [snyk](snyk_tundra.png) no se encontró ninguna vulnerabilidad.
    - Respecto al tamaño, el peso de la imagen final es de 208.53 MB
    - En los [benchmarks](benchmark_completo.md) se ha obtenido una media de 4.768 s.

## Conclusión

Tras analizar todas las opciones en base a los criterios objetivos planteados, se ha llegado a la conclusión de elegir [denoland/deno:alpine](https://github.com/denoland/deno_docker/blob/main/alpine.dockerfile) ya que cumple uno de los criterios clave que es la incorporación de Deno en la imagen (opciones de iamgenes puras como alpine, debian y ubuntu no lo tienen). Además destaca por sus escasas vulnerabilidades siendo la opción más segura junto a la imagen base de alpine y tundra. También requiere de muy poco tamaño la imagen siendo la más ligera junto con la imagen pura de alpine. Finalmente, ofrece una velocidad aceptable en los test y aunque con respecto a las imagenes puras tarde un segundo más,sigue siendo la opción más adecuada por incluir Deno, su tamaño y seguridad.
FROM denoland/deno:alpine

# Creamos usuario y grupo dinámicos (Sin UID fijo para ser flexible)
RUN addgroup -S denogroup && adduser -S denouser -G denogroup 

WORKDIR /app

# Copiamos archivos de configuración
COPY --chown=denouser:denogroup deno.json deno.lock ./

USER denouser
ENV DENO_DIR=/deno-dir
# Instalamos dependencias como root para la caché y especificamos el directorio de caché.
# Además borramos los archivos de configuración
RUN deno cache deno.json && rm deno.json deno.lock || true 

# Los usuarios pueden usar la caché pre-instalada
USER root
RUN chmod -R 1777 /deno-dir

# Preparamos el directorio de trabajo para los tests
WORKDIR /app/test


# Cambiamos a usuario no root para ejecutar los tests
USER denouser
ENTRYPOINT ["deno", "task", "test"] 

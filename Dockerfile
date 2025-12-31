FROM denoland/deno:alpine

# Creamos usuario y grupo dinámicos (Sin UID fijo para ser flexible)
RUN addgroup -S denogroup && adduser -S denouser -G denogroup

WORKDIR /app

# Copiamos archivos de configuración
COPY --chown=denouser:denogroup deno.json deno.lock ./

# Instalamos dependencias como root para la caché

ENV DENO_DIR=/deno-dir
RUN deno cache deno.json || true

# Los usuarios pueden usar la caché pre-instalada

RUN chmod -R 777 /deno-dir

# Preparamos el directorio de trabajo para los tests
WORKDIR /app/test


ENTRYPOINT ["deno", "task", "test"]
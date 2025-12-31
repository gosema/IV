FROM denoland/deno:alpine

WORKDIR /app

# Copiamos archivos de configuración
COPY deno.json deno.lock ./

# Instalamos dependencias como root para la caché
RUN deno cache deno.json || true

# Los usuarios pueden usar la caché pre-instalada
RUN chmod -R 777 /deno-dir

# Preparamos el directorio de trabajo para los tests
WORKDIR /app/test

ENTRYPOINT ["deno", "task", "test"]
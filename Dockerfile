FROM denoland/deno:alpine

# Usuario con UID 1001 
RUN addgroup -S denogroup && adduser -S denouser -G denogroup

WORKDIR /app

# Copiamos archivos de configuración
COPY deno.json* deno.lock* ./

# Instalamos dependencias como root para la caché
RUN deno cache deno.json || true

# Ccualquier usuario pueda usar la caché pre-instalada
RUN chmod -R 777 /deno-dir

# Preparamos el directorio de trabajo para los tests
WORKDIR /app/test

USER denouser
ENTRYPOINT ["deno", "task", "test"]
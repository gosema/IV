FROM denoland/deno:alpine

# Usuario con UID 1001 
RUN addgroup -S denogroup && adduser -S denouser -u 1001 -G denogroup

WORKDIR /app

# Copiamos archivos de configuración
COPY deno.json* deno.lock* ./

# Instalamos dependencias como root para la caché
RUN deno cache deno.json || true

# Cambiamos permisos de la caché para el usuario 1001
RUN chown -R denouser:denogroup /deno-dir
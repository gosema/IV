#Archivo para objetivo 5

# Usa una imagen oficial ligera
FROM denoland/deno:alpine

# Configura el directorio de trabajo interno 
WORKDIR /app

# Copia archivos de configuración y código fuente
COPY deno.json .
COPY src ./src

# Copia la carpeta de datos para que los tests la encuentren en /app/data
COPY data ./data

# Redirige la caché de Deno
# Como el usuario 1001 no puede escribir en /app/test, le decimos a Deno
# que guarde su caché y compilaciones en /tmp, donde sí tiene permisos.
ENV DENO_DIR=/tmp/deno_cache

# Define el comando que se ejecutará automáticamente
CMD ["deno", "test", "--allow-all", "/app/test"]
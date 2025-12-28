FROM denoland/deno:alpine

# Usuario con UID 1001 
RUN addgroup -S denogroup && adduser -S denouser -u 1001 -G denogroup

WORKDIR /app
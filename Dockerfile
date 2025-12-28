FROM denoland/deno:alpine

RUN addgroup -S denogroup && adduser -S denouser -u 1001 -G denogroup
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm pure-alpine` | 4.882 ± 0.455 | 4.417 | 5.747 | 1.51 ± 0.22 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm pure-debian` | 3.243 ± 0.364 | 2.857 | 3.876 | 1.00 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm pure-ubuntu` | 3.436 ± 0.408 | 2.907 | 3.956 | 1.06 ± 0.17 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm deno-alpine` | 4.874 ± 0.336 | 4.439 | 5.274 | 1.50 ± 0.20 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm deno-debian` | 4.866 ± 0.393 | 4.328 | 5.536 | 1.50 ± 0.21 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm deno-ubuntu` | 4.854 ± 0.390 | 4.416 | 5.458 | 1.50 ± 0.21 |
| `docker compose -f .github/workflows/docker-compose.yml run -T --rm tundra-deno` | 4.768 ± 0.406 | 4.293 | 5.447 | 1.47 ± 0.21 |

# Resultados Globales de Benchmarking - Tests Unitarios Deno

Este documento recopila el rendimiento de los tests en diferentes contenedores.


### AnÃ¡lisis de: practicas-iv/pure:alpine
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 858.0 Â± 510.0 | 475.0 | 1502.8 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/pure:debian
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 1.315 Â± 0.448 | 0.921 | 1.852 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/pure:ubuntu
| Command | Mean [s] | Min [s] | Max [s] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 1.457 Â± 0.491 | 1.052 | 2.044 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/community:tundra
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 728.8 Â± 375.9 | 479.5 | 1392.5 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/deno:debian-custom
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 735.0 Â± 350.4 | 545.0 | 1360.0 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/deno:ubuntu-custom
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 566.0 Â± 24.1 | 536.5 | 595.7 | 1.00 |

---


### AnÃ¡lisis de: practicas-iv/deno:alpine-custom
| Command | Mean [ms] | Min [ms] | Max [ms] | Relative |
|:---|---:|---:|---:|---:|
| `docker exec -w /app/test bench_temp deno task test` | 790.2 Â± 459.2 | 558.9 | 1610.9 | 1.00 |

---


//Tests para validar la lógica de negocio
import { describe, it } from "testing/bdd";
import { expect } from "testing/expect";
import { extraerSemestre } from "../src/scraper_semestre.ts"
import { ERRORES } from '../src/errores.ts';

const pathCalculo = "./data/Cálculo _ Universidad de Granada.html";
const pathMetodos = "./data/Métodos Numéricos I _ Grado en Matemáticas.html";
const pathMP = "./data/Metodología de la Programación _ Universidad de Granada.html";
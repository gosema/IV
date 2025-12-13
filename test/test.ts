//Tests para validar la lógica de negocio
import { describe, it } from "testing/bdd";
import { expect } from "testing/expect";
import { extraerSemestre } from "../src/scraper_semestre.ts"
import { ERRORES } from '../src/errores.ts';

const pathCalculo = "./data/Cálculo _ Universidad de Granada.html";
const pathMetodos = "./data/Métodos Numéricos I _ Grado en Matemáticas.html";
const pathMP = "./data/Metodología de la Programación _ Universidad de Granada.html";

function leerHtmlTest(path: string): string {
    try {
        return Deno.readTextFileSync(path);
    } catch (e) {
        throw new Error(`${ERRORES.ARCHIVO_NO_ENCONTRADO} -> ${path}`);
    }
}

const htmlCalculo = leerHtmlTest(pathCalculo);
const htmlMetodos = leerHtmlTest(pathMetodos);
const htmlMP = leerHtmlTest(pathMP);

const SEMESTRE_1 = 1;
const SEMESTRE_2 = 2;

describe("Semestre - Tests", () => {

    describe("Happy Path: Con HTML real de la UGR", () => {

        it("Debe detectar correctamente el semestre 1 basado en el HTML", () => {
            const semestreDetectado = extraerSemestre(htmlCalculo);
            expect(semestreDetectado).toBe(SEMESTRE_1);
        });
        it("Metodología Programación: Debe detectar el 2 semestre correctamente", () => {
                    const semestreDetectado = extraerSemestre(htmlMP);
                    expect(semestreDetectado).toBe(SEMESTRE_2);
        });
        it("Métodos Numéricos I: Debe detectar el semestre de otro facultad distinta correctamente", () => {
            const semestreDetectado = extraerSemestre(htmlMetodos);
            expect(semestreDetectado).toBe(SEMESTRE_2);
        });

    });

    describe("Sad Path: Manejo de errores con HTML inválido", () => {

        it("Debe lanzar error si no encuentra la tabla del semestre", () => {
            // HTML sin la tabla de semestre
            const htmlSinTabla = `
                <link rel="canonical" href="https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo" />
                <h1>Información general</h1>
                <p>No hay tabla aquí</p>
            `;

            expect(() => extraerSemestre(htmlSinTabla))
                .toThrow(ERRORES.SEMESTRE_NO_DETECTADO);
        });

        it("Debe lanzar error si el texto del semestre no es válido (ej: 'Anual')", () => {
            // HTML con estructura correcta, pero contenido de celda no mapeado
            const htmlSemestreInvalido = `
                <link rel="canonical" href="https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo" />
                <table><tr><th>Semestre</th><td>Anual</td></tr></table>
            `;

            expect(() => extraerSemestre(htmlSemestreInvalido))
                .toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });

        it("Debe lanzar error específico si la celda del semestre está vacía", () => {
            // HTML con estructura correcta, pero contenido vacio de semestre
            const htmlVacio = `
                <table><tr><th>Semestre</th><td>   </td></tr></table>
            `;

            expect(() => extraerSemestre(htmlVacio))
                .toThrow(ERRORES.SEMESTRE_VACIO);
        });

        it("Debe lanzar error si el semestre aparece como dígito numérico ('1' o '2') en vez de texto", () => {
            // Simulamos el caso prohibido
            const htmlNumerico1 = `<table><tr><th>Semestre</th><td>1</td></tr></table>`;
            expect(() => extraerSemestre(htmlNumerico1)).toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });
        it("Debe lanzar error si el texto tiene espacios intercalados anómalos (ej: 'P r i m e r o')", () => {
            // Este caso simula un error de maquetación o un intento de obfuscación
            const htmlEspaciado = `<table><tr><th>Semestre</th><td>P r i m e r o</td></tr></table>`;
            expect(() => extraerSemestre(htmlEspaciado)).toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });
        it("Debe lanzar error si la palabra clave está oculta/pegada a caracteres basura (ej: 'jhdkhdcprimeroasbfje')", () => {
            // Este caso verifica que no aceptemos "falsos positivos" dentro de palabras largas sin sentido
            const htmlBasura = `<table><tr><th>Semestre</th><td>jhdkhdcprimeroasbfje</td></tr></table>`;
            expect(() => extraerSemestre(htmlBasura)).toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });
        it("Debe lanzar error si 'primero' está rodeado de texto basura (Validación Estricta)", () => {
            // Caso: La palabra existe, pero hay "ruido" alrededor.
            const htmlSucio = `<table><tr><th>Semestre</th><td>jhdkhdc primero asbfje</td></tr></table>`;
            expect(() => extraerSemestre(htmlSucio)).toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });
        it("Debe lanzar error si aparecen ambos semestres concatenados con espacio ('Primero Segundo')", () => {
            // Caso ambiguo: Parece que incluye ambos, por lo que no es válido.
            const htmlAmbiguo = `<table><tr><th>Semestre</th><td>Primero Segundo</td></tr></table>`;

            // Al limpiar queda "primero segundo", que no es igual a "primero" ni a "segundo".
            expect(() => extraerSemestre(htmlAmbiguo)).toThrow(ERRORES.SEMESTRE_NO_VALIDO);
        });
    });


});
import { describe, it } from "testing/bdd";
import { expect } from "testing/expect";
import { Asignatura } from "../src/asignatura.ts";

const path = "./data/Cálculo _ Universidad de Granada.html";
const htmlContent = Deno.readTextFileSync(path);
const asignatura = new Asignatura(htmlContent);

describe("Asignatura Parser", () => {

    it("Debe detectar correctamente el semestre (1 o 2) basado en el HTML", () => {
        const primero = 1;
        const segundo = 2;
        // Verificamos que haya al menos una clase teórica o un grupo de prácticas
        const hayClases = asignatura.clasesTeoricas.length > 0 || asignatura.clasesPracticas.size > 0;
        expect(hayClases).toBe(true);

        let semestreDetectado: number | undefined;
        //Comprobamos el semestre de la primera clase de la asignatura
        if (asignatura.clasesTeoricas.length > 0) {
            semestreDetectado = asignatura.clasesTeoricas[0].semestre;
        }

        // Comprobamos que el valor sea estrictamente 1 o 2
        expect([primero, segundo]).toContain(semestreDetectado);
        // Comprobamos que coincida con el HTML proporcionado (primero)
        expect(semestreDetectado).toBe(primero);
    });

    it("Debe extraer la URL canónica correcta y con formato válido", () => {
        // La url esperada del html de la web
        const urlEsperada = "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo";
        // La url debe seguir el formato de la ugr
        const formatoGrados = /^https:\/\/www\.ugr\.es\/estudiantes\/grados\//;

        expect(asignatura.url).toBe(urlEsperada);
        expect(asignatura.url).toMatch(formatoGrados);
    });

    it("Debe asignar días válidos (L, M, X, J, V) y coincidir con el horario del HTML", () => {
        const diasValidos = ['L', 'M', 'X', 'J', 'V'];

        // Revisar que las clases de teoría tenga días válidos
        asignatura.clasesTeoricas.forEach(clase => {
            expect(diasValidos).toContain(clase.dia);
        });

        // Revisar que las clases de práctica tengan días válidos
        for (const clasesGrupo of asignatura.clasesPracticas.values()) {
            clasesGrupo.forEach(clase => {
                expect(diasValidos).toContain(clase.dia);
            });
        }

        // Grupo 6 (Práctica) aparece en el HTML en "clase dia-5" (Viernes)
        const clasesG6 = asignatura.clasesPracticas.get("6");
        expect(clasesG6).toBeDefined();
        // Verificamos que al menos una de sus clases sea Viernes
        expect(clasesG6![0].dia).toBe('V');
    });

    it("Debe extraer horarios válidos (formato [h, m]), lógicos y coincidir con el HTML", () => {

        // Función auxiliar para validar que una hora es "real" (0-23h, 0-59m)
        const esHoraValida = (hora: [number, number]) => {
            const [h, m] = hora;
            // Validamos tipos
            expect(typeof h).toBe("number");
            expect(typeof m).toBe("number");
            // Validamos rangos lógicos 
            expect(h).toBeGreaterThanOrEqual(0);
            expect(h).toBeLessThan(24);
            expect(m).toBeGreaterThanOrEqual(0);
            expect(m).toBeLessThan(60);
        };

        // Recopilamos todas las clases 
        const todasLasClases = [
            ...asignatura.clasesTeoricas,
            ...Array.from(asignatura.clasesPracticas.values()).flat()
        ];

        todasLasClases.forEach(clase => {
            //Validar rangos numéricos
            esHoraValida(clase.horario_inicio);
            esHoraValida(clase.horario_final);

            //Validar coherencia temporal (inicio < fin)
            const inicioMinutos = clase.horario_inicio[0] * 60 + clase.horario_inicio[1];
            const finMinutos = clase.horario_final[0] * 60 + clase.horario_final[1];
            expect(finMinutos).toBeGreaterThan(inicioMinutos);
        });

        // CASO Grupo 6 Viernes de 09:30 a 10:30
        const grupo6 = asignatura.clasesPracticas.get("6");
        expect(grupo6).toBeDefined();
        const claseG6Viernes = grupo6!.find(c => c.dia === 'V');
        expect(claseG6Viernes).toBeDefined();
        expect(claseG6Viernes!.horario_inicio).toEqual([9, 30]);
        expect(claseG6Viernes!.horario_final).toEqual([10, 30]);

    });

    it("Debe clasificar correctamente Teoría (Letras) y Prácticas (Números) según el HTML", () => {
        // Teoría: Todo deben ser Letras (A, B, C...)
        asignatura.clasesTeoricas.forEach(clase => {
            // Regex: Una sola letra mayúscula o minúscula
            expect(clase.grupo).toMatch(/^[a-zA-Z]$/);
            // Verificamos que NO sea un número parseable
            expect(isNaN(Number(clase.grupo))).toBe(true);
        });

        // Prácticas: Todo deben ser Números (1, 2, 14...)
        // Las claves del mapa son los nombres de los grupos
        for (const nombreGrupo of asignatura.clasesPracticas.keys()) {
            // Regex: Uno o más dígitos
            expect(nombreGrupo).toMatch(/^\d+$/);
            // Verificamos que sea un número válido
            expect(isNaN(Number(nombreGrupo))).toBe(false);
        }
        
        // CASO Grupo de Teoría "B" (Existe en el HTML)
        const existeTeoriaB = asignatura.clasesTeoricas.some(c => c.grupo === "B");
        expect(existeTeoriaB).toBe(true);

        // CASO Grupo de Práctica "14" (Existe en el HTML)
        expect(asignatura.clasesPracticas.has("14")).toBe(true);
    });

});
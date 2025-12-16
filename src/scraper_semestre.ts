//archivo para funciones de scrapeado de la lógica de negocio
import { ERRORES } from "./errores.ts";
import { Semestre } from "./clase.ts";

/**
     * Coordina la extracción y validación del semestre.
*/
export function extraerSemestre(html: string): Semestre {
    // 1. Extraemos el string crudo del HTML
    const textoRaw = obtenerTextoSemestreRaw(html);

    // 2. Validamos y convertimos al tipo Semestre
    return parsearSemestre(textoRaw);
}

/**
     * Responsabilidad: Búsqueda en el HTML (Scraping puro).
     * Busca la celda que contiene el texto del semestre.
     * Busca la estructura: `<tr><th class="...">Semestre</th><td>Primero</td></tr>`
     * La expresión regular busca la palabra "Semestre" en una celda de tabla,
     * salta toda la información hasta `<td>` y extrae su contenido hasta `</td>`,
     * ignorando espacios en blanco alrededor o saltos de línea.
*/
function obtenerTextoSemestreRaw(html: string): string {
    const patron =
        "Semestre</th>" +   // 1.Busca el texto 'Semestre' y el cierre de su etiqueta
        "\\s*" +            // 2.Salta cualquier espacio o salto de línea 
        "<td>" +            // 3.Encuentra la celda de datos
        "\\s*" +            // 4.Ignora espacios vacíos al inicio de la celda
        "([\\s\\S]*?)" +    // 5.[\s\S] recoge todo el contenido 
        "\\s*" +            // 6.Ignora espacios al final
        "</td>";            // 7.Cierre de la celda

    // Creamos la RegExp con el string y la flag 'i' para mayúsuclas y minúsculas
    const regexSemestre = new RegExp(patron, "i");
    const matchSemestre = regexSemestre.exec(html);
    if (!matchSemestre) {
        throw new Error(ERRORES.SEMESTRE_NO_DETECTADO);
    }
    return matchSemestre[1];
}

/**
 * Responsabilidad: Reglas de Negocio y Validación.
 * Convierte el texto "primero"/"segundo" al tipo 1|2.
 * Lanza error si el valor no es el esperado.
 */
function parsearSemestre(texto: string): Semestre {
    //Verificamos si vacio, null o undefined y se eliminan espacios y mayusculas
    const textoLimpio = texto?.trim().toLowerCase();

    if (!textoLimpio) {
        throw new Error(ERRORES.SEMESTRE_VACIO);
    }

    if (textoLimpio === "primero") return 1;
    if (textoLimpio === "segundo") return 2;

    throw new Error(ERRORES.SEMESTRE_NO_VALIDO);

}
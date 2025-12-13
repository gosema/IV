//archivo para funciones de scrapeado de la lógica de negocio

/**
     * Responsabilidad: Búsqueda en el HTML (Scraping puro).
     * Busca la celda que contiene el texto del semestre.
     * Busca la estructura: `<tr><th class="...">Semestre</th><td>Primero</td></tr>`
     * La expresión regular busca la palabra "Semestre" en una celda de tabla,
     * salta toda la información hasta `<td>` y extrae su contenido hasta `</td>`,
     * ignorando espacios en blanco alrededor o saltos de línea.
*/
function obtenerTextoSemestreRaw(html: string): string {
    const regexSemestre = /Semestre<\/th>[^]*?<td>\s*([\s\S]*?)\s*<\/td>/i;
    const matchSemestre = regexSemestre.exec(html);

    const contenido = matchSemestre[1] ? matchSemestre[1] : "";
    return contenido.trim().toLowerCase();
}
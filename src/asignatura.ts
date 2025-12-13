// Clase que define la entidad
import { Clase } from "./clase.ts";

type DiaLectivo= 'L' | 'M' | 'X' | 'J' | 'V';
type Semestre= 1|2;

interface DatosClaseRaw {
    dia: number;
    grupo: string;
    inicio: string;
    fin: string;
}

export class Asignatura {
    // Ejemplo: "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo"
    url: string;
    clasesPracticas: Map<string, Clase[]>;
    clasesTeoricas: Clase[];

    constructor(htmlContent: string) {
        //Extraemos los datos usando los métodos auxiliares
        const urlDetectada = Asignatura.extraerUrl(htmlContent);
        const semestreDetectado = Asignatura.extraerSemestre(htmlContent);
        const datosRaw = Asignatura.extraerDatosCrudos(htmlContent);
        
        // 'practicas' aquí es un Array de tuplas: [ ["Grupo1", objClase], ["Grupo1", objClase2] ]
        const { teoricas, practicas } = Asignatura.clasificarClases(datosRaw, semestreDetectado);

        // Asignamos los valores simples
        this.url = urlDetectada;
        this.clasesTeoricas = teoricas;

        // Inicializamos el mapa vacío
        this.clasesPracticas = new Map<string, Clase[]>();

        // Recorremos el array y llenamos el mapa
        for (const [nombreGrupo, clase] of practicas) {
            // Si el grupo no existe en el mapa, lo creamos con un array vacío
            if (!this.clasesPracticas.has(nombreGrupo)) {
                this.clasesPracticas.set(nombreGrupo, []);
            }
            // Añadimos la clase al grupo correspondiente
            this.clasesPracticas.get(nombreGrupo)?.push(clase);
        }
    }
    
    private static extraerUrl(html: string): string {
        // Extracción de la URL
        // Buscamos: <link rel="canonical" href="LA_URL_AQUI" />
        // La expresion regular busca en link el atributo canonical y extrae todo su href
        // hasta llegar al siguiente comillas dobles.
        const regexUrl = /<link\s+rel="canonical"\s+href="(.*?)"/i;
        const matchUrl = regexUrl.exec(html);
        return matchUrl ? matchUrl[1] : "";
    }

    private static extraerSemestre(html: string): Semestre {
        //Extracción del Semestre
        // <tr><th class="...">Semestre</th><td>Primero</td></tr>
        //La expresion regular busca la palabra Semestre en una celda de tabla y 
        //salta toda la información hasta <td> y extrae su contenido hasta </td>
        // ignorando espacios en blanco alrededor o saltos de línea.
        const regexSemestre = /Semestre<\/th>[^]*?<td>\s*([\s\S]*?)\s*<\/td>/i;
        const matchSemestre = regexSemestre.exec(html);
        
        if (matchSemestre && matchSemestre[1]) {
            const t = matchSemestre[1].trim().toLowerCase();
            return (t.includes("segundo") || t.includes("2")) ? 2 : 1;
        }
        return 1;
    }

    private static extraerDatosCrudos(html: string): DatosClaseRaw[] {
        const datos: DatosClaseRaw[] = [];
    // Extracción de las Clases 
    //<div class="clase dia-5" ...>   <-- Captura "5" (Viernes)
    //...
    //<div class="grupo"><span>Grupo:</span> 6</div>  <-- Captura "6"
    //<div class="otros-datos">
    //    <div>Aula: 22</div>
    //    ...
    //    <div>Horario: De 09:30 a 10:30</div> <-- Captura "09:30" y "10:30"
    //</div>
    //</div>
    // La expresión regular busca todas las class que tenga una clase "clase dia-X" para obtener el día,
    // después avanzar hasta encontrar la clase grupo y extraer su contenido tras un span y al final un div
    // Por útimo avanza hasta encontrar las palabras de "Horario: De " en un div y extrae las horas de inicio y fin.
        const regexClases = /class="clase dia-(\d)"[^]*?Grupo:<\/span>\s*(.*?)<\/div>[^]*?Horario: De (\d{1,2}:\d{2}) a (\d{1,2}:\d{2})/g;
        
        let match;
        while ((match = regexClases.exec(html)) !== null) {
            datos.push({
                dia: parseInt(match[1]),
                grupo: match[2].trim(),
                inicio: match[3],
                fin: match[4]
            });
        }
        return datos;
    }

    private static clasificarClases(datosRaw: DatosClaseRaw[], semestre: Semestre) {
        const teoricas: Clase[] = [];
        const practicas: [string, Clase][] = [];

        for (const dato of datosRaw) {
            const dia = Asignatura.mapDiaNumToLetra(dato.dia);
            const inicio = Asignatura.parseHora(dato.inicio);
            const fin = Asignatura.parseHora(dato.fin);
            
            const nuevaClase = new Clase(dato.grupo, dia, semestre, inicio, fin);
            const esPractica = !isNaN(Number(dato.grupo)); 

            if (esPractica) {
                practicas.push([dato.grupo, nuevaClase]);
            } else {
                teoricas.push(nuevaClase);
            }
        }
        return { teoricas, practicas };
    }

    private static mapDiaNumToLetra(num: number): DiaLectivo {
        switch (num) {
            case 1: return 'L';
            case 2: return 'M';
            case 3: return 'X';
            case 4: return 'J';
            case 5: return 'V';
            default: return 'L';
        }
    }

    private static parseHora(horaStr: string): [number, number] {
        const [h, m] = horaStr.split(':').map(Number);
        return [h, m];
    }
}
import { Clase } from "./clase.ts";
// Clase que define la entidad
class Asignatura {
    // Ejemplo: "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo"
    url: string;
    clasesPracticas: Map<string, Clase[]>;
    clasesTeoricas: Clase[];

    constructor(url: string, clasesPracticas: [string, Clase[]][], clasesTeoricas: Clase[]) {
        this.url = url;
        this.clasesPracticas = new Map(clasesPracticas);
        this.clasesTeoricas = clasesTeoricas;
    }
}

// Clase que define la entidad
class Asignatura {
    // Ejemplo: "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo"
    id_url: string;
    clasesPracticas: Map<string, Clase>;
    clasesTeoricas: Clase[];

    constructor(id_url: string, clasesPracticas: [string, Clase][], clasesTeoricas: Clase[]) {
        this.id_url = id_url;
        this.clasesPracticas = new Map(clasesPracticas);
        this.clasesTeoricas = clasesTeoricas;
    }
}
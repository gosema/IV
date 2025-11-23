// Clase que define la entidad
class Asignatura {
    // Sugerencia: Usar la URL de la asignatura en la web de la universidad como ID
    // Dicha URL es única para cada asignatura.
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
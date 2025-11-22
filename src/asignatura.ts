// Clase que define la entidad
class Asignatura {
    // Sugerencia: Usar la URL de la asignatura en la web de la universidad como ID
    // Dicha URL es única para cada asignatura.
    // Ejemplo: "https://www.ugr.es/estudiantes/grados/grado-ingenieria-informatica/calculo"
    id: string;
    clasesPracticas: Map<string, Clase>;
    clasesTeoricas: Clase[];

    constructor(id: string, clasesPracticas: [string, Clase][], clasesTeoricas: Clase[]) {
        this.id = id;
        this.clasesPracticas = new Map(clasesPracticas);
        this.clasesTeoricas = clasesTeoricas;
    }
}
// Clase que define la entidad
class Asignatura {
    id: string;
    clasesPracticas: Map<string, Clase>;
    clasesTeoricas: Clase[];

    constructor(id: string, clasesPracticas: [string, Clase][], clasesTeoricas: Clase[]) {
        this.id = id;
        this.clasesPracticas = new Map(clasesPracticas);
        this.clasesTeoricas = clasesTeoricas;
    }
}

export type Semestre= 1|2;
type DiaLectivo= 'L' | 'M' | 'X' | 'J' | 'V';

export class Clase {
    grupo: string;
    dia: DiaLectivo;
    semestre: Semestre;
    horario_inicio: [number, number];
    horario_final: [number, number];

    constructor(grupo: string, dia: DiaLectivo, semestre: Semestre, horario_inicio: [number, number], horario_final: [number, number]) {
        this.grupo = grupo;
        this.dia = dia;
        this.semestre = semestre;
        this.horario_inicio = horario_inicio;
        this.horario_final = horario_final;
    }
}

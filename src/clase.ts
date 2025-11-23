
type Semestre= 1|2;
type DiaLectivo= 'L' | 'M' | 'X' | 'J' | 'V';

class Clase {
    grupo: string;
    dia: DiaLectivo;
    semestre: Semestre;
    horario_inicio: string;
    horario_final: string;

    constructor(grupo: string, dia: DiaLectivo, semestre: Semestre, horario_inicio: string, horario_final: string) {
        this.grupo = grupo;
        this.dia = dia;
        this.semestre = semestre;
        this.horario_inicio = horario_inicio;
        this.horario_final = horario_final;
    }
}
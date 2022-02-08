import { Empleado } from "./empleado";

export class Mecanico extends Empleado {
    _tipoMec: string;
    _horasExtra: Number;


    constructor(id: string, nombre: string, sueldo: number, tipoEmpleado: string, tipoMec: string, horasExtras:Number) {
        
        super(id,nombre,sueldo,tipoEmpleado);
        this._tipoMec = tipoMec;
        this._horasExtra = horasExtras;
    }

    //     GETTERS AND SETTERS      //

    get tipoMec(){
        return this._tipoMec
    }

    get horasExtra(){
        return this._horasExtra
    }
}
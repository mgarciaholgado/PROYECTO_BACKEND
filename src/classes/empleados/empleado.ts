export abstract class Empleado {
    private _id: string; 
    private _nombre: string;
    private _sueldo: number;
    private _tipoEmpleado: string;



    constructor(id: string, nombre: string, sueldo: number, tipoEmpleado: string) {
        this._id = id;
        this._nombre = nombre;
        this._sueldo = sueldo;
        this._tipoEmpleado = tipoEmpleado;
    }

    //     GETTERS AND SETTERS      //

    get id() {
        return this._id
    }
    get nombre() {
        return this._nombre
    }
    get sueldo() {
        return this._sueldo
    }
    get tipoMec(){
        return this._tipoEmpleado
    }
}
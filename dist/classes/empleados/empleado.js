"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleado = void 0;
class Empleado {
    constructor(id, nombre, sueldo, tipoEmpleado) {
        this._id = id;
        this._nombre = nombre;
        this._sueldo = sueldo;
        this._tipoEmpleado = tipoEmpleado;
    }
    //     GETTERS AND SETTERS      //
    get id() {
        return this._id;
    }
    get nombre() {
        return this._nombre;
    }
    get sueldo() {
        return this._sueldo;
    }
    get tipoMec() {
        return this._tipoEmpleado;
    }
}
exports.Empleado = Empleado;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mecanico = void 0;
const empleado_1 = require("./empleado");
class Mecanico extends empleado_1.Empleado {
    constructor(id, nombre, sueldo, tipoEmpleado, tipoMec, horasExtras) {
        super(id, nombre, sueldo, tipoEmpleado);
        this._tipoMec = tipoMec;
        this._horasExtra = horasExtras;
    }
    //     GETTERS AND SETTERS      //
    get tipoMec() {
        return this._tipoMec;
    }
    get horasExtra() {
        return this._horasExtra;
    }
}
exports.Mecanico = Mecanico;

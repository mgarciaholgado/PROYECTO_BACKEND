"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Empleados = void 0;
const mongoose_1 = require("mongoose");
const empleadoSchema = new mongoose_1.Schema({
    _id: {
        type: String,
        required: true,
        unique: true
    },
    _nombre: {
        type: String,
    },
    _sueldo: {
        type: Number,
    },
    _tipoEmpleado: {
        type: String,
    },
    _empresaContratista: {
        type: String,
    },
    _tipoMec: {
        type: String,
    },
    _horasExtra: {
        type: Number,
    }
});
exports.Empleados = (0, mongoose_1.model)("empleados", empleadoSchema);

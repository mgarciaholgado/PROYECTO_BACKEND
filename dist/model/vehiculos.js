"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
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
exports.Vehiculos = (0, mongoose_1.model)("vehiculos", vehiculoSchema);

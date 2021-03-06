"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vehiculos = void 0;
const mongoose_1 = require("mongoose");
const vehiculoSchema = new mongoose_1.Schema({
    _matricula: {
        type: String,
    },
    _marca: {
        type: String,
    },
    _color: {
        type: String,
    },
    _tipoVehiculo: {
        type: String,
    },
});
exports.Vehiculos = (0, mongoose_1.model)("vehiculos", vehiculoSchema);

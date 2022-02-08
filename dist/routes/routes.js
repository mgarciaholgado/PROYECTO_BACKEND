"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const database_1 = require("../database/database");
const empleados_1 = require("../model/empleados");
class DatoRoutes {
    constructor() {
        this.getEmpleados = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const nombre = req.params.nombre;
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield empleados_1.Empleados.find({});
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this.agregarEmpleado = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { id, nombre, sueldo, tipoEmpleado, tipoMec, horasExtra } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _id: id,
                _nombre: nombre,
                _sueldo: sueldo,
                _tipoEmpleado: tipoEmpleado,
                _tipoMec: tipoMec,
                _horasExtra: horasExtra,
            };
            const oSchema = new empleados_1.Empleados(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    misRutas() {
        this._router.get('/');
        this._router.get('/empleados/todos', this.getEmpleados);
        this._router.post('/empleados', this.agregarEmpleado);
    }
}
const obj = new DatoRoutes();
obj.misRutas();
exports.routes = obj.router;

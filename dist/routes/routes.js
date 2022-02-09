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
const reparacion_1 = require("../model/reparacion");
class IndexRoutes {
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
            const { nombre, sueldo, tipoEmpleado, tipoMec, horasExtra } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
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
        this.agregarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            const { nombre, coste } = req.body;
            yield database_1.db.conectarBD();
            const dSchema = {
                _nombreReparacion: nombre,
                _CosteBase: coste
            };
            const oSchema = new reparacion_1.Reparaciones(dSchema);
            yield oSchema.save()
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.modificarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const name = req.params.nombre;
            const { nombre, coste } = req.body;
            yield reparacion_1.Reparaciones.findOneAndUpdate({ _nombreReparacion: name }, { _nombreReparacion: nombre, _costeBase: coste, }, { new: true })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.borrarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD();
            const name = req.params.nombre;
            yield reparacion_1.Reparaciones.findOneAndDelete({ _nombreReparacion: name })
                .then((doc) => res.send(doc))
                .catch((err) => res.send('Error: ' + err));
            yield database_1.db.desconectarBD();
        });
        this.listarReparacion = (req, res) => __awaiter(this, void 0, void 0, function* () {
            yield database_1.db.conectarBD()
                .then((mensaje) => __awaiter(this, void 0, void 0, function* () {
                const query = yield reparacion_1.Reparaciones.find();
                res.json(query);
            }))
                .catch((mensaje) => {
                res.send(mensaje);
            });
            yield database_1.db.desconectarBD();
        });
        this._router = (0, express_1.Router)();
    }
    get router() {
        return this._router;
    }
    routes() {
        this._router.get('/');
        this._router.get('/empleados/todos', this.getEmpleados);
        this._router.post('/empleados', this.agregarEmpleado);
        this._router.post('/addReparacion', this.agregarReparacion);
        this._router.put('/updateReparacion/:nombre', this.modificarReparacion);
        this._router.delete('/deleteReparacion/:nombre', this.borrarReparacion);
        this._router.get('/verReparacion', this.listarReparacion);
    }
}
const indexRoutes = new IndexRoutes();
indexRoutes.routes();
exports.routes = indexRoutes.router;

import { Schema, model } from "mongoose";
import { Reparaciones } from './reparacion';

const incidenciasSchema = new Schema({
  _idIncidencia: {
        type: String,
        required: true,
        unique: true
    },
  _idEmpleado: {
    type: Number
  },
  _Matricula: {
    type: String
  },
  _Fecha: {
    type: Date,
  },

  _Reparaciones: {
      type: Array
  }
});

export const Incidencias = model("incidencias", incidenciasSchema);
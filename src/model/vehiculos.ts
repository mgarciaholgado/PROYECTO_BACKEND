import { Schema, model } from "mongoose";

const vehiculoSchema = new Schema({
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
  _horasExtra:{
      type: Number,
  }
  
  
});
export const Vehiculos = model("vehiculos", vehiculoSchema);

export type tMoto = {
  _id: string;
  _nombre: string;
  _sueldo: number;
  _tipoEmpleado: string;
  _tipoMec: string;
  _horasExtra: number;
};

export type tCoche = {
    _id: string;
    _nombre: string;
    _sueldo: number;
    _tipoEmpleado: string;
    _empresaContratista: string;
  };
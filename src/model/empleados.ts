import { Schema, model } from "mongoose";

const empleadoSchema = new Schema({
  /*_id: {
        type: String,
        required: true,
        unique: true
    },*/
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
export const Empleados = model("empleados", empleadoSchema);

export type tMecanico = {
  _id: string;
  _nombre: string;
  _sueldo: number;
  _tipoEmpleado: string;
  _tipoMec: string;
  _horasExtra: number;
};

export type tLimpiador = {
    _id: string;
    _nombre: string;
    _sueldo: number;
    _tipoEmpleado: string;
    _empresaContratista: string;
  };



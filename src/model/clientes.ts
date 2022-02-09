import { Schema, model } from "mongoose";

const clientesSchema = new Schema({
  _dni: {
        type: String,
        required: true,
        unique: true
    },
  _nombre: {
    type: String
  },
  _telefono: {
    type: Number
  },
  _correo: {
    type: Number,
  }
  
});

export const Clientes = model("clientes", clientesSchema);
import { Schema, model } from "mongoose";

const reparacionesSchema = new Schema({
  _idReparacion: {
        type: String,
        required: true,
        unique: true
    },
  _nombreReparacion: {
    type: String
  },
  _CosteBase: {
    type: Number
  }
  
});

export const Reparaciones = model("reparaciones", reparacionesSchema);
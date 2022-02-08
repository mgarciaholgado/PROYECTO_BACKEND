import { Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Empleados } from '../model/empleados'
import { Vehiculos } from '../model/vehiculos'


class DatoRoutes {
    private _router: Router

    constructor() {
        this._router = Router()
    }
    get router() {
        return this._router
    }

    private getEmpleados = async (req:Request, res: Response) => {
        const nombre = req.params.nombre
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Empleados.find({})
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }

    private agregarEmpleado = async (req: Request, res: Response) => {
        const { id, nombre, sueldo, tipoEmpleado, tipoMec, horasExtra} = req.body
        await db.conectarBD()
        const dSchema=
        {
            _id: id,
            _nombre: nombre,
            _sueldo: sueldo,
            _tipoEmpleado: tipoEmpleado,
            _tipoMec: tipoMec,
            _horasExtra: horasExtra,
        }
        const oSchema = new Empleados(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }



    misRutas() {

        this._router.get('/', )

        this._router.get('/empleados/todos', this.getEmpleados)
        this._router.post('/empleados', this.agregarEmpleado)

        
    }
}

const obj = new DatoRoutes()
obj.misRutas()
export const routes = obj.router
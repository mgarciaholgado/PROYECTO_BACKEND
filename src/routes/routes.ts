import { Request, Response, Router } from 'express'
import { db } from '../database/database'
import { Empleados } from '../model/empleados'
import { Reparaciones } from '../model/reparacion'
import { Vehiculos } from '../model/vehiculos'


class IndexRoutes {
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
        const { nombre, sueldo, tipoEmpleado, tipoMec, horasExtra} = req.body
        await db.conectarBD()
        const dSchema=
        {
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


    private agregarReparacion = async (req: Request, res: Response) => {
        const { nombre, coste } = req.body
        await db.conectarBD()
        const dSchema=
        {
            _nombreReparacion: nombre,
            _CosteBase: coste
            
        }
        const oSchema = new Reparaciones(dSchema)
        await oSchema.save()
            .then( (doc: any) => res.send(doc))
            .catch( (err: any) => res.send('Error: '+ err)) 
        await db.desconectarBD()
    }

    private modificarReparacion = async (req: Request, res: Response) => {
        await db.conectarBD()
        const name = req.params.nombre
        const { nombre, coste } = req.body
        await Reparaciones.findOneAndUpdate({ _nombreReparacion: name },{_nombreReparacion: nombre,_costeBase: coste,},{new: true}
        )
            .then((doc: any) => res.send(doc))
            .catch((err: any) => res.send('Error: ' + err))

        await db.desconectarBD()
    }


    private borrarReparacion = async (req: Request, res: Response) => {
            await db.conectarBD()
            const name = req.params.nombre
            await Reparaciones.findOneAndDelete({ _nombreReparacion: name })
                .then((doc: any) => res.send(doc))
                .catch((err: any) => res.send('Error: ' + err))
    
            await db.desconectarBD()
        }

    private listarReparacion = async (req: Request, res: Response) => {
        await db.conectarBD()
        .then(async (mensaje) => {
            const query = await Reparaciones.find()
            res.json(query)
        })
        .catch((mensaje) => {
            res.send(mensaje)
        })
        await db.desconectarBD()
    }
    


    routes() {

        this._router.get('/', )
        this._router.get('/empleados/todos', this.getEmpleados)
        this._router.post('/empleados', this.agregarEmpleado)
        this._router.post('/addReparacion', this.agregarReparacion)
        this._router.put('/updateReparacion/:nombre', this.modificarReparacion)
        this._router.delete('/deleteReparacion/:nombre', this.borrarReparacion)
        this._router.get('/verReparacion', this.listarReparacion)

        
    }
}

const indexRoutes = new IndexRoutes()
indexRoutes.routes()
export const routes = indexRoutes.router
import { Router } from 'express';
import EtiquetaController from '../Controller/Etiqueta/CriarEtiquetaController';
import EtiquetaControllerListar from '../Controller/Etiqueta/ListarEtiquetasController'
import EtiquetaControllerEditar from '../Controller/Etiqueta/AlterarEtiquetasController'
import EtiquetaControllerDeletar from '../Controller/Etiqueta/DeletarEtiquetasController'

const etiquetaRouter = Router();
const etiquetaControllerCriar = new EtiquetaController();
const etiquetaControllerListar = new EtiquetaControllerListar()
const etiquetaControllerEditar = new EtiquetaControllerEditar()
const etiquetaControllerDeletar = new EtiquetaControllerDeletar()

etiquetaRouter.post('/', etiquetaControllerCriar.criar);
etiquetaRouter.get('/', etiquetaControllerListar.listar)
etiquetaRouter.put('/:id', etiquetaControllerEditar.editar)
etiquetaRouter.delete('/:id', etiquetaControllerDeletar.delete)

export default etiquetaRouter;

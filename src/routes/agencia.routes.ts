import { Router } from 'express';
import AgenciaController from '../Controller/Agencia/CriarAgenciaController';
import AgenciaControllerListar from '../Controller/Agencia/ListarAgenciaController'
import AgenciaControllerEditar from '../Controller/Agencia/EditarAgenciaController'
import AgenciaControllerDeletar from '../Controller/Agencia/DeletarAgenciaController'


const agenciaRouter = Router();
const agenciaController = new AgenciaController();
const agenciaControllerListar = new AgenciaControllerListar();
const agenciaControllerEditar = new AgenciaControllerEditar();
const agenciaControllerDeletar = new AgenciaControllerDeletar()


agenciaRouter.post('/', agenciaController.criar);
agenciaRouter.get('/',agenciaControllerListar.listar)
agenciaRouter.put('/:id',agenciaControllerEditar.editar)
agenciaRouter.delete('/:id', agenciaControllerDeletar.delete)

export default agenciaRouter;

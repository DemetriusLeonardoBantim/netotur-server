import { Router } from 'express';
import TiposDeDespesasController from '../Controller/TiposDeDespesas/TiposDeDespesasController';
import TiposDeDespesasControllerListar from '../Controller/TiposDeDespesas/ListarDespesasController'
import TiposDeDespesasControllerEditar from '../Controller/TiposDeDespesas/AlterarTiposDeDespesasController'
import TiposDeDespesasControllerDeletar from '../Controller/TiposDeDespesas/DeletarTiposDeDespesasController'


const tiposDeDespesasRouter = Router();
const formasDePagamentoController = new TiposDeDespesasController();
const tiposDeDespesasControllerListar = new TiposDeDespesasControllerListar();
const tiposDeDespesasControllerEditar = new TiposDeDespesasControllerEditar();
const tiposDeDespesasControllerDeletar = new TiposDeDespesasControllerDeletar()


tiposDeDespesasRouter.post('/', formasDePagamentoController.criar);
tiposDeDespesasRouter.post('/', tiposDeDespesasControllerListar.listar);
tiposDeDespesasRouter.put('/:id', tiposDeDespesasControllerEditar.editar)
tiposDeDespesasRouter.delete('/:id', tiposDeDespesasControllerDeletar.delete)


export default tiposDeDespesasRouter;

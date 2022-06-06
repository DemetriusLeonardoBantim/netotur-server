import { Router } from 'express';
import FormasDePagamentoController from '../Controller/FormasDePagamento/FormasDePagamentoController';
import FormasDePagamentoControllerListar from '../Controller/FormasDePagamento/ListarFormasDePagamentoController'
import FormasDePagamentoControllerEditar from '../Controller/FormasDePagamento/AlterarFormaDePagamentoController'
import FormasDePagamentoControllerDeletear from '../Controller/FormasDePagamento/DeletarFormaDePagamentoController'

const formasDePagamentoRouter = Router();
const formasDePagamentoController = new FormasDePagamentoController();
const formasDePagamentoControllerListar = new FormasDePagamentoControllerListar()
const formasDePagamentoControllerEditar = new FormasDePagamentoControllerEditar()
const formasDePagamentoControllerDeletear = new FormasDePagamentoControllerDeletear()

formasDePagamentoRouter.post('/', formasDePagamentoController.criar);
formasDePagamentoRouter.get('/', formasDePagamentoControllerListar.listar);
formasDePagamentoRouter.put('/:id',formasDePagamentoControllerEditar.editar);
formasDePagamentoRouter.delete('/:id', formasDePagamentoControllerDeletear.delete)


export default formasDePagamentoRouter;

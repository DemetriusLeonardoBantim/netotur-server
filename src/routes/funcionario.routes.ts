import { Router } from 'express';
import FuncionarioController from '../Controller/Funcionario/FuncionarioController';
import FuncionarioControllerListar from '../Controller/Funcionario/ListarFuncionarioController'
import FuncionarioControllerEditar from '../Controller/Funcionario/AlterarFuncionarioController'
import FuncionarioControllerDeletar from '../Controller/Funcionario/DeletarFuncionarioController'

const funcionarioRouter = Router();
const formasDePagamentoController = new FuncionarioController();
const formasDePagamentoControllerListar = new FuncionarioControllerListar();
const funcionarioControllerEditar = new FuncionarioControllerEditar()
const funcionarioControllerDeletar = new FuncionarioControllerDeletar()

funcionarioRouter.post('/', formasDePagamentoController.criar);
funcionarioRouter.get('/', formasDePagamentoControllerListar.listar);
funcionarioRouter.put('/:id',funcionarioControllerEditar.editar);
funcionarioRouter.delete('/:id', funcionarioControllerDeletar.delete)


export default funcionarioRouter;

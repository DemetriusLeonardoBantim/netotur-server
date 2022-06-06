import { Router } from 'express';
import DespesasControllerCriar from '../Controller/Despesas/CriarDespesasController';
import DespesasControllerListar from '../Controller/Despesas/ListarDespesasController'
import DespesasControllerEditar from '../Controller/Despesas/AlterarDespesasController'
import DespesasControllerDeletar from '../Controller/Despesas/DeletarDespesasController'

const despesasRouter = Router();
const carroControllerCriar = new DespesasControllerCriar();
const carroControllerListar = new DespesasControllerListar()
const despesasControllerEditar = new DespesasControllerEditar()
const despesasControllerDeletar = new DespesasControllerDeletar()

despesasRouter.post('/', carroControllerCriar.criar);
despesasRouter.get('/', carroControllerListar.listar)
despesasRouter.put('/:id', despesasControllerEditar.editar)
despesasRouter.delete('/:id',despesasControllerDeletar.delete)

export default despesasRouter;

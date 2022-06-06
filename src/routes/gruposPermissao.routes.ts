import { Router } from 'express';
import GruposPermissaoController from '../Controller/GruposPermissao/GruposDePermissaoController';
import ListarGrupoPermissaoControler from '../Controller/GruposPermissao/ListarGrupoPermissaoController'
import EditarGrupoPermissaoController from '../Controller/GruposPermissao/AlterarGrupoController'
import DeletarGrupoPermissaoController from '../Controller/GruposPermissao/DeletarGrupoPermissao'


const gruposPermissaoRouter = Router();
const formasDePagamentoController = new GruposPermissaoController();
const listarGrupoPermissaoController = new ListarGrupoPermissaoControler()
const editarGrupoPermissaoController = new EditarGrupoPermissaoController()
const deletarGrupoPermissaoController = new DeletarGrupoPermissaoController()


gruposPermissaoRouter.post('/', formasDePagamentoController.criar);
gruposPermissaoRouter.get('/', listarGrupoPermissaoController.listar);
gruposPermissaoRouter.put('/:id',editarGrupoPermissaoController.editar);
gruposPermissaoRouter.delete('/:id', deletarGrupoPermissaoController.delete)

export default gruposPermissaoRouter;

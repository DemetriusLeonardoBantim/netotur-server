import { Router } from 'express';
import UsuarioController from '../Controller/Usuario/UsuarioController';
import UsuarioControllerListar from '../Controller/Usuario/ListarUsuarioController';
import UsuarioControllerEditar from '../Controller/Usuario/AlterarUsuarioController';
import UsuarioControllerDeletar from '../Controller/Usuario/DeletarUsuarioController';


const usuarioRouter = Router();
const usuarioController = new UsuarioController();
const usuarioControllerListar = new UsuarioControllerListar()
const usuarioControllerEditar = new UsuarioControllerEditar()
const usuarioControllerDeletar = new UsuarioControllerDeletar()


usuarioRouter.post('/', usuarioController.criar);
usuarioRouter.get('/', usuarioControllerListar.listar);
usuarioRouter.put('/:id',usuarioControllerEditar.editar);
usuarioRouter.delete('/:id',usuarioControllerDeletar.delete)


export default usuarioRouter;

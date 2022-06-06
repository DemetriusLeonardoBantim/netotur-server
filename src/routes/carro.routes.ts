import { Router } from 'express';
import CarroController from '../Controller/Carro/CriarCarroController';
import CarroControllerListar from '../Controller/Carro/ListarCarroController' 
import CarroControllerEditar from '../Controller/Carro/EditarCarroController'
import CarroControllerDeletar from '../Controller/Carro/DeletarCarroController'

const carroRouter = Router();
const carroController = new CarroController();
const carroControllerListar = new CarroControllerListar()
const carroControllerEditar = new CarroControllerEditar()
const carroControllerApagar = new CarroControllerDeletar()


carroRouter.post('/', carroController.criar);
carroRouter.get('/', carroControllerListar.listar)
carroRouter.put('/:id', carroControllerEditar.editar)
carroRouter.delete('/:id', carroControllerApagar.delete)


export default carroRouter;

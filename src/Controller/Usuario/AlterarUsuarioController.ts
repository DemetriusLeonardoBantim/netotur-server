import { Request, Response } from 'express';
import { AlterarUsuarioService } from '../../services/UsuarioService/AlterarUsuarioService';

export default class GrupoPermissaoControllerEditar {
  async editar(request: Request, response: Response): Promise<Response> {
    try {
      const {nomeUsuario,emailUsuario,senhaUsuario,desconto,movimentacaoPropria,idGrupoPermissao,idAgencia} = request.body
      const {id} = request.params

      const usuarioService = new AlterarUsuarioService();

      const usuario = await usuarioService.execute({nomeUsuario,emailUsuario,senhaUsuario,desconto,movimentacaoPropria,idGrupoPermissao,idAgencia,id})

      return response.json(usuario)

    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}

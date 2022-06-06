import { getCustomRepository } from 'typeorm';
import { UsuarioRepositories } from '../../repositories/UsuarioRepositorie';



class AlterarUsuarioService {
  async execute({nomeUsuario,emailUsuario,senhaUsuario,desconto,movimentacaoPropria,idGrupoPermissao,idAgencia,id}) {

    const usuarioRepository = getCustomRepository(UsuarioRepositories);

    const usuario = await usuarioRepository.findOne(id)

    if(!usuario){
      throw new Error('Usuario não encontrado')
    }
    usuario.nomeUsuario = nomeUsuario
    usuario.emailUsuario = emailUsuario
    usuario.senhaUsuario = senhaUsuario
    usuario.desconto = desconto
    usuario.movimentacaoPropria = movimentacaoPropria
    usuario.idGrupoPermissao = idGrupoPermissao
    usuario.idAgencia = idAgencia

    await usuarioRepository.save(usuario);
  }
}

export { AlterarUsuarioService };

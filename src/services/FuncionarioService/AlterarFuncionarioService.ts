import { getCustomRepository } from 'typeorm';
import { FuncionarioRepositories } from '../../repositories/FuncionarioRepositorie';



class AlterarFuncionarioService {
  async execute({nomeFuncionario,dataNascimento,numeroCpf,numeroCnh,numeroRg,dataAdmissao,id}) {

    const funcionarioRepository = getCustomRepository(FuncionarioRepositories);
    
    const funcionario = await funcionarioRepository.findOne(id)

    if(!funcionario){
      throw new Error('Funcionario não encontrado')
    }
    funcionario.nomeFuncionario = nomeFuncionario
    funcionario.dataNascimento = dataNascimento
    funcionario.numeroCpf = numeroCpf
    funcionario.numeroCnh = numeroCnh
    funcionario.numeroRg = numeroRg
    funcionario.dataAdmissao = dataAdmissao

    await funcionarioRepository.save(funcionario);
  }
}

export { AlterarFuncionarioService };

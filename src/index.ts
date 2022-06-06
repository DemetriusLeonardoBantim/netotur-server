import { Router } from 'express';
import usuarioRoutes from './routes/usuario.routes';
import agenciaRoutes from './routes/agencia.routes'
import carroRoutes from './routes/carro.routes'
import despesasRoutes from './routes/despesas.routes'
import etiquetasRoutes from './routes/etiquestas.routes'
import formasDePagamentoRoutes from './routes/formasDePagamento.routes'
import funcionarioRoutes from './routes/funcionario.routes'
import gruposPermissaoRoutes from './routes/gruposPermissao.routes'
import tiposDeDespesasRoutes from './routes/tiposDeDespesas.routes'

const router = Router();

router.use('/api/v1/usuario', usuarioRoutes);
router.use('/api/v1/agencia', agenciaRoutes);
router.use('/api/v1/carro', carroRoutes)
router.use('/api/v1/despesas', despesasRoutes)
router.use('/api/v1/etiquetas', etiquetasRoutes)
router.use('/api/v1/formasDePagamento', formasDePagamentoRoutes)
router.use('/api/v1/funcionario', funcionarioRoutes)
router.use('/api/v1/gruposPermissao', gruposPermissaoRoutes)
router.use('/api/v1/tiposDespesas', tiposDeDespesasRoutes)

export default router
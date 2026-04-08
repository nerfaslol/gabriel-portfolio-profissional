import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'ragnarok-db-editor',
    title: 'Ragnarok Database Editor',
    description:
      'Ferramenta visual para edição e gerenciamento de banco de dados do Ragnarok Online. Permite criar, editar e exportar itens, monstros e drops diretamente pela interface, sem precisar editar arquivos TXT na mão.',
    imageUrl: '',
    tags: ['React', 'TypeScript', 'Tailwind', 'Ragnarok Online'],
    aiAssisted: true,
  },
  {
    id: 'rathena-server',
    title: 'rAthena Server Panel',
    description:
      'Painel de controle web para servidores rAthena. Gerenciamento de contas, personagens, GMship e configurações do emulador em uma interface moderna — sem precisar acessar o banco diretamente.',
    imageUrl: '',
    tags: ['React', 'Node.js', 'rAthena', 'MySQL'],
    aiAssisted: true,
  },
  {
    id: 'grf-tools',
    title: 'GRF Toolkit',
    description:
      'Utilitário para abrir, visualizar, editar e reempacotar arquivos .grf do Ragnarok Online. Facilita o processo de modding de sprites, texturas e sons sem depender de ferramentas desatualizadas.',
    imageUrl: '',
    tags: ['TypeScript', 'GRF', 'Modding', 'Ragnarok Online'],
    aiAssisted: true,
  },
  {
    id: 'warp-patches',
    title: 'WARP Patch Scripts',
    description:
      'Coleção de patches QJS para o WARP patcher, aplicáveis a clientes de Ragnarok Online. Inclui tweaks de UI, correções de bugs de cliente e funcionalidades extras para servidores privados.',
    imageUrl: '',
    tags: ['JavaScript', 'WARP', 'QJS', 'Ragnarok Online'],
    aiAssisted: true,
  },
]

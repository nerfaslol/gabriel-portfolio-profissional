import type { Project } from '@/types/project'

export const projects: Project[] = [
  {
    id: 'ragnarok-db-editor',
    title: 'Ragnarok Database Editor',
    description:
      'Uma ferramenta visual para edição e gerenciamento de banco de dados do Ragnarok Online, facilitando a criação de itens e monstros.',
    imageUrl: 'https://placehold.co/600x400?text=Ragnarok+DB+Editor+Screenshot',
    tags: ['React', 'TypeScript', 'Tailwind', 'Ragnarok'],
  },
  {
    id: 'rathena-server',
    title: 'rAthena Server Panel',
    description:
      'Painel de controle para servidores rAthena, permitindo gerenciamento de contas, jogadores e configurações do emulador.',
    imageUrl:
      'https://placehold.co/600x400?text=rAthena+Server+Panel+Screenshot',
    tags: ['React', 'Node.js', 'rAthena', 'Emulator'],
  },
]

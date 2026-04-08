import type { LessonPlan } from '@/types/lesson-plan'

export const lessonPlan: LessonPlan = {
  id: 'web-design-ia',
  title: 'Web Design com IA',
  subtitle: 'Introdução prática para jovens criadores',
  targetAudience: 'Alunos de 14 a 17 anos',
  duration: '1h30',
  description:
    'Uma aula introdutória que ensina os fundamentos de HTML, CSS e JavaScript enquanto usa ferramentas de inteligência artificial — como Gemini e ChatGPT — como assistentes de aprendizado. O objetivo não é memorizar código, mas entender como pensar em desenvolvimento e como usar IA para acelerar e melhorar o que você cria.',
  tags: ['HTML', 'CSS', 'JavaScript', 'IA', 'Gemini', 'ChatGPT', 'Web Design'],
  imageUrl: '',

  prerequisites: [
    'Computador com Windows, macOS ou Linux',
    'Acesso à internet',
    'Conta Google (para usar o Gemini gratuitamente)',
    'Nenhum conhecimento prévio de programação necessário — só curiosidade',
  ],

  setup: [
    {
      name: 'VS Code',
      description:
        'Editor de código gratuito da Microsoft. É onde vamos escrever o HTML e CSS da aula.',
      url: 'https://code.visualstudio.com/',
    },
    {
      name: 'Extensão Live Server',
      description:
        'Plugin para VS Code que abre seu site no navegador em tempo real enquanto você edita. Instale pelo marketplace do VS Code pesquisando "Live Server" (autor: Ritwick Dey).',
    },
    {
      name: 'Google Chrome',
      description:
        'Navegador recomendado para a aula pelas ferramentas de desenvolvedor (F12) e compatibilidade.',
      url: 'https://www.google.com/chrome/',
    },
    {
      name: 'Conta no Gemini',
      description:
        'Acesse com sua conta Google em gemini.google.com — é gratuito. Vamos usá-lo para gerar código HTML, tirar dúvidas e explorar ideias durante a aula.',
      url: 'https://gemini.google.com/',
    },
  ],

  agenda: [
    {
      time: '00:00 – 00:10',
      title: 'Boas-vindas + O que é web design?',
      description:
        'Apresentação do instrutor, dinâmica da aula e uma conversa rápida: o que é um site? O que é front-end? Por que aprender isso em 2025 com IA disponível? Mostrar exemplos reais de sites simples feitos com o que vamos aprender.',
      aiTip:
        'Peça ao Gemini: "Explica o que é HTML em 3 linhas para um aluno de 15 anos que nunca programou." Veja a resposta e discuta com a turma.',
    },
    {
      time: '00:10 – 00:25',
      title: 'Setup: VS Code + Live Server',
      description:
        'Garantir que todos têm o VS Code instalado com a extensão Live Server. Criar a primeira pasta do projeto, abrir no VS Code e criar o arquivo index.html. Explicar a estrutura básica da pasta.',
    },
    {
      time: '00:25 – 00:45',
      title: 'HTML com IA — estruturando a página',
      description:
        'Introduzir as tags essenciais: <html>, <head>, <body>, <h1>, <p>, <img>, <a>. Em vez de digitar tudo na mão, os alunos pedem ao Gemini para gerar a estrutura inicial de uma página de apresentação pessoal e depois modificam o conteúdo.',
      aiTip:
        'Prompt sugerido para o Gemini: "Crie o HTML de uma página de apresentação pessoal simples com meu nome, uma foto placeholder, um parágrafo sobre mim e três links de redes sociais." Copie, cole no VS Code e ajuste com seu nome real.',
    },
    {
      time: '00:45 – 01:05',
      title: 'CSS com IA — estilizando a página',
      description:
        'Criar o arquivo style.css e linká-lo ao HTML. Explorar propriedades básicas: cores, fontes, espaçamentos, centralização. Usar o ChatGPT ou Gemini para entender o que cada propriedade faz e pedir sugestões de paleta de cores.',
      aiTip:
        'Prompt sugerido: "Tenho uma página HTML de apresentação pessoal. Me sugira um esquema de cores moderno e bonito em CSS para um jovem de 16 anos que gosta de games. Me dê o código CSS pronto." Teste, ajuste as cores que você não curtir.',
    },
    {
      time: '01:05 – 01:20',
      title: 'Projeto livre — sua mini página pessoal',
      description:
        'Cada aluno customiza sua página à vontade: troca cores, adiciona seções novas, coloca uma foto real, cria um link para seu Instagram. Instrutor circula pela sala ajudando. Incentivo a usar IA para qualquer dúvida que surgir.',
      aiTip:
        'Lembre os alunos: a IA é um assistente, não a resposta final. Quando ela gerar código, leia, entenda o que cada parte faz e modifique para ser seu. "Entender o porquê" é o objetivo, não copiar e colar.',
    },
    {
      time: '01:20 – 01:30',
      title: 'Apresentação + próximos passos',
      description:
        'Cada aluno abre sua página no Live Server e mostra rapidamente para a turma. Discussão breve: o que aprendemos, o que foi mais difícil, o que foi mais legal. Indicação de como continuar estudando.',
    },
  ],

  exercises: [
    'Peça ao Gemini: "Me faça uma página HTML de apresentação pessoal" — depois troque o nome, a foto e o texto pelo seu.',
    'Modifique pelo menos 3 propriedades CSS para personalizar as cores e fontes da sua página.',
    'Adicione uma seção "Meus hobbies" com uma lista (<ul>) de pelo menos 3 itens.',
    'Use o Gemini para perguntar: "Como faço para centralizar um texto em CSS?" — implemente a resposta e teste.',
    'Desafio extra: adicione um botão que leva para o seu Instagram ou YouTube usando a tag <a href="">.',
  ],

  resources: [
    {
      title: 'MDN Web Docs — Referência HTML e CSS',
      url: 'https://developer.mozilla.org/pt-BR/',
    },
    {
      title: 'Gemini — IA do Google (gratuito)',
      url: 'https://gemini.google.com/',
    },
    {
      title: 'ChatGPT — IA da OpenAI',
      url: 'https://chat.openai.com/',
    },
    {
      title: 'VS Code — Editor de código',
      url: 'https://code.visualstudio.com/',
    },
    {
      title: 'Curso em Vídeo — HTML e CSS (YouTube, PT-BR)',
      url: 'https://www.youtube.com/@CursoemVideo',
    },
  ],
}

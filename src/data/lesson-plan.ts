import type { LessonPlan } from '@/types/lesson-plan'
import lessonPlanBanner from '@/assets/lesson-plan-banner.png'

export const lessonPlan: LessonPlan = {
  id: 'web-design-ia',
  title: 'Web Design com IA',
  subtitle: 'Introdução prática para jovens criadores',
  targetAudience: 'Alunos de 14 a 17 anos',
  duration: '1h30',
  description:
    'Uma aula introdutória que ensina os fundamentos de HTML, CSS e JavaScript enquanto usa ferramentas de inteligência artificial — como Gemini e ChatGPT — como assistentes de aprendizado. O objetivo não é memorizar código, mas entender como pensar em desenvolvimento e como usar IA para acelerar e melhorar o que você cria.',
  tags: ['HTML', 'CSS', 'JavaScript', 'IA', 'Gemini', 'ChatGPT', 'Web Design'],
  imageUrl: lessonPlanBanner,

  prerequisites: [
    'Computador com Windows, macOS ou Linux',
    'Acesso à internet',
    'Conta Google (para usar o Gemini gratuitamente)',
    'Nenhum conhecimento prévio de programação necessário — só curiosidade',
  ],

  wingetIntro:
    'Winget é o instalador automático do Windows — pensa nele como a loja do Roblox ou a Google Play, só que para programas do computador. Em vez de entrar em sites, clicar em "baixar", "aceitar termos" e ficar clicando em "próximo", você abre o terminal e digita um comando. O Windows baixa e instala tudo sozinho, sem complicação.',

  setup: [
    {
      name: 'VS Code',
      description:
        'Editor de código gratuito da Microsoft. É onde vamos escrever o HTML e CSS da aula — com destaque de cores, autocomplete e organização de arquivos.',
      analogy:
        'Pensa no VS Code como o Roblox Studio: você não joga Roblox por ele, você cria. O VS Code é a ferramenta onde você constrói sites, assim como o Studio é onde você constrói mapas e jogos.',
      wingetCommand: 'winget install Microsoft.VisualStudioCode',
      url: 'https://code.visualstudio.com/',
    },
    {
      name: 'Extensão Live Server',
      description:
        'Plugin para VS Code que abre seu site no navegador em tempo real enquanto você edita. Qualquer mudança no código aparece na tela automaticamente, sem precisar ficar abrindo o arquivo na mão.',
      analogy:
        'É o "playtesting" do Roblox Studio — você mexe em algo e já vê o resultado na hora, sem precisar exportar nem reabrir nada.',
      wingetCommand:
        'Instale dentro do VS Code: clique no ícone de extensões (Ctrl+Shift+X), pesquise "Live Server" e clique em instalar.',
    },
    {
      name: 'Google Chrome',
      description:
        'Navegador recomendado para a aula. Tem as melhores ferramentas de desenvolvedor (aperte F12 para ver por dentro de qualquer site) e é o mais compatível com o que vamos criar.',
      analogy:
        'Você provavelmente já usa o Chrome para jogar jogos online, assistir YouTube ou pesquisar cheats de jogos. Na aula vamos usar ele para ver o site que você criou e espiar como outros sites foram feitos por dentro — como abrir as entranhas de um jogo.',
      wingetCommand: 'winget install Google.Chrome',
      url: 'https://www.google.com/chrome/',
    },
    {
      name: 'Conta no Gemini',
      description:
        'IA do Google, gratuita com qualquer conta Google. Vamos usá-la para gerar código, tirar dúvidas na hora e explorar ideias sem travar na aula.',
      analogy:
        'O Gemini é como ter um amigo que já estudou programação a vida inteira e está sempre disponível no WhatsApp. Você pergunta qualquer coisa — "como mudo a cor do texto?" — e ele responde na hora com o código pronto. Melhor que ficar caçando no Google.',
      wingetCommand: 'Não precisa instalar — acesse em gemini.google.com com sua conta Google.',
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

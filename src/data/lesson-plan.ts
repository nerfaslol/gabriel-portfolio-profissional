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

  // ─── OBJETIVOS DE APRENDIZAGEM ──────────────────────────────────────
  objectives: [
    {
      text: 'Compreender o que é HTML e sua função como "esqueleto" de uma página web',
      relatedStepIndex: 2,
    },
    {
      text: 'Saber criar e linkar um arquivo CSS para estilizar uma página',
      relatedStepIndex: 3,
    },
    {
      text: 'Utilizar ferramentas de IA (Gemini/ChatGPT) como assistentes de coding, não como respostas prontas',
      relatedStepIndex: 2,
    },
    {
      text: 'Construir uma mini página pessoal funcional até o final da aula',
      relatedStepIndex: 4,
    },
    {
      text: 'Desenvolver pensamento crítico sobre o que a IA gera — ler, entender e adaptar',
    },
  ],

  // ─── BRIEFING DO PROFESSOR ──────────────────────────────────────────
  teacherBriefing: [
    '🎯 O foco da aula NÃO é decorar tags HTML. É que os alunos saiam entendendo que podem criar coisas reais para a web com as ferramentas certas.',
    '⏱️ Controle o tempo rigidamente. Adolescentes perdem o foco rápido. As fases de código devem alternar com demonstrações visuais e momentos de interação.',
    '💡 Use o projetor/tela o tempo inteiro. Nunca fale de código sem mostrar. A cada conceito novo, mostre o resultado visual no navegador ANTES de mostrar o código.',
    '🤝 Circule pela sala durante as atividades práticas. Não fique parado na frente. Identifique quem está travado nos primeiros 2 minutos e ajude imediatamente.',
    '🚫 Evite jargões técnicos sem analogia. Nunca diga "DOM", "renderizar" ou "parsear" sem antes traduzir para o vocabulário do aluno.',
    '🎮 Use analogias de jogos (Roblox, Minecraft, Fortnite) sempre que possível — esse é o universo deles e facilita a absorção.',
    '📱 Peça para os alunos guardarem o celular. Se alguém não tiver computador, organize duplas.',
    '🖼️ Os slides e imagens ao longo desta aula servem como apoio visual para o projetor. Mostre-os nos momentos indicados para manter a atenção e contextualizar os conceitos.',
  ],

  // ─── ICEBREAKER ─────────────────────────────────────────────────────
  icebreaker:
    'Comece perguntando: "Quem aqui já usou ChatGPT ou Gemini?" (a maioria vai levantar a mão). Depois: "E quem já pediu pra IA criar alguma coisa — um desenho, um texto, uma música?" (vários vão responder). Então diga: "Hoje vocês vão aprender a pedir pra IA criar um site inteiro pra vocês. Mas o mais legal: vocês vão entender como o site funciona por dentro e vão poder mudar tudo que quiserem. No final da aula, cada um vai ter sua própria página na internet."',

  // ─── PRÉ-REQUISITOS ─────────────────────────────────────────────────
  prerequisites: [
    'Computador com Windows, macOS ou Linux',
    'Acesso à internet estável',
    'Conta Google (para usar o Gemini gratuitamente)',
    'Nenhum conhecimento prévio de programação necessário — só curiosidade',
  ],

  // ─── WINGET ─────────────────────────────────────────────────────────
  wingetIntro:
    'Winget é o instalador automático do Windows — pensa nele como a loja do Roblox ou a Google Play, só que para programas do computador. Em vez de entrar em sites, clicar em "baixar", "aceitar termos" e ficar clicando em "próximo", você abre o terminal e digita um comando. O Windows baixa e instala tudo sozinho, sem complicação.',

  // ─── SETUP ──────────────────────────────────────────────────────────
  setup: [
    {
      name: 'VS Code',
      description:
        'Editor de código gratuito da Microsoft. É onde vamos escrever o HTML e CSS da aula — com destaque de cores, autocomplete e organização de arquivos.',
      analogy:
        'Pensa no VS Code como o Roblox Studio: você não joga Roblox por ele, você cria. O VS Code é a ferramenta onde você constrói sites, assim como o Studio é onde você constrói mapas e jogos.',
      wingetCommand: 'winget install Microsoft.VisualStudioCode',
      url: 'https://code.visualstudio.com/',
      teacherScript:
        'Projete a tela do seu computador enquanto instala. No Windows, abra o PowerShell como administrador e rode o comando. Espere o download + instalação terminar (cerca de 1 minuto). Se alguém tiver Mac, direcione para o site do VS Code para download direto. Durante a instalação, aproveite para explicar o que é um editor de código vs. um editor de texto comum (como Word).',
    },
    {
      name: 'Extensão Live Server',
      description:
        'Plugin para VS Code que abre seu site no navegador em tempo real enquanto você edita. Qualquer mudança no código aparece na tela automaticamente, sem precisar ficar abrindo o arquivo na mão.',
      analogy:
        'É o "playtesting" do Roblox Studio — você mexe em algo e já vê o resultado na hora, sem precisar exportar nem reabrir nada.',
      wingetCommand:
        'Instale dentro do VS Code: clique no ícone de extensões (Ctrl+Shift+X), pesquise "Live Server" e clique em instalar.',
      teacherScript:
        'Demonstre passo a passo no projetor: abra o VS Code → clique no ícone de quadrados no lado esquerdo (extensões) → digite "Live Server" → clique em "Install" no primeiro resultado (por Ritwick Dey). Espere todos terminarem antes de prosseguir.',
    },
    {
      name: 'Google Chrome',
      description:
        'Navegador recomendado para a aula. Tem as melhores ferramentas de desenvolvedor (aperte F12 para ver por dentro de qualquer site) e é o mais compatível com o que vamos criar.',
      analogy:
        'Você provavelmente já usa o Chrome para jogar jogos online, assistir YouTube ou pesquisar cheats de jogos. Na aula vamos usar ele para ver o site que você criou e espiar como outros sites foram feitos por dentro — como abrir as entranhas de um jogo.',
      wingetCommand: 'winget install Google.Chrome',
      url: 'https://www.google.com/chrome/',
      teacherScript:
        'A maioria dos alunos já terá Chrome instalado. Peça para verificarem. Se alguém só tiver Edge ou Firefox, funciona também, mas avise que as DevTools podem ser ligeiramente diferentes. O importante é que todos tenham um navegador moderno.',
    },
    {
      name: 'Conta no Gemini',
      description:
        'IA do Google, gratuita com qualquer conta Google. Vamos usá-la para gerar código, tirar dúvidas na hora e explorar ideias sem travar na aula.',
      analogy:
        'O Gemini é como ter um amigo que já estudou programação a vida inteira e está sempre disponível no WhatsApp. Você pergunta qualquer coisa — "como mudo a cor do texto?" — e ele responde na hora com o código pronto. Melhor que ficar caçando no Google.',
      wingetCommand:
        'Não precisa instalar — acesse em gemini.google.com com sua conta Google.',
      url: 'https://gemini.google.com/',
      teacherScript:
        'Peça para todos abrirem gemini.google.com no Chrome e logarem com a conta Google. Se alguém não tiver conta Google, ajude a criar uma rapidamente ou organize uma dupla com alguém que tenha. Teste com a turma: peça para todos digitarem "Olá, Gemini!" e verem a resposta. Isso garante que todos estão prontos.',
    },
  ],

  // ─── AGENDA — CRONOGRAMA COMPLETO ────────────────────────────────────
  agenda: [
    // BLOCO 1: Abertura
    {
      time: '00:00 – 00:12',
      title: '🎤 Boas-vindas + Icebreaker',
      difficulty: 'fácil',
      description:
        'Apresentação do instrutor, dinâmica rápida de icebreaker e contextualização: o que é um site? O que é front-end? Por que aprender isso em 2025 com IA disponível?',
      teacherNotes: [
        'Comece com energia alta. Se apresente de forma breve (30 segundos) — nome, o que você faz, e um fato divertido.',
        'Use o icebreaker descrito acima. É essencial para quebrar a barreira inicial.',
        'Pergunte: "Alguém sabe a diferença entre um site e um app?" — deixe livre, não existe resposta errada. Use as respostas deles como gancho.',
        'Mostre no projetor 2–3 sites conhecidos pelos jovens (Instagram web, site do Roblox, etc.) e diga: "isso é feito com o que vamos aprender hoje".',
        'Apresente a seguinte ideia: "Tudo que vocês veem na internet — cada botão, cada foto, cada texto — foi construído por alguém com as mesmas ferramentas que vocês vão usar agora."',
        '⚠️ NÃO gaste mais de 12 minutos nessa parte. A tendência é estender demais a conversa e perder tempo para a prática.',
      ],
      images: [
        {
          placeholder: '📸 Slide de abertura com o título "Web Design com IA" e os logos de HTML, CSS, Gemini',
          alt: 'Slide de título da aula Web Design com IA',
        },
        {
          placeholder: '📸 Screenshot de sites populares (Instagram, Roblox, YouTube) lado a lado com a legenda "Tudo isso é HTML + CSS"',
          alt: 'Comparativo visual de sites populares feitos com HTML e CSS',
        },
      ],
      aiTip:
        'Peça ao Gemini: "Explica o que é HTML em 3 linhas para um aluno de 15 anos que nunca programou." Projete a resposta na tela e pergunte: "O que vocês acharam? Ficou claro?" Use isso para mostrar como a IA já pode ser útil.',
    },

    // BLOCO 2: Setup
    {
      time: '00:12 – 00:25',
      title: '🛠️ Setup: VS Code + Live Server',
      difficulty: 'fácil',
      description:
        'Garantir que todos têm o VS Code instalado com a extensão Live Server. Criar a primeira pasta do projeto, abrir no VS Code e criar o arquivo index.html.',
      teacherNotes: [
        'Projete sua tela o tempo inteiro. Cada clique que você der, os alunos devem poder reproduzir.',
        'Crie uma pasta chamada "meu-site" na Área de Trabalho. Demonstre arrastando a pasta para o VS Code.',
        'Dentro do VS Code, crie o arquivo index.html. Explique: "esse é o nome padrão que todo navegador procura quando abre um site".',
        'Digite apenas <!DOCTYPE html> e salve. Abra com Live Server (botão direito → "Open with Live Server") e mostre a página em branco no navegador.',
        '"Essa tela branca é o seu site. Vazio por enquanto, mas já é um site real — rodando no seu computador."',
        'Se algum aluno travar na instalação do VS Code, peça a um colega que já terminou para ajudar (peer learning).',
        '🕐 Máximo 13 minutos. Se alguém ainda estiver instalando, peça para continuar enquanto acompanha do projetor.',
      ],
      images: [
        {
          placeholder: '📸 Screenshot do VS Code vazio com uma pasta "meu-site" aberta no explorer lateral',
          alt: 'VS Code com pasta do projeto aberta',
        },
        {
          placeholder: '📸 Screenshot mostrando como abrir o Live Server (clique direito → "Open with Live Server")',
          alt: 'Menu do VS Code mostrando a opção Open with Live Server',
        },
      ],
    },

    // BLOCO 3: HTML com IA
    {
      time: '00:25 – 00:47',
      title: '📝 HTML com IA — O esqueleto da página',
      difficulty: 'médio',
      description:
        'Introduzir as tags essenciais: <html>, <head>, <body>, <h1>, <p>, <img>, <a>, <ul>. Em vez de digitar tudo na mão, os alunos pedem ao Gemini para gerar a estrutura inicial e depois modificam.',
      teacherNotes: [
        'ANTES de ir para a IA, ensine o conceito por 3 minutos. Desenhe no quadro ou mostre o slide: o HTML é uma "árvore" — uma caixa dentro da outra.',
        'Use a analogia de LEGO: "Cada tag HTML é uma peça de LEGO. O <h1> é aquela peça grandona de título. O <p> é um bloco de texto. O <img> é a peça com uma foto colada. Você vai montando encaixando uma peça na outra."',
        'Mostre 5 tags no projetor com o resultado visual ao lado (split screen entre código e navegador). Não passe de 5 tags nesse momento.',
        'Agora sim, vá para o Gemini. Projete o prompt sugerido e execute AO VIVO para os alunos verem a resposta da IA.',
        'Pause depois que o Gemini gerar o código: "Vamos ler isso juntos. O que vocês acham que cada linha faz?" Aponte para 3–4 linhas e pergunte.',
        'Peça para os alunos copiarem o código, colarem no VS Code e TROCAREM o nome, texto e informações para os deles.',
        'Circule pela sala. Os 3 erros mais comuns nessa fase: (1) colar o código fora da tag <body>, (2) esquecer de salvar (Ctrl+S), (3) confundir a aba do Gemini com a aba do VS Code.',
        'Ao final desse bloco, TODO aluno deve ter uma página com seu nome e texto pessoal aparecendo no navegador. Espere por isso antes de seguir.',
      ],
      images: [
        {
          placeholder: '📸 Diagrama "Anatomia de uma página HTML" — mostrando a árvore <html> → <head> + <body> → tags internas, com cores e ícones',
          alt: 'Diagrama visual da anatomia de uma página HTML',
        },
        {
          placeholder: '📸 Screenshot split-screen: código HTML à esquerda, resultado renderizado no Chrome à direita',
          alt: 'VS Code com HTML ao lado do resultado no navegador',
        },
        {
          placeholder: '📸 Screenshot do Gemini gerando a estrutura HTML de uma página pessoal',
          alt: 'Gemini respondendo um prompt de geração de código HTML',
        },
      ],
      aiTip:
        'Prompt sugerido para o Gemini: "Crie o HTML de uma página de apresentação pessoal simples com meu nome, uma foto placeholder, um parágrafo sobre mim e três links de redes sociais. Use tags semânticas básicas." Copie, cole no VS Code e ajuste com seu nome real.',
    },

    // BLOCO 4: CSS com IA
    {
      time: '00:47 – 01:07',
      title: '🎨 CSS com IA — Dando vida à página',
      difficulty: 'médio',
      description:
        'Criar o arquivo style.css, linká-lo ao HTML e explorar propriedades visuais: cores, fontes, espaçamentos, centralização, bordas arredondadas e fundo. Usar IA para sugerir paletas de cores e explicar propriedades.',
      teacherNotes: [
        'Comece com o efeito WOW. Diga: "A página de vocês tá com cara de documento do Word, né? Agora vamos transformar num site DE VERDADE."',
        'Demonstre no projetor: crie style.css, depois adicione o <link> no <head> do HTML. Salve e mostre que nada mudou ainda.',
        'Agora adicione uma ÚNICA linha: body { background-color: #1a1a2e; color: white; } — salve e mostre a transformação instantânea. Os alunos vão reagir. Esse é o momento de captura de atenção.',
        'Explique CSS com analogia: "O HTML é o esqueleto. O CSS é a roupa, a maquiagem, o penteado. Mesma página, visual totalmente diferente."',
        'Agora use o Gemini para gerar uma paleta de cores. Projete o prompt e execute ao vivo. Mostre que a IA pode ser usada como um designer de cores.',
        'Demonstre 5 propriedades CSS fundamentais, uma de cada vez, salvando e mostrando o resultado a cada uma: (1) background-color, (2) color, (3) font-family, (4) text-align: center, (5) border-radius.',
        'Peça para os alunos personalizarem as cores do próprio site. "Qual é a sua cor favorita? Peça ao Gemini para criar uma paleta baseada nessa cor."',
        'Se sobrar tempo, mostre Google Fonts — como usar uma fonte diferente com @import.',
        '⚠️ Não ensine flexbox, grid, media queries ou position neste bloco. É tentador, mas vai confundir. O foco é cores e fontes.',
      ],
      images: [
        {
          placeholder: '📸 Before/After: mesma página HTML, antes sem CSS (texto preto, fundo branco, sem estilo) e depois com CSS (cores, fontes, espaçamento)',
          alt: 'Comparação visual antes e depois de aplicar CSS',
        },
        {
          placeholder: '📸 Screenshot do Gemini sugerindo uma paleta de cores com os códigos hexadecimais',
          alt: 'Gemini gerando uma paleta de cores para o aluno',
        },
        {
          placeholder: '📸 Cheat-sheet de 5 propriedades CSS essenciais com exemplo visual de cada uma (background-color, color, font-family, text-align, border-radius)',
          alt: 'Cartão de referência visual de propriedades CSS',
        },
      ],
      aiTip:
        'Prompt sugerido: "Tenho uma página HTML de apresentação pessoal. Me sugira um esquema de cores moderno e bonito em CSS para um jovem de 16 anos que gosta de games. Me dê o código CSS pronto." Teste o resultado, ajuste as cores que não curtir e peça variações.',
    },

    // BLOCO 5: Projeto livre
    {
      time: '01:07 – 01:22',
      title: '🚀 Projeto livre — Sua mini página pessoal',
      difficulty: 'desafiador',
      description:
        'Cada aluno customiza sua página à vontade: troca cores, adiciona seções novas, coloca uma foto real, cria links para suas redes. Instrutor circula pela sala ajudando. Estímulo ao uso criativo da IA.',
      teacherNotes: [
        'Este é o momento mais importante da aula. Os alunos precisam de AUTONOMIA aqui. Não fique ensinando conceitos novos — só ajude quando pedirem.',
        'Projete na tela uma lista de "Ideias para melhorar sua página" (veja lista abaixo) e diga: "Escolham pelo menos 2 dessas para tentar."',
        'Ideias para projetar: (1) Adicione uma seção "Meus hobbies" com uma lista, (2) Coloque sua foto de verdade, (3) Mude as cores para sua paleta favorita, (4) Adicione um link para seu Instagram/TikTok, (5) Peça à IA um efeito hover para seus links, (6) Crie uma seção "Meu jogo favorito" com uma imagem.',
        'Circule pela sala ativamente. Pergunte: "O que você está tentando fazer? Posso ajudar?"',
        'Se um aluno terminar rápido, desafie-o: "Tenta pedir ao Gemini para adicionar um modo escuro à sua página" ou "Pede pra IA criar um efeito de animação no seu título".',
        'Se um aluno estiver frustrado/travado: sente do lado dele, descubra o problema (geralmente é um < ou > faltando) e resolva junto comentando o que está fazendo.',
        'Avise quando faltarem 5 minutos: "Galera, último ajuste! Salvem tudo que em 5 minutos vamos apresentar."',
        '💡 Lembrete crucial para os alunos: "A IA é seu assistente, não seu cérebro. Quando ela gerar código, leia, entenda o que cada parte faz e modifique para ser SEU. Entender o porquê é o objetivo, não copiar e colar."',
      ],
      images: [
        {
          placeholder: '📸 Slide "Ideias para melhorar sua página" — lista visual com ícones (🎨 Cores, 📸 Foto, 🔗 Links, ✨ Efeitos, 🎮 Seção de jogos)',
          alt: 'Slide com ideias de customização para os alunos',
        },
      ],
      aiTip:
        'Incentive prompts criativos: "Gemini, como faço um efeito onde meus links mudam de cor quando passo o mouse?" ou "Me ajuda a criar uma seção bonita para mostrar meu jogo favorito com imagem e descrição."',
    },

    // BLOCO 6: Encerramento
    {
      time: '01:22 – 01:30',
      title: '🏆 Apresentação + Encerramento',
      difficulty: 'fácil',
      description:
        'Cada aluno abre sua página no Live Server e mostra rapidamente para a turma. Votação do site mais criativo. Discussão: o que aprendemos? O que foi mais difícil? Indicação de como continuar estudando.',
      teacherNotes: [
        'Peça voluntários primeiro. Se poucos levantarem a mão, comece com quem você viu fazendo algo criativo — isso encorajará outros.',
        'Cada apresentação deve durar no máximo 30 segundos: "Mostra seu site e diz o que você mais curtiu fazer."',
        'Faça uma votação rápida: "Qual foi o site mais criativo? Levanta a mão." (isso cria engajamento positivo).',
        'Perguntas de fechamento: (1) "O que vocês acharam mais fácil?" (2) "O que foi mais difícil?" (3) "O que vocês acham de usar IA para aprender?"',
        'Mostre os próximos passos no projetor (seção de recursos) e diga: "Tudo que vocês fizeram hoje pode ser publicado na internet DE GRAÇA usando o GitHub Pages. Se quiserem, pesquisem isso em casa ou perguntem ao Gemini como colocar o site no ar."',
        'Encerre com energia: "Vocês acabaram de criar seu primeiro site. Isso é programação. E olha que legal: vocês fizeram em 1 hora e meia o que há 20 anos atrás levaria semanas. Imagina daqui a 1 ano o que vocês vão conseguir fazer."',
      ],
      images: [
        {
          placeholder: '📸 Slide "Próximos passos" com ícones e links: Curso em Vídeo (YouTube), MDN Web Docs, FreeCodeCamp, GitHub Pages',
          alt: 'Slide com recursos e próximos passos para os alunos',
        },
      ],
    },
  ],

  // ─── EXERCÍCIOS PRÁTICOS ────────────────────────────────────────────
  exercises: [
    'Peça ao Gemini: "Me faça uma página HTML de apresentação pessoal" — depois troque o nome, a foto e o texto pelo seu. Compare o que a IA gerou com o que você mudou.',
    'Modifique pelo menos 3 propriedades CSS para personalizar as cores e fontes da sua página. Anote quais propriedades você alterou.',
    'Adicione uma seção "Meus hobbies" com uma lista (<ul>) de pelo menos 3 itens. Estilize com CSS.',
    'Use o Gemini para perguntar: "Como faço para centralizar um texto em CSS?" — implemente a resposta e teste. Depois tente centralizar de outra forma que a IA sugerir.',
    'Desafio extra: adicione um botão que leva para o seu Instagram, TikTok ou YouTube usando a tag <a>. Estilize como um botão real com background-color e border-radius.',
    'Desafio bônus: peça ao Gemini "Como faço uma animação de fade-in no meu título usando só CSS?" e implemente o resultado.',
  ],

  // ─── TROUBLESHOOTING ────────────────────────────────────────────────
  troubleshooting: [
    {
      problem: 'O Live Server não aparece no menu de contexto (clique direito)',
      solution:
        'Verifique se a extensão está instalada e habilitada. Tente reiniciar o VS Code. Se ainda não aparecer, abra a Command Palette (Ctrl+Shift+P) e digite "Live Server: Open".',
    },
    {
      problem: 'As alterações no CSS não aparecem no navegador',
      solution:
        'Verifique se o <link rel="stylesheet" href="style.css"> está dentro da tag <head> (não dentro do <body>). Confirme que o nome do arquivo está escrito exatamente igual (maiúsculas/minúsculas importam). Tente Ctrl+Shift+R para forçar o reload sem cache.',
    },
    {
      problem: 'A imagem não carrega (<img> aparece quebrada)',
      solution:
        'Confira se o arquivo da imagem está na mesma pasta que o index.html. Verifique se o nome no src="" está idêntico ao nome do arquivo (incluindo a extensão .jpg, .png etc.).',
    },
    {
      problem: 'A página aparece toda "quebrada" ou sem formatação',
      solution:
        'Provavelmente há uma tag não fechada. Peça ao aluno para colar o código no Gemini e perguntar: "Meu HTML está quebrado, pode encontrar o erro?" A IA normalmente identifica rapidamente.',
    },
    {
      problem: 'O Gemini gerou código que não funciona',
      solution:
        'Explique que a IA nem sempre acerta de primeira. Peça ao aluno para dizer ao Gemini: "Isso não funcionou — o erro é [descreva o que aconteceu]. Me ajuda a corrigir." Ensinar a dar feedback para a IA é uma habilidade valiosa!',
    },
    {
      problem: 'O aluno não consegue acessar o Gemini (bloqueio escolar/rede)',
      solution:
        'Alterne para o ChatGPT (chat.openai.com) ou organize duplas com colegas que tenham acesso. Em último caso, o professor pode projetar o Gemini e os alunos pedem prompts pela turma.',
    },
  ],

  // ─── FAQ ────────────────────────────────────────────────────────────
  faq: [
    {
      question: 'Preciso decorar todas essas tags HTML?',
      answer:
        'Não! Ninguém decora. Nem programadores profissionais decoram tudo. O importante é saber que elas existem, entender o conceito e saber onde procurar (Google, MDN, ou perguntar à IA). É como dirigir: você não precisa saber montar o motor, mas precisa saber o que cada pedal faz.',
    },
    {
      question: 'A IA vai substituir os programadores?',
      answer:
        'A IA é uma ferramenta, não um substituto. Pense assim: a calculadora substituiu os matemáticos? Não — ela permitiu que eles fizessem coisas mais difíceis. Com IA, programadores fazem coisas melhores e mais rápido. Mas alguém precisa PENSAR no que criar e verificar se está certo. Esse alguém é você.',
    },
    {
      question: 'Posso criar qualquer site com HTML e CSS?',
      answer:
        'A estrutura e a aparência, sim! Para coisas interativas (como um formulário que envia dados, um chat, ou um jogo), você precisa de JavaScript — que é o próximo passo natural depois desta aula.',
    },
    {
      question: 'Como coloco meu site na internet de verdade?',
      answer:
        'Existem serviços gratuitos que publicam seu site para o mundo todo ver. Os mais populares são GitHub Pages, Netlify e Vercel. Pergunte ao Gemini: "Como publicar um site HTML no GitHub Pages?" e ele te guia passo a passo.',
    },
    {
      question: 'E se eu quiser continuar aprendendo depois da aula?',
      answer:
        'Recomendo o canal "Curso em Vídeo" no YouTube (português, gratuito), o site freeCodeCamp.org (inglês, mas o Gemini traduz), e praticar fazendo projetos pessoais — quanto mais você criar, mais aprende.',
    },
  ],

  // ─── CRITÉRIOS DE AVALIAÇÃO ──────────────────────────────────────────
  assessment: [
    '✅ O aluno criou um arquivo index.html funcional com pelo menos 3 tags diferentes',
    '✅ O aluno criou e linkou um arquivo style.css com pelo menos 3 propriedades customizadas',
    '✅ O aluno utilizou a IA como assistente pelo menos 2 vezes durante a aula',
    '✅ O aluno conseguiu explicar (em suas palavras) a diferença entre HTML e CSS',
    '✅ O aluno personalizou a página com seu próprio conteúdo (nome, texto, cores)',
    '⭐ Bônus: o aluno adicionou elementos extras além do pedido (animações, seções, efeitos hover)',
  ],

  // ─── RECURSOS ───────────────────────────────────────────────────────
  resources: [
    {
      title: 'MDN Web Docs — Referência HTML e CSS',
      url: 'https://developer.mozilla.org/pt-BR/',
      why: 'A documentação oficial da web, em português. Referência mais confiável para HTML e CSS.',
    },
    {
      title: 'Gemini — IA do Google (gratuito)',
      url: 'https://gemini.google.com/',
      why: 'Ferramenta de IA usada na aula. Gratuita com conta Google.',
    },
    {
      title: 'ChatGPT — IA da OpenAI',
      url: 'https://chat.openai.com/',
      why: 'Alternativa ao Gemini. Funciona sem login para uso básico.',
    },
    {
      title: 'VS Code — Editor de código',
      url: 'https://code.visualstudio.com/',
      why: 'O editor de código gratuito mais usado no mundo.',
    },
    {
      title: 'Curso em Vídeo — HTML e CSS (YouTube, PT-BR)',
      url: 'https://www.youtube.com/@CursoemVideo',
      why: 'Canal brasileiro com o melhor curso gratuito de HTML/CSS para iniciantes.',
    },
    {
      title: 'freeCodeCamp — Cursos interativos',
      url: 'https://www.freecodecamp.org/',
      why: 'Plataforma gratuita com exercícios práticos e certificação.',
    },
    {
      title: 'ColorHunt — Paletas de cores',
      url: 'https://colorhunt.co/',
      why: 'Inspiração de paletas de cores para os alunos personalizarem seus sites.',
    },
  ],

  // ─── MENSAGEM DE ENCERRAMENTO ────────────────────────────────────────
  closingMessage:
    'Vocês acabaram de dar o primeiro passo num universo gigante. Tudo que existe na internet — cada rede social, cada jogo online, cada loja — foi construído com as mesmas ferramentas que vocês usaram hoje. A diferença entre vocês agora e um desenvolvedor profissional é só prática e tempo. Continuem criando, continuem perguntando à IA, e continuem curiosos. O próximo grande site pode ser de vocês. 🚀',
}

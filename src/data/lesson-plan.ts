import type { LessonModality, LessonPlan } from '@/types/lesson-plan'
import lessonPlanBanner from '@/assets/lesson-plan-banner.png'
import slideAbertura from '@/assets/slide-abertura.png'
import htmlAnatomy from '@/assets/html-anatomy.png'
import cssBeforeAfter from '@/assets/css-before-after.png'
import cssCheatsheet from '@/assets/css-cheatsheet.png'
import vscodeFolder from '@/assets/vscode-folder.png'
import geminiHtml from '@/assets/gemini-html.png'
import colorPalette from '@/assets/color-palette.png'
import nextSteps from '@/assets/next-steps.png'

/* ═══════════════════════════════════════════════════════════════════════
   Factory que gera o plano de aula completo para cada modalidade.
   Campos compartilhados ficam na base; campos que mudam usam ternário.
   ═══════════════════════════════════════════════════════════════════════ */

function createLessonPlan(modality: LessonModality): LessonPlan {
  const isRemote = modality === 'distancia'

  return {
    id: 'web-design-ia',
    modality,
    title: 'Web Design com IA',
    subtitle: isRemote
      ? 'Aula prática para jovens criadores · Edição à Distância'
      : 'Aula prática para jovens criadores · Edição Presencial',
    targetAudience: 'Alunos de 14 a 17 anos',
    duration: '1h30',
    description: isRemote
      ? 'Nessa aula os alunos vão montar um site pessoal do zero usando HTML e CSS, com ajuda de IA (Gemini ou ChatGPT) pra tirar dúvidas e gerar código. A aula rola por videoconferência com compartilhamento de tela e breakout rooms pra quem precisar de ajuda individual. No final, todo mundo sai com uma página publicável.'
      : 'Nessa aula os alunos vão montar um site pessoal do zero usando HTML e CSS, com ajuda de IA (Gemini ou ChatGPT) pra tirar dúvidas e gerar código. A ideia é que cada um saia com uma página sua, funcionando de verdade no navegador, e entendendo como tudo funciona por trás.',
    tags: [
      'HTML',
      'CSS',
      'JavaScript',
      'IA',
      'Gemini',
      'ChatGPT',
      'Web Design',
      ...(isRemote ? ['Remoto', 'Zoom/Meet'] : ['Presencial']),
    ],
    imageUrl: lessonPlanBanner,

    // ─── OBJETIVOS DE APRENDIZAGEM ──────────────────────────────────
    objectives: [
      {
        text: 'Entender o que é HTML e como ele monta a estrutura de uma página',
        relatedStepIndex: 2,
      },
      {
        text: 'Criar um arquivo CSS e conectar com o HTML pra mudar cores, fontes e layout',
        relatedStepIndex: 3,
      },
      {
        text: 'Usar IA (Gemini/ChatGPT) como ferramenta de apoio, sabendo ler e adaptar o que ela gera',
        relatedStepIndex: 2,
      },
      {
        text: 'Terminar a aula com uma página pessoal funcionando no navegador',
        relatedStepIndex: 4,
      },
      {
        text: 'Saber diferenciar o que a IA acertou do que precisa de ajuste',
      },
    ],

    // ─── BRIEFING DO PROFESSOR ──────────────────────────────────────
    teacherBriefing: isRemote
      ? [
          '🎯 O objetivo é que os alunos saiam da aula sabendo que conseguem construir coisas reais pra web. Foque nisso, e menos em decorar sintaxe.',
          '⏱️ Controle o tempo com rigor. Online a dispersão é pior. Use timers visíveis e avise: "faltam 5 minutos pro próximo bloco".',
          '💻 Compartilhe sua tela o tempo inteiro. Cada conceito que falar, mostre na prática. Layout dividido: código de um lado, navegador do outro.',
          '📹 Peça pra todos ligarem a câmera. Dá pra perceber quem tá perdido pela expressão facial.',
          '💬 Monitore o chat ativamente. Peça pros alunos mandarem "✅" quando terminarem cada etapa e "❌" se travarem.',
          '🏠 Use breakout rooms pra ajudar alunos individualmente sem pausar a turma toda.',
          '🚫 Traduza os termos técnicos. Se disser "DOM" ou "renderizar", sempre explique o que é.',
          '🎮 Analogias de jogos funcionam muito: Roblox Studio, Minecraft, Fortnite. É o mundo deles.',
          '🖼️ As imagens ao longo da aula são pra mostrar na tela nos momentos indicados.',
          '🔇 Todo mundo no mute quando não estiver falando.',
        ]
      : [
          '🎯 O objetivo é que os alunos saiam da aula sabendo que conseguem construir coisas reais pra web. Foque nisso, e menos em decorar sintaxe.',
          '⏱️ Controle o tempo com rigor. Adolescente perde o foco rápido. Alterne entre explicação e prática a cada 10-15 minutos.',
          '💡 Projetor ligado o tempo inteiro. Cada conceito que falar, mostre na prática. Mostra o resultado visual ANTES do código.',
          '🤝 Circule pela sala nas atividades práticas. Identifica quem travou nos primeiros 2 minutos e vai direto ajudar.',
          '🚫 Traduza os termos técnicos. Se disser "DOM" ou "renderizar", sempre explique o que é.',
          '🎮 Analogias de jogos funcionam muito: Roblox Studio, Minecraft, Fortnite. É o mundo deles.',
          '📱 Celulares guardados. Se alguém não tiver computador, faz dupla.',
          '🖼️ As imagens ao longo da aula são pra projetar nos momentos indicados.',
        ],

    // ─── ICEBREAKER ──────────────────────────────────────────────────
    icebreaker: isRemote
      ? 'Comece assim: "Manda um 👋 no chat quem já usou ChatGPT ou Gemini!" Espere as reações. "E quem já pediu pra IA criar alguma coisa? Um desenho, um texto, qualquer coisa? Manda um 🎨 se sim!" Então emende: "Beleza, hoje vocês vão pedir pra IA criar um site inteiro. Só que o diferencial é que vocês vão entender o que tá acontecendo por trás, e vão poder mudar tudo. No final da aula cada um vai ter sua própria página. Liga a câmera e me conta: qual app vocês mais usam?"'
      : 'Comece assim: "Quem aqui já usou ChatGPT ou Gemini?" Espere as mãos. "E quem já pediu pra IA criar alguma coisa? Um desenho, um texto?" Então emende: "Beleza, hoje vocês vão pedir pra IA criar um site inteiro. Só que o diferencial é que vocês vão entender o que tá acontecendo por trás, e vão poder mudar tudo. No final da aula cada um vai ter sua própria página."',

    // ─── PRÉ-REQUISITOS ──────────────────────────────────────────────
    prerequisites: isRemote
      ? [
          'Computador com Windows, macOS ou Linux (com webcam e microfone)',
          'Internet estável (mínimo 5 Mbps)',
          'Google Meet ou Zoom instalado',
          'Conta Google (pro Gemini)',
          'Um canto sossegado, sem muito barulho',
          'Vontade de aprender, só isso',
        ]
      : [
          'Computador com Windows, macOS ou Linux',
          'Internet estável',
          'Conta Google (pro Gemini)',
          'Vontade de aprender, só isso',
        ],

    // ─── WINGET ──────────────────────────────────────────────────────
    wingetIntro:
      'Winget é tipo a loja do Roblox ou a Google Play, só que pro computador. Em vez de entrar em site, clicar em "baixar", aceitar termos e ficar clicando "próximo", você abre o terminal e digita um comando. O Windows faz tudo sozinho.',

    // ─── SETUP ───────────────────────────────────────────────────────
    setup: [
      {
        name: 'VS Code',
        description:
          'Editor de código gratuito da Microsoft. É onde a gente vai escrever HTML e CSS. Tem destaque de cores, autocomplete e organização de arquivos.',
        analogy:
          'Pensa no VS Code como o Roblox Studio. Pelo Studio você não joga, você cria. O VS Code é a mesma ideia: a ferramenta onde você constrói sites.',
        wingetCommand: 'winget install Microsoft.VisualStudioCode',
        url: 'https://code.visualstudio.com/',
        teacherScript: isRemote
          ? 'Compartilhe sua tela mostrando o PowerShell e rode o winget ao vivo. Se alguém travar, peça pra compartilhar a tela ou mova pra breakout room. Quem tiver Mac, manda o link no chat.'
          : 'Projete sua tela e rode o comando. Leva uns 1-2 minutos. Se alguém tiver Mac, manda pro site do VS Code. Enquanto instala, aproveita pra explicar a diferença entre editor de código e Word.',
      },
      {
        name: 'Extensão Live Server',
        description:
          'Plugin pro VS Code que mostra o site no navegador em tempo real. Salvou o código? Já aparece a mudança automaticamente.',
        analogy:
          'É o playtesting do Roblox Studio. Você mexe no código e já vê funcionando, sem exportar nada.',
        wingetCommand:
          'Instale dentro do VS Code: Ctrl+Shift+X, pesquise "Live Server", clique em instalar.',
        teacherScript: isRemote
          ? 'Compartilhe tela: VS Code → extensões → buscar "Live Server" → Install. Peça ✅ no chat quando terminarem.'
          : 'Demonstre no projetor passo a passo: VS Code → ícone de extensões → "Live Server" → Install. Espere todos terminarem.',
      },
      {
        name: 'Google Chrome',
        description:
          'Navegador recomendado. Tem as melhores ferramentas de dev (F12 pra ver o código de qualquer site).',
        analogy:
          'Vocês já usam o Chrome pra YouTube, joguinhos, tudo. Agora vão usar ele pra ver o site que criaram e espiar como outros sites são feitos por dentro.',
        wingetCommand: 'winget install Google.Chrome',
        url: 'https://www.google.com/chrome/',
        teacherScript: isRemote
          ? 'A maioria já tem Chrome. Pergunta no chat: "Quem NÃO tem?" Edge e Firefox servem, avisa que pode ter diferença pequena no DevTools.'
          : 'A maioria já tem. Pede pra conferir. Edge e Firefox também servem.',
      },
      {
        name: 'Conta no Gemini',
        description:
          'IA do Google, de graça com conta Google. Vai ser nosso assistente pra gerar código e tirar dúvidas ao vivo.',
        analogy:
          'O Gemini é tipo um amigo que manja de programação e tá sempre online. Você pergunta "como faço essa cor?" e ele responde na hora com o código pronto.',
        wingetCommand:
          'Acesse gemini.google.com com sua conta Google.',
        url: 'https://gemini.google.com/',
        teacherScript: isRemote
          ? 'Manda o link no chat. Se alguém não tem conta Google, ajuda via breakout room ou faz dupla. Teste rápido: "Digita \'Olá Gemini!\' e manda ✅ quando responder."'
          : 'Pede pra todos abrirem gemini.google.com. Quem não tem conta Google, faz dupla. Teste: "Digita \'Olá Gemini!\' e vê a resposta."',
      },
      ...(isRemote
        ? [
            {
              name: 'Google Meet ou Zoom',
              description:
                'Plataforma de videoconferência da aula. É onde todo mundo se conecta e acompanha o compartilhamento de tela.',
              analogy:
                'Sala de aula virtual. Você vê o professor, os colegas e pode pedir a palavra.',
              wingetCommand:
                'Meet: acesse pelo navegador em meet.google.com. Zoom: winget install Zoom.Zoom',
              teacherScript:
                'Envie o link da sala por e-mail/WhatsApp antes da aula. Peça pra entrarem 5 min mais cedo e testarem áudio e câmera.',
            },
          ]
        : []),
    ],

    // ─── AGENDA ──────────────────────────────────────────────────────
    agenda: [
      // BLOCO 1
      {
        time: '00:00 – 00:12',
        title: '🎤 Boas-vindas + Icebreaker',
        difficulty: 'fácil',
        description: isRemote
          ? 'Apresentação, teste de áudio/vídeo, icebreaker no chat e uma conversa rápida: o que é um site por dentro? Por que aprender isso quando a IA já existe?'
          : 'Apresentação, icebreaker e uma conversa rápida: o que é um site por dentro? Por que aprender isso quando a IA já existe?',
        teacherNotes: isRemote
          ? [
              'Comece com energia. Se apresente em 30 segundos: nome, o que faz, um fato aleatório sobre você.',
              'Icebreaker com chat/reações. "Manda 👋 no chat!"',
              'Enquete rápida (recurso do Meet/Zoom): "Qual site vocês mais usam?"',
              'Compartilhe tela e mostre 2-3 sites que eles usam (Instagram, Roblox). "Tudo isso é HTML + CSS."',
              '"Vou compartilhar minha tela a aula toda. Quando pedir algo, mandem ✅ quando terminarem, ❌ se travarem."',
              '⚠️ 12 min no máximo. Teste de áudio conta nesse tempo.',
            ]
          : [
              'Comece com energia. Se apresente em 30 segundos: nome, o que faz, um fato aleatório sobre você.',
              'Use o icebreaker. Quebrar a barreira logo no início é essencial.',
              '"Alguém sabe a diferença entre um site e um app?" Deixe livre, toda resposta vale.',
              'Mostre no projetor 2-3 sites que eles usam (Instagram, Roblox). "Tudo isso é feito com o que vamos aprender hoje."',
              '"Cada botão, cada foto, cada texto na internet foi construído por alguém com as mesmas ferramentas que vocês vão usar agora."',
              '⚠️ 12 min no máximo.',
            ],
        images: [
          {
            placeholder:
              '📸 Slide de abertura: "Web Design com IA" + logos das tecnologias',
            alt: 'Slide de título da aula Web Design com IA',
            src: slideAbertura,
          },
        ],
        aiTip:
          'Peça ao Gemini: "Explica o que é HTML em 3 linhas pra um aluno de 15 anos que nunca programou." Mostre na tela e pergunte: "Ficou claro? Concordam?"',
      },

      // BLOCO 2
      {
        time: '00:12 – 00:25',
        title: '🛠️ Setup: VS Code + Live Server',
        difficulty: 'fácil',
        description:
          'Todo mundo com VS Code + Live Server instalado. Criar a pasta do projeto, abrir no VS Code e criar o index.html.',
        teacherNotes: isRemote
          ? [
              'Compartilhe tela o tempo todo. Cada clique que der, eles reproduzem no PC deles.',
              'Crie a pasta "meu-site" na Área de Trabalho. Arraste pro VS Code.',
              'Crie index.html. "Esse é o nome que todo navegador procura quando abre um site."',
              'Abra com Live Server. Tela branca. "Essa tela branca já é o site de vocês. Vazio, mas real."',
              'Peça ✅ no chat. Quem travar: breakout room ou peça pra compartilhar tela.',
              '🕐 13 min no máximo.',
            ]
          : [
              'Projete sua tela. Cada clique que der, eles reproduzem.',
              'Crie pasta "meu-site" na Área de Trabalho. Arraste pro VS Code.',
              'Crie index.html. "Esse é o nome que todo navegador procura quando abre um site."',
              'Abra com Live Server (clique direito → Open with Live Server). "Essa tela branca já é o site de vocês."',
              'Quem travar: pede pro colega do lado ajudar.',
              '🕐 13 min no máximo. Quem ainda tiver instalando, pede pra acompanhar pelo projetor.',
            ],
        images: [
          {
            placeholder:
              '📸 VS Code com a pasta "meu-site" aberta',
            alt: 'Visualização da pasta do projeto no VS Code',
            src: vscodeFolder,
          },
        ],
      },

      // BLOCO 3
      {
        time: '00:25 – 00:47',
        title: '📝 HTML com IA: O esqueleto da página',
        difficulty: 'médio',
        description:
          'As tags principais: <html>, <head>, <body>, <h1>, <p>, <img>, <a>. Os alunos pedem pro Gemini gerar a estrutura inicial e depois modificam com seus dados.',
        teacherNotes: isRemote
          ? [
              'Antes da IA, ensine o conceito (3 min). Compartilhe o diagrama da árvore HTML.',
              'Analogia LEGO: "Cada tag é uma peça. <h1> é a peça de título. <p> é o bloco de texto."',
              'Mostre 5 tags na tela com resultado visual ao lado (split screen).',
              'Abra o Gemini ao vivo. Rode o prompt na frente deles.',
              '"Vamos ler junto. O que vocês acham que cada linha faz?" Chat pra respostas.',
              '"Copiem, colem no VS Code, troquem pelo nome de vocês. ✅ quando terminar."',
              'Erros comuns: (1) colar fora do <body>, (2) esquecer Ctrl+S, (3) trocar aba.',
              'No final: todo mundo tem que ter uma página com o nome dele no navegador.',
            ]
          : [
              'Antes da IA, ensine o conceito (3 min). Mostre o diagrama: HTML é uma árvore, caixa dentro de caixa.',
              'Analogia LEGO: "Cada tag é uma peça. <h1> é a grandona de título. <p> é o bloco de texto. <img> é a peça com foto colada."',
              'Mostre 5 tags no projetor com resultado visual ao lado. Só 5.',
              'Agora vai pro Gemini. Rode o prompt ao vivo no projetor.',
              '"Vamos ler junto. O que vocês acham que cada linha faz?" Aponte pra 3-4 linhas.',
              '"Copiem, colem no VS Code, troquem pelo nome de vocês."',
              'Circule pela sala. Erros comuns: (1) colar fora do <body>, (2) esquecer Ctrl+S, (3) trocar aba.',
              'No final: todo mundo tem que ter uma página com seu nome no navegador.',
            ],
        images: [
          {
            placeholder:
              '📸 Diagrama da anatomia de uma página HTML',
            alt: 'Diagrama visual da anatomia de uma página HTML',
            src: htmlAnatomy,
          },
          {
            placeholder:
              '📸 Gemini gerando o HTML de uma página pessoal',
            alt: 'IA gerando estrutura básica de um site',
            src: geminiHtml,
          },
        ],
        aiTip:
          'Prompt pro Gemini: "Cria o HTML de uma página de apresentação pessoal simples com meu nome, uma foto placeholder, um parágrafo sobre mim e três links de redes sociais." Copie, cole e ajuste os dados.',
      },

      // BLOCO 4
      {
        time: '00:47 – 01:07',
        title: '🎨 CSS com IA: Dando vida à página',
        difficulty: 'médio',
        description:
          'Criar style.css, linkar no HTML e explorar: cores, fontes, espaçamento, centralização, bordas arredondadas. Usar IA pra sugerir paletas de cores.',
        teacherNotes: isRemote
          ? [
              '"A página de vocês tá com cara de documento do Word. Agora vamos transformar num site de verdade."',
              'Tela compartilhada: crie style.css, coloque o <link> no <head>. Salve. Nada mudou.',
              'body { background-color: #1a1a2e; color: white; } Salve. "Viram!?"',
              '"HTML é o esqueleto. CSS é a roupa, a maquiagem, o penteado."',
              'Gemini ao vivo: peça uma paleta de cores. Mostre que a IA também serve pra design.',
              '5 propriedades, uma por vez: background-color, color, font-family, text-align, border-radius.',
              '"Cor favorita? Manda no chat! Agora pede pro Gemini uma paleta baseada nessa cor."',
              '⚠️ Foco em cores e fontes. Flexbox, grid, media queries ficam pra outra aula.',
            ]
          : [
              '"A página de vocês tá com cara de documento do Word. Agora vamos transformar num site de verdade."',
              'No projetor: crie style.css, coloque o <link> no <head>. Salve. Nada mudou.',
              'body { background-color: #1a1a2e; color: white; } Salve e mostre a transformação. Reação garantida.',
              '"HTML é o esqueleto. CSS é a roupa, a maquiagem, o penteado. Mesma página, visual completamente diferente."',
              'Gemini ao vivo: peça uma paleta de cores. Mostre que a IA também serve pra design.',
              '5 propriedades, uma por vez, salvando e mostrando: background-color, color, font-family, text-align, border-radius.',
              '"Cor favorita? Pede pro Gemini criar uma paleta baseada nela."',
              'Se sobrar tempo: Google Fonts. Como importar fonte diferente.',
              '⚠️ Foco em cores e fontes. Flexbox, grid, media queries ficam pra outra aula.',
            ],
        images: [
          {
            placeholder:
              '📸 Antes e depois de aplicar CSS',
            alt: 'Comparação visual antes e depois de aplicar CSS',
            src: cssBeforeAfter,
          },
          {
            placeholder:
              '📸 Gemini sugerindo paleta de cores',
            alt: 'Paleta de cores moderna sugerida por IA',
            src: colorPalette,
          },
          {
            placeholder:
              '📸 Cheat-sheet das 5 propriedades CSS essenciais',
            alt: 'Cartão de referência de propriedades CSS',
            src: cssCheatsheet,
          },
        ],
        aiTip:
          'Prompt: "Tenho uma página HTML de apresentação pessoal. Sugira um esquema de cores moderno pra um jovem de 16 anos que curte games. Me dá o código CSS pronto." Teste, ajuste e peça variações.',
      },

      // BLOCO 5
      {
        time: '01:07 – 01:22',
        title: '🚀 Projeto livre: Sua mini página',
        difficulty: 'desafiador',
        description: isRemote
          ? 'Hora de personalizar: cores, seções novas, foto real, links. Professor disponível via chat e breakout rooms.'
          : 'Hora de personalizar: cores, seções novas, foto real, links. Professor circula pela sala.',
        teacherNotes: isRemote
          ? [
              'Momento mais importante. Dê AUTONOMIA. Só ajude.',
              'Mostre o slide de ideias: "Escolham pelo menos 2 dessas."',
              'Ideias: (1) Seção "Meus hobbies", (2) Foto real, (3) Paleta favorita, (4) Link pro Instagram/TikTok, (5) Efeito hover, (6) Seção "Jogo favorito".',
              'De olho no chat. Dúvida complexa? Breakout room.',
              'Aluno terminou rápido? Chat privado: "Tenta pedir modo escuro pro Gemini!"',
              'Aluno frustrado? "Compartilha a tela que a gente resolve junto."',
              '"Galera, 5 minutos! Salvem tudo!"',
              '💡 "A IA é o assistente de vocês. Mas leiam o que ela gera, entendam e mudem pra ficar do jeito de vocês."',
            ]
          : [
              'Momento mais importante. Dê AUTONOMIA. Só ajude quando pedirem.',
              'Projete a lista de ideias: "Escolham pelo menos 2."',
              'Ideias: (1) Seção "Meus hobbies", (2) Foto real, (3) Paleta favorita, (4) Link pro Instagram/TikTok, (5) Efeito hover, (6) Seção "Jogo favorito".',
              'Circule pela sala. "O que cê tá tentando fazer? Posso ajudar?"',
              'Aluno terminou rápido? "Tenta pedir modo escuro pro Gemini!" ou "Pede uma animação no título."',
              'Aluno frustrado? Senta do lado, acha o problema e resolve junto.',
              '"Galera, 5 minutos! Salvem tudo!"',
              '💡 "A IA é o assistente de vocês. Mas leiam o que ela gera, entendam e mudem pra ficar do jeito de vocês."',
            ],
        images: [
          {
            placeholder:
              '📸 Slide de ideias: 🎨 Cores · 📸 Foto · 🔗 Links · ✨ Efeitos · 🎮 Jogos',
            alt: 'Sugestões de customização para o site',
          },
        ],
        aiTip:
          'Prompts criativos: "Gemini, faz um efeito onde meus links mudam de cor quando passo o mouse" ou "Me ajuda a criar uma seção pro meu jogo favorito com imagem."',
      },

      // BLOCO 6
      {
        time: '01:22 – 01:30',
        title: '🏆 Apresentação + Encerramento',
        difficulty: 'fácil',
        description: isRemote
          ? 'Cada aluno compartilha a tela por 30 segundos. Votação do mais criativo por reações no chat.'
          : 'Cada aluno mostra a página no Live Server. Votação rápida do mais criativo.',
        teacherNotes: isRemote
          ? [
              '"Quem quer mostrar? Compartilha a tela!" Comece por quem fez algo criativo.',
              '30 seg cada. "Mostra e diz o que mais curtiu."',
              'Votação por chat: "Qual o mais criativo? Manda o nome!"',
              '"O que foi mais fácil? Mais difícil? O que acharam de usar IA?"',
              'Slide de próximos passos. "Tudo isso pode ir pro ar de graça com GitHub Pages."',
              '"Vocês criaram o primeiro site de vocês. Isso É programação. 🚀"',
            ]
          : [
              'Voluntários primeiro. Se ninguém levantar a mão, comece por quem fez algo legal.',
              '30 seg cada. "Mostra e diz o que mais curtiu."',
              '"Qual o mais criativo? Levanta a mão."',
              '"O que foi mais fácil? Mais difícil? O que acharam de usar IA?"',
              'Projetor: próximos passos. "Dá pra publicar de graça com GitHub Pages."',
              '"Vocês criaram o primeiro site de vocês. Isso É programação. 🚀"',
            ],
        images: [
          {
            placeholder:
              '📸 Slide "Próximos passos": Curso em Vídeo, MDN, FreeCodeCamp, GitHub Pages',
            alt: 'Finalização e recursos para continuar estudos',
            src: nextSteps,
          },
        ],
      },
    ],

    // ─── EXERCÍCIOS ──────────────────────────────────────────────────
    exercises: [
      'Pede pro Gemini: "Me faz uma página HTML de apresentação pessoal." Depois troca nome, foto e texto pelo seu.',
      'Muda pelo menos 3 propriedades CSS: cores, fontes, o que quiser. Testa cada uma.',
      'Cria uma seção "Meus hobbies" com uma lista (<ul>) de 3+ itens. Estiliza com CSS.',
      'Pergunta pro Gemini: "Como centralizo um texto em CSS?" Implementa e testa.',
      'Desafio: cria um botão que leva pro seu Instagram/TikTok usando <a>. Estiliza com background-color e border-radius.',
      'Desafio bônus: pede pro Gemini uma animação de fade-in no título usando só CSS.',
    ],

    // ─── TROUBLESHOOTING ─────────────────────────────────────────────
    troubleshooting: [
      {
        problem: 'Live Server não aparece no clique direito',
        solution:
          'Confere se a extensão tá instalada e ativada. Reinicia o VS Code. Se não rolar, Ctrl+Shift+P e digita "Live Server: Open".',
      },
      {
        problem: 'Mudanças no CSS não aparecem no navegador',
        solution:
          'Confere se o <link rel="stylesheet" href="style.css"> tá dentro do <head> (e não no <body>). Verifica se o nome do arquivo tá igualzinho. Ctrl+Shift+R força reload.',
      },
      {
        problem: 'Imagem quebrada (ícone de foto com X)',
        solution:
          'O arquivo tem que tá na mesma pasta do index.html. Confere se o nome no src="" tá idêntico, incluindo .jpg/.png.',
      },
      {
        problem: 'Página toda bagunçada',
        solution:
          'Provavelmente tem tag sem fechar. Cola o código no Gemini e pergunta: "Meu HTML tá quebrado, acha o erro." A IA detecta rápido.',
      },
      {
        problem: 'Gemini gerou código que deu errado',
        solution:
          'Normal, a IA não acerta sempre. Fala pro Gemini: "Não funcionou, o problema é [descreve]. Me ajuda a corrigir." Saber dar feedback pra IA é habilidade importante.',
      },
      ...(isRemote
        ? [
            {
              problem: 'Áudio/vídeo não funciona na call',
              solution:
                'Verifica permissões do navegador (cadeado na barra de endereço). Recarrega a página. Se continuar, sai e entra de novo. Último caso: participa pelo chat.',
            },
            {
              problem: 'Não consigo compartilhar tela',
              solution:
                'Zoom: botão "Compartilhar tela" embaixo. Meet: "Apresentar agora". Se pedir permissão, clica "Permitir". Mac pode precisar de ajuste em Configurações > Segurança.',
            },
            {
              problem: 'Travando/lagando na call',
              solution:
                'Desliga a câmera temporariamente. Fecha abas e programas extras. Se persistir, acompanha pelo chat e manda screenshots do progresso.',
            },
          ]
        : [
            {
              problem: 'Gemini bloqueado na rede da escola',
              solution:
                'Tenta ChatGPT (chat.openai.com). Se também não rolar, faz dupla com alguém que tenha acesso, ou o professor projeta o Gemini e a turma pede os prompts.',
            },
          ]),
    ],

    // ─── FAQ ─────────────────────────────────────────────────────────
    faq: [
      {
        question: 'Preciso decorar essas tags todas?',
        answer:
          'Ninguém decora. Nem quem trabalha com isso todo dia. O lance é saber que existem e saber pesquisar (Google, MDN, ou perguntar pra IA). É tipo dirigir: você não sabe montar o motor, mas sabe o que cada pedal faz.',
      },
      {
        question: 'A IA vai substituir programador?',
        answer:
          'A IA é ferramenta. Calculadora substituiu matemático? Só permitiu que fizessem coisas mais pesadas. Com IA, dev faz coisa melhor e mais rápido. Mas alguém precisa pensar no que criar e checar se tá certo. Esse alguém é você.',
      },
      {
        question: 'Dá pra fazer qualquer site com HTML e CSS?',
        answer:
          'Estrutura e visual, sim. Pra interatividade (formulário, chat, jogo) precisa de JavaScript. É o próximo passo natural depois dessa aula.',
      },
      {
        question: 'Como boto meu site na internet de verdade?',
        answer:
          'GitHub Pages, Netlify e Vercel publicam de graça. Pergunta pro Gemini: "Como publicar um site HTML no GitHub Pages?" Ele te guia.',
      },
      {
        question: 'Quero continuar aprendendo, por onde?',
        answer:
          'Canal "Curso em Vídeo" no YouTube (PT-BR, gratuito), freeCodeCamp.org, e o mais importante: fazer projetos. Quanto mais cria, mais aprende.',
      },
    ],

    // ─── AVALIAÇÃO ───────────────────────────────────────────────────
    assessment: [
      '✅ Criou index.html com pelo menos 3 tags diferentes',
      '✅ Criou e linkou style.css com pelo menos 3 propriedades',
      '✅ Usou a IA como assistente pelo menos 2 vezes',
      '✅ Conseguiu explicar a diferença entre HTML e CSS com suas palavras',
      '✅ Personalizou a página com conteúdo próprio (nome, texto, cores)',
      '⭐ Bônus: adicionou extras (animação, seções a mais, efeito hover)',
      '🚀 Capricho: o site parece algo que você realmente usaria?',
      '📚 Documentação: comentou o que o código faz?',
    ],

    // ─── RECURSOS ────────────────────────────────────────────────────
    resources: [
      {
        title: 'MDN Web Docs',
        url: 'https://developer.mozilla.org/pt-BR/',
        why: 'Documentação oficial da web, em português.',
      },
      {
        title: 'Gemini',
        url: 'https://gemini.google.com/',
        why: 'IA do Google, de graça.',
      },
      {
        title: 'ChatGPT',
        url: 'https://chat.openai.com/',
        why: 'Alternativa ao Gemini.',
      },
      {
        title: 'VS Code',
        url: 'https://code.visualstudio.com/',
        why: 'Editor de código mais usado no mundo.',
      },
      {
        title: 'Curso em Vídeo (YouTube)',
        url: 'https://www.youtube.com/@CursoemVideo',
        why: 'Melhor curso gratuito de HTML/CSS em português.',
      },
      {
        title: 'freeCodeCamp',
        url: 'https://www.freecodecamp.org/',
        why: 'Exercícios práticos e certificação de graça.',
      },
      {
        title: 'ColorHunt',
        url: 'https://colorhunt.co/',
        why: 'Paletas de cores pra se inspirar.',
      },
    ],

    // ─── ENCERRAMENTO ────────────────────────────────────────────────
    closingMessage:
      'Vocês acabaram de criar o primeiro site de vocês. Tudo que existe na internet, cada rede social, cada jogo, cada loja, foi feito com as mesmas ferramentas que vocês usaram agora. A diferença entre vocês e um dev profissional é prática e tempo. Continua criando, continua perguntando pra IA, continua curioso. O próximo site foda pode ser de vocês. 🚀',
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   Exportações
   ═══════════════════════════════════════════════════════════════════════ */
export const lessonPlanPresencial = createLessonPlan('presencial')
export const lessonPlanDistancia = createLessonPlan('distancia')
export const lessonPlan = lessonPlanPresencial

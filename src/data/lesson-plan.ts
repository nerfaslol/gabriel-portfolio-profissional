import type { LessonModality, LessonPlan } from '@/types/lesson-plan'
import lessonPlanBanner from '@/assets/lesson-plan-banner.png'

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
      ? 'Introdução prática para jovens criadores — Edição à Distância'
      : 'Introdução prática para jovens criadores — Edição Presencial',
    targetAudience: 'Alunos de 14 a 17 anos',
    duration: '1h30',
    description: isRemote
      ? 'Uma aula à distância que ensina os fundamentos de HTML, CSS e JavaScript usando ferramentas de inteligência artificial — como Gemini e ChatGPT — como assistentes de aprendizado. A aula acontece por videoconferência com compartilhamento de tela, breakout rooms e interação via chat. O objetivo não é memorizar código, mas entender como pensar em desenvolvimento e como usar IA para acelerar e melhorar o que você cria.'
      : 'Uma aula presencial e introdutória que ensina os fundamentos de HTML, CSS e JavaScript enquanto usa ferramentas de inteligência artificial — como Gemini e ChatGPT — como assistentes de aprendizado. O objetivo não é memorizar código, mas entender como pensar em desenvolvimento e como usar IA para acelerar e melhorar o que você cria.',
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

    // ─── OBJETIVOS DE APRENDIZAGEM (compartilhados) ─────────────────
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

    // ─── BRIEFING DO PROFESSOR ──────────────────────────────────────
    teacherBriefing: isRemote
      ? [
          '🎯 O foco da aula NÃO é decorar tags HTML. É que os alunos saiam entendendo que podem criar coisas reais para a web com as ferramentas certas.',
          '⏱️ Controle o tempo rigidamente. À distância a dispersão é ainda maior. Use timers visíveis e avise: "faltam 5 minutos para o próximo bloco".',
          '💻 Compartilhe sua tela o tempo inteiro. Nunca fale de código sem mostrar. Use layout de tela dividida: código em uma metade, navegador na outra.',
          '📹 Peça para todos ficarem com a câmera LIGADA. Isso ajuda a detectar quem está perdido (cara de confusão = hora de pausar e explicar).',
          '💬 Monitore o CHAT ativamente. Peça aos alunos para usarem "✅" no chat quando terminarem cada etapa e "❌" se travarem.',
          '🏠 Use BREAKOUT ROOMS (salas pequenas no Zoom/Meet) para ajudar alunos individualmente sem parar a turma toda.',
          '🚫 Evite jargões técnicos sem analogia. Nunca diga "DOM", "renderizar" ou "parsear" sem antes traduzir para o vocabulário do aluno.',
          '🎮 Use analogias de jogos (Roblox, Minecraft, Fortnite) sempre que possível — esse é o universo deles.',
          '🖼️ Os slides e imagens ao longo desta aula servem como apoio visual para o compartilhamento de tela. Mostre-os nos momentos indicados.',
          '🔇 Peça para todos ficarem no MUTE quando não estiverem falando, para evitar ruído de fundo.',
        ]
      : [
          '🎯 O foco da aula NÃO é decorar tags HTML. É que os alunos saiam entendendo que podem criar coisas reais para a web com as ferramentas certas.',
          '⏱️ Controle o tempo rigidamente. Adolescentes perdem o foco rápido. As fases de código devem alternar com demonstrações visuais e momentos de interação.',
          '💡 Use o projetor/tela o tempo inteiro. Nunca fale de código sem mostrar. A cada conceito novo, mostre o resultado visual no navegador ANTES de mostrar o código.',
          '🤝 Circule pela sala durante as atividades práticas. Não fique parado na frente. Identifique quem está travado nos primeiros 2 minutos e ajude imediatamente.',
          '🚫 Evite jargões técnicos sem analogia. Nunca diga "DOM", "renderizar" ou "parsear" sem antes traduzir para o vocabulário do aluno.',
          '🎮 Use analogias de jogos (Roblox, Minecraft, Fortnite) sempre que possível — esse é o universo deles e facilita a absorção.',
          '📱 Peça para os alunos guardarem o celular. Se alguém não tiver computador, organize duplas.',
          '🖼️ Os slides e imagens ao longo desta aula servem como apoio visual para o projetor. Mostre-os nos momentos indicados para manter a atenção e contextualizar os conceitos.',
        ],

    // ─── ICEBREAKER ──────────────────────────────────────────────────
    icebreaker: isRemote
      ? 'Comece perguntando no chat: "Manda um 👋 no chat quem já usou ChatGPT ou Gemini!" (a maioria vai reagir). Depois: "E quem já pediu pra IA criar alguma coisa — um desenho, um texto, uma música? Manda um 🎨 se sim!" Use as reações como gancho. Então diga: "Hoje vocês vão aprender a pedir pra IA criar um site inteiro pra vocês. Mas o mais legal: vocês vão entender como o site funciona por dentro e vão poder mudar tudo que quiserem. No final da aula, cada um vai ter sua própria página na internet. Agora liga a câmera e me conta: qual app ou site vocês mais usam no dia a dia?"'
      : 'Comece perguntando: "Quem aqui já usou ChatGPT ou Gemini?" (a maioria vai levantar a mão). Depois: "E quem já pediu pra IA criar alguma coisa — um desenho, um texto, uma música?" (vários vão responder). Então diga: "Hoje vocês vão aprender a pedir pra IA criar um site inteiro pra vocês. Mas o mais legal: vocês vão entender como o site funciona por dentro e vão poder mudar tudo que quiserem. No final da aula, cada um vai ter sua própria página na internet."',

    // ─── PRÉ-REQUISITOS ──────────────────────────────────────────────
    prerequisites: isRemote
      ? [
          'Computador com Windows, macOS ou Linux (com webcam e microfone funcionando)',
          'Acesso à internet estável (mínimo recomendado: 5 Mbps)',
          'Plataforma de videoconferência instalada (Google Meet ou Zoom)',
          'Conta Google (para usar o Gemini gratuitamente)',
          'Um espaço silencioso e bem iluminado para participar da aula',
          'Nenhum conhecimento prévio de programação necessário — só curiosidade',
        ]
      : [
          'Computador com Windows, macOS ou Linux',
          'Acesso à internet estável',
          'Conta Google (para usar o Gemini gratuitamente)',
          'Nenhum conhecimento prévio de programação necessário — só curiosidade',
        ],

    // ─── WINGET (compartilhado) ──────────────────────────────────────
    wingetIntro:
      'Winget é o instalador automático do Windows — pensa nele como a loja do Roblox ou a Google Play, só que para programas do computador. Em vez de entrar em sites, clicar em "baixar", "aceitar termos" e ficar clicando em "próximo", você abre o terminal e digita um comando. O Windows baixa e instala tudo sozinho, sem complicação.',

    // ─── SETUP ───────────────────────────────────────────────────────
    setup: [
      {
        name: 'VS Code',
        description:
          'Editor de código gratuito da Microsoft. É onde vamos escrever o HTML e CSS da aula — com destaque de cores, autocomplete e organização de arquivos.',
        analogy:
          'Pensa no VS Code como o Roblox Studio: você não joga Roblox por ele, você cria. O VS Code é a ferramenta onde você constrói sites, assim como o Studio é onde você constrói mapas e jogos.',
        wingetCommand: 'winget install Microsoft.VisualStudioCode',
        url: 'https://code.visualstudio.com/',
        teacherScript: isRemote
          ? 'Compartilhe sua tela mostrando o PowerShell e rode o comando winget ao vivo. Peça aos alunos para fazerem o mesmo — se alguém travar, peça para compartilhar a tela via breakout room e ajude individualmente. Se alguém tiver Mac, mande o link do site no chat.'
          : 'Projete a tela do seu computador enquanto instala. No Windows, abra o PowerShell como administrador e rode o comando. Espere o download + instalação terminar (cerca de 1 minuto). Se alguém tiver Mac, direcione para o site do VS Code para download direto. Durante a instalação, aproveite para explicar o que é um editor de código vs. um editor de texto comum (como Word).',
      },
      {
        name: 'Extensão Live Server',
        description:
          'Plugin para VS Code que abre seu site no navegador em tempo real enquanto você edita. Qualquer mudança no código aparece na tela automaticamente, sem precisar ficar abrindo o arquivo na mão.',
        analogy:
          'É o "playtesting" do Roblox Studio — você mexe em algo e já vê o resultado na hora, sem precisar exportar nem reabrir nada.',
        wingetCommand:
          'Instale dentro do VS Code: clique no ícone de extensões (Ctrl+Shift+X), pesquise "Live Server" e clique em instalar.',
        teacherScript: isRemote
          ? 'Compartilhe sua tela e demonstre passo a passo: VS Code → ícone de extensões → buscar "Live Server" → Install. Peça ✅ no chat quando terminarem. Use uma enquete rápida: "Todo mundo instalou?"'
          : 'Demonstre passo a passo no projetor: abra o VS Code → clique no ícone de quadrados no lado esquerdo (extensões) → digite "Live Server" → clique em "Install" no primeiro resultado (por Ritwick Dey). Espere todos terminarem antes de prosseguir.',
      },
      {
        name: 'Google Chrome',
        description:
          'Navegador recomendado para a aula. Tem as melhores ferramentas de desenvolvedor (aperte F12 para ver por dentro de qualquer site) e é o mais compatível com o que vamos criar.',
        analogy:
          'Você provavelmente já usa o Chrome para jogar jogos online, assistir YouTube ou pesquisar cheats de jogos. Na aula vamos usar ele para ver o site que você criou e espiar como outros sites foram feitos por dentro — como abrir as entranhas de um jogo.',
        wingetCommand: 'winget install Google.Chrome',
        url: 'https://www.google.com/chrome/',
        teacherScript: isRemote
          ? 'A maioria já terá Chrome. Pergunte no chat: "Quem NÃO tem Chrome? Manda o nome do seu navegador." Edge e Firefox funcionam, avise que as DevTools podem ser ligeiramente diferentes.'
          : 'A maioria dos alunos já terá Chrome instalado. Peça para verificarem. Se alguém só tiver Edge ou Firefox, funciona também, mas avise que as DevTools podem ser ligeiramente diferentes. O importante é que todos tenham um navegador moderno.',
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
        teacherScript: isRemote
          ? 'Mande o link gemini.google.com no chat da videoconferência. Peça para todos abrirem. Se alguém não tiver conta Google, ajude via breakout room ou organize duplas por chat privado. Teste com a turma: "Digita \'Olá, Gemini!\' e manda ✅ no chat quando receber resposta."'
          : 'Peça para todos abrirem gemini.google.com no Chrome e logarem com a conta Google. Se alguém não tiver conta Google, ajude a criar uma rapidamente ou organize uma dupla com alguém que tenha. Teste com a turma: peça para todos digitarem "Olá, Gemini!" e verem a resposta. Isso garante que todos estão prontos.',
      },
      ...(isRemote
        ? [
            {
              name: 'Google Meet ou Zoom',
              description:
                'Plataforma de videoconferência para a aula à distância. É onde todos vão se conectar, ver o compartilhamento de tela do professor e interagir.',
              analogy:
                'É como uma sala de aula virtual — você vê o professor, os colegas, e pode levantar a mão (virtual) para fazer perguntas.',
              wingetCommand:
                'Google Meet: acesse diretamente pelo navegador em meet.google.com. Zoom: winget install Zoom.Zoom',
              teacherScript:
                'Envie o link da sala com antecedência (e-mail ou grupo de WhatsApp). Peça aos alunos para entrarem 5 minutos antes, testarem áudio e câmera. Tenha pronto um slide de "sala de espera" com as instruções iniciais.',
            },
          ]
        : []),
    ],

    // ─── AGENDA — CRONOGRAMA COMPLETO ─────────────────────────────────
    agenda: [
      // BLOCO 1: Abertura
      {
        time: '00:00 – 00:12',
        title: '🎤 Boas-vindas + Icebreaker',
        difficulty: 'fácil',
        description: isRemote
          ? 'Apresentação do instrutor, teste de áudio/vídeo, icebreaker interativo via chat/reações e contextualização: o que é um site? O que é front-end? Por que aprender isso em 2025 com IA disponível?'
          : 'Apresentação do instrutor, dinâmica rápida de icebreaker e contextualização: o que é um site? O que é front-end? Por que aprender isso em 2025 com IA disponível?',
        teacherNotes: isRemote
          ? [
              'Comece com energia alta mesmo pela câmera. Se apresente (30 segundos) — nome, o que faz, um fato divertido.',
              'Use o icebreaker com reações/chat descrito acima. "Manda um 👋 no chat!"',
              'Faça uma enquete rápida (recurso do Meet/Zoom): "Qual app/site vocês mais usam?" com opções.',
              'Compartilhe sua tela e mostre 2–3 sites conhecidos (Instagram, Roblox) — "isso é HTML + CSS!"',
              'Diga: "Vou compartilhar minha tela o tempo inteiro. Quando eu pedir pra vocês fazerem algo, me mandem ✅ no chat quando terminarem e ❌ se travarem."',
              '⚠️ NÃO gaste mais de 12 minutos. Verificações de áudio/vídeo contam nesse tempo.',
            ]
          : [
              'Comece com energia alta. Se apresente de forma breve (30 segundos) — nome, o que você faz, e um fato divertido.',
              'Use o icebreaker descrito acima. É essencial para quebrar a barreira inicial.',
              'Pergunte: "Alguém sabe a diferença entre um site e um app?" — deixe livre, não existe resposta errada.',
              'Mostre no projetor 2–3 sites conhecidos (Instagram web, Roblox, etc.) e diga: "isso é feito com o que vamos aprender hoje".',
              'Apresente: "Tudo que vocês veem na internet — cada botão, cada foto, cada texto — foi construído por alguém com as mesmas ferramentas que vocês vão usar agora."',
              '⚠️ NÃO gaste mais de 12 minutos nessa parte.',
            ],
        images: [
          {
            placeholder:
              '📸 Slide de abertura com o título "Web Design com IA" e os logos de HTML, CSS, Gemini',
            alt: 'Slide de título da aula Web Design com IA',
          },
          {
            placeholder:
              '📸 Screenshot de sites populares (Instagram, Roblox, YouTube) lado a lado com a legenda "Tudo isso é HTML + CSS"',
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
        teacherNotes: isRemote
          ? [
              'Compartilhe sua tela no Zoom/Meet o tempo inteiro. Cada clique que você der, os alunos devem reproduzir.',
              'Crie a pasta "meu-site" na Área de Trabalho. Arraste para o VS Code.',
              'Crie index.html. Explique: "esse é o nome padrão que todo navegador procura."',
              'Abra com Live Server e mostre a página em branco: "Essa tela branca é o seu site."',
              'Peça ✅ no chat quando cada aluno tiver a página branca aberta. Conte até 10 mentalmente.',
              'Se alguém travar: peça para compartilhar a tela do aluno ou mova para breakout room para ajudar 1:1.',
              '🕐 Máximo 13 min. Se alguém ainda estiver instalando, peça para acompanhar pela sua tela enquanto termina.',
            ]
          : [
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
            placeholder:
              '📸 Screenshot do VS Code vazio com uma pasta "meu-site" aberta no explorer lateral',
            alt: 'VS Code com pasta do projeto aberta',
          },
          {
            placeholder:
              '📸 Screenshot mostrando como abrir o Live Server (clique direito → "Open with Live Server")',
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
        teacherNotes: isRemote
          ? [
              'ANTES de ir para a IA, ensine o conceito (3 min). Compartilhe um slide com a "árvore HTML" — caixa dentro de caixa.',
              'Use a analogia de LEGO: "Cada tag é uma peça. O <h1> é a peça de título, o <p> é o bloco de texto."',
              'Mostre 5 tags na tela compartilhada com resultado visual ao lado (split screen).',
              'Agora abra o Gemini na tela compartilhada. Execute o prompt AO VIVO para a turma ver.',
              'Pause e leia com eles: "O que vocês acham que cada linha faz?" Use o chat para respostas.',
              'Peça para copiarem e colarem no VS Code. "Troquem pelo nome e texto de vocês. Quando terminar, manda ✅."',
              'Os 3 erros mais comuns nessa fase: (1) colar fora do <body>, (2) esquecer Ctrl+S, (3) confundir aba Gemini com VS Code.',
              'Se alguém travar: peça para compartilhar a tela ou use breakout room.',
              'Ao final, TODO aluno deve ter uma página com seu nome no navegador. Verifique via chat.',
            ]
          : [
              'ANTES de ir para a IA, ensine o conceito por 3 minutos. Desenhe no quadro ou mostre o slide: o HTML é uma "árvore" — uma caixa dentro da outra.',
              'Use a analogia de LEGO: "Cada tag HTML é uma peça de LEGO. O <h1> é aquela peça grandona de título. O <p> é um bloco de texto. O <img> é a peça com uma foto colada."',
              'Mostre 5 tags no projetor com o resultado visual ao lado (split screen entre código e navegador). Não passe de 5 tags.',
              'Agora sim, vá para o Gemini. Projete o prompt sugerido e execute AO VIVO para os alunos verem.',
              'Pause depois que o Gemini gerar o código: "Vamos ler isso juntos. O que vocês acham que cada linha faz?"',
              'Peça para copiarem, colarem no VS Code e TROCAREM o nome e texto para os deles.',
              'Circule pela sala. Os 3 erros mais comuns: (1) colar fora do <body>, (2) esquecer de salvar (Ctrl+S), (3) confundir aba Gemini com VS Code.',
              'Ao final desse bloco, TODO aluno deve ter uma página com seu nome aparecendo no navegador.',
            ],
        images: [
          {
            placeholder:
              '📸 Diagrama "Anatomia de uma página HTML" — árvore <html> → <head> + <body> → tags internas',
            alt: 'Diagrama visual da anatomia de uma página HTML',
          },
          {
            placeholder:
              '📸 Screenshot split-screen: código HTML à esquerda, resultado renderizado no Chrome à direita',
            alt: 'VS Code com HTML ao lado do resultado no navegador',
          },
          {
            placeholder:
              '📸 Screenshot do Gemini gerando a estrutura HTML de uma página pessoal',
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
        teacherNotes: isRemote
          ? [
              'Comece com o efeito WOW: "A página de vocês tá com cara de documento do Word. Agora vamos transformar num site DE VERDADE."',
              'Na tela compartilhada: crie style.css, adicione o <link> no <head>. Salve e mostre que nada mudou.',
              'Adicione body { background-color: #1a1a2e; color: white; } — salve e mostre a transformação. "Viram!?"',
              '"HTML é o esqueleto. CSS é a roupa, a maquiagem, o penteado."',
              'Use o Gemini para gerar paleta de cores ao vivo na tela compartilhada.',
              'Demonstre 5 propriedades CSS, uma por vez: (1) background-color, (2) color, (3) font-family, (4) text-align: center, (5) border-radius.',
              '"Qual a cor favorita de vocês? Manda no chat! Agora pede pro Gemini criar uma paleta baseada nessa cor."',
              '⚠️ Não ensine flexbox, grid ou media queries. Cores e fontes apenas.',
            ]
          : [
              'Comece com o efeito WOW: "A página de vocês tá com cara de documento do Word, né? Agora vamos transformar num site DE VERDADE."',
              'Demonstre no projetor: crie style.css, adicione o <link> no <head>. Salve e mostre que nada mudou.',
              'Adicione body { background-color: #1a1a2e; color: white; } — salve e mostre a transformação instantânea. Os alunos vão reagir.',
              '"HTML é o esqueleto. CSS é a roupa, a maquiagem, o penteado. Mesma página, visual totalmente diferente."',
              'Use o Gemini na tela para gerar uma paleta de cores. Projete o prompt ao vivo.',
              'Demonstre 5 propriedades CSS, uma por vez, salvando e mostrando: (1) background-color, (2) color, (3) font-family, (4) text-align: center, (5) border-radius.',
              '"Qual é a cor favorita de vocês? Peça pro Gemini criar uma paleta baseada nessa cor."',
              'Se sobrar tempo, mostre Google Fonts — como usar fonte diferente com @import.',
              '⚠️ Não ensine flexbox, grid, media queries ou position. Cores e fontes apenas.',
            ],
        images: [
          {
            placeholder:
              '📸 Before/After: mesma página HTML, antes sem CSS (sem estilo) e depois com CSS (cores, fontes)',
            alt: 'Comparação visual antes e depois de aplicar CSS',
          },
          {
            placeholder:
              '📸 Screenshot do Gemini sugerindo uma paleta de cores com códigos hexadecimais',
            alt: 'Gemini gerando uma paleta de cores para o aluno',
          },
          {
            placeholder:
              '📸 Cheat-sheet de 5 propriedades CSS essenciais (background-color, color, font-family, text-align, border-radius)',
            alt: 'Cartão de referência visual de propriedades CSS',
          },
        ],
        aiTip:
          'Prompt sugerido: "Tenho uma página HTML de apresentação pessoal. Me sugira um esquema de cores moderno e bonito em CSS para um jovem de 16 anos que gosta de games. Me dê o código CSS pronto." Teste o resultado, ajuste as cores e peça variações.',
      },

      // BLOCO 5: Projeto livre
      {
        time: '01:07 – 01:22',
        title: '🚀 Projeto livre — Sua mini página pessoal',
        difficulty: 'desafiador',
        description: isRemote
          ? 'Cada aluno customiza sua página à vontade: troca cores, adiciona seções novas, coloca uma foto real, cria links para suas redes. O professor fica disponível via chat e breakout rooms. Estímulo ao uso criativo da IA.'
          : 'Cada aluno customiza sua página à vontade: troca cores, adiciona seções novas, coloca uma foto real, cria links para suas redes. Instrutor circula pela sala ajudando. Estímulo ao uso criativo da IA.',
        teacherNotes: isRemote
          ? [
              'Este é o momento mais importante. Os alunos precisam de AUTONOMIA. Não ensine conceitos novos — só ajude.',
              'Compartilhe um slide com "Ideias para melhorar sua página" e diga: "Escolham pelo menos 2."',
              'Ideias: (1) Seção "Meus hobbies", (2) Foto de verdade, (3) Paleta favorita, (4) Link pro Instagram/TikTok, (5) Efeito hover, (6) Seção "Jogo favorito".',
              'Fique de olho no chat. Responda dúvidas rapidamente. Se uma dúvida for complexa, mova o aluno para breakout room.',
              'Se um aluno terminar rápido, desafie pelo chat privado: "Tenta pedir ao Gemini um modo escuro!"',
              'Se alguém estiver frustrado: peça para compartilhar a tela e resolva junto.',
              'Avise: "Galera, 5 minutos! Salvem tudo! Já vamos apresentar."',
              '💡 "A IA é seu assistente, não seu cérebro. Quando ela gerar código, leia, entenda e modifique para ser SEU."',
            ]
          : [
              'Este é o momento mais importante da aula. Os alunos precisam de AUTONOMIA. Não ensine conceitos novos — só ajude quando pedirem.',
              'Projete na tela a lista de "Ideias para melhorar sua página" e diga: "Escolham pelo menos 2."',
              'Ideias: (1) Seção "Meus hobbies" com lista, (2) Foto de verdade, (3) Paleta favorita, (4) Link pro Instagram/TikTok, (5) Efeito hover, (6) Seção "Jogo favorito".',
              'Circule pela sala ativamente. Pergunte: "O que você está tentando fazer? Posso ajudar?"',
              'Se um aluno terminar rápido, desafie: "Tenta pedir ao Gemini um modo escuro!" ou "Pede uma animação no título."',
              'Se alguém estiver frustrado: sente do lado, descubra o problema e resolva junto.',
              'Avise com 5 minutos de antecedência: "Último ajuste! Salvem tudo!"',
              '💡 "A IA é seu assistente, não seu cérebro. Quando ela gerar código, leia, entenda e modifique para ser SEU."',
            ],
        images: [
          {
            placeholder:
              '📸 Slide "Ideias para melhorar sua página" — lista visual com ícones (🎨 Cores, 📸 Foto, 🔗 Links, ✨ Efeitos, 🎮 Jogos)',
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
        description: isRemote
          ? 'Cada aluno compartilha sua tela e mostra sua página por 30 segundos. Votação do site mais criativo via reações. Discussão no chat e encerramento.'
          : 'Cada aluno abre sua página no Live Server e mostra rapidamente para a turma. Votação do site mais criativo. Discussão: o que aprendemos? O que foi mais difícil?',
        teacherNotes: isRemote
          ? [
              'Peça voluntários: "Quem quer mostrar? Compartilha a tela!" Comece com quem você viu fazendo algo criativo.',
              'Cada apresentação: 30 seg. "Mostra e diz o que mais curtiu."',
              'Votação no chat: "Qual foi o mais criativo? Manda o nome da pessoa!" (engajamento positivo).',
              'Perguntas de fechamento no chat ou com microfone aberto: "O que foi mais fácil? Mais difícil? O que acharam de usar IA?"',
              'Compartilhe o slide de "Próximos passos" e diga: "Tudo que vocês fizeram pode ser publicado de graça com GitHub Pages."',
              'Encerre: "Vocês criaram seu primeiro site. Isso É programação. E fizeram em 1h30 o que há 20 anos levaria semanas. 🚀"',
            ]
          : [
              'Peça voluntários primeiro. Se poucos levantarem a mão, comece com quem você viu fazendo algo criativo.',
              'Cada apresentação: no máximo 30 seg. "Mostra e diz o que mais curtiu."',
              'Votação rápida: "Qual foi o mais criativo? Levanta a mão." (engajamento positivo).',
              'Perguntas de fechamento: (1) "O que foi mais fácil?" (2) "Mais difícil?" (3) "O que acharam de usar IA?"',
              'Mostre os próximos passos no projetor e diga: "Tudo isso pode ser publicado de graça com GitHub Pages."',
              'Encerre com energia: "Vocês criaram seu primeiro site. Isso É programação. E fizeram em 1h30 o que há 20 anos levaria semanas. 🚀"',
            ],
        images: [
          {
            placeholder:
              '📸 Slide "Próximos passos" com ícones e links: Curso em Vídeo, MDN Web Docs, FreeCodeCamp, GitHub Pages',
            alt: 'Slide com recursos e próximos passos para os alunos',
          },
        ],
      },
    ],

    // ─── EXERCÍCIOS PRÁTICOS (compartilhados) ──────────────────────────
    exercises: [
      'Peça ao Gemini: "Me faça uma página HTML de apresentação pessoal" — depois troque o nome, a foto e o texto pelo seu.',
      'Modifique pelo menos 3 propriedades CSS para personalizar as cores e fontes da sua página.',
      'Adicione uma seção "Meus hobbies" com uma lista (<ul>) de pelo menos 3 itens. Estilize com CSS.',
      'Use o Gemini para perguntar: "Como faço para centralizar um texto em CSS?" — implemente e teste.',
      'Desafio extra: adicione um botão que leva para o seu Instagram, TikTok ou YouTube usando <a>. Estilize com background-color e border-radius.',
      'Desafio bônus: peça ao Gemini "Como faço uma animação de fade-in no meu título usando só CSS?" e implemente.',
    ],

    // ─── TROUBLESHOOTING ──────────────────────────────────────────────
    troubleshooting: [
      {
        problem: 'O Live Server não aparece no menu de contexto (clique direito)',
        solution:
          'Verifique se a extensão está instalada e habilitada. Reinicie o VS Code. Se ainda não aparecer, use Ctrl+Shift+P → "Live Server: Open".',
      },
      {
        problem: 'As alterações no CSS não aparecem no navegador',
        solution:
          'Verifique se o <link rel="stylesheet" href="style.css"> está dentro do <head>. Confira o nome do arquivo (maiúsculas importam). Tente Ctrl+Shift+R para reload sem cache.',
      },
      {
        problem: 'A imagem não carrega (<img> aparece quebrada)',
        solution:
          'Confira se o arquivo está na mesma pasta que index.html. Verifique se o nome no src="" é idêntico (incluindo extensão).',
      },
      {
        problem: 'A página aparece toda "quebrada" ou sem formatação',
        solution:
          'Provavelmente há uma tag não fechada. Cole o código no Gemini e pergunte: "Meu HTML está quebrado, pode encontrar o erro?"',
      },
      {
        problem: 'O Gemini gerou código que não funciona',
        solution:
          'A IA nem sempre acerta de primeira. Diga ao Gemini: "Isso não funcionou — o erro é [descrição]. Me ajuda a corrigir." Ensinar a dar feedback para a IA é uma habilidade valiosa!',
      },
      ...(isRemote
        ? [
            {
              problem: 'Áudio ou vídeo do aluno não funciona na videoconferência',
              solution:
                'Peça para verificar as permissões do navegador (ícone de cadeado na barra de endereço). Tente recarregar a página. Se persistir, sugira sair e entrar novamente na sala. Como último recurso, o aluno pode participar só pelo chat.',
            },
            {
              problem: 'O aluno não consegue compartilhar a tela',
              solution:
                'No Zoom: botão "Compartilhar tela" na barra inferior. No Meet: botão "Apresentar agora". Se o navegador pedir permissão, clicar em "Permitir". Em Mac, pode ser necessário ativar em Preferências do Sistema → Segurança → Gravação de tela.',
            },
            {
              problem: 'Lag/travamentos na videoconferência',
              solution:
                'Peça para desligar a câmera temporariamente (o áudio consome menos banda). Fechar abas/programas desnecessários. Se persistir, o aluno pode acompanhar pelo chat e compartilhar screenshots do progresso.',
            },
          ]
        : [
            {
              problem: 'O aluno não consegue acessar o Gemini (bloqueio escolar/rede)',
              solution:
                'Alterne para o ChatGPT (chat.openai.com) ou organize duplas. Em último caso, o professor projeta o Gemini e os alunos pedem prompts pela turma.',
            },
          ]),
    ],

    // ─── FAQ (compartilhado) ──────────────────────────────────────────
    faq: [
      {
        question: 'Preciso decorar todas essas tags HTML?',
        answer:
          'Não! Ninguém decora. Nem profissionais. O importante é saber que existem, entender o conceito e saber onde procurar (Google, MDN, ou perguntar à IA). É como dirigir: você não monta o motor, mas sabe o que cada pedal faz.',
      },
      {
        question: 'A IA vai substituir os programadores?',
        answer:
          'A IA é uma ferramenta, não um substituto. A calculadora substituiu os matemáticos? Não — permitiu que fizessem coisas mais difíceis. Com IA, programadores fazem coisas melhores e mais rápido. Mas alguém precisa PENSAR no que criar. Esse alguém é você.',
      },
      {
        question: 'Posso criar qualquer site com HTML e CSS?',
        answer:
          'A estrutura e a aparência, sim! Para interatividade (formulários, chat, jogos), você precisa de JavaScript — próximo passo natural.',
      },
      {
        question: 'Como coloco meu site na internet de verdade?',
        answer:
          'Serviços gratuitos como GitHub Pages, Netlify e Vercel publicam seu site para o mundo. Pergunte ao Gemini: "Como publicar um site HTML no GitHub Pages?"',
      },
      {
        question: 'E se eu quiser continuar aprendendo depois da aula?',
        answer:
          'Canal "Curso em Vídeo" no YouTube (PT-BR, gratuito), freeCodeCamp.org (EN), e praticar fazendo projetos pessoais.',
      },
    ],

    // ─── CRITÉRIOS DE AVALIAÇÃO (compartilhados) ──────────────────────
    assessment: [
      '✅ O aluno criou um arquivo index.html funcional com pelo menos 3 tags diferentes',
      '✅ O aluno criou e linkou um arquivo style.css com pelo menos 3 propriedades customizadas',
      '✅ O aluno utilizou a IA como assistente pelo menos 2 vezes durante a aula',
      '✅ O aluno conseguiu explicar (em suas palavras) a diferença entre HTML e CSS',
      '✅ O aluno personalizou a página com seu próprio conteúdo (nome, texto, cores)',
      '⭐ Bônus: o aluno adicionou elementos extras (animações, seções, efeitos hover)',
    ],

    // ─── RECURSOS (compartilhados + extra remoto) ─────────────────────
    resources: [
      {
        title: 'MDN Web Docs — Referência HTML e CSS',
        url: 'https://developer.mozilla.org/pt-BR/',
        why: 'Documentação oficial da web, em português.',
      },
      {
        title: 'Gemini — IA do Google (gratuito)',
        url: 'https://gemini.google.com/',
        why: 'Ferramenta de IA usada na aula. Gratuita com conta Google.',
      },
      {
        title: 'ChatGPT — IA da OpenAI',
        url: 'https://chat.openai.com/',
        why: 'Alternativa ao Gemini.',
      },
      {
        title: 'VS Code — Editor de código',
        url: 'https://code.visualstudio.com/',
        why: 'O editor de código gratuito mais usado no mundo.',
      },
      {
        title: 'Curso em Vídeo — HTML e CSS (YouTube, PT-BR)',
        url: 'https://www.youtube.com/@CursoemVideo',
        why: 'Melhor curso gratuito de HTML/CSS para iniciantes em português.',
      },
      {
        title: 'freeCodeCamp — Cursos interativos',
        url: 'https://www.freecodecamp.org/',
        why: 'Plataforma gratuita com exercícios práticos e certificação.',
      },
      {
        title: 'ColorHunt — Paletas de cores',
        url: 'https://colorhunt.co/',
        why: 'Inspiração de paletas para personalizar sites.',
      },
    ],

    // ─── MENSAGEM DE ENCERRAMENTO (compartilhada) ─────────────────────
    closingMessage:
      'Vocês acabaram de dar o primeiro passo num universo gigante. Tudo que existe na internet — cada rede social, cada jogo online, cada loja — foi construído com as mesmas ferramentas que vocês usaram hoje. A diferença entre vocês agora e um desenvolvedor profissional é só prática e tempo. Continuem criando, continuem perguntando à IA, e continuem curiosos. O próximo grande site pode ser de vocês. 🚀',
  }
}

/* ═══════════════════════════════════════════════════════════════════════
   Exportações: ambas as variantes e a variante presencial como padrão.
   ═══════════════════════════════════════════════════════════════════════ */
export const lessonPlanPresencial = createLessonPlan('presencial')
export const lessonPlanDistancia = createLessonPlan('distancia')
export const lessonPlan = lessonPlanPresencial

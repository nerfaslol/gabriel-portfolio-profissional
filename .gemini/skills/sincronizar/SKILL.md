---
name: sincronizar
description: "Sincroniza o contexto do projeto, atualizando ou inicializando o arquivo GEMINI.md. Use quando o usuário digitar o comando /sincronizar. Atua como um init de projeto em sessões novas ou como captura de aprendizados no meio de uma sessão."
---

# Sincronizar Contexto (GEMINI.md)

Este skill é ativado quando o usuário solicita `/sincronizar`. Seu objetivo é analisar o estado atual do repositório e atualizar as diretrizes, aprendizados e descrições no arquivo de contexto `GEMINI.md`.

## Fluxo de Trabalho

Sempre que ativado, siga as etapas abaixo, avaliando o momento em que a sessão se encontra:

1. **Análise do Repositório:**
   - Liste os arquivos e diretórios na raiz e nas pastas principais (ex: `src/`).
   - Leia os arquivos de configuração (ex: `package.json`, `vite.config.ts`, `tsconfig.json`) e de estilo para entender o ecossistema.
   - Leia o arquivo `GEMINI.md` existente (se houver).

2. **Determinação do Contexto:**
   - **Caso 1: Nova Sessão (Comportamento de "Init")**
     - Se a conversa estiver apenas começando e o `GEMINI.md` estiver vazio, antigo ou o usuário pedir um diagnóstico completo:
     - Escreva um resumo completo da arquitetura, dependências, scripts de build e convenções de código baseadas nas ferramentas instaladas (Clean Code, SOLID, etc.).
   - **Caso 2: Meio de Sessão (Comportamento de "Session Learning Capture")**
     - Se o comando for invocado no meio de uma conversa onde tarefas foram realizadas:
     - Sintetize as decisões arquiteturais tomadas durante a sessão (ex: uso de uma biblioteca específica, padrões de design acordados, solução de bugs recorrentes).
     - Mescle esses novos aprendizados com o conteúdo existente no `GEMINI.md`, adicionando uma seção de "Aprendizados e Decisões Recentes" ou atualizando as regras globais do projeto.

3. **Atualização do GEMINI.md:**
   - Reescreva ou atualize o arquivo `GEMINI.md` na raiz do projeto contendo as informações coletadas e consolidadas. O arquivo deve ser mantido limpo, organizado em Markdown e priorizar informações acionáveis para o agente.

4. **Confirmação:**
   - Informe ao usuário as seções do `GEMINI.md` que foram criadas ou atualizadas, confirmando a sincronização.
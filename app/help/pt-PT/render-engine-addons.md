---
title: Adicionar um motor de renderização com um suplemento
summary: O que um suplemento pode acrescentar à lista Motor da caixa de diálogo Render, a permissão de que precisa para executar um programa, e o que o Studio verifica e pergunta.
keywords: suplemento, addon, motor, motor de renderização, programador, engine.run, permissão, programa, script, assinado, studio, api
from: 06295376
---

Um suplemento (Definições › Suplementos) pode acrescentar um motor à lista Motor de {{ui:Render}}. O texto completo para autores de suplementos está na secção 16 da especificação de suplementos; em resumo:

- O suplemento regista um motor com um id que começa pelo seu próprio, um nome, definições opcionais e **ou** um programa a executar **ou** uma função em JavaScript que desenha a imagem.
- Um motor que executa um programa precisa da permissão **`engine.run`**, mostrada antes da instalação e nas Definições. Só funciona no Studio; no navegador aparece como um ficheiro a guardar.
- O suplemento indica o programa (um nome de ficheiro simples: nunca uma shell), um script que está **dentro do suplemento assinado**, e argumentos feitos de marcadores e palavras simples. O Studio encontra o programa ou pede-lhe que o indique uma vez.
- Na primeira vez que um suplemento executa um programa, **o Studio pergunta-lhe na sua própria caixa de diálogo**: qual o suplemento, qual o programa, e que um script pode fazer tudo o que o programa pode. Permita-o apenas para um suplemento em que confie. A sua resposta fica registada para esse suplemento e programa.
- O pacote (a cena em USD e um ficheiro de definições, com o ficheiro glTF quando o suplemento o pedir) e o script do suplemento são colocados numa pasta temporária nova, o programa executa-se aí, e a imagem volta marcada com o nome do motor do suplemento.

:::note
Os suplementos só podem acrescentar motores de renderização a partir da API de suplementos 1.4. Um exemplo completo de um renderizador de linha de comandos de código aberto está no seu próprio repositório; ainda não foi executado nesse renderizador.
:::

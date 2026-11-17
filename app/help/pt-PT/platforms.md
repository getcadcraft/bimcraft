---
title: Navegadores, dispositivos e memória
summary: O que difere no BimCraft entre Chrome, Edge, Firefox e Safari, em Mac, Windows e Linux, com rato, trackpad ou toque, e o tamanho de ficheiro que consegue aceitar.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telemóvel, toque, trackpad, memória, ficheiros grandes, webgl, desempenho
from: fd8acba1
---

BimCraft funciona nas versões atuais do Chrome, Edge, Firefox e Safari, em Mac, Windows e Linux. A vista 3D precisa de WebGL, que todos os navegadores atuais têm. Ver [Navegadores e computadores](common:browsers) para o que as aplicações precisam em geral.

## Abrir uma pasta

| Navegador | {{ui:Abrir uma pasta}} faz isto | Arrastar uma pasta para dentro | {{ui:Pastas recentes}} |
|---|---|---|---|
| Chrome, Edge | O seletor de pastas do navegador, depois "Permitir que o site veja os ficheiros?": clique em **Ver ficheiros** | Abre sem perguntas | Sim, para pastas escolhidas ou arrastadas |
| Firefox | O seletor de pastas do sistema | Abre sem perguntas | Não |
| Safari | O seletor de pastas do sistema, com um botão **Carregar** (nada é carregado) | Abre sem perguntas | Não |

Nos bastidores: Chrome e Edge usam o seletor File System Access e podem memorizar a pasta. Firefox e Safari usam o seletor de pastas mais antigo, que entrega todos os ficheiros da pasta de uma só vez e não pode ser memorizado. Uma pasta arrastada é lida entrada a entrada em todos os navegadores.

:::chromium
O Brave e alguns outros navegadores Chromium desligam o seletor de pastas. O BimCraft usa então o seletor de pastas do sistema, e o navegador pode perguntar "Carregar *n* ficheiros para este site?". Nada é carregado; os ficheiros vão apenas para o separador. Arrastar a pasta evita a pergunta.
:::

## Mac, Windows e Linux

- Os atalhos {{key:Mod+S}} e {{key:Mod+Z}} são Command num Mac e Ctrl no Windows e Linux.
- {{key:Ctrl+Shift+F}} (modos de ecrã) é Control em todas as plataformas, incluindo um Mac.
- As caixas de diálogo de ficheiros e a pasta de transferências são as do seu sistema.

## Rato, trackpad e toque

| Entrada | Vista 3D | Desenho 2D |
|---|---|---|
| Rato | Arrastar com o botão esquerdo orbita, com o direito desloca a vista, a roda faz zoom, clicar escolhe | Qualquer arrasto desloca a vista, a roda faz zoom, duplo clique ajusta |
| Trackpad | Clicar e arrastar orbita; {{key:Shift}} ou {{key:Mod}} e arrastar desloca a vista; deslocar com dois dedos ou pinça faz zoom | Clicar e arrastar desloca a vista; deslocar com dois dedos ou pinça faz zoom |
| Toque | Um dedo orbita, dois dedos fazem pinça e deslocam a vista, toque escolhe | Um dedo desloca a vista; ainda sem zoom por pinça; toque em {{ui:Ajustar}} |

Num trackpad de Mac, o clique com o botão direito é um clique com dois dedos (ou Control-clique). Ver [Teclas, ratos e trackpads](common:keys).

Os tablets e os telemóveis podem abrir ficheiros isolados e vê-los, mas o ecrã é pequeno, muitos navegadores móveis não conseguem escolher pastas, e modelos grandes podem não caber na sua memória. Um computador funciona melhor.

## Ficheiros grandes e memória

Tudo o que o BimCraft lê vive na memória do separador do navegador. Quanto um separador pode usar depende do navegador e do seu computador, mais do que do BimCraft.

| Ficheiro | Quanto é lido | O que esperar |
|---|---|---|
| IFC | O ficheiro inteiro, mais a geometria 3D construída a partir dele | Depende do seu computador e navegador; um modelo de várias centenas de megabytes pode ser demais para um portátil. Acima de 1.5 million triângulos, as arestas são desligadas |
| Ficheiros de projeto e de família | Cerca de 40 KB a 100 KB, seja qual for o tamanho | Mesmo modelos centrais muito grandes abrem num instante, também a partir de uma unidade de rede |
| DWG e DXF | O ficheiro inteiro | Desenhos muito grandes mostram "This drawing is very large; only part of it is shown." |
| Pastas | A lista de ficheiros, mais alguns kilobytes por modelo | Até 20,000 ficheiros |

Se um separador ficar sem memória, o navegador mostra a sua própria página de erro ("Aw, Snap!" no Chrome, por exemplo). Feche outros separadores, recarregue o BimCraft e tente de novo, ou use um computador com mais memória.

## Relacionados

- [Online e offline](topic:online-offline)
- [Resolução de problemas](topic:troubleshooting)

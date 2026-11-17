---
title: Navegadores, dispositivos e memória
summary: O que muda no BimCraft entre Chrome, Edge, Firefox e Safari, no Mac, Windows e Linux, com mouse, trackpad ou toque, e quanto arquivo grande ele aceita.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, celular, toque, trackpad, memória, arquivos grandes, webgl, desempenho
from: fd8acba1
---

BimCraft roda nas versões atuais do Chrome, Edge, Firefox e Safari, no Mac, Windows e Linux. A vista 3D precisa de WebGL, que todo navegador atual tem. Veja [Navegadores e computadores](common:browsers) para o que os aplicativos precisam em geral.

## Abrir uma pasta

| Navegador | {{ui:Abrir uma pasta}} faz isto | Arrastar uma pasta | {{ui:Pastas recentes}} |
|---|---|---|---|
| Chrome, Edge | O seletor de pastas do navegador, depois "Permitir que o site veja arquivos?": clique em **Ver arquivos** | Abre sem perguntar | Sim, para pastas escolhidas ou arrastadas |
| Firefox | O seletor de pastas do sistema | Abre sem perguntar | Não |
| Safari | O seletor de pastas do sistema, com um botão **Enviar** (nada é enviado) | Abre sem perguntar | Não |

Nos bastidores: Chrome e Edge usam o seletor de Acesso ao Sistema de Arquivos e podem lembrar a pasta. Firefox e Safari usam o seletor de pastas mais antigo, que entrega todos os arquivos da pasta de uma vez e não pode ser lembrado. Uma pasta arrastada é lida entrada por entrada em todos os navegadores.

:::chromium
O Brave e alguns outros navegadores baseados em Chromium desligam o seletor de pastas. O BimCraft então usa o seletor de pastas do sistema, e o navegador pode perguntar "Enviar *n* arquivos para este site?". Nada é enviado; os arquivos só vão para a aba. Arrastar a pasta evita a pergunta.
:::

## Mac, Windows e Linux

- Os atalhos escritos {{key:Mod+S}} e {{key:Mod+Z}} são Command no Mac e Ctrl no Windows e Linux.
- {{key:Ctrl+Shift+F}} (modos de tela) é Control em todas as plataformas, inclusive no Mac.
- Caixas de diálogo de arquivos e a pasta de downloads são os do seu sistema.

## Mouse, trackpad e toque

| Entrada | Vista 3D | Desenho 2D |
|---|---|---|
| Mouse | Arrastar com o botão esquerdo orbita, arrastar com o direito faz pan, a roda dá zoom, clique seleciona | Qualquer arraste faz pan, a roda dá zoom, duplo clique ajusta |
| Trackpad | Clicar e arrastar orbita; {{key:Shift}} ou {{key:Mod}} e arrastar faz pan; rolagem com dois dedos ou pinça dá zoom | Clicar e arrastar faz pan; rolagem com dois dedos ou pinça dá zoom |
| Toque | Um dedo orbita, dois dedos fazem pinça e pan, toque seleciona | Um dedo faz pan; ainda não há zoom por pinça; toque em {{ui:Ajustar}} |

Em um trackpad de Mac, o clique com o botão direito é um clique com dois dedos (ou Control e clique). Veja [Teclas, mouses e trackpads](common:keys).

Tablets e celulares conseguem abrir arquivos isolados e vê-los, mas a tela é pequena, muitos navegadores móveis não conseguem escolher pastas, e modelos grandes podem não caber na memória deles. Um computador funciona melhor.

## Arquivos grandes e memória

Tudo o que o BimCraft lê fica na memória da aba do navegador. Quanto uma aba pode usar depende do navegador e do seu computador, mais do que do BimCraft.

| Arquivo | Quanto é lido | O que esperar |
|---|---|---|
| IFC | O arquivo inteiro, mais a geometria 3D construída a partir dele | Depende do seu computador e do navegador; um modelo de várias centenas de megabytes pode ser demais para um notebook. Acima de 1.5 milhão de triângulos, as arestas são desligadas |
| Arquivos de projeto e de famílias | Cerca de 40 KB a 100 KB, qualquer que seja o tamanho | Mesmo modelos centrais muito grandes abrem em um instante, também a partir de uma unidade de rede |
| DWG e DXF | O arquivo inteiro | Desenhos muito grandes mostram "Este desenho é muito grande; só uma parte dele é mostrada." |
| Pastas | A lista de arquivos, mais alguns kilobytes por modelo | Até 20,000 arquivos |

Se uma aba ficar sem memória, o navegador mostra a sua própria página de erro (no Chrome, por exemplo, "Ops! O Chrome travou"). Feche outras abas, recarregue o BimCraft e tente de novo, ou use um computador com mais memória.

## Relacionados

- [Online e offline](topic:online-offline)
- [Solução de problemas](topic:troubleshooting)

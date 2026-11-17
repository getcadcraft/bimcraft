---
title: Online e offline
summary: O que o BimCraft carrega do site, como Guardar para offline faz com que modelos IFC e desenhos DWG abram sem ligação, e porque nunca é enviado nada do que abre.
keywords: offline, online, internet, ligação, sem rede, modo de avião, visita ao local, guardar para offline, pronto para offline, envio, privacidade, wasm, webassembly, motor IFC, dwg, nuvem
from: 39e5c7eb
---

O BimCraft lê os seus ficheiros dentro do separador do navegador. Abrir, inspecionar, editar e guardar nunca envia os seus ficheiros para lado nenhum, online ou offline. [Trabalhar offline](common:offline) explica como funcionam as cópias offline em todas as aplicações; esta página trata do que é próprio do BimCraft.

## O que o BimCraft carrega do site

| Parte | Quando carrega sem uma cópia offline | Tamanho |
|---|---|---|
| A própria aplicação, com o visualizador 3D e o código do motor IFC | Ao abrir o BimCraft | Vários megabytes |
| A parte WebAssembly do motor IFC | O primeiro ficheiro IFC que abre no separador: « A iniciar o motor IFC… » | Cerca de 1.6 MB |

Os ficheiros DWG e DXF, os ficheiros de projeto e de família e as pastas não precisam de nada extra: os seus leitores fazem parte da aplicação.

## Guardar o BimCraft para uso offline

1. Abra o BimCraft enquanto está online.
2. Clique em {{ui:Guardar para offline}} na barra da aplicação, no topo.
3. Observe o botão a contar: « A guardar 40 de 212 », por exemplo. A cópia do BimCraft tem cerca de 11 MB, porque inclui o motor IFC.
4. Aguarde por {{ui:Pronto para offline}}.

Quando indicar {{ui:Pronto para offline}}, os modelos IFC, os desenhos DWG e DXF, os ficheiros de projeto, as pastas e esta ajuda abrem sem ligação. Não precisa de abrir um IFC ou um DWG primeiro para «aquecer» os leitores.

Para atualizar ou remover a cópia, clique em {{ui:Pronto para offline}} e escolha {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}.

## O que diz o botão

| Botão | Significa |
|---|---|
| {{ui:Guardar para offline}} | Ainda não há cópia offline neste navegador. Clique para guardar uma |
| « A guardar *n* de *m* » | A guardar; mantenha o separador aberto até terminar |
| {{ui:Pronto para offline}} | Guardado. Passe o cursor para ver quando; clique para abrir o menu |
| {{ui:Não foi possível guardar}} | Alguns ficheiros não foram transferidos. Verifique a sua ligação e clique para tentar de novo. A última cópia boa, se existir, é mantida |
| {{ui:Offline indisponível}} | Esta janela não pode manter uma cópia offline (uma janela privada ou um computador gerido). Veja [Trabalhar offline](common:offline) |

:::offline
Está offline.

- Se o botão indicar {{ui:Pronto para offline}}, todos os tipos de ficheiro abrem como de costume.
- Se não indicar, só funciona o que este separador já carregou: um leitor que nunca foi carregado neste separador não pode arrancar, e abrir esse tipo de ficheiro mostra um erro do navegador na linha de estado. Não recarregue o separador até voltar a estar online.
:::

## O que nunca precisa de ligação

Depois de o BimCraft estar aberto no separador, estas funções funcionam offline mesmo sem uma cópia guardada:

- Ler ficheiros de projeto e de família e verificar pastas.
- Escolher elementos, ler propriedades e editar valores IFC num modelo que já está aberto.
- {{ui:Guardar como IFC}} e {{ui:Transferir CSV}}: ambos são transferências feitas no separador.

## O que ainda não está disponível

- **Guardar na nuvem.** Os ficheiros são guardados apenas no seu computador.

Veja [Onde ficam os seus ficheiros](common:your-files).

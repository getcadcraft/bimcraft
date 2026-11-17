---
title: Online e offline
summary: O que o BimCraft carrega do site, como Salvar para uso offline faz modelos IFC e desenhos DWG abrirem sem conexão, e por que nada do que você abre é enviado.
keywords: offline, online, internet, conexão, sem rede, modo avião, visita ao local, salvar para uso offline, pronto para uso offline, envio, privacidade, wasm, webassembly, motor IFC, dwg, nuvem
from: 39e5c7eb
---

O BimCraft lê os seus arquivos dentro da aba do navegador. Abrir, inspecionar, editar e salvar nunca enviam os seus arquivos para lugar nenhum, online ou offline. [Trabalhar offline](common:offline) explica como as cópias offline funcionam em todos os aplicativos; esta página trata do que é particular ao BimCraft.

## O que o BimCraft carrega do site

| Parte | Quando carrega sem cópia offline | Tamanho |
|---|---|---|
| O próprio aplicativo, com o visualizador 3D e o código do motor IFC | Quando você abre o BimCraft | Vários megabytes |
| A parte WebAssembly do motor IFC | No primeiro arquivo IFC que você abre na aba: "Iniciando o motor IFC…" | Cerca de 1,6 MB |

Desenhos DWG e DXF, arquivos de projeto e de família e pastas não precisam de nada extra: os seus leitores fazem parte do aplicativo.

## Salvar o BimCraft para uso offline

1. Abra o BimCraft enquanto estiver online.
2. Clique em {{ui:Save for offline}} na barra de aplicativo no topo.
3. Observe o botão contar: "Salvando 40 de 212", por exemplo. A cópia do BimCraft tem cerca de 11 MB, porque inclui o motor IFC.
4. Aguarde {{ui:Offline ready}}.

Quando aparecer {{ui:Offline ready}}, modelos IFC, desenhos DWG e DXF, arquivos de projeto, pastas e esta ajuda abrem sem conexão. Você não precisa abrir antes um IFC ou um DWG para "aquecer" os leitores.

Para atualizar ou remover a cópia, clique em {{ui:Offline ready}} e escolha {{ui:Save again (get the newest version)}} ou {{ui:Remove the offline copy}}.

## O que o botão diz

| Botão | Significa |
|---|---|
| {{ui:Save for offline}} | Ainda não há cópia offline neste navegador. Clique para salvar uma |
| "Salvando *n* de *m*" | Salvando; mantenha a aba aberta até terminar |
| {{ui:Offline ready}} | Salvo. Passe o mouse para ver quando; clique para abrir o menu |
| {{ui:Could not save}} | Alguns arquivos não foram baixados. Verifique a sua conexão e clique para tentar de novo. A última cópia boa, se houver, é mantida |
| {{ui:Offline not available}} | Esta janela não pode manter uma cópia offline (uma janela privada ou um computador gerenciado). Veja [Trabalhar offline](common:offline) |

:::offline
Você está offline.

- Se o botão disser {{ui:Offline ready}}, todo tipo de arquivo abre normalmente.
- Se não disser, só o que esta aba já carregou funciona: um leitor que nunca carregou nesta aba não pode iniciar, e abrir esse tipo de arquivo mostra um erro do navegador na linha de status. Não recarregue a aba até estar online de novo.
:::

## O que nunca precisa de conexão

Quando o BimCraft estiver aberto na aba, estes itens funcionam offline mesmo sem uma cópia salva:

- Ler arquivos de projeto e de família e verificar pastas.
- Escolher elementos, ler propriedades e editar valores IFC em um modelo que já está aberto.
- {{ui:Save as IFC}} e {{ui:Download CSV}}: ambos são downloads feitos na aba.

## O que ainda não está disponível

- **Salvamento na nuvem.** Os arquivos são salvos somente no seu computador.

Veja [Onde seus arquivos ficam](common:your-files).

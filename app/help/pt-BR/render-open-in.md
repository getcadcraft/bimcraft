---
title: Abrir a cena em outro programa
summary: Salve a cena como arquivo USD ou glTF para qualquer programa que os leia, ou abra-a no Studio em um programa deste computador.
keywords: abrir em, usd, gltf, glb, exportar, programa de renderização, archviz, studio, usdview, enviar, entrega, pacote, pasta unreal
from: 0a6559ee
---

Escolha uma entrada **Abrir em** na lista Motor de {{ui:Renderizar}} para levar a cena a outro programa. Nada volta para o modelo.

## Um arquivo para qualquer programa

- **Arquivo USD** salva a cena como `.usdc` (ou `.usdz` quando o modelo tem imagens): o [mesmo arquivo de Salvar como USD](topic:usd), com materiais, lâmpadas e câmeras. Mantém as instâncias e os valores exatos dos materiais. A maioria dos renderizadores, motores de jogos e visualizadores lê USD.
- **Arquivo glTF (.glb)** salva o arquivo glTF 2.0, mais leve, com materiais, texturas e lâmpadas; veja [Enviar o modelo para um programa de renderização](topic:model-for-rendering) para o que ele leva e o que deixa de fora.

- **Pasta de projeto Unreal (.zip)** salva a pasta que [Enviar a cena para um motor de jogo](topic:render-unreal) grava, para um projeto em qualquer computador.

Todas as três funcionam no navegador e no Studio.

## No Studio: abrir a cena em um programa

O Studio lista os programas que encontra neste computador e que podem abrir a cena: usdview, se estiver no seu caminho de busca, e o programa do próprio computador para o tipo de arquivo. Escolha um, escolha USD ou glTF onde ele lê os dois, e clique em {{ui:Renderizar}}. O Studio grava o pacote em uma nova pasta em Documentos (`CadCraft hand-off`; nada é sobrescrito, cada envio tem a sua pasta) e inicia o programa nela, depois informa onde estão os arquivos.

| Programa | Lê melhor |
|---|---|
| usdview | USD |
| O programa do próprio computador | O que o computador tiver para o tipo de arquivo |

O Studio só inicia programas desta lista fixa; não executa nada que a página peça pelo nome, e nunca inicia um programa sob a licença GNU GPL (veja [Desenhar a imagem com outro programa](topic:render-other-program#programs-cadcraft-never-runs)). Qualquer programa que lê USD ou glTF abre o arquivo de **Um arquivo para qualquer programa** acima.

:::note
O Twinmotion, o Enscape e outros programas de visualização não estão na lista: o CadCraft não foi verificado com eles e não faz nenhuma afirmação sobre eles. Um arquivo glTF ou USD daqui é o caminho de entrada; veja as notas sobre [renderizadores plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::

---
title: Abrir a cena noutro programa
summary: Guardar a cena como ficheiro USD ou glTF para qualquer programa que os leia, ou abri-la a partir do Studio num programa deste computador.
keywords: abrir em, usd, gltf, glb, exportar, programa de renderização, archviz, studio, usdview, enviar, entrega, pacote, pasta unreal
from: 0a6559ee
---

Escolha uma entrada **Abrir em** na lista Motor de {{ui:Render}} para levar a cena a outro programa. Nada volta para o modelo.

## Um ficheiro para qualquer programa

- **Ficheiro USD** guarda a cena como `.usdc` (ou `.usdz` quando o modelo tem imagens): o [mesmo ficheiro que Guardar como USD](topic:usd), com materiais, lâmpadas e câmaras. Mantém as instâncias e os valores exatos dos materiais. A maioria dos renderizadores, motores de jogos e visualizadores lê USD.
- **Ficheiro glTF (.glb)** guarda o ficheiro glTF 2.0, mais leve, com materiais, texturas e lâmpadas; ver [Enviar o modelo para um programa de renderização](topic:model-for-rendering) para o que inclui e o que deixa de fora.

- **Pasta de projeto Unreal (.zip)** guarda a pasta que [Enviar a cena para um motor de jogo](topic:render-unreal) escreve, para um projeto em qualquer computador.

Os três funcionam no navegador e no Studio.

## No Studio: abrir num programa

O Studio lista os programas que encontra neste computador e que conseguem abrir a cena: usdview, se estiver no seu caminho de pesquisa, e o programa do próprio computador para o tipo de ficheiro. Escolha um, escolha USD ou glTF quando ele lê ambos, e clique em {{ui:Render}}. O Studio escreve o pacote numa nova pasta em Documentos (`CadCraft hand-off`; nada é substituído, cada envio tem a sua pasta) e inicia o programa nela, depois indica onde estão os ficheiros.

| Programa | Lê melhor |
|---|---|
| usdview | USD |
| O programa do próprio computador | Seja o que for que o computador tem para o tipo de ficheiro |

O Studio só inicia programas desta lista fixa; não executa nada que a página peça pelo nome, e nunca inicia um programa sob a licença GNU GPL (ver [Desenhar a imagem com outro programa](topic:render-other-program#programs-cadcraft-never-runs)). Qualquer programa que leia USD ou glTF abre o ficheiro indicado em **Um ficheiro para qualquer programa** acima.

:::note
Twinmotion, Enscape e outros programas de visualização não estão na lista: o CadCraft não foi testado com eles e não faz qualquer afirmação sobre eles. Um ficheiro glTF ou USD daqui é o caminho de entrada; ver as notas sobre [renderizadores de plug-in](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::

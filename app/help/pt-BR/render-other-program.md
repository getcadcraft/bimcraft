---
title: Desenhar a imagem com outro programa
summary: Nosso próprio path tracer desenha a imagem do Renderizar; outro programa só pode desenhá-la por meio de um complemento de motor de renderização no CadCraft Studio. O que é levado junto e por que alguns programas nunca são oferecidos.
keywords: renderizar, motor, programa externo, motor de complemento, studio, segundo plano, fila, usd, gltf, desenhado por, blender, gpl
from: 652b413c
---

A imagem em {{ui:Renderizar}} é desenhada por **nossos próprios motores**: Rápido e o Path tracer, no navegador e no CadCraft Studio. Outro programa só pode desenhá-la quando um **complemento de motor de renderização** a traz: veja [Adicionar um motor de renderização com um complemento](topic:render-engine-addons). Para levar a cena a outro programa e continuar trabalhando nele, use [Abrir a cena em outro programa](topic:render-open-in) ou [Enviar a cena para um motor de jogo](topic:render-unreal).

## Desenhar uma imagem com o motor de um complemento

1. Ative o complemento em Configurações › Complementos. O motor dele aparece na lista Motor de {{ui:Renderizar}}.
2. Escolha-o. As configurações próprias dele aparecem abaixo da lista Motor.
3. Clique em {{ui:Renderizar}}. No Studio, na primeira vez que um complemento executa um programa, o Studio pergunta em sua própria caixa de diálogo. O progresso aparece enquanto ele desenha; {{ui:Parar}} encerra. A imagem aparece marcada com o motor que a desenhou.

Um motor escrito em JavaScript também roda no navegador. Um motor que executa um programa neste computador roda só no Studio; no navegador aparece como um arquivo para salvar.

## O que é levado junto

O motor recebe um **pacote**: o modelo como arquivo USD (e um arquivo glTF quando ele o pede), e um arquivo de configurações com os valores exatos dos materiais, o sol e o céu, cada lâmpada ligada com a potência e o perfil de luz, a câmera e a exposição. Cada programa ilumina, ajusta os tons e faz as amostragens à sua maneira, então as imagens ficam parecidas em câmera, sol, lâmpadas e exposição, mas não pixel a pixel.

## Programas que o CadCraft nunca executa

O CadCraft nunca inicia um programa sob a licença GNU GPL e nunca o lista como motor ou como destino de Abrir em. O Blender é um deles, então não está na lista Motor. Um arquivo USD ou glTF salvo a partir de {{ui:Renderizar}} ainda abre nele como em qualquer programa que lê esses arquivos.

:::note
Câmeras de panorama e estéreo e uma imagem de céu (as cores do céu são usadas no lugar) não são levadas para outro programa. Nada feito em outro programa volta para o modelo.
:::

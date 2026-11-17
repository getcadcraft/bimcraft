---
title: Desenhar a imagem com outro programa
summary: O nosso próprio path tracer desenha a imagem de Render; outro programa só a pode desenhar através de um suplemento de motor de renderização no CadCraft Studio. O que é transportado, e porque alguns programas nunca são oferecidos.
keywords: render, motor, programa externo, motor de suplemento, studio, segundo plano, fila, usd, gltf, desenhado por, blender, gpl
from: 652b413c
---

A imagem em {{ui:Render}} é desenhada pelos **nossos motores**: Rápido e o Path tracer, no navegador e no CadCraft Studio. Outro programa só a pode desenhar quando um **suplemento de motor de renderização** a traz: ver [Adicionar um motor de renderização com um suplemento](topic:render-engine-addons). Para levar a cena a outro programa e continuar a trabalhar lá, use [Abrir a cena noutro programa](topic:render-open-in) ou [Enviar a cena para um motor de jogo](topic:render-unreal).

## Desenhar uma imagem com o motor de um suplemento

1. Ative o suplemento em Definições › Suplementos. O seu motor aparece na lista Motor de {{ui:Render}}.
2. Escolha-o. As suas próprias definições aparecem por baixo da lista Motor.
3. Clique em {{ui:Render}}. No Studio, na primeira vez que um suplemento executa um programa, o Studio pergunta-lhe na sua própria caixa de diálogo. O progresso aparece enquanto desenha; {{ui:Stop}} termina-o. A imagem aparece marcada com o motor que a desenhou.

Um motor escrito em JavaScript também funciona no navegador. Um motor que executa um programa neste computador só funciona no Studio; no navegador aparece como um ficheiro a guardar.

## O que é transportado

O motor recebe um **pacote**: o modelo como ficheiro USD (e um ficheiro glTF quando o pede), e um ficheiro de definições com os valores exatos dos materiais, o sol e o céu, cada lâmpada acesa com a sua potência e perfil de luz, a câmara e a exposição. Cada programa ilumina, tonaliza e amostra à sua maneira, por isso as imagens são parecidas em câmara, sol, lâmpadas e exposição, mas não pixel a pixel.

## Programas que o CadCraft nunca executa

O CadCraft nunca inicia um programa sob a licença GNU GPL, e nunca o apresenta como motor nem como destino de Abrir em. O Blender é um deles, por isso não está na lista Motor. Um ficheiro USD ou glTF guardado a partir de {{ui:Render}} continua a abrir-se nele, como em qualquer programa que leia esses ficheiros.

:::note
Câmaras de panorama e estereoscópicas e uma imagem de céu (as cores do céu são usadas em vez disso) não são transportadas para outro programa. Nada feito noutro programa volta para o modelo.
:::

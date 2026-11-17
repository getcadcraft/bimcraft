---
title: Debuxar a imaxe con outro programa
summary: O noso propio trazador de camiños debuxa a imaxe de Render; outro programa só pode debuxala a través dun complemento de motor de render en CadCraft Studio. Que se leva consigo e por que nunca se ofrecen algúns programas.
keywords: render, motor, programa externo, motor de complemento, studio, segundo plano, cola, usd, gltf, debuxado por, blender, gpl
from: 652b413c
---

A imaxe de {{ui:Render}} debúxana **os nosos propios motores**: Rápido e o Trazador de camiños, no navegador e en CadCraft Studio. Outro programa só pode debuxala cando un **complemento de motor de render** o achega: ver [Engadir un motor de render cun complemento](topic:render-engine-addons). Para levar a escena a outro programa e seguir traballando alí, use [Abrir a escena noutro programa](topic:render-open-in) ou [Enviar a escena a un motor de xogos](topic:render-unreal).

## Debuxar unha imaxe co motor dun complemento

1. Active o complemento en Configuración › Complementos. O seu motor aparece na lista Motor de {{ui:Render}}.
2. Escóllao. Os seus axustes propios aparecen debaixo da lista Motor.
3. Prema {{ui:Render}}. En Studio, a primeira vez que un complemento executa un programa, Studio pregúntalle no seu propio diálogo. Mentres debuxa mostra o progreso; {{ui:Parar}} o detén. A imaxe aparece marcada co motor que a debuxou.

Un motor escrito en JavaScript funciona tamén no navegador. Un motor que executa un programa neste computador funciona só en Studio; no navegador aparece como un ficheiro para gardar.

## O que se leva

O motor recibe un **paquete**: o modelo como ficheiro USD (e un ficheiro glTF cando o pide), e un ficheiro de axustes cos valores exactos dos materiais, o sol e o ceo, cada lámpada que está acesa coa súa potencia e perfil de luz, a cámara e a exposición. Cada programa ilumina, tonifica e fai as mostras á súa maneira, así que as imaxes son parecidas en cámara, sol, lámpadas e exposición, pero non píxel a píxel.

## Programas que CadCraft nunca executa

CadCraft nunca inicia un programa baixo a licenza GNU GPL, e nunca o lista como motor nin como destino de Abrir en. Blender é un deles, así que non aparece na lista Motor. Un ficheiro USD ou glTF gardado desde {{ui:Render}} aínda se abre nel como en calquera programa que lea eses ficheiros.

:::note
As cámaras panorámicas e estéreo e unha imaxe de ceo (en seu lugar úsanse as cores do ceo) non se levan a outro programa. Nada feito noutro programa volve ao modelo.
:::

---
title: Abrir a escena noutro programa
summary: Gardar a escena como ficheiro USD ou glTF para calquera programa que os lea, ou abrila desde Studio nun programa deste computador.
keywords: abrir en, usd, gltf, glb, exportar, programa de renderizado, archviz, studio, usdview, enviar, entrega, paquete, cartafol unreal
from: 0a6559ee
---

Escolla unha entrada **Abrir en** na lista Motor de {{ui:Render}} para levar a escena a outro programa. Non volve nada ao modelo.

## Un ficheiro para calquera programa

- **Ficheiro USD** garda a escena como `.usdc` (ou `.usdz` cando o modelo leva imaxes): o [mesmo ficheiro que Gardar como USD](topic:usd), con materiais, lámpadas e cámaras. Conserva as instancias e os valores exactos dos materiais. A maioría dos renderizadores, motores de xogos e visores len USD.
- **Ficheiro glTF (.glb)** garda o ficheiro glTF 2.0, máis lixeiro, con materiais, texturas e lámpadas; ver [Enviar o modelo a un programa de renderizado](topic:model-for-rendering) para o que inclúe e o que deixa fóra.
- **Cartafol de proxecto de Unreal (.zip)** garda o cartafol que escribe [Enviar a escena a un motor de xogos](topic:render-unreal), para un proxecto en calquera ordenador.

As tres opcións funcionan no navegador e en Studio.

## En Studio: abrila nun programa

Studio lista os programas que atopa neste computador que poden abrir a escena: usdview se está no seu camiño de busca, e o programa propio do computador para o tipo de ficheiro. Escolla un, escolla USD ou glTF onde lea ambos, e prema {{ui:Render}}. Studio escribe o paquete nun cartafol novo dentro de Documentos (`CadCraft hand-off`; non se sobrescribe nada, cada envío ten o seu cartafol) e inicia o programa nel, e despois indica onde están os ficheiros.

| Programa | Le mellor |
|---|---|
| usdview | USD |
| O programa propio do computador | O que o computador teña para o tipo de ficheiro |

Studio só inicia programas desta lista fixa; non executa nada que a páxina pida por nome, e nunca inicia un programa baixo a licenza GNU GPL (ver [Debuxar a imaxe con outro programa](topic:render-other-program#programs-cadcraft-never-runs)). Calquera programa que lea USD ou glTF abre o ficheiro de **Ficheiro para calquera programa** de arriba.

:::note
Twinmotion, Enscape e outros programas de visualización non están na lista: CadCraft non os comprobou e non fai ningunha afirmación sobre eles. Un ficheiro glTF ou USD desde aquí é a vía de entrada; ver as notas sobre [renderizadores de complemento](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::

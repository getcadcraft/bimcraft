---
title: Enviar o modelo a un programa de render
summary: Garde o que mostra a vista 3D como modelo glTF (.glb) cos seus materiais, texturas e lámpadas, para programas de render e visualización que len glTF.
keywords: glb, gltf, gl transmission format, exportar, render, visualización, tempo real, archviz, materiais, texturas, lámpadas, luces, activo, activo personalizado
from: e62d57dc
---

{{ui:Para render}} na barra de ferramentas garda o que mostra a vista 3D nun único ficheiro **.glb** (glTF 2.0, o formato aberto do Khronos Group). Os programas de render que len glTF abrenno cos materiais e lámpadas do modelo; Twinmotion lista glTF e GLB entre os ficheiros de xeometría que importa e conserva as súas luces (documentación de Epic, "Importing geometry in Twinmotion"): use {{ui:Para render}} e importe alí o .glb. Non se envía nada: o ficheiro créase neste ordenador.

## Gardalo

1. Abra o modelo IFC e prepare a vista 3D: oculte os pisos, elementos ou modelos vinculados que non queira, e [pinte os materiais](topic:paint-materials) que quere ver.
2. Prema {{ui:Para render}} (ou escriba `GLB`).
3. O ficheiro descárgase como "<model name>.glb". A barra de estado indica cantos triángulos, materiais e lámpadas contén.

## Que leva o ficheiro

- **Xeometría** de cada elemento que mostra a vista 3D, en metros, con Y cara arriba (os eixos propios de glTF). Un obxecto por piso e material, chamado "Level 1 — Brick, red", para que poida escoller un material no programa de render e cambialo polo seu.
- **Materiais:** cada cor co aspecto que escolleu para ela en [Render](topic:render) (mate, satinado, brillante, metal, cristal…), e cada material pintado da biblioteca coa súa cor, rugosidade e **textura** (a súa imaxe está no ficheiro, escalada ao seu tamaño real: un ladrillo ten o tamaño dun ladrillo). O cristal é transparente.
- **Lámpadas:** cada luminaria acesa en Render › Lámpadas, como luz puntual ou focal, co seu brillo (lúmenes convertidos en candelas), cor e ángulo do feixe.
- **Onde está a parcela:** a latitude e a lonxitude da parcela escríbense no ficheiro como referencia. Os programas de render teñen o seu propio sol: escriba alí o lugar.

## Que deixa fóra

- O corte de sección (entran elementos enteiros) e os elementos mostrados transparentes (quedan fóra).
- Obxectos elemento a elemento (en cambio, un obxecto por piso e material), propiedades IFC, mapas de relieve, vistas gardadas e percorridos gravados.
- Bordos e o fondo.

## Enscape e outros renderizadores de complemento

Enscape funciona dentro doutro programa de deseño e non ten un ficheiro para abrir un proxecto completo. Hai dúas formas:

- Abra o **IFC** do modelo (Ficheiro › Gardar) no programa no que funciona Enscape; a maioría len IFC. As cores veñen xunto; os materiais da biblioteca veñen coas súas cores.
- Importe unha **peza pequena** (mobiliario, un accesorio) como activo personalizado: ille primeiro a peza e logo prema {{ui:Para Enscape (.gltf)}}. A biblioteca de activos personalizados de Enscape lista ficheiros .gltf, .obj e .fbx, non .glb, así que este botón garda a mesma escena como un **.gltf** autocontido (os datos binarios e as imaxes van dentro do ficheiro; non hai nada máis que copiar con el). Enscape aconsella activos pequenos (por debaixo de uns 20.000 triángulos).

:::note
En CadCraft Studio o mesmo ficheiro glTF (e un ficheiro USD) pódese gardar desde {{ui:Render}} › Motor › **Ficheiro glTF** / **Ficheiro USD**, ou abrir directamente nun programa deste ordenador: vexa [Abrir a escena noutro programa](topic:render-open-in). Non se fabrica un complemento nin unha ligazón en directo para Enscape ou Twinmotion. Os formatos FBX e Datasmith non teñen especificación publicada, así que BimCraft non os escribe; glTF é a vía aberta.
:::

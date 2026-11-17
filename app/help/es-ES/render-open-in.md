---
title: Abrir la escena en otro programa
summary: Guarde la escena como archivo USD o glTF para cualquier programa que los lea, o ábrala desde Studio en un programa de este equipo.
keywords: abrir en, usd, gltf, glb, exportar, programa de render, archviz, studio, usdview, enviar, entrega, paquete, carpeta de unreal
from: 0a6559ee
---

Elija una entrada **Abrir en** en la lista Motor de {{ui:Render}} para llevar la escena a otro programa. Nada vuelve al modelo.

## Un archivo para cualquier programa

- **Archivo USD** guarda la escena como `.usdc` (o `.usdz` cuando el modelo lleva imágenes): el [mismo archivo que Guardar como USD](topic:usd), con materiales, lámparas y cámaras. Conserva las instancias y los valores exactos de los materiales. La mayoría de los renderizadores, motores de juego y visores leen USD.
- **Archivo glTF (.glb)** guarda el archivo glTF 2.0, más ligero, con materiales, texturas y lámparas; vea [Enviar el modelo a un programa de render](topic:model-for-rendering) para saber qué incluye y qué deja fuera.

- **Carpeta de proyecto de Unreal (.zip)** guarda la carpeta que escribe [Enviar la escena a un motor de juegos](topic:render-unreal), para un proyecto en cualquier equipo.

Las tres opciones funcionan en el navegador y en Studio.

## En Studio: abrirla en un programa

Studio enumera los programas que encuentra en este equipo y que pueden abrir la escena: usdview si está en su ruta de búsqueda, y el programa propio del equipo para ese tipo de archivo. Elija uno, elija USD o glTF donde lea ambos y pulse {{ui:Render}}. Studio escribe el paquete en una carpeta nueva dentro de Documentos (`CadCraft hand-off`; nada se sobrescribe, cada envío tiene su propia carpeta), inicia el programa con ella y después indica dónde están los archivos.

| Programa | Lee mejor |
|---|---|
| usdview | USD |
| El programa propio del equipo | Lo que el equipo tenga para ese tipo de archivo |

Studio solo inicia programas de esta lista fija; no ejecuta nada que la página pida por nombre, y nunca inicia un programa con licencia GNU GPL (vea [Dibujar la imagen con otro programa](topic:render-other-program#programs-cadcraft-never-runs)). Cualquier programa que lea USD o glTF abre el archivo de **Un archivo para cualquier programa** de arriba.

:::note
Twinmotion, Enscape y otros programas de visualización no están en la lista: CadCraft no los ha probado y no hace ninguna afirmación sobre ellos. Un archivo glTF o USD de aquí es la vía de entrada; vea las notas sobre [motores de render de complemento](topic:model-for-rendering#enscape-and-other-plug-in-renderers).
:::

---
title: Enviar el modelo a un programa de renderizado
summary: Guarde lo que muestra la vista 3D como un modelo glTF (.glb) con sus materiales, texturas y lámparas, para programas de renderizado y visualización que leen glTF.
keywords: glb, gltf, formato de transmisión de gl, exportar, renderizado, renderizar, visualización, tiempo real, archviz, materiales, texturas, lámparas, luces, recurso, recurso personalizado
from: e62d57dc
---

{{ui:Para renderizar}} en la barra de herramientas guarda lo que muestra la vista 3D como un solo archivo **.glb** (glTF 2.0, el formato abierto del Khronos Group). Los programas de renderizado que leen glTF lo abren con los materiales y lámparas del modelo; Twinmotion enumera glTF y GLB entre los archivos de geometría que importa y conserva sus luces (documentación de Epic, "Importing geometry in Twinmotion"): use {{ui:Para renderizar}} e importe ahí el .glb. No se sube nada: el archivo se genera en esta computadora.

## Guárdelo

1. Abra el modelo IFC y configure la vista 3D: oculte los niveles, elementos o modelos vinculados que no quiera, y [pinte los materiales](topic:paint-materials) que quiera ver.
2. Haga clic en {{ui:Para renderizar}} (o escriba `GLB`).
3. El archivo se descarga como "<nombre del modelo>.glb". La barra de estado indica cuántos triángulos, materiales y lámparas contiene.

## Lo que contiene el archivo

- **Geometría** de cada elemento que muestra la vista 3D, en metros, con Y hacia arriba (los ejes propios de glTF). Un objeto por nivel y material, con nombres como "Level 1 — Brick, red", para que pueda seleccionar un material en el programa de renderizado y cambiarlo por el suyo.
- **Materiales:** cada color con el aspecto que eligió para él en [Renderizar](topic:render) (mate, satinado, brillante, metal, vidrio…), y cada material de biblioteca pintado con su color, rugosidad y **textura** (su imagen está en el archivo, escalada a su tamaño real: un ladrillo tiene el tamaño de un ladrillo). El vidrio es transparente.
- **Lámparas:** cada luminaria encendida en Renderizar › Lámparas, como luz puntual o de foco con su brillo (lúmenes convertidos en candelas), color y ángulo del haz.
- **Ubicación del sitio:** la latitud y longitud del terreno se escriben en el archivo como referencia. Los programas de renderizado tienen su propio sol: escriba allí el lugar.

## Lo que deja fuera

- El corte de sección (los elementos completos se incluyen) y los elementos mostrados con transparencia (se dejan fuera).
- Objetos elemento por elemento (en su lugar, un objeto por nivel y material), propiedades IFC, mapas de relieve, vistas guardadas y recorridos grabados.
- Aristas y el fondo.

## Enscape y otros renderizadores de complemento

Enscape se ejecuta dentro de otro programa de diseño y no tiene un archivo para abrir un proyecto completo. Hay dos formas:

- Abra el **IFC** del modelo (Archivo › Guardar) en el programa donde se ejecuta Enscape; la mayoría lee IFC. Los colores vienen incluidos; los materiales de biblioteca vienen como sus colores.
- Traiga una **pieza pequeña** (mobiliario, un accesorio) como recurso personalizado: primero aíslela y luego haga clic en {{ui:Para Enscape (.gltf)}}. La biblioteca de recursos personalizados de Enscape enumera archivos .gltf, .obj y .fbx, no .glb, así que este botón guarda la misma escena como un **.gltf** autocontenido (los datos binarios y las imágenes están dentro del archivo; no hay nada más que copiar con él). Enscape recomienda recursos pequeños (menos de unos 20,000 triángulos).

:::note
En CadCraft Studio el mismo archivo glTF (y un archivo USD) también se puede guardar desde {{ui:Renderizar}} › Motor › **Archivo glTF** / **Archivo USD**, o abrir directamente en un programa de esta computadora: vea [Abrir la escena en otro programa](topic:render-open-in). No existe un complemento ni un enlace en vivo para Enscape o Twinmotion. Los formatos FBX y Datasmith no tienen una especificación publicada, así que BimCraft no los escribe; glTF es la vía abierta.
:::

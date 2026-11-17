---
title: Enviar el modelo a un programa de renderizado
summary: Guarde lo que muestra la vista 3D como modelo glTF (.glb) con sus materiales, texturas y lámparas, para programas de renderizado y visualización que leen glTF.
keywords: glb, gltf, formato de transmisión de GL, exportar, renderizado, renderizar, visualización, tiempo real, archviz, materiales, texturas, lámparas, luces, activo, activo personalizado
from: e62d57dc
---

{{ui:Para renderizar}} de la barra guarda lo que muestra la vista 3D como un único archivo **.glb** (glTF 2.0, el formato abierto del Khronos Group). Los programas de renderizado que leen glTF lo abren con los materiales y lámparas del modelo; Twinmotion incluye glTF y GLB entre los archivos de geometría que importa y conserva sus luces (documentación de Epic, "Importing geometry in Twinmotion"): use {{ui:Para renderizar}} e importe allí el .glb. No se sube nada: el archivo se crea en este equipo.

## Guardarlo

1. Abra el modelo IFC y prepare la vista 3D: oculte las plantas, elementos o modelos vinculados que no quiera, y [pinte los materiales](topic:paint-materials) que desee ver.
2. Haga clic en {{ui:Para renderizar}} (o escriba `GLB`).
3. El archivo se descarga como "<nombre del modelo>.glb". La barra de estado indica cuántos triángulos, materiales y lámparas contiene.

## Qué contiene el archivo

- **Geometría** de cada elemento que muestra la vista 3D, en metros, con Y hacia arriba (los ejes propios de glTF). Un objeto por planta y material, con nombre "Planta 1 — Ladrillo, rojo", para que pueda elegir un material en el programa de renderizado y cambiarlo por el suyo.
- **Materiales:** cada color con el aspecto que eligió en [Renderizar](topic:render) (mate, satinado, brillante, metal, cristal…), y cada material de biblioteca pintado con su color, rugosidad y **textura** (su imagen va en el archivo, escalada a su tamaño real: un ladrillo tiene el tamaño de un ladrillo). El cristal es transparente.
- **Lámparas:** cada luminaria encendida en Renderizar › Lámparas, como luz puntual o de foco con su brillo (lúmenes convertidos en candelas), color y ángulo de haz.
- **Dónde está la obra:** la latitud y la longitud del emplazamiento se escriben en el archivo como referencia. Los programas de renderizado tienen su propio sol: escriba allí el lugar.

## Qué deja fuera

- El corte de sección (entran elementos enteros) y los elementos que se muestran transparentes (se dejan fuera).
- Objetos elemento por elemento (en su lugar, un objeto por planta y material), propiedades IFC, mapas de relieve, vistas guardadas y recorridos grabados.
- Aristas y fondo.

## Enscape y otros renderizadores de complemento

Enscape se ejecuta dentro de otro programa de diseño y no tiene un archivo que abrir con un proyecto completo. Hay dos formas:

- Abra el **IFC** del modelo (Archivo › Guardar) en el programa donde se ejecuta Enscape; la mayoría lee IFC. Los colores se conservan; los materiales de biblioteca llegan como sus colores.
- Traiga una **pieza pequeña** (mueble, accesorio) como activo personalizado: aíslela primero y luego haga clic en {{ui:Para Enscape (.gltf)}}. La biblioteca de activos personalizados de Enscape lista archivos .gltf, .obj y .fbx, no .glb, así que este botón guarda la misma escena como un **.gltf** autocontenido (los datos binarios y las imágenes van dentro del archivo; no hay nada más que copiar con él). Enscape recomienda activos pequeños (de menos de unos 20,000 triángulos).

:::note
En CadCraft Studio el mismo archivo glTF (y un archivo USD) también se puede guardar desde {{ui:Renderizar}} › Motor › **Archivo glTF** / **Archivo USD**, o abrirse directamente en un programa de este equipo: consulte [Abrir la escena en otro programa](topic:render-open-in). No se ha creado un complemento ni un enlace en vivo para Enscape o Twinmotion. Los formatos FBX y Datasmith no tienen una especificación publicada, así que BimCraft no los escribe; glTF es la vía abierta.
:::

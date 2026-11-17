---
title: Enviar la escena a un motor de juegos
summary: Studio puede escribir la escena en un proyecto de Unreal Engine y mantenerla sincronizada en cada envío; sus propias ediciones viven en una capa que CadCraft nunca escribe. El complemento que la abre todavía no se ha publicado.
keywords: unreal, unreal engine, motor de juegos, enlace, enviar, escenario USD, proyecto, en directo, cine camera, cola de render de película
from: 154d55ef
---

En CadCraft Studio, la lista Motor puede contener un **enlace** a un proyecto de Unreal Engine. Solo en un sentido: de CadCraft a Unreal.

## Enviar la escena

1. Elija la entrada de Unreal en la lista Motor. La primera vez, Studio le pide que indique la carpeta de su proyecto (la que contiene el archivo `.uproject`); la recuerda.
2. Pulse {{ui:Send}}. Studio escribe `CadCraft/<file name>/` dentro del proyecto: la escena como archivo USD, el archivo de ajustes, los perfiles de luz y dos archivos de capa pequeños.
3. Cambie el modelo, guarde y envíe de nuevo. Solo se reemplazan la escena y el archivo de ajustes.

## Sus propias ediciones están a salvo

El escenario que abre Unreal es una pequeña capa raíz creada una vez, con dos capas debajo: **la suya** arriba (`<name>.user.usda`, vacía al principio, que CadCraft nunca reescribe) y la escena de CadCraft debajo. Las ediciones que guarde en su propia capa se conservan cuando la escena se vuelve a enviar. Las luces y otros actores que coloque en el nivel de Unreal están fuera del escenario y tampoco se tocan.

## Sin Studio

En el navegador, o en un equipo donde Studio no encuentre Unreal, elija **Carpeta de proyecto de Unreal (.zip)** en la lista Motor y pulse {{ui:Render}}. Guarda la misma carpeta en un zip: descomprímalo en la carpeta `CadCraft` de su proyecto. Deje **Incluir los archivos de escenario** marcado la primera vez; desmárquelo en los guardados posteriores, de modo que el zip contenga solo la escena y el archivo de ajustes, y su propia capa nunca se reemplace.

:::note
El complemento de Unreal que abre el escenario, aplica el sol, las lámparas, las cámaras y la exposición, sigue cada envío y renderiza una cámara **todavía no se ha publicado** y no se ha ejecutado en Unreal. Hasta entonces, Enviar deja los archivos en el proyecto y las herramientas USD de Unreal pueden abrirlos. Windows es el primer sistema; macOS vendrá después.
:::

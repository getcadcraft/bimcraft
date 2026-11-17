---
title: Enviar la escena a un motor de juego
summary: Studio puede escribir la escena en un proyecto de Unreal Engine y mantenerla al día en cada envío; sus propias ediciones viven en una capa que CadCraft nunca escribe. El plug-in que la abre todavía no se ha publicado.
keywords: unreal, unreal engine, motor de juego, enlace, enviar, escenario usd, proyecto, en vivo, cine camera, cola de render de película
from: 154d55ef
---

En CadCraft Studio, la lista **Motor** puede contener un **enlace** a un proyecto de Unreal Engine. Solo en un sentido: de CadCraft a Unreal.

## Enviar la escena

1. Elija la entrada de Unreal en la lista Motor. La primera vez, Studio le pide que seleccione la carpeta de su proyecto (la que tiene el archivo `.uproject`); la recuerda.
2. Haga clic en {{ui:Enviar}}. Studio escribe `CadCraft/<nombre del archivo>/` dentro del proyecto: la escena como archivo USD, el archivo de ajustes, los perfiles de luz y dos pequeños archivos de capa.
3. Cambie el modelo, guarde y vuelva a enviar. Solo se reemplazan la escena y el archivo de ajustes.

## Sus propias ediciones están a salvo

El escenario que abre Unreal es una pequeña capa raíz creada una vez, con dos capas debajo: **la suya** arriba (`<name>.user.usda`, vacía al principio, que CadCraft nunca reescribe) y la escena de CadCraft debajo. Las ediciones que guarde en su propia capa se conservan cuando la escena se vuelve a enviar. Las luces y otros actores que coloque en el nivel de Unreal están fuera del escenario, y tampoco se tocan.

## Sin Studio

En el navegador, o en un equipo donde Studio no encuentre Unreal, elija **Carpeta de proyecto de Unreal (.zip)** en la lista Motor y haga clic en {{ui:Renderizar}}. Guarda la misma carpeta en un zip: descomprímalo en la carpeta `CadCraft` de su proyecto. Deje activada **Incluir los archivos de escenario** la primera vez; desactívela para los guardados posteriores, así el zip solo contiene la escena y el archivo de ajustes, y su propia capa nunca se reemplaza.

:::note
El plug-in de Unreal que abre el escenario, aplica el sol, las lámparas, las cámaras y la exposición, sigue cada envío y renderiza una cámara **todavía no se ha publicado** y no se ha ejecutado en Unreal. Mientras tanto, {{ui:Enviar}} coloca los archivos en el proyecto y las herramientas USD propias de Unreal pueden abrirlos. Windows es el primer sistema; macOS vendrá después.
:::

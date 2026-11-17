---
title: Enviar a escena a un motor de xogos
summary: Studio pode escribir a escena nun proxecto de Unreal Engine e mantela en sintonía en cada envío; as súas edicións viven nunha capa que CadCraft nunca escribe. O complemento que a abre aínda non está publicado.
keywords: unreal, unreal engine, motor de xogos, ligazón, enviar, escenario usd, proxecto, en directo, cine camera, cola de render de películas
from: 154d55ef
---

En CadCraft Studio a lista Motor pode conter unha **ligazón** a un proxecto de Unreal Engine. Só nun sentido: desde CadCraft cara a Unreal.

## Enviar a escena

1. Escolla a entrada de Unreal na lista Motor. A primeira vez, Studio pídelle que escolla o cartafol do seu proxecto (o que contén o ficheiro `.uproject`); recórdao.
2. Prema {{ui:Enviar}}. Studio escribe `CadCraft/<nome do ficheiro>/` dentro do proxecto: a escena como ficheiro USD, o ficheiro de axustes, os perfís de luz e dúas capas pequenas.
3. Cambie o modelo, garde e envíe de novo. Só se substitúen a escena e o ficheiro de axustes.

## As súas edicións están a salvo

O escenario que abre Unreal é unha pequena capa raíz creada unha vez, con dúas capas debaixo: **a súa** arriba (`<name>.user.usda`, baleira ao principio e nunca reescrita por CadCraft) e a escena de CadCraft debaixo. As edicións que garde na súa propia capa mantéñense cando se volve enviar a escena. As luces e outros actores que coloque no nivel de Unreal están fóra do escenario e tampouco se tocan.

## Sen Studio

No navegador, ou nun computador onde Studio non atopa Unreal, escolla **Cartafol de proxecto de Unreal (.zip)** na lista Motor e prema {{ui:Render}}. Garda o mesmo cartafol como zip: descomprímao no cartafol `CadCraft` do seu proxecto. Deixe **Incluír os ficheiros do escenario** marcado a primeira vez; desmárqueo para os gardados seguintes, así o zip só contén a escena e o ficheiro de axustes, e a súa propia capa nunca se substitúe.

:::note
O complemento de Unreal que abre o escenario, aplica o sol, as lámpadas, as cámaras e a exposición, segue cada envío e renderiza unha cámara **aínda non está publicado** e non se executou en Unreal. Ata entón, Enviar pon os ficheiros no proxecto e as propias ferramentas USD de Unreal pódenos abrir. Windows é o primeiro sistema; macOS vai despois.
:::

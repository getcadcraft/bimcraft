---
title: Mover, copiar, aliñar e distribuír elementos do edificio
summary: Mova muros, chans, columnas e elementos colocados por un punto base e un segundo punto ou unha distancia escrita, cópieos mentres avanza, e aliñeos ou espácieos por igual, na planta ou desde unha escolla en 3D.
keywords: mover, copiar, aliñar, distribuír, espazamento, desprazamento, punto base, deslocamento, muros, columnas, chans, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Que vai facer

Desprazar a un novo lugar un muro, unha columna, un chan ou un elemento colocado da biblioteca, facer copias del, ou aliñar varios, sen debuxalos de novo.

## Nomes e teclas

Os comandos chámanse {{ui:Mover}}, {{ui:Aliñar}} e {{ui:Distribuír}}, e pode escribir `MOVE`, `ALIGN` e `DISTRIBUTE` na liña de comandos, como no aplicativo de debuxo CadCraft. Unha diferenza: en BimCraft {{key:M}} é Medir, así que Mover ten a súa propia tecla, {{key:Shift+M}}. As ferramentas están no menú {{ui:Compilación}}.

## Mover

1. Escolla o que mover, na planta ou na vista 3D. Muros, chans, columnas e elementos colocados da biblioteca poden ir todos nunha mesma escolla.
2. Prema {{key:Shift+M}} ou escolla {{ui:Mover}}.
3. Prema un punto base e logo un segundo punto. Ou, despois do punto base, escriba unha distancia e prema {{key:Enter}}: vai na dirección que sinala o punteiro desde o punto base. Tamén pode escribir `dx,dy` (ou `@dx,dy`), ou `lonxitude<ángulo`.
4. Prema {{key:C}} para activar {{ui:Copiar}}: cada desprazamento fai entón copias e queda listo para o seguinte. Prema {{key:Esc}} para parar.

Os dous puntos tamén se poden prender na vista 3D: con Mover activo, o punteiro coincide coa altura do chan do nivel, así que un clic aí é un punto da planta. Manteña {{key:Shift}} premido ao facer clic para escoller outro elemento. Use unha vista de planta, Superior, Fronte ou Lateral como prefira: os puntos sempre quedan sobre ese nivel.

Un muro leva consigo as súas portas e xanelas. Un chan debuxado leva as súas aberturas. Os cuartos, os chans e os teitos que seguen os muros actualízanse. Os muros que se unían ao muro desprazado quedan onde están.

Cada desprazamento é un só cambio: un {{key:Mod+Z}} o desfai, e chega a todos nunha sesión de Live TeamWork. Un elemento colocado da biblioteca non se pode copiar desta maneira; use {{ui:Editar}} › {{ui:Copiar}} e {{ui:Pegar}}.

## Aliñar

Escolla dous ou máis elementos, escolla {{ui:Aliñar}} e logo un lado (esquerda, centro, dereita, superior, medio ou inferior) e a que aliñar: a escolla completa, o primeiro escollido, o último escollido, ou un punto que prema. Prema {{ui:Aliñar}} na barra.

## Distribuír

Escolla tres ou máis elementos, escolla {{ui:Distribuír}} e logo unha dirección (en horizontal ou en vertical) e o espazamento: intervalos iguais entre eles ou centros iguais. Os dous dos extremos quedan onde están.

Os muros que Aliñar ou Distribuír moven conservan as súas unións, como con Mover: un muro unido a un muro movido desprázase polo seu extremo ao longo da súa propia liña para seguir unido, as divisións que tocan nel veñen con el, e dous muros unidos que se moven ambos conservan a súa esquina onde se cruzan as súas novas liñas. Os cuartos quedan pechados. É un paso en **Cambios**.

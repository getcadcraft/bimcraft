---
title: Navegadores, dispositivos e memoria
summary: Que difire en BimCraft entre Chrome, Edge, Firefox e Safari, en Mac, Windows e Linux, con rato, trackpad ou tacto, e canto ficheiro pode admitir.
keywords: navegador, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tableta, teléfono, tacto, trackpad, memoria, ficheiros grandes, webgl, rendemento
from: fd8acba1
---

BimCraft funciona nas versións actuais de Chrome, Edge, Firefox e Safari, en Mac, Windows e Linux. A vista 3D precisa WebGL, que teñen todos os navegadores actuais. Vexa [Navegadores e ordenadores](common:browsers) para ver o que precisan en xeral as aplicacións.

## Abrir un cartafol

| Navegador | {{ui:Abrir un cartafol}} fai isto | Arrastrar un cartafol | {{ui:Cartafoles recentes}} |
|---|---|---|---|
| Chrome, Edge | O selector de cartafoles do navegador, despois «Permitir que o sitio vexa os ficheiros?»: prema **Ver ficheiros** | Ábrese sen aviso | Si, para os cartafoles escollidos ou arrastrados |
| Firefox | O selector de cartafoles do sistema | Ábrese sen aviso | Non |
| Safari | O selector de cartafoles do sistema, cun botón **Enviar** (non se envía nada) | Ábrese sen aviso | Non |

Por baixo: Chrome e Edge usan o selector da API File System Access e poden lembrar o cartafol. Firefox e Safari usan o selector de cartafoles máis antigo, que entrega todos os ficheiros do cartafol de golpe e non se pode lembrar. Un cartafol arrastrado léese entrada por entrada en todos os navegadores.

:::chromium
Brave e outros navegadores baseados en Chromium desactivan o selector de cartafoles. BimCraft usa entón o selector de cartafoles do sistema, e o navegador pode preguntar «¿Enviar *n* ficheiros a este sitio?». Non se envía nada; os ficheiros só van á lapela. Arrastrar o cartafol evita a pregunta.
:::

## Mac, Windows e Linux

- Os atallos escritos {{key:Mod+S}} e {{key:Mod+Z}} son Command en Mac e Ctrl en Windows e Linux.
- {{key:Ctrl+Shift+F}} (modos de pantalla) é Control en todas as plataformas, incluído Mac.
- Os diálogos de ficheiros e a cartafol de descargas son os do propio sistema.

## Rato, trackpad e tacto

| Entrada | Vista 3D | Debuxo 2D |
|---|---|---|
| Rato | Arrastrar co botón esquerdo xira, co dereito despraza, a roda fai zoom, o clic escolle | Calquera arrastre despraza, a roda fai zoom, o dobre clic axusta |
| Trackpad | Arrastrar con clic xira; {{key:Shift}} ou {{key:Mod}} e arrastrar despraza; desprazar con dous dedos ou pinzar fai zoom | Arrastrar con clic despraza; desprazar con dous dedos ou pinzar fai zoom |
| Tacto | Un dedo xira, dous dedos pinzan e despraza, un toque escolle | Un dedo despraza; aínda sen zoom por pinza; tocar {{ui:Axustar}} |

Nun trackpad de Mac, o clic dereito é un clic con dous dedos (ou clic con Control). Vexa [Teclas, ratos e trackpads](common:keys).

As tabletas e os teléfonos poden abrir ficheiros soltos e vélos, pero a pantalla é pequena, moitos navegadores móbiles non poden escoller cartafoles, e os modelos grandes poden non caber na súa memoria. Un ordenador funciona mellor.

## Ficheiros grandes e memoria

Todo o que BimCraft le vive na memoria da lapela do navegador. Canta memoria pode usar unha lapela depende máis do navegador e do seu ordenador que de BimCraft.

| Ficheiro | Canto se le | Que esperar |
|---|---|---|
| IFC | O ficheiro completo, máis a xeometría 3D construída a partir del | Depende do seu ordenador e navegador; un modelo de varios centos de megabytes pode ser demasiado para un portátil. Por encima de 1,5 millóns de triángulos, as aristas desactívanse |
| Ficheiros de proxecto e de familia | Uns 40 KB a 100 KB, sexa cal sexa o tamaño | Incluso os modelos centrais moi grandes ábrense nun momento, tamén desde unha unidade de rede |
| DWG e DXF | O ficheiro completo | Os debuxos moi grandes mostran «Este debuxo é moi grande; só se mostra unha parte.» |
| Cartafoles | A lista de ficheiros, máis uns poucos kilobytes por modelo | Até 20 000 ficheiros |

Se unha lapela se queda sen memoria, o navegador mostra a súa propia páxina de erro («Aw, Snap!» en Chrome, por exemplo). Peche outras lapelas, recargue BimCraft e probe de novo, ou use un ordenador con máis memoria.

## Relacionado

- [En liña e sen conexión](topic:online-offline)
- [Resolución de problemas](topic:troubleshooting)

---
title: Blaaiers, toestelle en geheue
summary: Wat in BimCraft verskil tussen Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux, met 'n muis, 'n trackpad of aanraking, en hoe groot 'n lêer dit kan neem.
keywords: blaaier, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, foon, aanraking, trackpad, geheue, groot lêers, webgl, werkverrigting
from: fd8acba1
---

BimCraft werk in huidige weergawes van Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux. Die 3D-aansig benodig WebGL, wat elke huidige blaaier het. Sien [Blaaiers en rekenaars](common:browsers) vir wat die apps oor die algemeen nodig het.

## Oopmaak van 'n vouer

| Blaaier | {{ui:Maak 'n vouer oop}} doen dit | Sleep 'n vouer in | {{ui:Onlangse vouers}} |
|---|---|---|---|
| Chrome, Edge | Die blaaier se vouerkieser, dan "Laat die webwerf lêers sien?": klik **Sien lêers** | Maak sonder 'n vraag oop | Ja, vir vouers wat gekies of gesleep is |
| Firefox | Die stelsel se vouerkieser | Maak sonder 'n vraag oop | Nee |
| Safari | Die stelsel se vouerkieser, met 'n **Laai op**-knoppie (niks word opgelaai nie) | Maak sonder 'n vraag oop | Nee |

Agter die skerms: Chrome en Edge gebruik die File System Access-kieser en kan die vouer onthou. Firefox en Safari gebruik die ouer vouerkieser, wat elke lêer in die vouer op een slag gee en nie onthou kan word nie. 'n Gesleepte vouer word in elke blaaier inskrywing vir inskrywing gelees.

:::chromium
Brave en sommige ander Chromium-blaaiers skakel die vouerkieser af. BimCraft gebruik dan die stelsel se vouerkieser in plaas daarvan, en die blaaier vra dalk "*n* lêers na hierdie webwerf oplaai?". Niks word opgelaai nie; die lêers gaan net na die oortjie. Sleep die vouer in om die vraag te vermy.
:::

## Mac, Windows en Linux

- Kortpaaie wat {{key:Mod+S}} en {{key:Mod+Z}} geskryf word, is Command op 'n Mac en Ctrl op Windows en Linux.
- {{key:Ctrl+Shift+F}} (skermmodusse) is Control op elke platform, ook op 'n Mac.
- Lêerdialoë en die aflaaivouer is dié van jou stelsel.

## Muis, trackpad en aanraking

| Invoer | 3D-aansig | 2D-tekening |
|---|---|---|
| Muis | Linkersleep wentel, regtersleep pan, wiel zoem, klik kies | Enige sleep pan, wiel zoem, dubbelklik pas |
| Trackpad | Klik-sleep wentel; {{key:Shift}} of {{key:Mod}} en sleep pan; tweevinger-rol of knyp zoem | Klik-sleep pan; tweevinger-rol of knyp zoem |
| Aanraking | Een vinger wentel, twee vingers knyp en pan, tik kies | Een vinger pan; nog geen knypzoem nie; tik {{ui:Pas}} |

Op 'n Mac-trackpad is regsklik 'n tweevingerklik (of Control-klik). Sien [Sleutels, muise en trackpads](common:keys).

Tablets en telefone kan enkele lêers oopmaak en dit bekyk, maar die skerm is klein, baie mobiele blaaiers kan nie vouers kies nie, en groot modelle pas dalk nie in hul geheue nie. 'n Rekenaar werk die beste.

## Groot lêers en geheue

Alles wat BimCraft lees, leef in die blaaier-oortjie se geheue. Hoeveel 'n oortjie kan gebruik, hang meer af van die blaaier en jou rekenaar as van BimCraft.

| Lêer | Hoeveel word gelees | Wat om te verwag |
|---|---|---|
| IFC | Die hele lêer, plus die 3D-geometrie wat daaruit gebou word | Hoe groot dit kan wees, hang af van jou rekenaar en blaaier; 'n model van verskeie honderde MB kan vir 'n skootrekenaar te veel wees. Oor 1,5 miljoen driehoeke word rante afgeskakel |
| Projek- en gesinlêers | Ongeveer 40 KB tot 100 KB, ongeag die grootte | Selfs baie groot sentrale modelle open in 'n oomblik, ook vanaf 'n netwerkaandrywer |
| DWG en DXF | Die hele lêer | Baie groot tekeninge wys "Hierdie tekening is baie groot; slegs 'n deel daarvan word gewys." |
| Vouers | Die lêerlys, plus 'n paar KB per model | Tot 20 000 lêers |

As 'n oortjie uit geheue raak, wys die blaaier sy eie foutbladsy ("Aw, Snap!" in Chrome, byvoorbeeld). Maak ander oortjies toe, herlaai BimCraft en probeer weer, of gebruik 'n rekenaar met meer geheue.

## Verwant

- [Aanlyn en vanlyn](topic:online-offline)
- [Foutoplossing](topic:troubleshooting)

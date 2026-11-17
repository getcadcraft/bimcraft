---
title: Zīmēt attēlu ar citu programmu
summary: Mūsu pašu ceļu izsekotājs zīmē renderēšanas attēlu; cita programma to var zīmēt tikai caur renderēšanas dzinēja papildinājumu programmā CadCraft Studio. Kas tiek pārnests un kāpēc dažas programmas nekad netiek piedāvātas.
keywords: renderēt, dzinējs, ārējā programma, papildinājuma dzinējs, studio, fons, rinda, usd, gltf, zīmē, blender, gpl
from: 652b413c
---

Attēlu {{ui:Renderēt}} zīmē **mūsu pašu dzinēji**: Ātrais un Ceļu izsekotājs pārlūkā un CadCraft Studio. Cita programma to var zīmēt tikai tad, ja to nodrošina **renderēšanas dzinēja papildinājums**: skatiet [Renderēšanas dzinēja pievienošana ar papildinājumu](topic:render-engine-addons). Lai nogādātu ainu citā programmā un turpinātu darbu tur, izmantojiet [Atvērt ainu citā programmā](topic:render-open-in) vai [Sūtīt ainu spēļu dzinējam](topic:render-unreal).

## Zīmēt attēlu ar papildinājuma dzinēju

1. Ieslēdziet papildinājumu iestatījumos: Iestatījumi › Papildinājumi. Tā dzinējs parādās {{ui:Renderēt}} dzinēju sarakstā.
2. Izvēlieties to. Tā paša iestatījumi parādās zem dzinēju saraksta.
3. Noklikšķiniet {{ui:Renderēt}}. Studio pirmo reizi, kad papildinājums palaiž programmu, jautā savā dialogā. Progress rādās zīmēšanas laikā; {{ui:Apturēt}} to beidz. Attēls parādās atzīmēts ar dzinēju, kas to zīmēja.

Dzinējs, kas rakstīts JavaScript, darbojas arī pārlūkā. Dzinējs, kas palaiž programmu šajā datorā, darbojas tikai Studio; pārlūkā tas rādās kā fails, ko saglabāt.

## Kas tiek pārnests

Dzinējs saņem **pakotni**: modeli kā USD failu (un glTF failu, ja tas to pieprasa) un iestatījumu failu ar precīzām materiālu vērtībām, sauli un debesīm, katru ieslēgto lampu ar tās jaudu un gaismas profilu, kameru un ekspozīciju. Katra programma apgaismo, toņo un paraugo pēc savas metodes, tāpēc attēli ir līdzīgi kamerā, saulē, lampās un ekspozīcijā, bet ne pikseli pa pikselim.

## Programmas, ko CadCraft nekad nepalaiž

CadCraft nekad nepalaiž programmu ar GNU GPL licenci un nekad to neuzskaita kā dzinēju vai mērķi **Atvērt citā programmā**. Blender ir viena no tām, tāpēc tā nav dzinēju sarakstā. USD vai glTF fails, kas saglabāts no {{ui:Renderēt}}, joprojām atveras tajā kā jebkurā programmā, kas lasa šos failus.

:::note
Panorāmas un stereo kameras un debesu attēls (tiek izmantotas debesu krāsas) netiek pārnesti uz citu programmu. Nekas, kas izdarīts citā programmā, neatgriežas modelī.
:::

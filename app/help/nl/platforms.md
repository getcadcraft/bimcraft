---
title: Browsers, apparaten en geheugen
summary: Wat er in BimCraft verschilt tussen Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux, met een muis, een trackpad of aanraking, en hoe groot een bestand kan zijn.
keywords: browser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefoon, aanraken, trackpad, geheugen, grote bestanden, webgl, prestaties
from: fd8acba1
---

BimCraft draait in recente versies van Chrome, Edge, Firefox en Safari, op Mac, Windows en Linux. De 3D-weergave heeft WebGL nodig, dat elke recente browser heeft. Zie [Browsers en computers](common:browsers) voor wat de apps in het algemeen nodig hebben.

## Een map openen

| Browser | {{ui:Een map openen}} doet dit | Een map naar binnen slepen | {{ui:Recente mappen}} |
|---|---|---|---|
| Chrome, Edge | De mapkiezer van de browser, daarna "Mag de site bestanden bekijken?": klik op **Bestanden bekijken** | Opent zonder vraag | Ja, voor mappen die gekozen of gesleept zijn |
| Firefox | De mapkiezer van het systeem | Opent zonder vraag | Nee |
| Safari | De mapkiezer van het systeem, met een knop **Uploaden** (er wordt niets geüpload) | Opent zonder vraag | Nee |

Achter de schermen: Chrome en Edge gebruiken de File System Access-kiezer en kunnen de map onthouden. Firefox en Safari gebruiken de oudere mapkiezer, die alle bestanden in de map in één keer aanlevert en die niet kan worden onthouden. Een gesleepte map wordt in elke browser item voor item gelezen.

:::chromium
Brave en sommige andere Chromium-browsers schakelen de mapkiezer uit. BimCraft gebruikt dan de mapkiezer van het systeem, en de browser vraagt misschien "*n* bestanden naar deze site uploaden?". Er wordt niets geüpload; de bestanden gaan alleen naar het tabblad. Een map slepen voorkomt de vraag.
:::

## Mac, Windows en Linux

- Sneltoetsen die als {{key:Mod+S}} en {{key:Mod+Z}} worden geschreven, zijn Command op een Mac en Ctrl op Windows en Linux.
- {{key:Ctrl+Shift+F}} (schermmodi) is Control op elk platform, ook op een Mac.
- Bestandsdialogen en de downloadmap zijn die van uw systeem.

## Muis, trackpad en aanraking

| Invoer | 3D-weergave | 2D-tekening |
|---|---|---|
| Muis | Slepen met de linkermuisknop draait, slepen met de rechter verschuift, het wiel zoomt, klikken selecteert | Elke sleep verschuift, het wiel zoomt, dubbelklikken past in beeld |
| Trackpad | Klikslepen draait; {{key:Shift}} of {{key:Mod}} en slepen verschuift; tweevingerscrollen of knijpen zoomt | Klikslepen verschuift; tweevingerscrollen of knijpen zoomt |
| Aanraking | Eén vinger draait, twee vingers knijpen en verschuiven, tikken selecteert | Eén vinger verschuift; nog geen knijpzoom; tik op {{ui:Passend}} |

Op een Mac-trackpad is rechtsklikken een tweevingerklik (of Control-klik). Zie [Toetsen, muizen en trackpads](common:keys).

Tablets en telefoons kunnen losse bestanden openen en bekijken, maar het scherm is klein, veel mobiele browsers kunnen geen mappen kiezen, en grote modellen passen mogelijk niet in hun geheugen. Een computer werkt het best.

## Grote bestanden en geheugen

Alles wat BimCraft leest, staat in het geheugen van het browsertabblad. Hoeveel een tabblad kan gebruiken, hangt meer af van de browser en uw computer dan van BimCraft.

| Bestand | Hoeveel wordt gelezen | Wat u kunt verwachten |
|---|---|---|
| IFC | Het hele bestand, plus de 3D-geometrie die daaruit wordt gebouwd | Hoe groot dat kan zijn, hangt af van uw computer en browser; een model van enkele honderden megabytes kan voor een laptop te veel zijn. Boven 1.5 miljoen driehoeken worden randen uitgeschakeld |
| Project- en familiebestanden | Ongeveer 40 KB tot 100 KB, ongeacht de grootte | Zelfs zeer grote centrale modellen openen in een moment, ook vanaf een netwerkstation |
| DWG en DXF | Het hele bestand | Zeer grote tekeningen tonen "Deze tekening is zeer groot; alleen een deel wordt getoond." |
| Mappen | De bestandslijst, plus enkele kilobytes per model | Tot 20.000 bestanden |

Als een tabblad geheugen tekortkomt, toont de browser zijn eigen foutpagina ("Aw, Snap!" in Chrome, bijvoorbeeld). Sluit andere tabbladen, laad BimCraft opnieuw en probeer het nog eens, of gebruik een computer met meer geheugen.

## Gerelateerd

- [Online en offline](topic:online-offline)
- [Problemen oplossen](topic:troubleshooting)

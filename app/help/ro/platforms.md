---
title: Browsere, dispozitive și memorie
summary: Ce diferă în BimCraft între Chrome, Edge, Firefox și Safari, pe Mac, Windows și Linux, cu un mouse, un trackpad sau atingere, și cât de mare fișier poate primi.
keywords: browser, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tabletă, telefon, atingere, trackpad, memorie, fișiere mari, webgl, performanță
from: fd8acba1
---

BimCraft rulează în versiunile actuale ale Chrome, Edge, Firefox și Safari, pe Mac, Windows și Linux. Vederea 3D are nevoie de WebGL, pe care îl are fiecare browser actual. Vezi [Browsere și calculatoare](common:browsers) pentru ce cer aplicațiile în general.

## Deschiderea unui dosar

| Browser | {{ui:Open a folder}} face asta | Trăgerea unui dosar | {{ui:Recent folders}} |
|---|---|---|---|
| Chrome, Edge | Selectorul de dosare al browserului, apoi „Permiteți site-ului să vizualizeze fișierele?”: faceți clic pe **Vizualizare fișiere** | Se deschide fără întrebare | Da, pentru dosarele alese sau trase |
| Firefox | Selectorul de dosare al sistemului | Se deschide fără întrebare | Nu |
| Safari | Selectorul de dosare al sistemului, cu un buton **Încărcare** (nu se încarcă nimic) | Se deschide fără întrebare | Nu |

În culise: Chrome și Edge folosesc selectorul de acces la sistemul de fișiere și pot reține dosarul. Firefox și Safari folosesc selectorul de dosare mai vechi, care predă toate fișierele din dosar deodată și nu poate fi reținut. Un dosar tras este citit intrare cu intrare în fiecare browser.

:::chromium
Brave și alte browsere bazate pe Chromium dezactivează selectorul de dosare. BimCraft folosește atunci selectorul de dosare al sistemului, iar browserul poate întreba „Upload *n* files to this site?” (Încărcați *n* fișiere pe acest site?). Nu se încarcă nimic; fișierele merg doar în filă. Trăgerea dosarului evită întrebarea.
:::

## Mac, Windows și Linux

- Scurtăturile scrise {{key:Mod+S}} și {{key:Mod+Z}} sunt Command pe Mac și Ctrl pe Windows și Linux.
- {{key:Ctrl+Shift+F}} (modurile de ecran) este Control pe fiecare platformă, inclusiv pe Mac.
- Casetele de dialog pentru fișiere și dosarul de descărcări sunt ale sistemului.

## Mouse, trackpad și atingere

| Intrare | Vederea 3D | Desenul 2D |
|---|---|---|
| Mouse | Trageți cu butonul stâng: orbitare; cu butonul drept: panoramare; rotița: zoom; clic: alegere | Orice tragere panoramează, rotița face zoom, dublu clic potrivește |
| Trackpad | Clic și tragere: orbitare; {{key:Shift}} sau {{key:Mod}} și tragere: panoramare; derulare cu două degete sau ciupire: zoom | Clic și tragere: panoramare; derulare cu două degete sau ciupire: zoom |
| Touch (Atingere) | Un deget: orbitare; două degete: ciupire și panoramare; atingere: alegere | Un deget: panoramare; zoom prin ciupire încă nerealizat; atingere pe {{ui:Fit}} |

Pe un trackpad de Mac, clicul dreapta este un clic cu două degete (sau clic cu Control). Vezi [Taste, mouse-uri și trackpad-uri](common:keys).

Tabletele și telefoanele pot deschide fișiere individuale și le pot privi, dar ecranul este mic, multe browsere mobile nu pot alege dosare, iar modelele mari s-ar putea să nu încapă în memoria lor. Un calculator funcționează cel mai bine.

## Fișiere mari și memorie

Tot ce citește BimCraft trăiește în memoria filei browserului. Cât poate folosi o filă depinde mai mult de browser și de calculator decât de BimCraft.

| Fișier | Cât se citește | Ce de așteptat |
|---|---|---|
| IFC | Tot fișierul, plus geometria 3D construită din el | Depinde de calculator și de browser; un model de câteva sute de megaocteți poate fi prea mult pentru un laptop. Peste 1.5 milioane de triunghiuri, muchiile sunt oprite |
| Fișiere de proiect și de familie | Circa 40 KB până la 100 KB, oricare ar fi dimensiunea | Chiar și modelele centrale foarte mari se deschid în câteva clipe, și de pe o unitate de rețea |
| DWG și DXF | Tot fișierul | Desenele foarte mari afișează „This drawing is very large; only part of it is shown.” (Acest desen este foarte mare; se arată doar o parte din el.) |
| Dosare | Lista de fișiere, plus câțiva kilobytes pe model | Până la 20.000 de fișiere |

Dacă o filă rămâne fără memorie, browserul arată propria pagină de eroare („Aw, Snap!” în Chrome, de exemplu). Închideți alte file, reîncărcați BimCraft și încercați din nou, sau folosiți un calculator cu mai multă memorie.

## Legături

- [Online și offline](topic:online-offline)
- [Depanare](topic:troubleshooting)

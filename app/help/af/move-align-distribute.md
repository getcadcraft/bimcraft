---
title: Skuif, kopieer, belyn en versprei bou-elemente
summary: Skuif mure, vloere, kolomme en geplaasde items volgens 'n basispunt en 'n tweede punt of 'n getikte afstand, kopieer hulle soos jy gaan, en belyn hulle of spasieer hulle eweredig, op die plan of uit 'n keuse in 3D.
keywords: skuif, kopieer, belyn, versprei, spasiëring, verskuiwing, basispunt, verplasing, mure, kolomme, vloere, MOVE, ALIGN, DISTRIBUTE, Shift+M
from: 75890e37
---

## Wat jy sal doen

Skuif 'n muur, 'n kolom, 'n vloer of 'n geplaasde biblioteekitem na 'n nuwe plek, maak kopieë daarvan, of lyn verskeie op, sonder om hulle weer te teken.

## Name en sleutels

Die opdragte heet {{ui:Skuif}}, {{ui:Belyn}} en {{ui:Versprei}}, en jy kan `MOVE`, `ALIGN` en `DISTRIBUTE` in die opdragreël tik, soos in die CadCraft-tekenprogram. Een verskil: in BimCraft is {{key:M}} Meet, so Skuif het sy eie sleutel, {{key:Shift+M}}. Die hulpmiddels is in die {{ui:Bou}}-kieslys.

## Skuif

1. Kies wat geskuif moet word, op die plan of in die 3D-aansig. Mure, vloere, kolomme en geplaasde biblioteekitems kan almal in een keuse wees.
2. Druk {{key:Shift+M}} of kies {{ui:Skuif}}.
3. Klik 'n basispunt, en dan 'n tweede punt. Of, na die basispunt, tik 'n afstand en druk {{key:Enter}}: dit gaan in die rigting waarheen die aanwyser van die basispunt af wys. Jy kan ook `dx,dy` (of `@dx,dy`) tik, of `lengte<hoek`.
4. Druk {{key:C}} om {{ui:Kopieer}} aan te skakel: elke skuif maak dan kopieë en bly gereed vir die volgende. Druk {{key:Esc}} om te stop.

Albei punte kan ook in die 3D-aansig geklik word: met Skuif aan, ontmoet die aanwyser die vlak se vloerhoogte, so 'n klik daar is 'n punt van die plan. Hou {{key:Shift}} vas terwyl jy klik om eerder 'n ander element te kies. Gebruik 'n plan-, Bo-, Voor- of Syaansig soos jy wil: die punte lê altyd op daardie vlak.

'n Muur neem sy deure en vensters saam. 'n Geteekende vloer neem sy openings saam. Kamers, vloere en plafonne wat die mure volg, word bygewerk. Mure wat by die geskuifde muur aangesluit het, bly waar hulle is.

Elke skuif is een verandering: een {{key:Mod+Z}} maak dit ongedaan, en dit reis na almal in 'n Live TeamWork-sessie. 'n Geplaasde biblioteekitem kan nie so gekopieer word nie; gebruik {{ui:Wysig}} › {{ui:Kopieer}} en {{ui:Plak}}.

## Belyn

Kies twee of meer elemente, kies {{ui:Belyn}}, dan 'n kant (links, sentrum, regs, bo, middel of onder) en waarna om te belyn: die gekose stel, die eerste gekose, die laaste gekose, of 'n punt wat jy klik. Druk {{ui:Belyn}} in die balk.

## Versprei

Kies drie of meer elemente, kies {{ui:Versprei}}, dan 'n rigting (oor of af) en die spasiëring: gelyke gapings tussen hulle of gelyke middelpunte. Die twee aan die eindes bly waar hulle is.

Mure wat Belyn of Versprei skuif, behou hul verbindings, soos met Skuif: 'n muur wat by 'n geskuifde muur aangesluit is, gly sy end langs sy eie lyn om aangesluit te bly, skotmure wat daarin stoot, kom saam, en twee aangesluite mure wat albei geskuif word, hou hul hoek waar hul nuwe lyne ontmoet. Kamers bly gesluit. Dit is een stap in **Veranderinge**.

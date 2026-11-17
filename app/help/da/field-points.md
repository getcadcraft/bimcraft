---
title: Punkter til udsætning og kontrol af udført arbejde
summary: Nummerér de steder et hold sætter ud fra modellen — søjlecentre, vægenders ender, ankerbolte, gennemføringer, ethvert element du vælger — skriv dem til en totalstation, læs holdets udførte punkter tilbage og se hvad der er ude.
keywords: udsætningspunkter, udsætning, afsætning, totalstation, opmåling, punktfil, csv, txt, pnezd, penzd, xyz, nord, øst, kote, udført, kontrol, tolerance, afvigelse, ankerbolte, søjlecentre, vægender, gennemføringer, opmålingskoordinater, kortkonvertering
from: acea9606
---

Fanen {{ui:Points}} til højre laver de punkter et hold sætter ud på pladsen ud fra den åbne model, og kontrollerer de punkter holdet måler bagefter.

## Lav punkterne

1. Åbn en IFC-model og fanen {{ui:Points}}.
2. Sæt kryds ved hvad der skal sættes ud: **søjlecentre** (foden af hver søjles centerlinje), **vægender** (begge ender af hver vægs akse, ved dens bund), **ankerbolte**, **gennemføringer** (elementer hvis navn eller type siger gennemføring) og de **valgte elementer** (hver i sit placeringspunkt; vælg dem i visningen først).
3. Vælg det første nummer og et præfiks, koordinaterne, enhederne, kolonnerne og filen:
   - **Model**: filens egne koordinater. **Opmålingsgitter**: kortgitteret i modellens georeference (kun vist når IFC'en har en kortkonvertering), i meter eller den enhed du vælger.
   - Kolonner **PNEZD** (punkt, nord, øst, kote, beskrivelse), **PENZD** eller **XYZ**; **CSV** (kommaer) eller **TXT** (tabulatorer).
4. Tryk {{ui:Make points}}: listen viser dem, og visningen markerer dem med blåt. {{ui:Download the points}} skriver filen.

Punkterne kommer i en fast rækkefølge: efter type, og så i rækker hen over planen. Derfor giver det samme tal at lave dem igen fra samme model. Filen er den CivilCraft åbner, og som CadCraft's EXPORTPOINTS skriver: ét punkt pr. linje, tre decimaler og en beskrivelse i anførselstegn, når den indeholder et komma.

## Kontrollér de udførte punkter

Når holdet sender det de har målt tilbage, vælger du en **tolerance** i millimeter og hvordan punkterne parres: efter **punktnummer** (de beholdt dine numre) eller efter **nærmeste måling**. Tryk derefter på {{ui:Read as-built points…}}. Læs filen i de samme enheder og koordinater som du skrev den i.

Hvert designpunkt er så enten **inden for** tolerancen, **uden for** den eller **ikke målt**, og enhver måling ingen bad om er **ekstra**. Tabellen giver forskellene i den enhed du vælger i værktøjslinjen, fod vist som decimale tommer (udført minus design: øst, nord, højde og afstanden i plan). Visningen markerer hvert punkt grønt eller rødt med en linje til målingen, og grå når det ikke blev målt. {{ui:Report (CSV)}} skriver hele sammenligningen.

Intet her ændrer modellen. Ikke lavet endnu: udsætning fra dækkanter, gitterskæringer eller åbninger der laves for dig, og at sende punkter direkte til et instrument. Brug filen.

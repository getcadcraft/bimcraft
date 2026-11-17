---
title: Tomten, bygningen på den og nivåene
summary: Tegn tomtens kontur, plasser og vri bygningen på tomten, legg til nivåer i gitte høyder eller del opp bygningens høyde, og tegn på nivået du velger.
keywords: tomt, situasjonsplan, byggelinje, tilbakeføring, servitutt, vegrett, eiendomsgrense, tomtegrense, eiendom, grense, plassering av bygning, rotere bygning, plassere bygning, nivåer, etasjer, legg til nivåer, del høyde, etasjehøyde, IfcSite, IfcBuilding, IfcBuildingStorey, romlig struktur
from: 48d10c1e
---

## Hva du gjør

Sett opp delene av en IFC-modell som holder alt annet: tomten, bygningen på den og bygningens nivåer.

Modellen er organisert som en **tomt** som holder en **bygning**, som holder sine **nivåer** (etasjer). Vegger, dekker og alt annet hører til et nivå. {{ui:Fil}} › {{ui:Ny bygning}} setter opp alle tre. En modell fra et annet program som har en bygning men ingen tomt, får en tomt første gang du tegner en: bygningen plasseres på den der den allerede sto.

## Tegn tomten

1. Slå på {{ui:Tegn}}, og velg {{ui:Bygg}} › {{ui:Tomt}}.
2. Klikk på hjørnene i tomten (verktøyet fester seg som veggverktøyet). Klikk første hjørne igjen, dobbeltklikk eller trykk {{key:Enter}} for å fullføre. {{key:Backspace}} tar tilbake et hjørne.
3. Raden viser tomtens areal. Tegn den på nytt for å endre den.

Plantegningen for hvert nivå viser tomtekonturen som eiendomsgrense.

## Plasser bygningen på tomten

Med {{ui:Tomt}} på skriver du bygningens **X** og **Y** på tomten og dens **Vri** i grader, eller klikker {{ui:Plasser bygningen med et klikk}} og klikker der bygningens origo skal være. Alt i bygningen (nivåer, vegger, rutenett, alt du har tegnet) flyttes med den. Tomten og konturen står stille. Plantegningene viser fortsatt hvert nivå rettvinklet mot bygningen.

## Byggelinjer og servitutter

Byggelinjer og servitutter (rettigheter i eiendom, vegrett) tegnes på tomten som betingelser. De **varsler, de blokkerer aldri**: en vegg over en av dem tegnes slik du ba om, og et varsel som nevner veggen og linjen eller servitutten, vises under Problemer. Flytter du veggen tilbake, forsvinner varselet. Et varsel kan godtas med en begrunnelse (en lemping som myndigheten har gitt, for eksempel).

- **Byggelinje fra tilbakeføringer.** {{ui:Bygg}} › {{ui:Byggelinje}}, deretter {{ui:Tilbakeføringer}}: skriv hvor langt inn linjen står fra hver grense på tomten. Grensene nummereres i plantegningen mens verktøyet er på. Linjen beregnes fra disse avstandene og følger tomtekonturen hvis du tegner den på nytt med like mange grenser. Avstandene er dine, hentet fra tinglysingen eller reguleringsplanen. BimCraft fyller inn ingen.
- **En tegnet byggelinje.** Med {{ui:Byggelinje}} på klikker du punktene og fullfører med dobbeltklikk eller {{key:Enter}}. Fullfør på første punkt for en lukket linje: området innenfor er der det kan bygges, og en vegg med en del utenfor varsles. En åpen linje varsler bare om en vegg som krysser den.
- **En servitutt.** {{ui:Bygg}} › {{ui:Servitutt}}: velg type, skriv navnet, den registrerte referansen og bredden, og klikk midtlinjen og fullfør (et bånd), eller lukk på første punkt (et område). En vegg med en del på den varsles, på hvert nivå.
- En flate som ligger nøyaktig på en linje, berører den og krysser den ikke (toleransen er 1 mm).
- Det aktive volumalternativet i hvert alternativsett kontrolleres på samme måte som veggene: en masse utenfor grensen, over en byggelinje eller på en servitutt får et varsel. Se [Volumalternativer side om side](topic:massing-options).
- Velg en med {{ui:Velg}} for å endre navn, referanse, type eller bredde, flytte den eller slette den.

De tegnes på hvert nivås plantegning, på ark og i plan-PDF-en: byggelinjer stiplet, servitutter prikket, hver med sin merkelapp. I IFC-filen er hver en annotasjon (IfcAnnotation, type BuildingLine eller Servitude) på tomten, med linjen som en vanlig kurve andre programmer kan lese. Kontrollen bruker hver vegg sin virkelige kontur i plantegningen, med skjøtene slik de er tegnet. En buet vegg kontrolleres ut fra sin egen tykkelse om midtlinjen.

## Legg til nivåer

I {{ui:Nivåer}}-panelet legger {{ui:Legg til et nivå på toppen}} til ett, og {{ui:Legg til et nivå under}} legger til ett under det laveste (en kjeller, på negativ kote). {{ui:Legg til nivåer…}} legger til flere om gangen:

- **I disse høydene**: skriv høyder over det laveste nivået, skilt med komma (for eksempel `12', 24', 36'`). Høyder som allerede har et nivå, hoppes over.
- **Del bygningens høyde**: skriv bygningens høyde og antall nivåer. Nivåene du har, flyttes til sine nye høyder fra det laveste og oppover, manglende legges til, og eventuelle over dem blir stående.

Vegger som går opp til nivået over, følger med, det samme gjør søyler og ramper.

{{ui:Kopier dette nivået…}} (samme panel) kopierer det som er tegnet på nivået du ser på, til et annet nivå eller et nytt nivå på toppen, slik at en plantegning kan gå opp i bygningen i ett steg. Se [Tegn vegger](topic:draw-walls).

## Tegn på et nivå

Hvert {{ui:Tegn}}-verktøy virker på nivået som er valgt i plantegningens nivåliste (eller valgt i {{ui:Nivåer}}-panelet). Det du tegner, hører til det nivået.

## Hva som vises

- Hver av disse endringene er ett steg: {{key:Mod+Z}} tar den tilbake.
- I IFC-filen: tomten (IfcSite) med konturen og arealet, bygningen (IfcBuilding) plassert på den, og nivåene (IfcBuildingStorey) i bygningen.

Se også [Koordinater i BimCraft](topic:coordinates) for prosjektets origo og oppmålingspunktet.

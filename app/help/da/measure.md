---
title: Mål afstande, fladeareal og placeringer i 3D
summary: Mål mellem to punkter i en IFC-model med fangst til hjørner og kanter, læs forskellen langs X, Y og Z, og mål arealet af en plan flade.
keywords: mål, måling, afstand, længde, målsætning, areal, fladeareal, fang, hjørne, kant, målebånd, lineal, frirum, placering, breddegrad, længdegrad, lat long, koordinater, georeferering, kortkonvertering, EPSG, opmåling, øst, nord, WGS 84, datum
from: 5f430bba
---

## Hvad du skal gøre

Kontrollér et frirum, en vægs længde eller størrelsen af en flade direkte fra modellen, uden at åbne tegneprogrammet.

## Trin

1. Åbn en IFC-model.
2. Klik på {{ui:Mål}} i værktøjslinjen, eller tryk {{key:M}}. En bjælke åbnes nederst i visningen.
3. **En afstand:** med {{ui:Afstand}} valgt klik på det første punkt, derefter det andet. Nær et hjørne fanger markøren det, nær en kant fanger den kanten; den lille etiket ved markøren siger hvilken. Hvert par klik giver én måling.
4. **En flades areal:** vælg {{ui:Fladeareal}} og klik på en flade. Hele den plane flade lyser op, og dens areal vises.
5. **Lige linjer:** hold {{key:Shift}} nede, mens du vælger det andet punkt, eller tryk {{ui:Ret}} i bjælken for at holde den. Linjen løber da langs den akse, markøren er nærmest (i en visning ovenfra langs X eller Y i planen; i andre visninger langs X, Y eller Z), og markøretiketten siger »lige langs en akse«. {{key:M}} starter og stopper stadig Mål.
6. Klik på {{ui:Ryd}} for at fjerne målingerne, eller {{ui:Færdig}} (eller {{key:Esc}}) for at stoppe med at måle.

## Hvad du skal se

- En linje mellem de to punkter med sin længde på, og i bjælken længden med hvor langt den går langs X, Y og Z (i modellens akser, Z opad), alt i den {{ui:Enheder}}, der er valgt på værktøjslinjen.
- En flades areal i kvadratmeter, på fladen og i bjælken.
- Etiketter bliver siddende på deres målinger, mens du drejer, panorerer og zoomer.
- Mens du måler, vælger klik ikke elementer. Et snitplan eller en snitboks skærer stadig modellen, og du kan måle det, den viser, inklusive snitflader.

## Hvor et punkt ligger på jorden

Klik på {{ui:Placering}} i målebjælken, og klik derefter på et punkt på modellen (det fanger hjørner og kanter, som ved afstande). Bjælken viser:

- **breddegrad og længdegrad**, i decimalgrader og i grader, minutter og sekunder, i WGS 84 til at begynde med;
- **kortkoordinaterne** (øst og nord, skrevet i den {{ui:Enheder}}, der er valgt på værktøjslinjen) i modellens eget kortsystem, for eksempel `EPSG:28356`;
- **højden** og det lodrette datum, filen angiver, og filens **eget datum** (for eksempel GDA94).

{{ui:Kopiér}} lægger det hele på udklipsholderen på én linje. Ændr det system, breddegrad og længdegrad er i, under {{ui:Indstillinger}} › {{ui:BimCraft}} › {{ui:Placering}}: WGS 84 (som GPS og webkort), filens eget datum eller et andet almindeligt, såsom ETRS89 eller NAD83.

Dette kræver en georefereret model: en eksporteret med kortkoordinater (en kortkonvertering til et projiceret system med en EPSG-kode). En model, der kun har en grunds breddegrad og længdegrad, får en omtrentlig position, udregnet ud fra grundens punkt og dens sande nord, og bjælken siger det. Med flere modeller åbne bruger hvert punkt georefereringen fra sin egen model.

:::note
Overgang mellem datum (for eksempel GDA94 til WGS 84) sker uden gitterfiler, så det er præcist på et par meter; statuslinjen siger, hvor præcist. Kortkoordinaterne selv er nøjagtige.
:::

## Almindelige fejl

- **»…har ingen georeference«.** Filen har ingen kortkonvertering og ingen grundbreddegrad og -længdegrad. Eksportér den igen med dens koordinatsystem sat (fælles koordinater / opmålingspunkt i tegneværktøjet).

- **Kortkoordinater men ingen breddegrad og længdegrad.** Filen navngiver sit kortsystem uden en EPSG-kode, eller med en, der ikke er på listen; statuslinjen siger hvilken.
- **Punktet havner på fladen, ikke hjørnet.** Fangsten kigger på elementet under markøren. Flyt tættere på hjørnet, eller zoom ind.
- **Arealet er mindre end forventet.** Åbninger er udeladt, og en flade, der bøjer, er flere flader: klik på hver.
- **{{key:Esc}} stoppede målingen.** Det første {{key:Esc}} fjerner en halvfærdig afstand; det andet stopper.

## Næste

- [Skær en IFC-model med et snitplan](topic:section-plane)
- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)

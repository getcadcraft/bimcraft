---
title: Raamwerk van mure, vloere en dakke
summary: Genereer stiele, plate, lateie, balke, spare of vakwerke uit die model en hou dit daarmee; hulle word weer gemaak wanneer die mure, openings, vloere of dak verander, en die Hout-skedule is die snylys.
keywords: TJI, I-balk, spanwydtetabel, laai 'n tabel, raamwerk, raam, styl, stiele, plaat, boonste plaat, latei, koningstyl, jakkiestyl, omraamstuk, kruppelstyl, onderdorpel, blokkering, hoek, Kaliforniese hoek, T-aansluiting, balk, randbalk, bandbalk, spar, walmspar, valleispar, jakspar, nokplank, plafonbalk, kraagband, vakwerk, hout, snylys, bordvoet, 2x4, 2x6, afstand, hart-tot-hart
from: 76d0ffb5
---

## Wat jy gaan doen

Raam die gebou uit wat jy geteken het. BimCraft lê die stiele, plate en lateie in die mure uit, die balke in die vloere en die spare (of vakwerke) in die dak, bepaal hul grootte uit benoemde verstektabelle, hou hulle by die model en maak hulle weer elke keer as wat hulle raam verander. Die **Hout**-skedule is die snylys.

## Raam dit

1. Op 'n vlak, open {{ui:Bou}} en kies {{ui:Raamwerk}}.
2. Kies die **afstand** (16" of 24" hart-tot-hart; 400 of 600 mm), die **hoeke** (drie-styl of Kalifornies), **Spare** of **Vakwerke** vir dakke, en of mure 'n ry **blokkering** op halfhoogte kry. Vir vloere kies **Gesaagde hout** of **TJI (voorlopig)** en stel die balkrigting op outomaties, plan X of plan Y.
3. Klik **Raam elke muur**, of klik een muur, 'n vloer of 'n dak (op die vlak waarop die dak staan) om net dit te raam.

Skakel **Wys raamwerk** af om elke raamstuk te versteek, soos 'n laag; **Sien deur** versteek die mure, vloere en dakke wat geraam is, sodat jy die raamwerk alleen kan sien.

## Wat jy kry

- **Mure**: 'n onderste plaat (gesny by deure), 'n dubbele boonste plaat, stiele op die uitleg vanaf die muur se begin, koning- en jakkiestiele en 'n latei by elke deur en venster, kruppelstiele bo lateie en onder vensters, 'n growwe onderdorpel onder vensters, hoeke waar mure ontmoet (die muur wat deurloop neem die hoekstiele), twee steunstiele waar 'n ander muur T-aansluit, en blokkering tussen die stiele.
- **Vloere**: balke oor die kort kant van die vloer by verstek, of langs jou gekose plan-as; randbalke rondom die rand, en dubbele omraamstukke en lateie rondom 'n trappegat, met die balke daardeur kort gesny (stertbalke). TJI-modus kies die kleinste gelyste reeks en diepte wat die gemete vrye spanwydte by die gekose afstand en lasgeval bereik.
- **Dakke**: gewone spare vierkant aan elke dakrand, jakspare waar walms en valleie hulle sny, walms- en valleispare, nokplanke, plafonbalke op die plate en kraagbande — of eenvoudige vakwerke by die afstand, elk een stuk.

## Verander dit

Kies enige raamstuk in die 3D-aansig of die modelboom. **Eienskappe** wys sy raamwerk: verander die afstand, die vloerbalktipe en rigting, die hoeke, die blokkering of die dakraamwerk. Om mure, deure en vensters te skuif, of die vloer of die dak te verander, maak die raamwerk vanself weer.

Om 'n stuk wat jy doelbewus geplaas het te behou wanneer die raamwerk weer gemaak word, kies dit en kies **Hou hierdie stuk wanneer die raamwerk weer gemaak word**. 'n Behoue stuk bly waar dit is; wanneer die raamwerk rondom dit verander, word dit gemerk sodat jy dit kan nagaan.

## TJI-vloere uit 'n tabel wat jy laai

BimCraft dra geen balkvervaardiger se spanwydtetabelle nie (hulle behoort aan die vervaardiger en verander met elke uitgawe). Kies 'n vloer se raamwerk, stel **Vloerbalke** op **TJI (voorlopig)** en kies **Laai 'n tabel…** in **Eienskappe**: 'n lêer in die `cadcraft-tji-table`-formaat, JSON of CSV, wat jy uit die vervaardiger se huidige spanwydtetabelle gemaak het. Dit noem die vervaardiger, die produk en uitgawe, en waar die getalle vandaan kom, en lys vir elke lasgeval (lewende las, dooie las, defleksiegrens, steunlengte) die grootste vrye spanwydte van elke reeks en diepte by elke afstand.

- BimCraft neem die **vrye spanwydte** van die vloer, kies die vlakste diepte, en binne dit die reeks waarvan die gelyste spanwydte dit bereik vir die afstand en lasgeval wat jy gekies het, en raam die vloer daarmee. As die spanwydte of afstand buite die tabel is, sê dit so en verander niks nie.
- Die laste, defleksiegrens, steunlengte, die tabel en die sin "Voorlopige uitlegriglyn; finale keuse vereis die vervaardiger se tabelle en die projek se laste" word op die Hout-skedule gedruk, in die model geskryf saam met die raamwerk, en in die **Probleme**-paneel as 'n nota gelys. 'n Tabel wat as 'n voorbeeld gemerk is, sê dit in 'n waarskuwing.
- Met die **Bouregulasies**-byvoegsel aan, lees sy vloerbalkreël ook 'n gelaaide tabel; sonder 'n tabel word TJI-balke soos voorheen uit daardie kontrole gelaat.
- Die tabel bly in hierdie blaaier totdat jy dit skoonmaak of 'n ander laai. Die lêer: `format` (`cadcraft-tji-table`), `version` 1, `manufacturer`, `product`, `edition`, `source`, `units` (`imperial`: duim, voet, psf; of `metric`: mm, meter, kPa), `cases` (`id`, `live`, `dead`, `deflection`, `bearing`) en `rows` (`series`, `depth`, `spans`: vir elke geval-id, die afstand en die grootste vrye spanwydte, soos `"16": "15-6"`). In CSV is dieselfde feite `# sleutel = waarde`-reëls, en dan `series,depth,case,spacing,span`.
- Sonder 'n gelaaide tabel word 'n TJI-uitleg geweier en niks verander nie: **Laai 'n TJI-tabel: die vervaardigers se tabelle is hulle s'n en is nie ingebou nie.** 'n Model wat met die ouer ingeboude TJI-tabel (voor hierdie verandering) geraam is, hou elke balk wat dit het; Eienskappe en Probleme sê die tabel is nodig, en die vloer kan weer geraam word sodra jy een laai. Massief-gesaagde balke werk soos voorheen.

Dit is uitlegriglyn. Die finale balkkeuse benodig die vervaardiger se tabelle, die projek se laste en die ingenieur.

## Die snylys

In die Skedules-paneel kies **Hout**: elke raamstuk gegroepeer volgens grootte en volgens die voorraadlengte wat jy sou koop (hele 2'-lengtes vanaf 8'; 600 mm-stappe vanaf 2400 in millimeter), met die aantal stukke en die bordvoet. **CSV** laai dit af.

:::warning
Kop-, balk-, spar- en plafonbalkgroottes kom uit benoemde verstektabelle vir 'n tipiese een- of tweeverdieping-huis, nie ingenieurswerk nie. **Eienskappe** sê wanneer 'n spanwydte of 'n opening buite sy tabel is. 'n Ontwerper of ingenieur kontroleer spanwydtes, laste en verbindings.

TJI-uitlegte gebruik net 'n tabel wat jy laai, wat jy uit die vervaardiger se huidige spanwydtetabelle maak; BimCraft lewer geen een nie. Die voorstel kontroleer nie steun, puntlaste, uitkragings, gate, trappegat-lateie of verbindings nie, en die model se I-vorm is skematies.
:::

## Wat gestoor word

Elke geraamde muur, vloer of dak is 'n IFC-elementsamestelling ("Framing") van IFC-lede (stiele, plate, spare, kraagbande, blokkering, vakwerke) en balke (lateie, vloerbalke, randbalke, nokplanke), elk met sy grootte, lengte en bordvoet.

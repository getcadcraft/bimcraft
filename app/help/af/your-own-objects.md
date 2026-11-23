---
title: Bring jou eie voorwerpe en familielêers in die Biblioteek
summary: Lees familielêers (.rfa) en IFC-, DWG-, DXF-, glTF- of OBJ-lêers in die Biblioteek-oortjie, plaas hulle soos enige biblioteekitem, en hou hulle in My voorwerpe, 'n private lys wat net jy kan sien.
keywords: rfa, familie, families, familiebiblioteek, eie voorwerpe, my voorwerpe, private voorwerpe, private biblioteek, voorwerpe invoer, vervaardigerinhoud, BIM-voorwerpe, ifc-voorwerp, gltf, obj, dwg-blok, hou, wissel, migreer
from: 886261f8
---

## Wat jy sal doen

Bring voorwerpe wat jy reeds het in BimCraft: 'n familiebiblioteek uit Revit, 'n vervaardiger se IFC- of DWG-aflaai, 'n net van 'n ander modelleerder. Jy lees die lêer in die {{ui:Biblioteek}}-oortjie, plaas die voorwerp in jou model as 'n behoorlike IFC-element, en, as jy dit later weer wil hê, hou dit in {{ui:My voorwerpe}}.

## Stappe

1. Maak 'n IFC-model oop, of begin 'n nuwe gebou.
2. Klik die {{ui:Biblioteek}}-oortjie langs {{ui:Eienskappe}}.
3. Klik {{ui:Lêers…}}, en dan {{ui:Kies 'n lêer…}}. Kies een lêer of verskeie op een slag: `.rfa`, `.ifc`, `.dwg`, `.dxf`, `.glb`, `.gltf`, `.obj` of `.csv`. Of klik {{ui:Kies 'n vouer…}} om 'n hele vouer en die vouers binne-in te lees (tot 200 lêers in een keer).
4. Klik 'n kaart om te sien wat gelees is: die planvoorskou, die naam, vervaardiger en model, die groottes en die notas.
5. Klik {{ui:Plaas in plan}} of {{ui:Plaas in model}} om dit te plaas.
6. Om dit weer in ander projekte te gebruik, klik {{ui:Bewaar in my voorwerpe}}. Met verskeie lêers gelees, hou {{ui:Bewaar alles in my voorwerpe}} hulle in een keer.
7. Later, klik {{ui:My voorwerpe}} in die Biblioteek-oortjie om hulle te vind. Hulle word geplaas, uitgeruil en opgedateer soos enige biblioteekitem.

Die lêers word in hierdie oortjie gelees. Niks word opgelaai totdat jy {{ui:Bewaar in my voorwerpe}} kies nie.

## Wat uit elke soort lêer gelees word

| Lêer | Wat jy kry |
|---|---|
| IFC | Elke elementtipe as 'n voorwerp met sy werklike 3D-vorm, IFC-klas en eienskapstelle |
| glTF, GLB, OBJ | Een voorwerp met sy werklike 3D-vorm as 'n net. Stel eers die eenhede en watter kant op is. |
| DWG, DXF | Elke blok as 'n voorwerp met sy plantekening en eienskappe |
| Familielêer (`.rfa`) | Die familie se naam, kategorie, vervaardiger, model, parameters en sy tipes. **Nie sy 3D-vorm nie:** 'n boks van die familie se Breedte, Diepte en Hoogte staan in plaas daarvan. |
| CSV | Een voorwerp per ry: naam, groottes en data, as 'n boks geteken |

## Familielêers en hul 3D-vorm

Die 3D-vorm binne 'n `.rfa`-lêer word in 'n ongedokumenteerde formaat gestoor, so BimCraft lees die familie se data en raai nie sy geometrie nie. Die kaart sê dit: "Geometrie nie uit hierdie familie gelees nie; 'n boks staan in plaas daarvan."

Om 'n familie met sy werklike vorm in te bring, voer dit uit uit die program wat dit gemaak het (Revit):

1. Maak die familie oop, of 'n projek waarin die familie geplaas is.
2. Kies **Lêer > Voer uit > IFC**. Sien [die uitvoerinstellings wat hier die beste oopmaak](topic:rvt-to-ifc).
3. Lees die `.ifc`-lêer in BimCraft met {{ui:Lêers…}}. Elke familietipe kom as sy eie voorwerp, met sy vorm en eienskapstelle.

Baie vervaardigers bied 'n IFC- of DWG-aflaai langs die familielêer aan. Dié lees direk.

## Familietipes

'n Familie met verskeie tipes kom as een item met 'n {{ui:Variant}}-keuse, een variant per tipe. Elke variant het die waardes wat tussen die tipes verskil, en sy eie boks wanneer die tipe 'n Breedte en 'n Diepte het. 'n Familie met een tipe is 'n gewone item wat met daardie tipe se waardes gevul is.

Sommige families hou hul tipes in 'n tipekatalogus: 'n `.txt`-lêer met dieselfde naam langs die familielêer. Kies albei saam, of kies die vouer, en die katalogus se rye word die variante.

## 'n Familie se data op 'n werklike vorm

As 'n vouer 'n familielêer en 'n IFC-, glTF- of OBJ-lêer met dieselfde naam hou (`Chair.rfa` en `Chair.ifc`), kies albei saam of kies die vouer. BimCraft maak een item: die familielêer gee die naam, vervaardiger, model, parameters en tipes, en die ander lêer gee die werklike 3D-vorm. Die notas sê uit watter lêer die vorm kom. Een vorm word vir elke tipe gebruik.

Wanneer 'n familielêer 'n prent daarin gestoor het, wys die item se besonderhede daardie prent onder die plantekening. Die prent word net daar gewys; dit word nie by die item gehou nie.

## My voorwerpe

{{ui:My voorwerpe}} is jou eie private lys in die Biblioteek. Net jy kan sien wat daarin is: dit is nie in die openbare biblioteek, nie in soektog nie, en word nie aan jou span gewys nie. Dit volg jou rekening, so dieselfde voorwerpe is op 'n ander rekenaar daar sodra jy by die biblioteek aanmeld.

- Jy moet by die biblioteek aangemeld wees om 'n voorwerp te hou. Sien [meld by die biblioteek aan](topic:library-credits).
- Om 'n voorwerp te hou stuur daardie een voorwerp na jou rekening. Tot dan bly dit op jou rekenaar.
- {{ui:Verwyder uit my voorwerpe}} haal 'n voorwerp uit die lys. Kopieë wat reeds in tekeninge geplaas is, bly.
- Om 'n voorwerp met almal te deel, laai dit eerder na die openbare biblioteek op, onder 'n lisensie wat jy kies.

:::note
My voorwerpe word getoets en is dalk nog nie vir jou rekening oop nie. As die bron ontbreek, of dit sê "My voorwerpe is nog nie vir hierdie rekening oop nie", kan jy steeds jou eie lêers met {{ui:Lêers…}} lees en plaas; hulle word binne jou model gestoor.
:::

## Algemene foute

- **Verwag die familie se werklike vorm uit 'n `.rfa`.** Slegs die data word gelees. Voer IFC uit vir die vorm.
- **Twee items waar jy een verwag het.** 'n Familie en sy vormlêer word slegs saamgevoeg wanneer hul name presies ooreenstem, behalwe die uitgang, en hulle in dieselfde vouer is.
- **'n Net kom duisend keer te groot aan of lê op sy sy.** Stel {{ui:Eenhede van die lêer}} en {{ui:Opwaartse as van 'n net}} onder {{ui:Lêers…}} voordat jy die lêer kies.
- **"Geen familiedata" op 'n lêer.** Dit is 'n projek (`.rvt` wat met 'n ander uitgang gestoor is) of 'n familiesjabloon, nie 'n familie nie. Sien [Lees 'n projek- of familielêer](topic:read-rvt-file).
- **Hou inhoud wat jy dalk nie mag stoor nie.** Sommige betaalde biblioteke laat nie kopieë buite hul eie diens toe nie. Gaan die voorwaardes na van inhoud wat jy nie self gemaak het nie.

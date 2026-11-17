---
title: Verander 'n tipe-eienskap vir elke element van 'n tipe
summary: Onderskei tipe-eienskappe van instansie-eienskappe, verander 'n waarde op die tipe sodat elke element volg, en kontroleer dat een element se eie wysiging sy eie bly.
keywords: tipe, instansie, tipe-eienskappe, familietipe, gedeel, kopie-by-skryf, alle elemente, massa-wysiging, vervaardiger, model
from: bffd8789
---

## Wat jy sal doen

Stel die vervaardiger op 'n deurtipe sodat elke deur van daardie tipe dit wys, en gee dan een deur sy eie brandgraad sonder om die ander aan te raak. Dit wys die verskil tussen tipe- en instansie-eienskappe in BimCraft.

## Tipe of instansie?

- 'n **Instansie**-eienskap behoort aan een element: sy etiket, sy merk, sy kamer, sy eie brandgraad.
- 'n **Tipe**-eienskap behoort aan die tipe wat baie elemente deel: vervaardiger, model, breedte van 'n deurtipe.

In die {{ui:Eienskappe}}-paneel het stelle wat van die tipe kom " (tipe)" na hul naam en die reël "Tipe-eienskap: 'n verandering hier geld vir elke element van hierdie tipe." Elke ander stel behoort aan die element self. **Tipe** in die eerste blok wys die tipe se naam.

## Stappe: verander die tipe

1. Maak 'n IFC-model oop en klik 'n deur.
2. Let op sy **Tipe** in die eerste blok van die {{ui:Eienskappe}}-paneel, byvoorbeeld "Single-Flush 900 x 2100".
3. Rol na 'n stel wie se naam op "(tipe)" eindig.
4. Klik die waarde wat jy wil verander, byvoorbeeld **Vervaardiger**.
5. Tik die nuwe waarde en druk {{key:Enter}}.
6. Kyk na die {{ui:Veranderinge}}-lys: die inskrywing eindig met "(tipe)".
7. Klik 'n ander deur van dieselfde tipe.
8. Kontroleer dieselfde waarde: dit wys die nuwe waarde ook.

## Stappe: verander net een element

1. Klik een deur.
2. Maak 'n stel oop waarvan die naam nie "(tipe)" het nie, byvoorbeeld `Pset_DoorCommon`.
3. Klik 'n waarde, soos **FireRating**, tik 'n nuwe waarde en druk {{key:Enter}}.
4. Klik die deur langs dit, van dieselfde tipe.
5. Kontroleer dieselfde waarde: dit wys nog die ou waarde.

Selfs al het die uitvoerder daardie eienskapstel tussen albei deure gedeel, het BimCraft die eerste deur sy eie kopie gegee voordat dit verander is. Sien [Waarom jou wysiging net een element verander](topic:edit-ifc-properties#why-your-edit-changes-only-one-element).

## Stoor

1. Klik {{ui:Stoor as IFC}} of druk {{key:Mod+S}}.
2. Maak die gestoorde kopie in BimCraft, of in enige IFC-kyker, oop om albei veranderinge te kontroleer.

## Algemene foute

- **Nie elke model het tipes nie.** Sommige uitvoerders skryf geen tipe-objekte nie, of sit alles op die instansie. Dan is daar geen "(tipe)"-stelle nie, en elke element moet op sy eie verander word.
- **Dieselfde waarde verskyn in 'n tipe-stel en 'n instansie-stel.** Sommige uitvoerders skryf 'n parameter op albei plekke. Ander programme mag een van die twee lees; verander albei as jy wil hê hulle moet ooreenstem.
- **Verwag om "alle deure van hierdie tipe" te kies en saam te wysig.** Daar is geen veelvuldige keuse in hierdie weergawe nie. 'n Tipe-eienskap is die manier om baie elemente op een slag te verander.

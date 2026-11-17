---
title: Vertrekke en vertrekskeidings
summary: Kies 'n vertrek om dit te benoem en te nommer, en lees sy oppervlakte, omtrek en volume. Teken 'n vertrekskeiding waar twee vertrekke raak sonder 'n muur tussen hulle.
keywords: vertrek, vertrekke, vertrekskeiding, skeidingslyn, ruimte, IfcSpace, naam, nommer, oppervlakte, omtrek, volume, oop plan, verdeel 'n vertrek, kombuis en sitkamer, nie omsluit nie
from: d4c1d66b
---

## Wat jy sal doen

Benoem die vertrekke wat die mure maak, en verdeel 'n oop vertrek in twee sonder 'n muur.

## Waar die gereedskap is

- Lintuitlegte: {{ui:Argitektuur}} › **Vertrek en oppervlakte** › {{ui:Vertrek}} en {{ui:Vertrekskeiding}}.
- Klassieke uitleg: die Teken-balk › {{ui:Vertrekke}}-kieslys.
- Enige kieslysstyl: die opdragte heet Vertrek en Vertrekskeiding; die opdragpalet vind hulle.

## Stappe

1. Teken die mure. Elke geslote lus van mure is al 'n vertrek: BimCraft maak dit, nommer dit en gee dit sy oppervlakte soos jy teken.
2. Kies {{ui:Vertrek}}. Beweeg oor die plan: die vertrek onder die aanwyser lig op met sy oppervlakte, omtrek en volume.
3. Om vertrekke vinnig te benoem, tik eers 'n {{ui:Naam}} en 'n {{ui:Nommer}} in die ry, en klik dan in die vertrek. Die nommer tel een op vir die volgende vertrek (101, 102; A-09, A-10).
4. Of klik net 'n vertrek: dit word gekies, en Eienskappe het sy naam, nommer, oppervlakte, omtrek, volume en sy etiket.
5. Om 'n oop vertrek te verdeel, kies {{ui:Vertrekskeiding}} en klik twee punte: muur tot muur, of muur tot 'n ander skeiding. Gaan voort met klik vir 'n ketting; Enter, Esc of 'n dubbelklik beëindig dit.

## Wat 'n skeiding doen

- Dit begrens vertrekke soos 'n muur sonder dikte. Die twee vertrekke se oppervlaktes tel presies op tot die vertrek wat hulle was.
- Die vertrek wat die ou vertrek se middel hou, behou sy naam en nommer. Die ander is nuut.
- 'n Skeiding wat in die oop eindig en aan geen kant iets raak nie, verdeel niks nie. Verleng dit, en dit sal.
- Die deel van 'n skeiding wat binne 'n muur lê, word geïgnoreer, sodat jy na muurmiddellyne kan vasvang.
- Kies 'n skeiding en druk Delete om dit te verwyder: die twee vertrekke word weer een. Ontdoen plaas dit terug.

## As daar geen vertrek is waar jy klik nie

Die statuslyn sê so: die mure sluit nie daar nie. Sluit die gaping, of teken 'n skeiding oor dit. Niks word geweier nie; daar is net nog geen geslote vertrek nie.

## In die IFC

'n Vertrek is 'n IfcSpace met sy nommer (Name), naam (LongName) en Qto_SpaceBaseQuantities: NetFloorArea, NetPerimeter, Height, NetVolume. Die volume is die oppervlakte maal die hoogte tot die vlak daarbo.

'n Vertrekskeiding is 'n IfcVirtualElement, die entiteit wat IFC het vir 'n grens wat nie gebou is nie. Dit het 'n lyn en geen liggaam nie, so 'n ander program lees geen muur nie en tel niks daarvoor nie.

## Nog nie gebou nie

- Geboë skeidings.
- 'n Vertrek wat 'n skuins plafon volg: die volume is altyd oppervlakte maal die vlakhoogte.
- Ruimtegrensverhoudings (IfcRelSpaceBoundary) word nie geskryf nie, nie vir mure of vir skeidings nie.

Sien ook [Vertrek- en oppervlakte-etikette](topic:room-and-area-tags), [Oppervlaktes en oppervlaktegrense](topic:areas-and-area-boundaries).

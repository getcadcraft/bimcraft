---
title: Kies 'n element en lees sy eienskappe
summary: Klik op enige element in die 3D-model om dit te merk en sy naam, tipe, etiket, GlobalId, eienskapstelle en hoeveelhede te lees.
keywords: eienskappe, kies, klik, element, parameters, eienskapstelle, pset, hoeveelhede, globalid, guid, tipe, inspekteer
from: 43b80aa8
---

## Wat jy gaan doen

Kies elemente in 'n IFC-model en lees alles wat die lêer oor hulle sê: eienskappe, eienskapstelle, tipe-eienskappe en hoeveelhede.

## Stappe

1. Maak 'n IFC-model oop.
2. Klik op 'n element, byvoorbeeld 'n deur. Klik sonder om te sleep: 'n sleep van meer as 'n paar pixels wentel eerder as om te kies.
3. Kyk na die element: dit word blou uitgelig.
4. Kyk na die {{ui:Eienskappe}}-paneel aan die regterkant. Bo-aan is die element se soort (soos "Deur" of "WallStandardCase") en sy naam.
5. Lees die eerste blok: **Naam**, **Tipe**, **Objektipe**, **Etiket**, **Beskrywing**, **GlobalId** en **Lyn**.
6. Rol af na die eienskapstelle. Die eerste drie is oop; klik op die naam van enige ander stel om dit oop te maak.
7. Klik op 'n ander element om daarna oor te skakel.
8. Druk {{key:Esc}}, of klik op leë agtergrond, om die keuse te wis.

## Wat jy behoort te sien

- Die uitgeligte element en sy data aan die regterkant.
- Eienskapstelle in alfabetiese volgorde. Stelle wat van die element se **tipe** kom, het " (tipe)" na hul naam en die nota "Tipe-eienskap: 'n verandering hier geld vir elke element van hierdie tipe."
- Hoeveelheidstelle (soos lengtes, oppervlaktes en volumes) gelys saam met die ander stelle. Hoeveelhede is slegs-lees.
- Waardes wat jy kan verander, lyk soos knoppies. [Verander IFC-eienskappe en stoor 'n gewysigde kopie](topic:edit-ifc-properties) wys hoe.

[Velde van die Eienskappaneel](topic:properties-panel) verduidelik elke veld.

## Toegang tot verborge elemente

1. Om iets binne die gebou te bereik, ontmerk die verdiepings bo dit in die {{ui:Verdiepings}}-lys.
2. Om 'n muur agter 'n vertrekvolume te bereik, skakel {{ui:Ruimtes}} af.
3. Klik op die element.

## Algemene foute

- **Lig 'n bietjie terwyl jy klik.** BimCraft behandel dit as 'n wenteling en kies nie. Hou die muis stil.
- **Verwag eenhede langs getalle.** Waardes word gewys soos in die lêer gestoor, afgerond tot vier desimale, sonder 'n eenheidsimbool. Lengtes in 'n metriese uitvoer is gewoonlik millimeter of meter; kontroleer die uitvoerder se instellings.
- **Soek 'n parameter volgens sy bekende naam.** Uitvoerders hernoem en groepeer parameters in IFC-eienskapstelle soos `Pset_WallCommon`. Kyk deur elke stel; pasgemaakte parameters staan dikwels in 'n stel wat na die uitvoerende program of jou maatskappy genoem is.
- **Verwag 'n soekkassie.** Klik om 'n element te kies; {{key:Mod}}+klik of {{key:Shift}}+klik kies meer, en {{key:Mod+A}} kies elke element wat gewys word. Die {{ui:Elemente}}-lys aan die linkerkant tel elemente net volgens soort; dit is nie klikbaar nie.
- **Kies op 'n projeklêerkaart.** 'n Lêerkaart het geen elemente om te kies nie: "Elementeienskappe benodig die 3D-model. Maak 'n IFC-uitvoer van hierdie lêer oop om hulle te sien."

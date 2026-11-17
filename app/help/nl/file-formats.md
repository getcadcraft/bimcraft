---
title: Wat BimCraft uit elk formaat leest
summary: Precies wat BimCraft leest uit IFC-, project- en familiebestanden, DWG en DXF, en wat het ongemoeid laat.
keywords: formaten, ifc, ifc2x3, ifc4, rvt, rfa, rte, rft, dwg, dxf, dgn, ifczip, versies, compatibiliteit, wat wordt gelezen
from: 9b8dfb4f
---

## IFC

| Gelezen | Details |
|---|---|
| Geometrie | Elk element met een vorm, gekleurd zoals het bestand aangeeft. Ruimten en spaces worden doorzichtig en eerst verborgen getekend |
| Verdiepingen | Bouwlagen in volgorde van hoogte, en welke elementen op elke verdieping staan. Elementen op geen verdieping worden gegroepeerd als "Niet op een verdieping" |
| Elementaantallen | Hoeveel elementen van elke soort (wanden, deuren, vloeren…), getoond in {{ui:Elementen}} |
| Projectgegevens | Projectnaam, lange naam en fase; schema; het exporterende programma, de auteur en de exportdatum uit de koptekst van het bestand |
| Elementgegevens | Naam, type, objecttype, label, beschrijving, GlobalId; elke eigenschapsset en hoeveelheidsset op het element en op zijn type |

Bewerkbaar: naam, objecttype, label, beschrijving en afzonderlijke eigenschapswaarden. Opgeslagen als een nieuw IFC-bestand. De schema's IFC2X3, IFC4 en IFC4X3 openen; ze worden gelezen door de eigen IFC-engine van BimCraft. Alles wat het nog niet kan tekenen, staat onder **Nog niet getekend** in het paneel {{ui:Bestand}}. Het model wordt bij het openen naar de oorsprong verplaatst, dus een model dat ver daarvandaan staat, verschijnt toch in het midden van het scherm. `.ifczip` en `.ifcxml` openen niet.

## Project- en familiebestanden

`.rvt`-projecten, `.rte`-projectsjablonen, `.rfa`-families en `.rft`-familiesjablonen.

| Gelezen | Details |
|---|---|
| Bestandsinformatie | Release en build, worksharing, pad van het centrale model, laatst opgeslagen pad, gebruikersnaam, taal, document-GUID |
| Projectinformatie | De eigen velden van het project (naam, nummer, opdrachtgever, adres, status…), zonder standaardwaarden voor nieuwe projecten |
| Familie-informatie | Familienaam, categorie, release, laatste wijziging, en de parameters per groep |
| Koppelingen | De lijst met gekoppelde modellen, CAD-koppelingen, afbeeldingen en keynote-tabellen waarnaar het bestand verwijst |
| Voorbeeldafbeelding | De miniatuur die in het bestand is opgeslagen |

Niet gelezen: het 3D-model, elementen, weergaven, bladen en staten. Die staan in een niet-gedocumenteerd formaat. BimCraft leest slechts enkele tientallen kilobytes uit elk bestand, dus de bestandsgrootte maakt nauwelijks uit.

## .pln-, .pla-, .tpl- en .bpn-projectbestanden

Nog niet gelezen: BimCraft zegt dat wanneer u er een opent. Exporteer IFC voor het model en DWG voor de tekeningen; zie [Open .pln- en .pla-projectbestanden](topic:pln-project-files).

## DWG en DXF

| Gelezen | Details |
|---|---|
| Ruimten | Modelruimte en elk blad (indeling), in de volgorde van de tabs |
| Viewports | De viewports van elk blad, met hun schaal, draaiing en bevroren lagen |
| Lagen | Naam, kleur, aan/uit, bevroren, plotvlag en lijndikte |
| Objecten | Lijnen, polylijnen, bogen, cirkels, ellipsen, splines, arceringen en volumes, tekst en meerregelige tekst, blokken en attributen, maatvoering, leiders en multileiders, tabellen, punten, afbeeldingen |
| Gekoppelde tekeningen | Getekend waar ze zijn ingevoegd, als hun bestanden gevonden worden |
| Afbeeldingen | Getekend uit de afbeeldingsbestanden als ze gevonden worden (PNG, JPEG, GIF, BMP, WebP; geen TIFF) |
| Apparatuurlabels | Itemlabels voor foodservice (`KCL-ITEM`-attributen), voor de apparatuurstaat |

Alles anders wordt geteld onder **Nog niet getekend**, nooit geraden. De DWG-formaten van AutoCAD 2000 tot 2018 zijn gecontroleerd. R13- en R14-bestanden worden ook geaccepteerd, maar er waren er geen in de testset; oudere DWG's openen niet. Het paneel {{ui:Tekening}} toont de formaatcode, zoals AC1032. DXF-bestanden van elke versie openen, ook R12. Beide worden gelezen door de eigen lezers van BimCraft, in dit tabblad. Er wordt niets teruggeschreven naar DWG of DXF.

## In een map

| Soort | Extensies | In het rapport |
|---|---|---|
| Modellen | `.rvt` `.rfa` `.rte` `.rft` | Gegroepeerd met genummerde back-ups, gezondheidscontrole, modelkaart gelezen, koppelingen gecontroleerd |
| IFC | `.ifc` | Vermeld; opent in 3D |
| CAD | `.dwg` `.dxf` `.dgn` | Vermeld met de modellen die ze koppelen; DWG en DXF openen in 2D, DGN niet |
| Restanten | `.dwl` `.dwl2` `.bak` `.err` `.log` `.tmp` `.sv$` `.ac$` `.lck` `.slog` | Vermeld onder **Opzij gezet** |
| Beheermappen | `*_backup`, `*_log`, `Revit_temp`, verborgen mappen | Vermeld onder **Opzij gezet**, niet gelezen |

Zie [Mapoverzicht: rollen, statussen en koppelingen](topic:folder-roles).

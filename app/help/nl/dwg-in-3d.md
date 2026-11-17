---
title: Een DWG- of DXF-tekening in 3D bekijken
summary: Zet de modelruimte van een tekening op 3D om hoogtes, dikte, 3D-vlakken, meshes en blokken te zien, eromheen te draaien, op een object te klikken om zijn eigenschappen te zien, en te zien wat nog niet getekend wordt.
keywords: 3d, dwg, dxf, tekening, modelruimte, draaien, doorsnede, snede, afknippen, selecteren, eigenschappen, attributen, handle, hoogte, dikte, extrusie, 3dface, polyface, mesh, 3d-polylijn, blokken, weergaven, perspectief, parallel, omvang, acis, solids
from: a0c6cd17
---

## Wat u gaat doen

Bekijk de modelruimte van een tekening in 3D. Lijnen en polylijnen staan op hun echte hoogte, objecten met een dikte staan rechtop als wanden, en 3D-vlakken, meshes en 3D-blokken tonen als oppervlakken waar u omheen kunt draaien. De bladen blijven 2D.

## Stappen

1. Open een DWG of DXF. Zie [Een DWG- of DXF-tekening bekijken](topic:view-dwg). Hij opent in 3D, tenzij {{ui:Instellingen}} › {{ui:BimCraft}} › **Tekeningen openen in** op {{ui:Model (2D)}} staat.
2. Klik vanuit 2D op {{ui:3D}} in de balk boven de tekening, of druk op {{key:3}}.
3. Wacht even de eerste keer: de statusregel zegt "Tekening wordt in 3D opgebouwd…", daarna hoeveel lijnen en vlakken er getoond worden.
4. Draai, verschuif en zoom (zie de tabel hieronder).
5. Klik op een weergave in de tweede balk: {{ui:Iso}}, {{ui:Boven}}, {{ui:Onder}}, {{ui:Voor}}, {{ui:Achter}}, {{ui:Links}} of {{ui:Rechts}}.
6. Klik op {{ui:Perspectief}} om te wisselen tussen een perspectiefweergave en een parallelle weergave.
7. Klik op {{ui:Omvang}} of druk op {{key:F}} om de hele tekening weer te zien.
8. Klik nogmaals op {{ui:3D}}, druk op {{key:3}}, of klik op {{ui:Model}} of een bladtab om terug naar 2D te gaan.

## Wat u zou moeten zien

- Modelruimte in 3D, Z omhoog, in de eigen kleuren van de tekening. Vlakken zijn een tint lichter dan hun randen.
- Lagen die u in {{ui:Lagen}} uitzet, verdwijnen ook uit de 3D-weergave.
- Rechts: het aantal lijnen en vlakken, de omvang van de tekening in X, Y en Z, **Alleen in de 2D-weergave** en **Nog niet getekend**.

## Doorsnijden met een snijvlak

Klik op {{ui:Doorsnede}} op de 3D-balk, of druk op {{key:X}}. De balk eronder werkt zoals bij IFC-modellen (zie [Een IFC-model doorsnijden met een snijvlak](topic:section-plane)): snijd vanaf {{ui:Boven}}, {{ui:Voor}} of {{ui:Zijaanzicht}}, sleep of typ de verschuiving (hier in de eigen eenheden van de tekening) en gebruik {{ui:Omdraaien}} om de andere kant te houden. Wat het vlak wegsnijdt, kan niet worden geselecteerd. Terug naar 2D haalt de snede weg.

## Eigenschappen van een object bekijken

Klik op een object in de 3D-weergave. Het krijgt de selectiekleur, en {{ui:Eigenschappen}} toont wat het bestand erover zegt: het type, de laag, kleur, lijntype en handle, daarna de eigen gegevens, zoals het begin, eind en de lengte van een lijn, het middelpunt en de straal van een cirkel, de hoekpunten van een 3D-vlak, of het blok, het invoegpunt, de schaal, de rotatie en de attribuutwaarden van een blokverwijzing.

- Een blokverwijzing wordt als geheel geselecteerd, de blokken die erin genest zijn ook.
- Een klik op een paar pixels van een lijn selecteert de lijn.
- Houd {{key:Mod}} ingedrukt en klik om meer objecten te selecteren, of om er een uit de selectie te halen; {{ui:Eigenschappen}} telt ze dan per type.
- {{key:Esc}}, of een klik op lege ruimte, heft de selectie op.
- Objecten op lagen die u hebt uitgezet, kunnen niet worden geselecteerd.

## Rondbewegen

:::mouse
| Naar | Doe dit |
|---|---|
| Draaien | Sleep met de middelste knop, of met de linkerknop |
| Verschuiven | Sleep met de rechterknop, of houd {{key:Shift}} ingedrukt en sleep |
| Zoomen | Scroll het wiel; het zoomt naar wat onder de aanwijzer staat |
| Alles zien | {{ui:Omvang}} of {{key:F}} |
| Vanaf een zijde kijken | Klik op een vlak, rand of hoek van de weergavekubus in de rechteronderhoek |
:::

De weergavekubus kan in {{ui:Instellingen}} worden vervangen door een assenpictogram, of verborgen worden. Zie [BimCraft-instellingen](topic:settings).

:::mac mouse
Op een touchpad: veeg met twee vingers om te draaien, houd {{key:Shift}} ingedrukt en veeg om te verschuiven, en knijp om te zoomen.
:::

:::touch
Sleep met één vinger om te draaien. Knijp met twee vingers om te zoomen, en verplaats ze samen om te verschuiven.
:::

## Wat er in 3D getekend wordt

| In de tekening | In 3D |
|---|---|
| Lijnen, 3D-polylijnen | Op hun echte hoogte |
| Polylijnen, cirkels, bogen, ellipsen | In hun eigen vlak, op hun peil, gekanteld wanneer de tekening ze kantelt |
| Dikte op lijnen, polylijnen, cirkels en bogen | Wanden van die hoogte; cirkels zijn boven en onder gesloten |
| 3D-vlakken, polyface-meshes, polygon-meshes | Gearceerde oppervlakken met hun zichtbare randen |
| Blokken | Geplaatst, gedraaid en geschaald in 3D, ook geneste blokken |
| Arceringen | Hun omtrekken |
| Gewone 2D-lijnwerk | Plat, waar het getekend is |

## Alleen in de 2D-weergave

Tekst, meerregelige tekst en de zichtbare attributen van blokken worden in 3D getekend, in hun eigen vlak op hun eigen hoogte, en een klik erop selecteert ze. Brede polylijnen tonen hun breedte als een vlakke band. Multileiders, afbeeldingen en arceringspatronen tellen mee onder **Alleen in de 2D-weergave**: bekijk ze op het tabblad {{ui:Model}} of op de bladen.

## Nog niet getekend

Solids en oppervlakken die als ACIS-lichamen zijn opgeslagen (3D-solids, lichamen, regio's en oppervlakken) en subdivisie-meshes staan onder **Nog niet getekend**, met hoeveel er zijn. Ze worden overgeslagen, niet geraden.

## Veelgemaakte fouten

- **Alles lijkt plat.** De tekening is 2D: de lijnen hebben geen hoogte. Klik op {{ui:Voor}} om dat te controleren; een platte tekening toont als een lijn.
- **Een solid-model toont niets.** Solids gemaakt met een solid-modeler zijn ACIS-lichamen, die onder **Nog niet getekend** staan. Exporteer het model als IFC of als 3D-vlakken uit het programma dat het maakte.
- **De tekening is een klein cluster in het midden.** Iets ver weg in de modelruimte, zoals een oude kopie van een plattegrond, maakt de omvang groot. Zoom met het wiel in op het deel waar u naar wilt kijken.

## Volgende

- [Werken met lagen en bladen](topic:dwg-layers-sheets)
- [Een IFC-model doorsnijden met een snijvlak](topic:section-plane)

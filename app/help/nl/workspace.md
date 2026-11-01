---
title: Het BimCraft-scherm
summary: Een rondleiding langs elke balk, elk paneel en elke knop, met de naam zoals die op het scherm staat, en hoe het scherm per soort bestand verandert.
keywords: scherm, indeling, panelen, werkbalk, interface, ui, rondleiding, eigenschappenpaneel, browser, appbalk
from: 2eb01ec2
---

Het BimCraft-scherm heeft bovenaan een balk en daaronder drie gebieden: links een paneel, in het midden het podium en rechts het paneel {{ui:Eigenschappen}}. Wat er in elk gebied staat, hangt af van wat u hebt geopend: een IFC-model, een project- of familiebestand, een tekening of een map.

## De appbalk

De smalle balk bovenaan hoort bij de CadCraft-site, niet bij BimCraft zelf. Van links naar rechts:

- Het CadCraft-merkteken: gaat naar de CadCraft-startpagina.
- De naam van de app en een versiemenu. In de staff-build toont het welke build u gebruikt en kunt u overschakelen naar een uitgebrachte versie.
- {{ui:Over BimCraft}}: de pagina van de app op de site.
- {{ui:Instellingen}}: de eigen instellingen van BimCraft en de instellingen die alle apps delen. Zie [BimCraft-instellingen](topic:settings).
- {{ui:Volledig scherm}}: schakelt tussen de schermmodi. Zie hieronder [Schermmodi](topic:workspace#screen-modes).
- {{ui:Papier}} en {{ui:Model}}: het lichte en het donkere thema. De 3D-weergave en de 2D-tekeningen volgen het thema dat u kiest.

## Het linkerpaneel

Het linkerpaneel begint altijd met **Een bestand of map openen**:

- Het neerzetgebied, {{ui:Kies een bestand, of zet hier een bestand of map neer}}. Klik erop om één bestand te kiezen, of zet er een bestand of map op neer (of ergens anders op de pagina).
- {{ui:Een map openen}}: kies een hele projectmap. Zie [Een hele projectmap openen](topic:open-project-folder).
- {{ui:Recente mappen}}: verschijnt in Chrome en Edge nadat u een map hebt geopend met de mapkiezer of door hem neer te zetten. Klik op {{ui:Opnieuw openen}} en de mapnaam om hem opnieuw te openen, of op het kleine × om hem te vergeten.

Daaronder verschijnen gedeelten naarmate ze van toepassing zijn:

| Gedeelte | Wanneer het verschijnt | Wat erin staat |
|---|---|---|
| {{ui:Wijzigingen}} | Een IFC-model is geopend | Uw niet-opgeslagen bewerkingen, nieuwste eerst, met {{ui:Ongedaan maken}} en {{ui:Opslaan als IFC}} |
| {{ui:Bestand}} | Een model of bestandskaart is geopend | Feiten over het bestand: grootte, schema of release, project, auteur, aantal elementen |
| {{ui:Tekening}} | Een DWG of DXF is geopend | Formaat, eenheden, aantallen entiteiten en lagen, bladen, gekoppelde tekeningen, apparatuur |
| {{ui:Map}} | Een map is geopend | Aantallen bestanden en modellen, grootte, gevonden problemen |
| {{ui:Terug naar de map}} | U hebt een bestand uit een map geopend | Keert terug naar het maprapport |
| {{ui:Lagen}} | Een tekening is geopend | Een selectievakje per laag, met {{ui:Alles aan}} en {{ui:Alles uit}} |
| {{ui:Verdiepingen}} | Een IFC-model is geopend | Een selectievakje per verdieping, bovenste verdieping eerst |
| {{ui:Elementen}} | Een IFC-model is geopend | Hoeveel elementen van elke soort het model bevat (de 30 meest voorkomende) |

## Het podium

Het midden van het scherm toont het geopende bestand.

- **Leeg**: "Open een gebouwmodel." met {{ui:Een bestand kiezen}} en {{ui:Een map openen}}, en een korte beschrijving van elk formaat.
- **IFC-model**: de 3D-weergave met bovenaan een werkbalk, in benoemde groepen zoals in de tekenapp CadCraft, met het pictogram van elk gereedschap boven zijn naam: {{ui:Weergave}} ({{ui:Passend maken}}, {{ui:Boven}}, {{ui:Voor}}, {{ui:Zij}}, {{ui:Randen}}, {{ui:Ruimten}}); {{ui:Bewerken}} ({{ui:Ongedaan maken}}, {{ui:Opnieuw}}, {{ui:Kopiëren}}, {{ui:Plakken}} en {{ui:Meer}}, zie [Bibliotheekitems kopiëren, plakken en dupliceren](topic:copy-paste)); {{ui:Model}} ({{ui:Eenheden}} en {{ui:Tekenen}}); {{ui:Bibliotheek}} ({{ui:Bibliotheek}}, {{ui:Apparatuur}}, {{ui:Updates}}, {{ui:Credits}}); {{ui:Controle}} ({{ui:Tonen}}, {{ui:Doorsnede}}, {{ui:Lopen}}, {{ui:Meten}}; zie [Een IFC-model snijden met een snijvlak](topic:section-plane)); en {{ui:Uitvoer}} (renderen, live weergave, VR, exports, verven en opgeslagen weergaven). Met {{ui:Tekenen}} aan heeft de tekenbalk eronder dezelfde opmaak: {{ui:Weergave}} (het niveau en de soort plattegrond), {{ui:Tekenen}}, {{ui:Bewerken}} en {{ui:Bibliotheek}}. In de rechterbenedenhoek staat een weergavekubus. Zie [Een IFC-model openen en in 3D rondkijken](topic:open-ifc-model). Met {{ui:Instellingen}}, {{ui:Algemeen}} kiest u pictogrammen, labels of beide op deze knoppen, toont of verbergt u de groepsnamen, en met een rechtermuisklik op de werkbalk rangschikt u de gereedschappen en groepen. In een laag venster laat de werkbalk de namen onder de pictogrammen weg.
- **Project- of familiebestand**: de bestandskaart, met de voorbeeldafbeelding, projectinformatie en gekoppelde bestanden. Zie [Een project- of familiebestand lezen](topic:read-rvt-file).
- **DWG of DXF**: een rij tabbladen ({{ui:Model}}, dan één per blad, dan {{ui:Apparatuur}} als de tekening getagde apparatuur heeft, {{ui:3D}}, {{ui:Passend maken}} en {{ui:Afdrukweergave}}), de tekening en live X- en Y-coördinaten in een hoek. Zie [Een DWG- of DXF-tekening bekijken](topic:view-dwg) en [Een DWG- of DXF-tekening in 3D zien](topic:dwg-in-3d).
- **Map**: het maprapport, met het vak {{ui:Begin hier}} en tabellen met modellen, koppelingen, IFC-modellen en tekeningen. Zie [Een hele projectmap openen](topic:open-project-folder).

De **statusregel** onderaan het podium vertelt wat BimCraft doet ("Het model wordt gelezen…", "Geometrie wordt opgebouwd: 1200 van 5400 elementen") en, in rood, wat er misging als er iets mislukt. Berichten over succes verdwijnen na een paar seconden.

## Het paneel Eigenschappen

Het rechterpaneel toont:

- Voor een IFC-model: het element waarop u hebt geklikt, met zijn naam, type, tag, GlobalId en elke eigenschapsset. Waarden die u kunt wijzigen, zien eruit als knoppen. Zie [Velden van het eigenschappenpaneel](topic:properties-panel).
- Voor een tekening: hoe u zich verplaatst, de gekoppelde tekeningen en afbeeldingen van de tekening en of elk is gevonden, en een lijst van wat **Nog niet getekend** is.
- Voor een bestandskaart of map: een korte opmerking over wat u hierna kunt openen.

## Op een klein scherm

Is het venster smaller dan een laptopscherm, dan stapelt BimCraft zijn gebieden: bovenaan het podium, daaronder de panelen. Scrol door de pagina om bij de panelen te komen. Op een telefoon vormen ze één kolom, op een tablet twee.

## Schermmodi

De knop {{ui:Volledig scherm}} in de appbalk, of {{key:Ctrl+Shift+F}} op elk platform, schakelt tussen drie modi:

1. Normaal.
2. Volledig scherm, met de balken nog zichtbaar.
3. Volledig scherm met de appbalk verborgen. Beweeg de aanwijzer naar de bovenrand, of tik daar, om hem terug te halen.

Druk op {{key:Esc}} om terug te gaan naar normaal. Browsers zonder ondersteuning voor volledig scherm (zoals op een iPhone) schakelen alleen tussen normaal en verborgen balken.

## Gerelateerd

- [Toetsen en muis](topic:keyboard)
- [Bestanden die BimCraft opent en opslaat](topic:files)

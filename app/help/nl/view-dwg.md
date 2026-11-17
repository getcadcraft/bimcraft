---
title: Een DWG- of DXF-tekening bekijken
summary: Open een DWG of DXF, beweeg door de modelruimte en de bladen, lees coördinaten en zie wat nog niet getekend is.
keywords: dynamische blokken, zichtbaarheidstoestanden, dwg, dxf, cad, tekening, 2d, weergave, viewer, verschuiven, zoomen, modelruimte, papierruimte, indeling, coördinaten, dwg openen
from: 4db3122a
---

## Wat u gaat doen

Open een CAD-tekening, bekijk die in 3D of 2D, beweeg erdoorheen, schakel tussen de modelruimte en de bladen, en lees coördinaten. BimCraft toont DWG- en DXF-tekeningen; het bewerkt of bewaart ze niet. Om er een te wijzigen klikt u op {{ui:Bewerken in CadCraft}}, en de tekening opent in de CAD-tekenapp van CadCraft in een nieuw tabblad.

## Stappen

1. Klik op {{ui:Een bestand kiezen}}, of sleep de tekening naar de pagina.
2. Kies een `.dwg`- of `.dxf`-bestand.
3. Wacht terwijl de statusregel "De tekening wordt gelezen…" zegt. Grote tekeningen duren enkele seconden. Daarna staat er hoe lang het lezen duurde, "renderen…" terwijl de eerste afbeelding wordt getekend, en hoe lang dat duurde.
4. De tekening opent in 3D, de snelste manier om een grote tekening te tonen (zie [Een DWG- of DXF-tekening in 3D bekijken](topic:dwg-in-3d)). Klik op {{ui:Model}} voor de platte 2D-weergave. Om tekeningen altijd in 2D te openen, zet u {{ui:Instellingen}} › {{ui:BimCraft}} › **Tekeningen openen in** op {{ui:Model (2D)}}. Een tekening zonder niets in de modelruimte, of in een browser die 3D niet kan tonen, opent in 2D.
5. Kijk naar de tabbladen boven de tekening: eerst {{ui:Model}}, dan één tabblad per blad, in de eigen volgorde van de tekening.
6. Klik op een bladtabblad om dat blad te zien: het papier, met het model getoond via de viewports.
7. Klik op {{ui:Model}} om terug te keren naar de modelruimte.
8. Beweeg de aanwijzer over de tekening en lees de X- en Y-coördinaten in de hoek.

## Wat u zou moeten zien

- De tekening, gepast in het venster. Kleuren volgen de tekening; witte lijnen (kleur 7) worden getekend in de inktkleur van het thema, en lichte kleuren worden donkerder gemaakt op het lichte thema zodat ze leesbaar blijven.
- Het paneel {{ui:Tekening}} links: bestand, grootte, formaat (bijvoorbeeld "AutoCAD 2018 (AC1032)"), eenheden, aantal entiteiten en lagen, het aantal bladen, en gekoppelde tekeningen en apparatuur als die er zijn.
- De lijst {{ui:Lagen}} links.
- Rechts: hoe u door de tekening beweegt, gekoppelde tekeningen en afbeeldingen, en **Nog niet getekend**.

## Bewegen

:::mouse
| Om | Doe dit |
|---|---|
| Verschuiven | Sleep met een willekeurige muisknop |
| Zoomen | Scroll met het wiel; het punt onder de aanwijzer blijft staan |
| Passend maken | Dubbelklik, druk op {{key:F}} of klik op {{ui:Passend}} |
:::

:::mac mouse
Op een trackpad zoomt scrollen met twee vingers **in en uit**; het verschuift niet. Knijpen zoomt ook. Om te verschuiven, klikt en sleept u.
:::

:::touch
Sleep met één vinger om te verschuiven. Knijpen om te zoomen is voor tekeningen nog niet beschikbaar: tik op {{ui:Passend}} om het hele blad te zien, en gebruik een muis of trackpad om in te zoomen.
:::

## Dynamische blokken

Een dynamisch blok wordt getekend zoals de tekening het toont: elk geplaatst blok in de zichtbaarheidstoestand waarmee de tekening is opgeslagen ("Plan" of "Front", "Single bowl" of "Double bowl"). Rechts somt **Dynamische blokken** elk geplaatst blok in de modelruimte op: hoeveel er zijn geplaatst, welke toestanden ze tonen, en elke toestand die het blok heeft. In {{ui:3D}} klikt u op een geplaatst blok om **Dynamisch blok**, **Getoonde toestand** en **Andere toestanden** in Eigenschappen te zien. BimCraft wisselt de toestanden niet.

## Nog niet getekend

Sommige soorten objecten worden in deze versie niet getekend. Ze worden rechts geteld onder **Nog niet getekend** ("Deze delen van de tekening worden voorlopig overgeslagen, niet geraden."), zodat u weet dat er iets ontbreekt. Lijnen, polylijnen, bogen, cirkels, ellipsen, splines, arceringen en gevulde vlakken, tekst en meerregelige tekst, blokken met attributen, maatvoering, leiders en multileiders, tabellen, afbeeldingen en viewports worden getekend. 3D-vlakken, polyface-meshes en polygoonmeshes worden getekend als hun randen, gezien van bovenaf; schakel naar {{ui:3D}} om ze als oppervlakken te zien.

Een binaire DXF opent niet: BimCraft meldt dat. Sla hem opnieuw op als ASCII-DXF, of als DWG, vanuit het programma waarin hij is gemaakt.

## Veelgemaakte fouten

- **De tekening lijkt leeg.** Sommige lagen kunnen in de tekening zelf uit of bevroren staan; ze beginnen niet aangevinkt in {{ui:Lagen}}. Klik op {{ui:Alles aan}}. Als de status zegt "*naam* is een lege tekening: ze bevat geen lijnen, tekst of blokken.", dan staat er niets in.
- **Een blad toont een leeg kader.** Het blad kan afhangen van gekoppelde tekeningen. Zie [Gekoppelde tekeningen en afbeeldingen vinden](topic:dwg-linked-files).
- **Tekst ziet er iets anders uit.** BimCraft tekent tekst in een smal schreefloos lettertype, niet in de eigen lettertypen van de tekening. Tekst kan daardoor iets breder of smaller zijn dan in het programma waarin hij is gemaakt.
- **"*naam* kon niet worden gelezen. Het bestand is mogelijk beschadigd, of opgeslagen in een indeling die de lezer nog niet verwerkt."** De haakjes aan het eind noemen de formaatcode van het bestand. Sla het op vanuit het programma waarin het is gemaakt als een oudere DWG of als DXF, en probeer het opnieuw.
- **Meten, tekenen of bewerken verwacht.** BimCraft toont tekeningen alleen. Klik op {{ui:Bewerken in CadCraft}} om hetzelfde bestand te openen in de CAD-tekenapp van CadCraft; die bewerkt het en slaat een kopie op als DWG of DXF. Uw oorspronkelijke bestand wordt niet gewijzigd, en gekoppelde tekeningen blijven in BimCraft. De knop verschijnt alleen waar CadCraft voor u open is.

## Volgende

- [Een DWG- of DXF-tekening in 3D bekijken](topic:dwg-in-3d)
- [Werken met lagen en bladen](topic:dwg-layers-sheets)
- [Een tekening controleren in afdrukweergave](topic:print-view)

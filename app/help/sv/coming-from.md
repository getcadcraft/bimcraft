---
title: Från andra BIM- och ritningsprogram
summary: Hur vanor från BIM-program för skrivbordet och DWG-visning motsvarar BimCraft, och de skillnader som gör att folk snubblar.
keywords: byta, flytta, bekant, skrivbords-BIM, familj, parametrar, projektbläddrare, egenskapspalett, vykub, xref, lagerhanterare, skillnader, jämför
from: 2de629af
---

Om du kan Revit känns det mesta i BimCraft igen i orden och främmande i omfånget. Den viktigaste skillnaden: **den här versionen läser och granskar modeller och redigerar IFC-data. Den skapar inte modeller som Revit gör ännu.** Du kan inte rita väggar, placera familjer, skapa vyer eller blad, eller spara en projektfil. Det du kan göra är att öppna nästan vilken byggnadsfil som helst på vilken dator som helst med en webbläsare, se vad den innehåller, kontrollera en hel projektmapp och rätta data i en IFC-modell.

## Vanor som motsvaras

| Om du är van vid | I BimCraft |
|---|---|
| Att öppna en `.rvt` i Revit för att se modellen | BimCraft öppnar `.rvt` som ett filkort: utgåva, projektinformation, länkar, förhandsvisning. För 3D-modellen, exportera IFC och öppna den. [Läs en projekt- eller familjefil](topic:read-rvt-file) |
| Att kontrollera vilken utgåva en fil sparades i innan du öppnar den | Kortet visar ”sparad i Revit …” överst, utan att uppgradera eller ändra filen |
| Projektbläddraren | Ingen bläddrare av vyer och blad. En IFC-modell har listorna {{ui:Våningsplan}} och {{ui:Element}}; en ritning har bladflikar |
| Egenskapspaletten | Panelen {{ui:Egenskaper}} till höger, för elementet du klickade på. IFC-egenskapsuppsättningar i stället för parametergrupper |
| Instansparametrar och typparametrar | Instansegenskapsuppsättningar, och uppsättningar märkta ”(type)”. En typändring gäller för alla element av typen, som i Revit. [Ändra en typegenskap för alla element av en typ](topic:type-vs-instance) |
| Redigera typ | Ingen dialogruta: klicka på ett värde i en ”(type)”-uppsättning och skriv |
| Att markera många element, filter, Markera alla instanser | Ett element i taget. Finns inte ännu |
| Vykuben och navigeringshjulet | En vykub i nedre högra hörnet, fyra knappar ({{ui:Anpassa}}, {{ui:Ovan}}, {{ui:Framsida}}, {{ui:Sida}}) och fri rotation. Inget navigeringshjul |
| Shift och mittendrag för att rotera, mittendrag för att panorera | Vänsterdrag roterar, högerdrag (eller {{key:Shift}} och dra) panorerar, hjulet zoomar. Menystilen {{ui:BIM-menyflik}} växlar till mittendrag för panorering och {{key:Shift}} med mittknappen för rotation. [Menyer, tangenter och mus](topic:menus-keys-and-mouse) |
| Planritningar, sektioner, sektionslådor | Ett {{ui:Sektion}}-plan i taget ({{key:X}}); ingen sektionslåda eller 2D-planritningar. [Skär en IFC-modell med ett sektionsplan](topic:section-plane) |
| Dölj i vy, isolera, synlighet/grafik | {{ui:Våningsplan}} på och av, {{ui:Utrymmen}} och {{ui:Kanter}}. Dölj per element finns inte ännu |
| Rum | IFC-utrymmen, dolda från början. Klicka på {{ui:Utrymmen}} |
| Spara, Spara som, synkronisera med central | {{ui:Spara som IFC}} laddar ner en ny IFC-fil. Originalet ändras aldrig. Ingen central, ingen samredigering |
| Ångra med {{key:Mod+Z}} | Fungerar på IFC-ändringar tills du sparar. [Ändra IFC-egenskaper och spara en redigerad kopia](topic:edit-ifc-properties) |
| Hantera länkar | Öppna projektmappen: varje länk kontrolleras och markeras **I den här mappen**, **Samma namn hittades**, **Biblioteksfil** eller **Inte i den här mappen**. [Öppna en hel projektmapp](topic:open-project-folder) |
| Granskning, eller att öppna en fil för att se om den är skadad | Mapprapporten kontrollerar varje kopia och säkerhetskopia för att se om de är avbrutna, på några sekunder. [Kontrollera en mapp efter skadade kopior](topic:check-folder-health) |
| Att välja rätt fil i en rörig mapp | Rutan {{ui:Börja här}} föreslår en, med skäl |

Om du mest öppnar modeller för att kontrollera dem, som i ett program för modellkontroll eller IFC-visning, välj menystilen {{ui:Visare}}: visnings- och kontrollverktygen kommer först och byggverktygen väntar i en meny. Se [Menyer, tangenter och mus](topic:menus-keys-and-mouse).

## Från visning av DWG-filer

Om du öppnar DWG-filer i AutoCAD eller en DWG-visare:

| Om du är van vid | I BimCraft |
|---|---|
| Modell- och layoutflikar längst ned | Flikar ovanför ritningen: {{ui:Modell}} och en per blad |
| ZOOM Extents, dubbelklicka på hjulet | Dubbelklicka, {{key:F}} eller {{ui:Anpassa}} |
| Panorera med mittknappen | Dra med valfri knapp |
| Lagerhanteraren | Listan {{ui:Lager}}: bocka för att visa, ta bort bocken för att dölja, {{ui:Alla på}} och {{ui:Alla av}} |
| Xref-hanteraren | **Länkade ritningar** till höger, med **Visas** eller **Hittades inte**, och {{ui:Lägg till länkade ritningar…}} |
| Plotförhandsvisning | {{ui:Utskriftsvy}} eller {{key:P}}: svart på vitt med linjetjocklekar. Den skriver inte ut |
| Dataextrahering av blockattribut | Fliken {{ui:Utrustning}} för märkta restaurangritningar, med {{ui:Ladda ner CSV}} |
| Mäta, rita, redigera, spara som | Finns inte i BimCraft. CadCraft-ritappen ritar och redigerar |

## Skillnader som vållar problem

- **Den körs i webbläsaren, och webbläsaren är försiktig med dina filer.** BimCraft kan bara läsa filer och mappar du ger den, genom att välja dem eller dra in dem. Den kan inte öppna en fil av sig själv, och den kan inte skriva över en. Varje sparning är en nedladdning.
- **Inget laddas upp.** Ordet ”upload” i vissa webbläsares mappdialoger är webbläsarens egna ord. Filerna stannar på din dator.
- **IFC är modellformatet.** En projektfil öppnas som ett kort eftersom dess 3D-innehåll inte är dokumenterat. Se IFC som vägen för modeller in i BimCraft.
- **Ändringar sker som kopior vid skrivning.** Att ändra ett elements värde ändrar aldrig dess grannar, även när exportören delade värdet mellan dem. Typegenskaper är det avsiktliga undantaget.
- **Inget projekt, inga vyer.** BimCraft visar en fil i taget och minns ingenting om den när du stänger fliken, utom namnen på senaste mappar i Chrome och Edge.
- **Tangenter på Mac.** Där Revits Windows-genvägar använder Ctrl använder BimCraft {{key:Mod}}: Command på en Mac.
- **Dina musvanor.** Rotation görs med vänsterknappen, inte med Shift och mittknappen, om du inte väljer menystilen {{ui:BIM-menyflik}} eller ställer in knapparna själv i [Menyer, tangenter och mus](topic:menus-keys-and-mouse).

Se [Vad som inte finns ännu](topic:not-built-yet) för vad du kan använda i stället idag.

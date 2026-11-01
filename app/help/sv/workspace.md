---
title: BimCraft-skärmen
summary: En rundtur bland alla fält, paneler och knappar, med deras namn på skärmen, och hur skärmen ändras för varje sorts fil.
keywords: skärm, layout, paneler, verktygsfält, gränssnitt, ui, rundtur, egenskapspanel, webbläsare, appfält
from: 2eb01ec2
---

BimCraft-skärmen har ett fält högst upp och tre områden under det: en panel till vänster, scenen i mitten och panelen {{ui:Egenskaper}} till höger. Vad som visas i varje område beror på vad du öppnade: en IFC-modell, en projekt- eller familjefil, en ritning eller en mapp.

## Appfältet

Det smala fältet högst upp tillhör CadCraft-webbplatsen, inte BimCraft själv. Från vänster till höger:

- CadCraft-märket: går till CadCrafts startsida.
- Appens namn och en versionsmeny. I personalbygget visar den vilket bygge du kör och låter dig byta till en släppt version.
- {{ui:Om BimCraft}}: appens sida på webbplatsen.
- {{ui:Inställningar}}: BimCrafts egna inställningar och de som alla appar delar. Se [BimCraft-inställningar](topic:settings).
- {{ui:Helskärm}}: växlar mellan skärmlägen. Se [Skärmlägen](topic:workspace#screen-modes) nedan.
- {{ui:Papper}} och {{ui:Modell}}: det ljusa och det mörka temat. 3D-vyn och 2D-ritningarna följer temat du väljer.

## Vänstra panelen

Vänstra panelen börjar alltid med **Öppna en fil eller mapp**:

- Släppytan, {{ui:Välj en fil, eller släpp en fil eller mapp här}}. Klicka på den för att välja en fil, eller släpp en fil eller mapp på den (eller var som helst på sidan).
- {{ui:Öppna en mapp}}: välj en hel projektmapp. Se [Öppna en hel projektmapp](topic:open-project-folder).
- {{ui:Senaste mappar}}: visas i Chrome och Edge sedan du öppnat en mapp med mappväljaren eller genom att släppa den. Klicka på {{ui:Öppna igen}} och mappens namn för att öppna den igen, eller på det lilla × för att glömma den.

Under den visas avsnitt allt eftersom de är aktuella:

| Avsnitt | När det visas | Vad som finns i det |
|---|---|---|
| {{ui:Ändringar}} | En IFC-modell är öppen | Dina osparade ändringar, de nyaste först, med {{ui:Ångra}} och {{ui:Spara som IFC}} |
| {{ui:Fil}} | En modell eller ett filkort är öppet | Fakta om filen: storlek, schema eller version, projekt, upphovsperson, antal element |
| {{ui:Ritning}} | En DWG eller DXF är öppen | Format, enheter, antal entiteter och lager, blad, länkade ritningar, utrustning |
| {{ui:Mapp}} | En mapp är öppen | Antal filer och modeller, storlek, problem som hittats |
| {{ui:Tillbaka till mappen}} | Du öppnade en fil från en mapp | Återvänder till mapprapporten |
| {{ui:Lager}} | En ritning är öppen | En kryssruta per lager, med {{ui:Alla på}} och {{ui:Alla av}} |
| {{ui:Våningsplan}} | En IFC-modell är öppen | En kryssruta per våningsplan, översta först |
| {{ui:Element}} | En IFC-modell är öppen | Hur många element av varje slag modellen innehåller (de 30 vanligaste) |

## Scenen

Mitten av skärmen visar den öppna filen.

- **Tom**: "Öppna en byggnadsmodell." med {{ui:Välj en fil}} och {{ui:Öppna en mapp}}, och en kort beskrivning av varje format.
- **IFC-modell**: 3D-vyn med ett verktygsfält längs överkanten, i namngivna grupper som i CadCrafts ritapp, med varje verktygs ikon ovanför dess namn: {{ui:Vy}} ({{ui:Anpassa}}, {{ui:Ovan}}, {{ui:Framsida}}, {{ui:Sida}}, {{ui:Kanter}}, {{ui:Utrymmen}}); {{ui:Redigera}} ({{ui:Ångra}}, {{ui:Gör om}}, {{ui:Kopiera}}, {{ui:Klistra in}} och {{ui:Mer}}, se [Kopiera, klistra in och duplicera biblioteksobjekt](topic:copy-paste)); {{ui:Modell}} ({{ui:Enheter}} och {{ui:Rita}}); {{ui:Bibliotek}} ({{ui:Bibliotek}}, {{ui:Utrustning}}, {{ui:Uppdateringar}}, {{ui:Källor}}); {{ui:Granska}} ({{ui:Visa}}, {{ui:Sektion}}, {{ui:Vandra}}, {{ui:Mät}}; se [Skär genom en IFC-modell med ett sektionsplan](topic:section-plane)); och {{ui:Utdata}} (rendering, liveabild, VR, exporter, målning och sparade vyer). Med {{ui:Rita}} på har Rita-raden under det samma utseende: {{ui:Vy}} (nivån och plantypen), {{ui:Rita}}, {{ui:Redigera}} och {{ui:Bibliotek}}. En ViewCube sitter i det nedre högra hörnet. Se [Öppna en IFC-modell och titta runt i 3D](topic:open-ifc-model). {{ui:Inställningar}}, {{ui:Allmänt}} väljer ikoner, etiketter eller båda på de här knapparna, visar eller döljer gruppnamnen, och högerklicka på verktygsfältet för att ordna dess verktyg och grupper. I ett lågt fönster tappar verktygsfältet namnen under ikonerna.
- **Projekt- eller familjefil**: filkortet, med förhandsbilden, projektinformation och länkade filer. Se [Läs en projekt- eller familjefil](topic:read-rvt-file).
- **DWG eller DXF**: en rad flikar ({{ui:Modell}}, sedan en per blad, sedan {{ui:Utrustning}} när ritningen har taggad utrustning, {{ui:3D}}, {{ui:Anpassa}} och {{ui:Utskriftsvy}}), ritningen och levande X- och Y-koordinater i ett hörn. Se [Visa en DWG- eller DXF-ritning](topic:view-dwg) och [Se en DWG- eller DXF-ritning i 3D](topic:dwg-in-3d).
- **Mapp**: mapprapporten, med rutan {{ui:Börja här}} och tabeller över modeller, länkar, IFC-modeller och ritningar. Se [Öppna en hel projektmapp](topic:open-project-folder).

**Statusraden** längst ned i scenen berättar vad BimCraft gör ("Läser modellen…", "Bygger geometri: 1200 av 5400 element") och vad som gick fel, i rött, när något misslyckas. Meddelanden om lyckade åtgärder tonar bort efter några sekunder.

## Egenskapspanelen

Högra panelen visar:

- För en IFC-modell: elementet du klickade på, med dess namn, typ, tagg, GlobalId och varje egenskapsuppsättning. Värden du kan ändra ser ut som knappar. Se [Fält i egenskapspanelen](topic:properties-panel).
- För en ritning: hur du rör dig, ritningens länkade ritningar och bilder och om var och en hittades, samt en lista över det som **Ännu inte ritat**.
- För ett filkort eller en mapp: en kort anmärkning om vad du kan öppna härnäst.

## På en liten skärm

När fönstret är smalare än en bärbar dators skärm staplar BimCraft sina områden: scenen överst, sedan panelerna under. Rulla sidan för att nå panelerna. På en telefon bildar de en kolumn; på en surfplatta två.

## Skärmlägen

Knappen {{ui:Helskärm}} i appfältet, eller {{key:Ctrl+Shift+F}} på alla plattformar, växlar mellan tre lägen:

1. Normalt.
2. Helskärm, med fälten kvar.
3. Helskärm med appfältet dolt. För pekaren till överkanten, eller tryck där, för att få tillbaka det.

Tryck på {{key:Esc}} för att gå tillbaka till normalt. Webbläsare utan stöd för helskärm (som på en iPhone) växlar bara mellan normalt och dolda fält.

## Relaterat

- [Tangenter och mus](topic:keyboard)
- [Filer som BimCraft öppnar och sparar](topic:files)

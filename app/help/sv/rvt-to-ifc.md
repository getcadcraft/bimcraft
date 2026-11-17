---
title: Från en projektfil till BimCraft via IFC
summary: IFC-exportinställningarna som öppnas bäst i BimCraft (version, egenskapsuppsättningar, basmängder, rum, länkade modeller, koordinater), hur resultatet öppnas och vad exporten behåller.
keywords: export, IFC-export, RVT till IFC, konvertera, 3D, geometri, IFC2X3, IFC4, samordningsvy, referensvy, designöverföringsvy, egenskapsuppsättningar, basmängder, rum, utrymmen, länkade filer, delade koordinater, mätpunkt, projektets basspunkt, inställningar
from: 3efd5fc9
---

## Vad du gör

Gör en projektfil till en IFC-fil som du kan rotera, granska, kontrollera och redigera i BimCraft. BimCraft läser ännu inte 3D-modellen i en `.rvt`-fil, så exporten sker i programmet som skapade filen (Revit); BimCraft öppnar resultatet.

## Steg

1. Öppna projektet i programmet som skapade det. BimCraft-kortet anger vilken version det sparades i.
2. Öppna en 3D-vy som visar det du vill exportera.
3. Välj **Arkiv > Exportera > IFC**.
4. I exportdialogen väljer du en uppsättning (eller **Ändra uppsättning…**) med inställningarna nedan.
5. Välj en mapp och ett filnamn, och exportera.
6. I BimCraft klickar du på {{ui:Choose a file}} och väljer den nya `.ifc`-filen. Länkade modeller som exporterats som egna filer öppnas i samma scen med {{ui:Add a model}}.

## Inställningarna som öppnas bäst här

| Inställning i exportören | Välj | Varför |
|---|---|---|
| IFC-version | **IFC4 Reference View** för att titta, kontrollera och ta ut mängder; **IFC2X3 Coordination View 2.0** när andra behöver IFC2X3 | Båda öppnas fullt ut. **IFC4 Design Transfer View** öppnas också, med exaktare former, men filen blir större och långsammare. |
| Filtyp | **IFC** (vanlig) | BimCraft öppnar inte `.ifczip` eller `.ifcxml`. |
| Fas / synliga element | Den fas du menar, och **Exportera endast element som är synliga i vyn** när du ställt in 3D-vyn för det | Lämnar kvar det du dolt med avsikt. |
| Egenskapsuppsättningar | **Exportera Revit-egenskapsuppsättningar** och **Exportera vanliga IFC-egenskapsuppsättningar** | De blir de egenskapsuppsättningar BimCraft visar i {{ui:Properties}}, och som {{ui:Find}}, {{ui:Color}} och {{ui:Model checks}} använder. |
| Basmängder | **Exportera basmängder** | {{ui:Quantity totals}} och förteckningar använder dem (längder, areor, volymer) i stället för att gissa. |
| Rum och areor | **Exportera rum i 3D-vyer** (eller alternativet Rum / Utrymmen) | Rum kommer som utrymmen: klicka på {{ui:Spaces}} för att se dem. |
| Länkade filer | **Exportera länkade filer som separata IFC** | Varje länk blir en egen fil; öppna dem tillsammans med {{ui:Add a model}} så ligger de på rätt plats. |
| Koordinatbas | **Delade koordinater** (eller mätpunkten) | Filen bär då sin plats på kartan (IfcMapConversion), så att Mät › Plats, kartlager på marken och punktmoln placerade efter kartkoordinater fungerar. Projektets basspunkt håller modellen nära origo, men utan dess plats på kartan. |
| Dela väggar och pelare per nivå | På, när du tar ut mängder per våningsplan | Varje våningsplans del blir ett eget element. |

## Vad du ska se

Modellen i 3D, med våningsplan hämtade från projektets nivåer och projektinformationen i panelen {{ui:File}}. **Exporterad från** anger exportören.

## Vad exporten behåller och vad den inte gör

- **Behålls**: geometri, våningsplan, elementtyper, namn, typer, de flesta parametrar (som egenskapsuppsättningar), basmängder när de begärs, rum som utrymmen och kartplatsen med delade koordinater.
- **Behålls inte**: vyer, blad, annotationer, familjer som redigerbara familjer, arbetsuppsättningar och designalternativ. En IFC-fil är en ögonblicksbild av modellens element, inte av projektet. För bladen exporterar du DWG och öppnar den i 2D-vyn.

## Vanliga misstag

- **Parametrar saknas i BimCraft.** Slå på alternativen för egenskapsuppsättningar ovan och exportera igen.
- **Rum saknas.** Slå på alternativet för rum och klicka sedan på {{ui:Spaces}}.
- **Sparar som `.ifczip`.** Välj vanlig IFC, eller packa upp `.ifczip`-filen.
- **Ingen kartplats.** Exportera med delade koordinater; kontrollera att projektets mätpunkt är satt.
- **Väntar att ändringar ska gå tillbaka.** Ändringar du sparar i BimCraft går till en ny IFC-fil, inte till projektfilen.

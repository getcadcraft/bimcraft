---
title: Öppna .pln- och .pla-projektfiler
summary: Vad BimCraft gör med .pln-, .pla-, .tpl- och .bpn-filer idag, och hur du exporterar IFC och DWG från dem så att modellen och ritningarna öppnas här.
keywords: pln, pla, tpl, bpn, projektfil, arkiv, mall, säkerhetskopia, ifc-export, dwg-export, översättare, zoner, layouter
from: 41fb921d
---

## Vad du gör

Få in ett projekt sparat som `.pln` (projekt), `.pla` (arkiv med dess bibliotek), `.tpl` (mall) eller `.bpn` (säkerhetskopia) i BimCraft. Dessa är Archicads egna filer.

## Vad som öppnas idag

- **Projektfilerna själva öppnas ännu inte.** Deras format är inte publicerat, och BimCraft läser det ännu inte. När du öppnar en sådan säger BimCraft det och hänvisar hit.
- **BimCraft kontrollerar filens första bytes.** Archicad-projekt från version 17 och senare börjar med samma korta signatur, så BimCraft kan med säkerhet säga att en fil är ett Archicad-projekt. En fil med ett Archicad-namn som inte börjar så har troligen bytt namn, är skadad eller kommer från en äldre version. Signaturen skiljer inte projekt, arkiv och mall åt.
- **En IFC-export öppnas fullt ut**: modellen i 3D, våningsplan, zoner som utrymmen, elementdata, egenskapsuppsättningar och klassificeringar, med alla BimCraft-verktyg.
- **En DWG-export öppnas** i 2D-vyn, med dess lager och layouter, och i {{ui:3D}}. För att redigera den, använd {{ui:Edit in CadCraft}} (Redigera i CadCraft).

Eller ta in hela projektet som en zip-fil, med dess vyer, layouter och egenskapsgrupper: se [Öppna ett projektpaket](topic:open-project-bundle).

## Exportera IFC (modellen)

1. Öppna projektet i Archicad.
2. Välj **File > Save As** och välj **IFC** som filtyp.
3. Välj en IFC-översättare (Archicads namn för en uppsättning IFC-exportinställningar). En av **IFC4 Reference View** eller **IFC2X3 Coordination View 2.0** passar BimCraft. IFC4X3 öppnas också.
4. Välj vad som ska exporteras: hela projektet, eller bara de element som syns på de våningsplan du tittar på.
5. Spara, klicka sedan på {{ui:Choose a file}} i BimCraft och välj `.ifc`-filen.

Kontrollera följande i översättarens inställningar innan du exporterar:

- **Zoner**: exportera dem, så kommer rummen som utrymmen. Klicka på {{ui:Spaces}} i BimCraft för att se dem.
- **Egenskaper och klassificeringar**: exportera dem, så visas de i {{ui:Properties}} och kan användas i {{ui:Find}}, {{ui:Color}} och {{ui:Quantity totals}}.
- **Vanlig `.ifc`**, inte `.ifczip` eller `.ifcxml`. BimCraft öppnar bara vanlig `.ifc`.

## Exportera DWG (ritningarna)

1. Öppna planen, sektionen eller layouten du vill ha.
2. Välj **File > Save As** och välj **DWG** som filtyp.
3. Välj en DXF-DWG-översättare och spara.
4. För en hel uppsättning blad: spara layouterna från Layout Book, eller publicera dem som DWG.
5. Öppna `.dwg`-filen i BimCraft. Ritningar som exporten länkar öppnas med den om de finns i samma mapp; se [Länkade ritningar och bilder](topic:dwg-linked-files).

## Felsökning

- **”… är ett Archicad-projekt: dess första bytes säger det.”** Exportera IFC eller DWG enligt ovan och öppna den filen.
- **”… har ett Archicad-namn men börjar inte så.”** Kontrollera var filen kommer ifrån: det kan vara en annan filtyp med nytt namn (försök öppna den under dess riktiga filändelse), en kopia som inte blev klar, eller ett projekt från en version före 17. Öppna den i Archicad om du kan, och exportera sedan IFC eller DWG.
- **Modellen öppnas utan rum.** Zonerna exporterades inte. Aktivera dem i IFC-översättaren och exportera igen.
- **Öppningar är inte utskurna.** BimCraft säger det under **Ännu inte ritat** i panelen {{ui:File}}. Exportera igen; om det kvarstår, öppna modellen i programmet som skapade den och kontrollera öppningarna där.
- **Texten i DWG:n ser annorlunda ut.** Exporten kan behålla typsnitt som BimCraft inte har; BimCraft ritar text med ett enkelt sans-serif-typsnitt.

Se även [Få en projektfil in i 3D via IFC](topic:rvt-to-ifc) och [Vad BimCraft läser från varje format](topic:file-formats).

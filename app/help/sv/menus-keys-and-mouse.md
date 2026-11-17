---
title: Menyer, tangenter och mus
summary: Välj en menystil som passar sättet du redan arbetar på, ge valfritt kommando en egen tangent, flytta kommandon mellan menyer och ange vad hjulet och varje musknapp gör.
keywords: menystil, menyer, menyrad, menyflik, kommandorad, tangentbordsgenvägar, snabbtangenter, tangenter, anpassa, tilldela om, mus, hjul, invertera, zoomriktning, mittknapp, panorera, kretsa, tvåbokstavstangenter, exportera, importera, byta, bekant
from: a424e836
---

BimCrafts kommandon är desamma oavsett hur du når dem. En **menystil** avgör bara var de syns på skärmen, vad de heter där och vilka tangenter som kör dem, så att du kan behålla de vanor du har. Välj en i {{ui:Inställningar}} ({{key:Mod+,}}) › {{ui:BimCraft}} › {{ui:Menyer, tangenter och mus}}; ändringen gäller direkt, och den här webbläsaren minns den.

## De fem stilarna

| Stil | Det här får du |
|---|---|
| {{ui:CadCraft}} | BimCrafts egna verktygsfält och tangenter ({{key:W}} vägg, {{key:D}} dörr, {{key:N}} fönster, {{key:X}} sektion, {{key:F}} anpassa). Utgångsläget. |
| {{ui:Bostadsdesign}} | En menyrad (Fil, Redigera, Bygge, Bibliotek, 3D, CAD, Verktyg, Vy) ovanför en rad byggverktyg, så som bostadsdesignprogram brukar ordna dem. Samma enkeltangenter, plus {{key:Mod+L}} för biblioteket, {{key:F9}} för 3D-vyn, {{key:F10}} för planen och {{key:F11}} för båda. |
| {{ui:BIM-menyflik}} | Flikar med stora knappar (Arkitektur, Infoga, Annotera, Ändra, Vy, Utdata) med en Filmeny och snabbknappar till höger. Tvåbokstavstangenter: {{key:W}} och sedan {{key:A}} för en vägg, {{key:D}} {{key:R}} dörr, {{key:W}} {{key:N}} fönster, {{key:S}} {{key:C}} sektion, {{key:Z}} {{key:F}} anpassa. Mittknappen panorerar; {{key:Shift}} och mittknappen kretsar. |
| {{ui:Klassisk ritning}} | En liten menyflik och en kommandorad, för dem som skriver kommandon: WALL, DOOR, WINDOW, ROOF, U (ångra), ZOOM, SECTION, PLOT, INSERT, HELP. Börja skriva var som helst så går bokstäverna till kommandoraden; {{key:Enter}} kör, {{key:Enter}} när raden är tom repeterar senaste kommandot, {{key:Esc}} rensar det. |
| {{ui:Visare}} | För att öppna och kontrollera modeller snarare än att rita dem: menyerna {{ui:Fil}}, {{ui:Vy}}, {{ui:Visa}}, {{ui:Kontrollera}} och {{ui:Redigera}} över en rad visningsverktyg (anpassa, uppifrån, framifrån, från sidan, sektion, mät, dölj, isolera, genomskinlig, visa alla, vandring). Byggverktygen väntar i menyn {{ui:Modell}} längst bort. Samma tangenter som BimCrafts egen stil. |

Menyerna och menyflikarna visas när en modell är öppen eller du startar en ny byggnad; innan dess öppnar panelen till vänster filer och startar byggnader.

:::tip
En tangent som hör till BimCrafts egen layout men inte till den stil du valt gör ingenting, och statusraden säger vart dess kommando tog vägen (”I BIM-menyflik är Sektion SC”). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} och piltangenterna behåller alltid sin betydelse, och ett pågående verktyg behåller sina egna tangenter: {{key:R}} och {{key:Tab}} när du placerar, {{key:W}} {{key:A}} {{key:S}} {{key:D}} när du går, {{key:H}} med dörr- och fönsterverktygen, siffror när du skriver en längd.
:::

## Gör den till din egen

1. Välj den stil som ligger närmast det du vill ha och klicka sedan på {{ui:Anpassa…}}.
2. På {{ui:Tangenter och menyer}} hittar du ett kommando (sökrutan hjälper till). Klicka på {{ui:Lägg till en tangent}} och tryck på tangenten, eller på två tangenter i rad för en tvåbokstavstangent. Klicka på en tangent för att ta bort den.
3. Med en menyrad eller en menyflik flyttar {{ui:Var det sitter}} kommandot till en annan meny eller panel, eller till {{ui:Bara tangenter}}.
4. På {{ui:Mus}} ställer du in hjulet, knapparna som panorerar planen och vad varje knapp gör i 3D-vyerna.
5. Ge den ett namn och klicka på {{ui:Spara}}.

Om du sparar en inbyggd stil skapas en egen kopia (”Min Bostadsdesign”); den inbyggda ändras aldrig. En tangent som tilldelats två kommandon, eller en som skulle köras innan en tvåbokstavstangent hinner skrivas, visas i rött och måste åtgärdas innan du kan spara.

## Mus

- **Musens hjul**: {{ui:Rulla uppåt zoomar in}} (utgångsläget) eller {{ui:Rulla uppåt zoomar ut}}, och hur snabbt. En nypning på styrplattan zoomar alltid åt det håll fingrarna rör sig.
- **Panorera planen och ritningarna med**: valfri av vänster-, mitt- och högerknappen. {{key:Space}} och dra panorerar också; ett vänsterdrag panorerar bara där ett klick inte skulle välja eller rita.
- **Dra i 3D-vyerna**: {{ui:Varje vys egen}} behåller BimCrafts knappar (vänster kretsar, höger panorerar). Eller ställ in varje knapp på kretsa, panorera, zooma eller ingenting; {{key:Shift}} tillsammans med knappen byter kretsa och panorera. Ett klick utan drag väljer fortfarande.

## Ta med den

{{ui:Exportera}} sparar stilen i bruk som en liten `.ccinput.json`-fil; {{ui:Importera…}} lägger till en, från en annan dator eller från en kollega. En importerad fil kan bara peka på BimCrafts egna kommandon: allt annat i den (ett kommando den här versionen saknar, en tangent som inte fungerar här) utelämnas och räknas i statusraden. {{ui:Ta bort den här stilen}} tar bort en av dina egna.

:::note
Inställningarna stannar i den här webbläsaren. {{ui:Använd den här stilen i alla appar}} under stilkorten gör att varje app öppnas i sin motsvarande stil (sin egen verktygsrad, en menyrad, en menyflik eller Klassisk ritning; {{ui:Visare}} finns bara i BimCraft och har ingen motsvarighet någon annanstans), med de ändringar du gjort i varje app; en app utan motsvarande stil behåller sin egen. Om du väljer en annan stil i en app ändras bara den appen.
:::

Se även: [Tangentbord och mus](topic:keyboard) · [BimCraft-inställningar](topic:settings) · [Byte från andra BIM- och ritprogram](topic:coming-from)

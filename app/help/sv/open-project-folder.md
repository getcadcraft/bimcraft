---
title: Öppna en hel projektmapp
summary: Peka BimCraft på en projektmapp för att se alla modeller, deras säkerhetskopior och länkar på en gång, och låt rutan Börja här föreslå vilken fil du ska arbeta med.
keywords: mapp, katalog, projektmapp, nätverksenhet, server, börja här, vilken fil, säkerhetskopior, länkar, externreferenser, xrefs, senaste mappar, dra mapp
from: 16fbdce2
---

## Vad du gör

Öppna en hel projektmapp, till exempel den du fick för ett uppdrag, och låt BimCraft reda ut den: vilka modeller som finns, vilka kopior som är säkerhetskopior, vad som länkar till vad, vilka filer som är skadade och vilken fil du troligen vill öppna.

Bara de få kilobyte som varje modellkort behöver läses, så en mapp på en nätverksenhet eller en synkad molnmapp fungerar.

## Steg

:::chromium
1. Klicka på {{ui:Öppna en mapp}} till vänster (eller mitt på den tomma skärmen).
2. Välj projektmappen i fönstret som öppnas och klicka på **Välj** (eller **Ladda upp** eller **Öppna**, beroende på ditt system).
3. Klicka på **Visa filer** när webbläsaren frågar ”Tillåt att webbplatsen visar filer?”. Det låter bara fliken läsa mappen; ingenting laddas upp.
4. Vänta medan statusraden räknar: ”Listar mappen: … filer”, sedan ”Kontrollerar Revit-filer: … av …”.
:::

:::firefox
1. Klicka på {{ui:Öppna en mapp}} till vänster (eller mitt på den tomma skärmen).
2. Välj projektmappen i fönstret som öppnas och bekräfta. Firefox kan be dig bekräfta att sidan får läsa mappens filer; de stannar ändå på din dator.
3. Vänta medan statusraden säger ”Läser mappen: … filer”, sedan ”Kontrollerar Revit-filer: … av …”.
:::

:::safari
1. Klicka på {{ui:Öppna en mapp}} till vänster (eller mitt på den tomma skärmen).
2. Välj projektmappen i fönstret som öppnas och klicka på **Ladda upp**. Trots ordet lämnar ingenting din Mac: filerna överlämnas bara till fliken.
3. Vänta medan statusraden säger ”Läser mappen: … filer”, sedan ”Kontrollerar Revit-filer: … av …”.
:::

Du kan också **dra mappen** från {{pick:mac=Finder|windows=Utforskaren|linux=din filhanterare}} till sidan. En dragen mapp öppnas utan någon behörighetsfråga i alla webbläsare.

## Vad du bör se

Mapprapporten fyller mitten:

- Mappens namn, antal modeller, CAD-ritningar, IFC-modeller och filer, samt den totala storleken.
- Röda eller gula anteckningar om några filer är ofullständiga eller om några länkade filer saknas i mappen.
- Rutan {{ui:Börja här}}: filen BimCraft föreslår att du öppnar, med skälen.
- **Modeller**: en rad per modell, med dess säkerhetskopior grupperade under sig.
- **Länkade och refererade filer**, **IFC-modeller**, **CAD-ritningar** och **Åsidosatta**, när mappen har några.

Till vänster sammanfattar panelen {{ui:Mapp}} allt; **Problem** säger ”Inga” när varje kopia är felfri.

## Använd rutan Börja här

Rutan anger en fil och säger varför, till exempel:

- ”Senast sparade arbete i den här mappen (3 mars 2025).”
- ”*Consultant.rvt* är länkad in i andra modeller, så den är bakgrund och inte filen att redigera.”
- ”*Tower.rvt* ser ut som det självklara valet, men den är skadad; dess senaste fungerande kopia är från …”
- ”Det här är en central modell: i Revit, öppna den med ”Create New Local” och arbeta i den lokala kopian.”

1. Läs skälen.
2. Klicka på {{ui:Öppna dess kort}} för att läsa filens kort, eller på {{ui:Visa den i listan}} för att hitta dess rad i **Modeller**.
3. Kontrollera med den som senast arbetade i projektet innan du litar på den. Rutan säger det också: den är en kvalificerad gissning utifrån namn, datum och länkar.

## Öppna filer från rapporten

1. Klicka på en modells namn för att öppna dess kort. Kortet kontrollerar varje länk mot mappen.
2. Klicka på {{ui:Tillbaka till}} och mappens namn överst på kortet (eller {{ui:Tillbaka till mappen}} till vänster) för att gå tillbaka.
3. Klicka på valfri IFC-fil under **IFC-modeller** för att öppna den i 3D.
4. Klicka på valfri DWG eller DXF under **CAD-ritningar** för att öppna den i 2D. Dess länkade ritningar och bilder hittas i mappen automatiskt.

## Öppna mappen igen senare

:::chromium
Mappar du öppnade med {{ui:Öppna en mapp}} eller genom att dra dem listas till vänster under {{ui:Senaste mappar}}. Klicka på {{ui:Öppna igen}} och mappens namn för att öppna den igen utan att välja den. Efter att webbläsaren startats om frågar Chrome eller Edge en gång till; välj ”Tillåt vid varje besök” för att sluta få frågan. Listan sparas bara i den här webbläsaren och skickas aldrig någonstans. Klicka på × för att glömma en mapp.
:::

:::firefox safari
Den här webbläsaren kan inte komma ihåg mappar mellan besök. Välj mappen igen med {{ui:Öppna en mapp}}, eller dra in den.
:::

## Vanliga misstag

- **Att välja en mapp som är för stor.** Över 20 000 filer: ”Den här mappen har fler än 20 000 filer. Välj en mindre mapp, till exempel ett projekt.” Välj projektmappen, inte hela enheten.
- **Att välja den överordnade mappen för flera projekt.** Rutan {{ui:Börja här}} väljer då mellan projekten. Välj ett projekt.
- **Revits egna mappar verkar ignorerade.** Mapparna `*_backup`, `*_log` och `Revit_temp` är städmappar och listas under **Åsidosatta**, de läses inte.
- **Att förvänta sig att en modell öppnas i 3D från sitt kort.** En projektfil är bara ett kort. Öppna dess IFC-export.
- **Telefoner och surfplattor.** Många mobilwebbläsare kan inte välja mappar alls. Använd en dator.

Se [Kontrollera en mapp efter skadade kopior, saknade länkar och rester](topic:check-folder-health) och [Mapprapport: roller, status och länkar](topic:folder-roles).

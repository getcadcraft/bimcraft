---
title: Lad en AI-assistent arbejde med din model
summary: Slå assistenter til under Indstillinger, så en assistent på din computer kan finde elementer, læse deres egenskaber, isolere dem i visningen og tegne vægge, døre, vinduer, dæk, niveauer og gitre via CadCraft Studio. Slået fra, indtil du slår det til.
keywords: ai, assistent, mcp, script, automatisering, studio, find elementer, isolér, egenskaber, tilladelser, afbryd, aktivitet, tegn vægge, tilføj døre, tilføj vinduer, niveauer, gitre, dæk, fortryd, gem, kommandolinje, cli, headless, brug med AI-assistenter
from: 66d72742
---

## Hvad du lærer

Sådan lader du en AI-assistent (enhver assistent, der taler MCP) kigge ind i den IFC-model, du har åben, og tegne i den. Du får også at vide, hvad den kan og ikke kan, og hvordan du stopper den.

## Hvad en assistent kan i BimCraft

| Den beder om at | Hvad der sker | Kræver |
|---|---|---|
| Finde elementer | Den får en liste over elementer efter klasse, etage, navn eller egenskabsværdi, som **Søg** gør | Læs |
| Læse egenskaber | Den får ét elements attributter, type, egenskabssæt og mængder, som **Egenskaber** viser dem | Læs |
| Beskrive modellen, liste vægge | Den får niveauerne, vægge, døre, vinduer, rum, dæk, gitre og søjler, og hver vægs ender, type og højde | Læs |
| Isolere, gøre gennemsigtig, skjule eller vise | 3D-visningen ændres, som hvis du havde brugt menuen {{ui:Vis}} | Ændr visningen og tegn |
| Tegne vægge, døre, vinduer, dæk, niveauer eller gitterlinjer | Modellen ændres, som hvis du havde brugt {{ui:Tegn}}-værktøjerne: vægge hænger sammen, og rum, dæk og tage følger med | Ændr visningen og tegn |
| Ændre et navn eller en egenskabsværdi | Ét elements Navn, Beskrivelse, Objekttype eller Mærke, eller én egenskabsværdi. En værdi, det deler med andre elementer, kopieres først til det. En værdi for dets type ændres kun, når assistenten siger det, fordi alle elementer af typen følger med | Ændr visningen og tegn |
| Flytte, slette, ændre vægge, døre og vinduer | Elementer flyttes eller slettes sammen med det, de er placeret i. Vægge tegnet med {{ui:Tegn}}-værktøjerne ændres via deres ender eller type, døre og vinduer via placering, størrelse eller type, og rum og sammenføjninger følger med | Ændr visningen og tegn |
| Opsætte, arrangere og læse en liste | »En dørliste pr. etage med brandklasse og beslag«: assistenten navngiver listen, dens kolonner (en egenskab eller et mærke bliver til en kolonne) og dens gruppering. BimCraft udfylder den fra modellen og lægger den op og tager det, assistenten ikke har angivet, fra kontorets standard. Opsætningen føjes til din liste over **Lister**. Hver linje, den får tilbage, navngiver sine elementer, så den kan vælge dem | Læs for at læse; Ændr visningen og tegn for at gemme en opsætning |
| Eksportere en liste | CSV, Excel eller tabulatorsepareret tekst til indsætning i Google Sheets (intet sendes til Google) | Eksport |
| Læse og sætte rumfinish | Finishtyperne, hvert rums gulv-, væg- og loftsfinish, zoner. Arealer, flisetal og underlagsvolumener kommer så fra finishlisterne | Læs; Ændr visningen og tegn for at sætte |
| Vælge elementer, fortryde sine egne trin | Elementer vælges i visningen, og dets sidste trin tages tilbage | Ændr visningen og tegn |
| Gemme | En ny IFC-fil med alle ændringer, som {{ui:Gem som IFC}} laver den (den oprindelige fil ændres aldrig) | Gem |
| Eksportere USD | De åbne modeller som OpenUSD (.usda, .usdc eller .usdz), som {{ui:USD}} på værktøjslinjen skriver den | Eksport |
| Rendere et billede, køre renderkøen | Et billede af 3D-visningen, som {{ui:Render}}-dialogen laver med dine Render-indstillinger, medmindre den beder om andre. Højkvalitetsbilleder kan også føjes til dialogens kø og renderes ét efter ét (køen kræver WebGPU). Intet i modellen ændres ([Render et billede](topic:render)) | Eksport |

Hver ændring, en assistent laver, er ét trin i **Ændringer**, navngivet »Assistent: …« (for eksempel »Assistent: tilføj 4 vægge«). Så tager {{key:Mod+Z}} hele dens handling tilbage, og du kan se, hvis trin det var. I vinduet kan den ikke åbne filer: du åbner modellen, og den arbejder med den, der er åben.

## Slå den til

Assistenter når BimCraft via CadCraft Studio på din computer. Den almindelige browser har ingen adgang.

1. Åbn {{ui:Indstillinger}} og vælg fanen **BimCraft**.
2. Under **Assistenter** sætter du kryds i **Lad AI-assistenter og scripts bruge BimCraft**.
3. **Læs** er allerede markeret for dig. Sæt også kryds i **Ændr visningen og tegn**, hvis assistenten må isolere og skjule elementer og tegne. Sæt kryds i **Gem**, hvis den må gemme modellen som en ny fil.
4. Forbind assistenten i Studio. Studio viser adressen og de indstillinger, der skal indsættes i assistenten.

## Mens en assistent er forbundet

En note øverst i højre panel siger, hvilken assistent der er forbundet, og hvad den kan. Klik på {{ui:Afbryd}} for at afslutte dens session med det samme. Den skal forbinde igen for at fortsætte.

**Aktivitet** under **Assistenter** i Indstillinger lister hvert kald, assistenten har lavet, nyeste først, med om det lykkedes.

:::tip
Spørg med almindelige ord, for eksempel »isolér de ydre vægge på etage 1«, »hvilke døre mangler brandklasse?« eller »tegn et rum på 6 gange 4 meter på etage 1 med en dør i sydvæggen«. Assistenten finder elementerne og viser dem i din visning, eller tegner dem.
:::

## Uden vindue: scripts og kommandolinjen

De samme tegneværktøjer virker på IFC-filer i mapper, du angiver, uden at et vindue er åbent. CadCraft's MCP-server og kommandolinje kan starte en ny bygning eller åbne en IFC-fil, beskrive den, tilføje vægge, døre, vinduer, dæk, niveauer og gitre, fortryde og gemme den som en ny `.ifc`-fil. Fire flere værktøjer passer til scripts: `ifc_batch` kører op til 200 redigeringstrin som ét (alt eller intet: ét fortryd tager hele batchen tilbage, og et afvist trin fortryder resten og navngiver trinnet). `ifc_describe` lister niveauerne og hver væg med dens døre og vinduer. `ifc_render_png` skriver et fladt skygget kontroløjebillede af modellen (uden materialer, teksturer eller skygger) uden et vindue. `usd_export` skriver `.usda`, `.usdc` eller `.usdz`. På kommandolinjen kører `cadcraft bim script.json --from model.ifc -o out.ifc` et script med trin, og `--usd`, `--png` og `--plan` skriver en USD-fil, et billede eller en plan fra samme kørsel. Du bestemmer, hvilke mapper den må bruge, og om den må ændre eller gemme noget.

## Slå den fra

Fjern krydset i **Lad AI-assistenter og scripts bruge BimCraft**. Hver assistent afbrydes med det samme, og indstillingen gemmes til næste gang.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): arbejdseksempler, hver med de værktøjer, den kalder.
- [Find elementer efter klasse, navn eller egenskab](topic:find)
- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [BimCraft-indstillinger](topic:settings)

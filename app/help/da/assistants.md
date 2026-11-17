---
title: Lad en AI-assistent arbejde med din model
summary: Slå assistenter til i Indstillinger, så en assistent på din computer kan finde elementer, læse deres egenskaber, isolere dem i visningen og tegne vægge, døre, vinduer, gulve, etager og gitre via CadCraft Studio. Slået fra, indtil du slår det til.
keywords: ai, assistent, mcp, script, automatisering, studio, find elementer, isolér, egenskaber, tilladelser, frakobl, aktivitet, tegn vægge, tilføj døre, tilføj vinduer, etager, gitre, gulve, fortryd, gem, kommandolinje, cli, headless, brug med AI-assistenter
from: c5ee595b
---

## Hvad du lærer

Hvordan du lader en AI-assistent (enhver assistent, der taler MCP) kigge ind i den IFC-model, du har åben, og tegne i den, hvad den kan og ikke kan, og hvordan du stopper den.

## Hvad en assistent kan gøre i BimCraft

| Den beder om | Hvad der sker | Kræver |
|---|---|---|
| Find elementer | Den får en liste over elementer efter klasse, etage, navn eller egenskabsværdi, som **Find** gør | Læs |
| Læs egenskaber | Den får ét elements attributter, type, egenskabssæt og mængder, som **Egenskaber** viser dem | Læs |
| Beskriv modellen, list vægge | Den får etagerne, vægge, døre, vinduer, rum, gulve, gitre og søjler, og hver vægs ender, type og højde | Læs |
| Isolér, gør gennemsigtig, skjul eller vis | Den 3D-visning ændrer sig, som hvis du havde brugt menuen {{ui:Vis}} | Ændr visningen og tegn |
| Tegn vægge, døre, vinduer, gulve, etager eller gitterlinjer | Modellen ændrer sig, som hvis du havde brugt værktøjerne under {{ui:Tegn}}: vægge forbindes, og rum, gulve og tage følger med | Ændr visningen og tegn |
| Ændr et navn eller en egenskabsværdi | Ét elements Navn, Beskrivelse, Objekttype eller Mærke, eller én egenskabsværdi. En værdi, den deler med andre elementer, kopieres først for det; en værdi for dets type ændres kun, når assistenten siger det, fordi hvert element af typen følger med | Ændr visningen og tegn |
| Flyt, slet, ændr vægge, døre og vinduer | Elementer flyttes eller slettes sammen med det, de er hostet i; vægge tegnet med værktøjerne under {{ui:Tegn}} ændres efter deres ender eller type, døre og vinduer efter deres placering, størrelse eller type, og rum og forbindelser følger med | Ændr visningen og tegn |
| Opsæt, arrangér og læs en liste | "En dørliste efter etage, med brandklasse og beslag": assistenten navngiver listen, dens kolonner (en egenskab eller et mærke bliver til en kolonne) og dens gruppering; BimCraft udfylder den fra modellen og lægger den op, og det, assistenten ikke har angivet, tager den fra kontorstandarden. Opsætningen føjes til din liste over {{ui:Lister}}. Hver linje, den får tilbage, navngiver sine elementer, så den kan vælge dem | Læs for at læse; Ændr visningen og tegn for at gemme en opsætning |
| Eksportér en liste | CSV, Excel eller tabulatorsepareret tekst til indsætning i Google Sheets (intet sendes til Google) | Eksport |
| Læs og angiv rumfinish | Gulvbeklædningstyperne, hvert rums gulv-, væg- og loftsbeklædning og zoner; arealer, flisemængder og underlagsvolumener kommer derefter fra finishlisterne | Læs; Ændr visningen og tegn for at angive |
| Vælg elementer, fortryd sine egne trin | Elementer vælges i visningen; dets sidste trin tages tilbage | Ændr visningen og tegn |
| Gem | En ny IFC-fil med alle ændringer, som {{ui:Gem som IFC}} laver den (originalen ændres aldrig) | Gem |
| Eksportér USD | De åbne modeller som OpenUSD (.usda, .usdc eller .usdz), som {{ui:USD}} på værktøjslinjen skriver dem | Eksport |
| Render et billede, kør rendér-køen | Et billede af 3D-visningen, som {{ui:Render}}-dialogen laver med dine Render-indstillinger, medmindre den beder om andre; eller billeder i høj kvalitet føjet til dialogens kø og renderet efter hinanden (køen kræver WebGPU). Intet i modellen ændres ([Render et billede](topic:render)) | Eksport |

Hvert trin, en assistent laver, er ét trin i **Ændringer**, navngivet "Assistent: …" (fx "Assistent: tilføj 4 vægge"), så {{key:Mod+Z}} tager hele dens handling tilbage, og du kan se, hvis trin det var. I vinduet kan den ikke åbne filer: du åbner modellen, og den arbejder med den, der er åben.

## Slå den til

Assistenter når BimCraft gennem CadCraft Studio på din computer; den almindelige browser har ingen adgang.

1. Åbn {{ui:Indstillinger}} og vælg fanen **BimCraft**.
2. Under **Assistenter** sæt flueben ved **Lad AI-assistenter og scripts bruge BimCraft**.
3. **Læs** er sat for dig. Sæt også flueben ved **Ændr visningen og tegn**, hvis assistenten må isolere og skjule elementer og tegne, og ved **Gem**, hvis den må gemme modellen som en ny fil.
4. Forbind assistenten i Studio (Studio viser adressen og de indstillinger, der skal indsættes i den).

## Mens en assistent er forbundet

En note øverst i højre panel siger, hvilken assistent der er forbundet, og hvad den kan. Klik på {{ui:Afbryd}} for straks at afslutte dens session; den skal forbinde igen for at fortsætte.

**Aktivitet** under **Assistenter** i Indstillinger lister hvert kald, assistenten foretog, nyeste først, med om det lykkedes.

:::tip
Spørg med almindelige ord, fx "isolér de ydre vægge på etage 1", "hvilke døre mangler en brandklasse?" eller "tegn et 6 gange 4 meter stort rum på etage 1 med en dør i den sydlige væg". Assistenten finder elementerne og viser dem i din visning, eller tegner dem.
:::

## Uden et vindue: scripts og kommandolinjen

De samme tegneværktøjer virker på IFC-filer i mapper, du navngiver, uden at et vindue er åbent: CadCraft's MCP-server og kommandolinje kan starte en ny bygning eller åbne en IFC-fil, beskrive den, tilføje vægge, døre, vinduer, gulve, etager og gitre, fortryde og gemme den som en ny `.ifc`-fil. Du afgør, hvilke mapper den må bruge, og om den må ændre eller gemme noget.

## Slå den fra

Fjern flueben ved **Lad AI-assistenter og scripts bruge BimCraft**. Hver assistent frakobles med det samme, og indstillingen gemmes til næste gang.

## Se også

- [Opskrifter til AI-assistenter](common:assistants-recipes): arbejdseksempler, hver med de værktøjer, de kalder.
- [Find elementer efter klasse, navn eller egenskab](topic:find)
- [Skjul, isolér og gør elementer gennemsigtige](topic:hide-and-isolate)
- [BimCraft-indstillinger](topic:settings)

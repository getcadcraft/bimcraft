---
title: La en AI-assistent jobbe med modellen din
summary: Slå på assistenter i Innstillinger, slik at en assistent på datamaskinen din kan finne elementer, lese egenskapene deres, isolere dem i visningen og tegne vegger, dører, vinduer, dekker, nivåer og rutenett, via CadCraft Studio. Av til du slår det på.
keywords: ai, assistent, mcp, skript, automatisering, studio, finn elementer, isoler, egenskaper, tillatelser, koble fra, aktivitet, tegn vegger, legg til dører, legg til vinduer, nivåer, rutenett, dekker, angre, lagre, kommandolinje, cli, uten vindu, bruk med AI-assistenter
from: 66d72742
---

## Det du lærer

Hvordan du lar en AI-assistent (en hvilken som helst assistent som snakker MCP) se inn i IFC-modellen du har åpen og tegne i den, hva den kan og ikke kan gjøre, og hvordan du stopper den.

## Hva en assistent kan gjøre i BimCraft

| Den ber om | Hva som skjer | Krever |
|---|---|---|
| Finn elementer | Den får en liste over elementer etter klasse, etasje, navn eller egenskapsverdi, slik **Finn** gjør | Les |
| Les egenskaper | Den får ett elements attributter, type, egenskapssett og mengder, slik **Egenskaper** viser dem | Les |
| Beskriv modellen, list vegger | Den får nivåene, veggene, dørene, vinduene, rommene, dekkene, rutenettene og søylene, og hver veggs ender, type og høyde | Les |
| Isoler, gjør gjennomsiktig, skjul eller vis | 3D-visningen endres som om du hadde brukt {{ui:Vis}}-menyen | Endre visningen og tegn |
| Tegn vegger, dører, vinduer, dekker, nivåer eller rutenettlinjer | Modellen endres som om du hadde brukt {{ui:Tegn}}-verktøyene: vegger henger sammen, og rom, dekker og tak følger etter | Endre visningen og tegn |
| Endre et navn eller en egenskapsverdi | Ett elements Navn, Beskrivelse, Objekttype eller Merke, eller én egenskapsverdi. En verdi som den deler med andre elementer, kopieres først for dette elementet. En verdi for elementets type endres bare når assistenten sier det, fordi hvert element av den typen følger med | Endre visningen og tegn |
| Flytt, slett, endre vegger, dører og vinduer | Elementer flyttes eller slettes sammen med det de er vert for. Vegger tegnet med {{ui:Tegn}}-verktøyene endres etter ender eller type, dører og vinduer etter plass, størrelse eller type, og rom og sammenkoblinger følger med | Endre visningen og tegn |
| Sett opp, ordne og les en tabell | «En dørtabell etter etasje, med brannklasse og beslag»: assistenten gir tabellen et navn, dens kolonner (en egenskap eller merkelapp blir en kolonne) og gruppering. BimCraft fyller den fra modellen og legger den opp, og tar det assistenten ikke oppga fra kontorstandarden. Oppsettet havner i listen over tabellene dine. Hver linje den får tilbake navngir sine elementer, slik at den kan velge dem | Les for å lese; Endre visningen og tegn for å lagre et oppsett |
| Eksporter en tabell | CSV, Excel eller tabulatorseparert tekst, til å lime inn i Google Sheets (ingenting sendes til Google) | Eksporter |
| Les og sett romoverflater | Overflatetypene, hvert roms gulv-, vegg- og takoverflate, og soner. Arealer, antall fliser og volum av underlag hentes så fra overflatetabellene | Les; Endre visningen og tegn for å sette |
| Velg elementer, angre egne steg | Elementer velges i visningen, og dets siste steg tas tilbake | Endre visningen og tegn |
| Lagre | En ny IFC-fil med alle endringene, slik {{ui:Lagre som IFC}} lager den (originalen endres aldri) | Lagre |
| Eksporter USD | De åpne modellene som OpenUSD (.usda, .usdc eller .usdz), slik {{ui:USD}} på verktøylinjen skriver dem | Eksporter |
| Render et bilde, kjør rendringskøen | Et bilde av 3D-visningen, slik {{ui:Render}}-dialogen lager det med dine Render-innstillinger, med mindre den ber om andre. Eller bilder av høy kvalitet som legges til dialogens kø og rendres etter hverandre (køen krever WebGPU). Ingenting i modellen endres ([Render bilde](topic:render)) | Eksporter |

Hver endring en assistent gjør, er ett steg i **Endringer**, med navnet «Assistent: …» (for eksempel «Assistent: legg til 4 vegger»). Dermed tar {{key:Mod+Z}} tilbake hele handlingen, og du kan se hvilket steg som var hvem sitt. I vinduet kan den ikke åpne filer: du åpner modellen, og den jobber med den som er åpen.

## Slå den på

Assistenter når BimCraft gjennom CadCraft Studio på datamaskinen din; den vanlige nettleseren har ingen vei inn.

1. Åpne {{ui:Innstillinger}} og velg fanen **BimCraft**.
2. Under **Assistenter** kryss av for **La AI-assistenter og skript bruke BimCraft**.
3. **Les** er allerede avkrysset. Kryss også av for **Endre visningen og tegn** hvis assistenten kan isolere og skjule elementer og tegne, og for **Lagre** hvis den kan lagre modellen som en ny fil.
4. Koble assistenten til i Studio (Studio viser adressen og innstillingene som skal limes inn i den).

## Mens en assistent er tilkoblet

Et notat øverst i høyre panel sier hvilken assistent som er tilkoblet, og hva den kan gjøre. Klikk {{ui:Koble fra}} for å avslutte økten med en gang; den må koble seg til igjen for å fortsette.

**Aktivitet**, under **Assistenter** i Innstillinger, lister hvert kall assistenten gjorde, nyeste først, med om det lyktes.

:::tip
Spør med vanlige ord, for eksempel «isoler de ytre veggene på Nivå 1», «hvilke dører mangler brannklasse?» eller «tegn et 6 ganger 4 meter stort rom på Nivå 1 med en dør i sørveggen». Assistenten finner elementene og viser dem i visningen, eller tegner dem.
:::

## Uten vindu: skript og kommandolinje

De samme tegneverktøyene virker på IFC-filer i mapper du angir, uten at et vindu er åpent. CadCraft sin MCP-server og kommandolinje kan starte en ny bygning eller åpne en IFC-fil, beskrive den, legge til vegger, dører, vinduer, dekker, nivåer og rutenett, angre og lagre den som en ny `.ifc`-fil. Fire flere verktøy passer for skript: `ifc_batch` kjører opptil 200 redigeringssteg som ett (alt eller ingenting: ett angre tar hele satsen tilbake, og et avvist steg angrer resten og sier hvilket steg det var); `ifc_describe` lister nivåene og hver vegg med dens dører og vinduer; `ifc_render_png` skriver et flatt skygget kontrollbilde av modellen (uten materialer, teksturer eller skygger) uten vindu; `usd_export` skriver `.usda`, `.usdc` eller `.usdz`. På kommandolinjen kjører `cadcraft bim script.json --from model.ifc -o out.ifc` et skript med steg, og `--usd`, `--png` og `--plan` skriver en USD-fil, et bilde eller en plan fra samme kjøring. Du bestemmer hvilke mapper den kan bruke, og om den kan endre eller lagre noe.

## Slå den av

Fjern avkryssingen for **La AI-assistenter og skript bruke BimCraft**. Hver assistent kobles fra med en gang, og innstillingen beholdes til neste gang.

## Se også

- [Oppskrifter for AI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
- [Finn elementer etter klasse, navn eller egenskap](topic:find)
- [Skjul, isoler og gjør elementer gjennomsiktige](topic:hide-and-isolate)
- [BimCraft-innstillinger](topic:settings)

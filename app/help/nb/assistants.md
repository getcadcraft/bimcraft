---
title: La en KI-assistent jobbe med modellen din
summary: Slå på assistenter i Innstillinger, slik at en assistent på datamaskinen din kan finne elementer, lese egenskapene deres, isolere dem i visningen og tegne vegger, dører, vinduer, gulv, etasjer og akser, via CadCraft Studio. Av til du slår den på.
keywords: ki, ai, assistent, mcp, skript, script, automatisering, studio, finn elementer, isoler, egenskaper, tillatelser, koble fra, aktivitet, tegn vegger, legg til dører, legg til vinduer, etasjer, akser, gulv, angre, lagre, kommandolinje, cli, uten vindu, bruk med KI-assistenter
from: c5ee595b
---

## Hva du skal lære

Hvordan du lar en KI-assistent (en hvilken som helst assistent som snakker MCP) se inn i IFC-modellen du har åpen og tegne i den, hva den kan og ikke kan gjøre, og hvordan du stopper den.

## Hva en assistent kan gjøre i BimCraft

| Den ber om å | Hva skjer | Krever |
|---|---|---|
| Finn elementer | Den får en liste over elementer etter klasse, etasje, navn eller egenskapsverdi, slik **Finn** gjør | Lese |
| Les egenskaper | Den får ett elements attributter, type, egenskapssett og mengder, slik **Egenskaper** viser dem | Lese |
| Beskriv modellen, list vegger | Den får etasjene, veggene, dørene, vinduene, rommene, gulvene, aksene og søylene, og hver veggs ender, type og høyde | Lese |
| Isoler, gjør gjennomsiktig, skjul eller vis | 3D-visningen endres som om du hadde brukt menyen {{ui:Vis}} | Endre visning og tegne |
| Tegn vegger, dører, vinduer, gulv, etasjer eller akselinjer | Modellen endres som om du hadde brukt verktøyene under {{ui:Tegn}}: vegger møtes, og rom, gulv og tak følger | Endre visning og tegne |
| Endre et navn eller en egenskapsverdi | Ett elements Name, Description, Object type eller Tag, eller én egenskapsverdi. En verdi den deler med andre elementer, kopieres først for den. En verdi for typen endres bare når assistenten sier det, fordi alle elementer av typen følger | Endre visning og tegne |
| Flytt, slett, endre vegger, dører og vinduer | Elementer flyttes eller slettes sammen med det de sitter i. Vegger tegnet med verktøyene under {{ui:Tegn}} endres etter endene eller typen, dører og vinduer etter plassering, størrelse eller type, og rom og skjøter følger | Endre visning og tegne |
| Sett opp, ordne og les en tabell | «En dørtabell etter etasje, med brannklasse og beslag»: assistenten navngir tabellen, dens kolonner (en egenskap eller merkelapp blir en kolonne) og gruppering. BimCraft fyller den fra modellen og legger den ut, og tar fra kontorstandarden det assistenten ikke har oppgitt. Oppsettet havner i listen over tabeller. Hver linje den får tilbake, oppgir elementene sine, så den kan velge dem | Lese for å lese; Endre visning og tegne for å lagre et oppsett |
| Eksporter en tabell | CSV, Excel eller tabulatorseparert tekst å lime inn i Google Sheets (ingenting sendes til Google) | Eksport |
| Les og sett romoverflater | Overflatetypene, hvert rom sitt gulv-, vegg- og takoverflate, og soner. Arealer, antall fliser og volum av underlaget kommer deretter fra overflatetabellene | Lese; Endre visning og tegne for å sette |
| Velg elementer, angre assistentens egne steg | Elementer velges i visningen. Assistentens siste steg tas tilbake | Endre visning og tegne |
| Lagre | En ny IFC-fil med alle endringene, slik {{ui:Lagre som IFC}} lager den (originalen endres aldri) | Lagre |
| Eksporter USD | De åpne modellene som OpenUSD (.usda, .usdc eller .usdz), slik {{ui:USD}} på verktøylinjen skriver dem | Eksport |
| Render et bilde, kjør renderkøen | Et bilde av 3D-visningen, slik {{ui:Render}}-dialogen lager det med dine Render-innstillinger, med mindre den ber om andre. Eller bilder i høy kvalitet lagt til dialogens kø og rendret etter hverandre (køen krever WebGPU). Ingenting i modellen endres ([Render et bilde](topic:render)) | Eksport |

Hver endring en assistent gjør, er ett steg i **Endringer**, og får navnet «Assistent: …» (for eksempel «Assistent: legg til 4 vegger»). Da tar {{key:Mod+Z}} tilbake hele handlingen, og du kan se hvilket steg som var assistentens. I vinduet kan den ikke åpne filer: du åpner modellen, og den arbeider med den som er åpen.

## Slå den på

Assistenter kobler seg til BimCraft via CadCraft Studio på datamaskinen din. Vanlig nettleser har ingen inngang.

1. Åpne {{ui:Innstillinger}} og velg fanen **BimCraft**.
2. Under **Assistenter** krysser du av for **Tillat KI-assistenter og skript å bruke BimCraft**.
3. **Les** er forhåndsvalgt for deg. Kryss også av for **Endre visning og tegne** hvis assistenten skal få isolere og skjule elementer og tegne, og for **Lagre** hvis den skal få lagre modellen som en ny fil.
4. Koble assistenten til i Studio. Studio viser adressen og innstillingene du limer inn i den.

## Mens en assistent er tilkoblet

En merknad øverst i høyre panel sier hvilken assistent som er tilkoblet, og hva den kan gjøre. Klikk {{ui:Koble fra}} for å avslutte økten med en gang. Den må koble seg til på nytt for å fortsette.

**Aktivitet**, under **Assistenter** i Innstillinger, lister hvert kall assistenten gjorde, nyeste først, med om det lyktes.

:::tip
Spør med vanlige ord, for eksempel «isoler de ytre veggene på etasje 1», «hvilke dører mangler brannklasse?» eller «tegn et rom på 6 x 4 meter i etasje 1 med en dør i sørveggen». Assistenten finner elementene og viser dem i visningen, eller tegner dem.
:::

## Uten vindu: skript og kommandolinjen

De samme tegneverktøyene virker på IFC-filer i mapper du angir, uten at et vindu er åpent. CadCrafts MCP-server og kommandolinje kan starte en ny bygning eller åpne en IFC-fil, beskrive den, legge til vegger, dører, vinduer, gulv, etasjer og akser, angre og lagre den som en ny `.ifc`-fil. Du bestemmer hvilke mapper den kan bruke, og om den kan endre eller lagre noe.

## Slå den av

Fjern krysset ved **Tillat KI-assistenter og skript å bruke BimCraft**. Hver assistent kobles fra med en gang, og innstillingen beholdes til neste gang.

## Se også

- [Oppskrifter for KI-assistenter](common:assistants-recipes): arbeidseksempler, hver med verktøyene den kaller.
- [Finn elementer etter klasse, navn eller egenskap](topic:find)
- [Skjul, isoler og gjør elementer gjennomsiktige](topic:hide-and-isolate)
- [BimCraft-innstillinger](topic:settings)

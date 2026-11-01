---
title: Kom i gang med BimCraft
summary: Hva BimCraft gjør i dag, hvordan du åpner den første modellen, ser på den i 3D, endrer en verdi og lagrer en kopi.
keywords: start, første gang, åpne, ifc, rvt, dwg, hurtigstart, innføring, visningsprogram, bim
from: fc2dea19
---

BimCraft er bygningsmodell-appen i CadCraft-familien. I denne versjonen **åpner, leser og kontrollerer** den bygningsfiler, og den **redigerer dataene i IFC-modeller**. Den tegner eller modellerer ikke nye elementer ennå. Tenk på den som et visningsprogram og en kontroll for modeller som også lar deg rette navn, merker og egenskapsverdier i en IFC-fil.

Dette åpner den:

| Fil | Hva du får |
|---|---|
| IFC (`.ifc`) | Hele modellen i 3D: rotering, etasjer, elementegenskaper og redigering av navn og egenskapsverdier |
| Prosjekt- og familiefiler (`.rvt`, `.rfa`, `.rte`, `.rft`) | Et filkort: versjonen filen ble lagret i, prosjektinformasjon, forhåndsvisningsbildet og lenkede filer. Ingen 3D. |
| DWG og DXF | Tegningen i 2D: modellrommet og hvert ark, layer, lenkede tegninger, utskriftsvisning og en utstyrsliste for merkede storkjøkkentegninger |
| En prosjektmappe | En rapport over hver modell i mappen: sikkerhetskopier, lenker, skadde kopier og et forslag til hvilken fil du bør starte med |

Alt skjer i nettleseren, på din egen datamaskin. **Ingenting lastes opp.** Se [Filer BimCraft åpner og lagrer](topic:files) for detaljer.

## Åpne BimCraft

1. Åpne BimCraft i en oppdatert nettleser. Chrome, Edge, Firefox og Safari fungerer alle; [Nettlesere, enheter og minne](topic:platforms) viser forskjellene.
2. Vent på den tomme skjermen som sier «Åpne en bygningsmodell.»

:::note
BimCraft kjører i nettleseren, og på skrivebordet i CadCraft Studio, sammen med de andre appene. Skylagring finnes ikke ennå: du åpner filer fra datamaskinen din og lagrer kopier tilbake dit.
:::

## Åpne den første modellen

Den raskeste måten å se hva BimCraft gjør på er med en IFC-fil.

1. Klikk {{ui:Velg en fil}} midt på skjermen.
2. Velg en `.ifc`-fil i {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} og bekreft.
3. Vent mens statuslinjen nederst på skjermen sier «Starter IFC-motoren…» og deretter «Bygger geometri».

Du skal se modellen i 3D midt på skjermen, et panel {{ui:Fil}} og en liste {{ui:Etasjer}} til venstre, og et tomt panel {{ui:Egenskaper}} til høyre. Statuslinjen ender med «Åpnet» og antall elementer.

:::tip
Du kan også dra en fil fra {{pick:mac=Finder|windows=Filutforsker|linux=filbehandleren}} rett til siden. Skjermen viser «Slipp for å åpne» mens du drar.
:::

:::offline
IFC-motoren lastes fra nettstedet første gang du åpner en IFC-modell, med mindre BimCraft er lagret for frakoblet bruk. DWG- og DXF-tegninger, prosjektfiler og mapper trenger ingenting ekstra: leserne deres er en del av appen. Hvis knappen i appfeltet sier {{ui:Klar frakoblet}}, åpnes alt frakoblet. Hvis ikke, åpnes ikke IFC-modeller før du kobler til igjen, med mindre en allerede er åpnet i denne fanen. Se [Tilkoblet og frakoblet](topic:online-offline).
:::

:::online
Skal du et sted uten forbindelse? Klikk {{ui:Lagre for frakoblet bruk}} i appfeltet og vent på {{ui:Klar frakoblet}}. Den lagrede kopien (omtrent 11 MB) inneholder IFC-motoren. Se [Arbeide frakoblet](common:offline).
:::

## Se deg rundt

:::mouse
1. Dra med venstre museknapp for å rotere rundt modellen.
2. Rull med hjulet for å zoome.
3. Dra med høyre museknapp for å panorere. På styreflaten til en Mac holder du i stedet {{key:Shift}} nede og drar.
4. Trykk {{key:F}} eller klikk {{ui:Tilpass}} for å se hele modellen igjen.
:::

:::touch
1. Dra med én finger for å rotere.
2. Knip med to fingre for å zoome, og flytt to fingre sammen for å panorere.
3. Trykk {{ui:Tilpass}} for å se hele modellen igjen.
:::

## Gjør én ekte ting: rett et merke

1. Klikk en vegg, en dør eller et annet element i modellen. Det blir blått, og egenskapene vises til høyre.
2. I panelet {{ui:Egenskaper}} klikker du verdien ved siden av **Merke**.
3. Skriv det nye merket og trykk {{key:Enter}}.
4. Se på delen {{ui:Endringer}} som åpnet seg til venstre: endringen din står i listen med gammel og ny verdi.

## Lagre en kopi

1. Klikk {{ui:Lagre som IFC}} i delen {{ui:Endringer}}, eller trykk {{key:Mod+S}}.
2. Finn den nye filen i nedlastingsmappen din. Den får originalens navn med « (edited)» lagt til, for eksempel `Clinic (edited).ifc`.

Originalfilen din blir aldri endret. [Endre IFC-egenskaper og lagre en redigert kopi](topic:edit-ifc-properties) forklarer redigeringen i sin helhet.

## Veien videre

- [BimCraft-skjermen](topic:workspace): hvert panel ved navn.
- [Hvis du kommer fra andre BIM- og tegneprogrammer](topic:coming-from): hva som føles annerledes hvis du er vant til Revit.
- [Åpne en hel prosjektmappe](topic:open-project-folder): pek BimCraft på en prosjektmappe og la den sortere filene.
- [Vis en DWG- eller DXF-tegning](topic:view-dwg): ark, layer og utskriftsvisning.

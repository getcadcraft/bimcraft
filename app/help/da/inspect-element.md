---
title: Vælg et element og læs dets egenskaber
summary: Klik på et hvilket som helst element i 3D-modellen for at fremhæve det og læse dets navn, type, mærke, GlobalId, egenskabssæt og mængder.
keywords: egenskaber, vælg, klik, element, parametre, egenskabssæt, pset, mængder, globalid, guid, type, undersøg
from: 43b80aa8
---

## Hvad du skal gøre

Vælg elementer i en IFC-model, og læs alt, filen siger om dem: attributter, egenskabssæt, typeegenskaber og mængder.

## Trin

1. Åbn en IFC-model.
2. Klik på et element, for eksempel en dør. Klik uden at trække: et træk på mere end et par pixels kredser i stedet for at vælge.
3. Se på elementet: det fremhæves med blåt.
4. Se på panelet {{ui:Egenskaber}} til højre. Øverst står elementets type (såsom »Door« eller »WallStandardCase«) og dets navn.
5. Læs det første afsnit: **Navn**, **Type**, **Objekttype**, **Tag**, **Beskrivelse**, **GlobalId** og **Linje**.
6. Rul ned til egenskabssættene. De tre første er åbne; klik på navnet på et andet sæt for at åbne det.
7. Klik på et andet element for at skifte til det.
8. Tryk på {{key:Esc}}, eller klik på en tom baggrund, for at fjerne valget.

## Det skal du se

- Det fremhævede element og dets data til højre.
- Egenskabssæt i alfabetisk rækkefølge. Sæt, der kommer fra elementets **type**, har »(type)« efter deres navn og noten »Typeegenskab: en ændring her gælder for alle elementer af denne type.«
- Mængdesæt (såsom længder, arealer og volumener) listet sammen med de andre sæt. Mængder er skrivebeskyttede.
- Værdier, du kan ændre, ser ud som knapper. [Ændr IFC-egenskaber og gem en redigeret kopi](topic:edit-ifc-properties) viser, hvordan.

[Felterne i panelet Egenskaber](topic:properties-panel) forklarer hvert felt.

## Sådan kommer du til skjulte elementer

1. For at nå noget inde i bygningen, fjern krydset ved de etager over det i listen {{ui:Etager}}.
2. For at nå en væg bag et rumvolumen, slå {{ui:Zoner}} fra.
3. Klik på elementet.

## Almindelige fejl

- **At trække lidt, mens du klikker.** BimCraft behandler det som en kredsbevægelse (orbit) og vælger ikke. Hold musen stille.
- **At forvente enheder ved siden af tal.** Værdier vises, som de er gemt i filen, afrundet til fire decimaler, uden enhedssymbol. Længder i en metrisk eksport er normalt millimeter eller meter; kontrollér eksportørens indstillinger.
- **At lede efter en parameter med dens velkendte navn.** Eksportører omdøber og grupperer parametre i IFC-egenskabssæt såsom `Pset_WallCommon`. Gennemgå hvert sæt; brugerdefinerede parametre ligger ofte i et sæt opkaldt efter det eksporterende program eller din virksomhed.
- **At forvente en søgeboks.** Klik for at vælge et element; {{key:Mod}}+klik eller {{key:Shift}}+klik vælger flere, og {{key:Mod+A}} vælger alle viste elementer. Listen {{ui:Elementer}} til venstre tæller kun elementer efter type; den kan ikke klikkes.
- **At vælge på et projektfilkort.** Et filkort har ingen elementer at vælge: »Egenskaber for elementer kræver 3D-modellen. Åbn en IFC-eksport af denne fil for at se dem.«

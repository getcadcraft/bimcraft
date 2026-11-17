---
title: Markera element som kontrollerade eller fältverifierade
summary: Ett element som lästs från en PDF eller en skanning är ej verifierat tills du kontrollerar det. Markera element som kontrollerade, eller som fältverifierade (LOD 500) med vem som mätte, när och hur, och lämna över en as-built-modell som säger vilket som är vilket.
keywords: ej verifierad, verifierad, kontrollerad, fältverifierad, as built, as-built, lod 500, avslutning, överlämning, uppmätt på plats, måttband, laser, skanning, mätning, befintlig byggnad, ändring, markera som kontrollerad, verifiering, steg 7
from: df35d908
---

## Vad du gör

Håll reda på vad i modellen någon faktiskt har tittat på. Ett element har en av tre markeringar, eller ingen:

- **Ej verifierad**: programmet kände igen det från en PDF, en skannad ritning, en uppritad ritning eller en punktmolnsskanning. Ingen har kontrollerat det ännu.
- **Kontrollerad**: en person jämförde det med ritningen det kom från.
- **Fältverifierad (LOD 500)**: en person mätte det på plats. Vem, när och hur sparas tillsammans med det.
- **Ingen markering**: ritad av en person. Modellen gör inget påstående om den.

## Steg

1. Välj ett element eller flera (väggar, dörrar, fönster, rum, vilket element som helst).
2. I {{ui:Egenskaper}} öppnar du {{ui:Verifiering}}.
3. Skriv vem som kontrollerade eller mätte det. Datumet är dagens om du inte ändrar det.
4. Klicka på {{ui:Markera som kontrollerad}}. För en platsmätning väljer du hur den mättes (måttband, laseravståndsmätare, skanning, mätning) och klickar på {{ui:Markera som fältverifierad (LOD 500)}}.
5. {{ui:Markera som ej verifierad}} och {{ui:Ta bort markeringen}} går tillbaka. Varje klick är ett steg du kan ångra, för hela urvalet.

För att markera ett urval snabbt: {{ui:Verktyg}} › {{ui:Markera som kontrollerad}} (skrivet: `MARKCHECKED`) markerar det som kontrollerat av dig, idag.

## Det du ska se

- I planen har ett ej verifierat element en streckad ram och ett "?"; ett fältverifierat har en bock. Avmarkera {{ui:Visa verifieringsmarkeringar i planen}} i avsnittet {{ui:Granskning}} för att dölja dem.
- {{ui:Förteckningar}} › {{ui:Verifiering}} listar varje markerat element med dess nivå, status, vem, när, hur och varifrån det kom.
- Granskningen listar ej verifierade element och räknar ett fältverifierat element som LOD 500. Se [Granska modellen](topic:audit-the-model).

## Från en skanning

När du jämför en skanning med modellen markerar {{ui:Markera de matchande elementen som fältverifierade}} varje element som skanningen såg som byggt inom toleransen, med metoden "scan" och toleransen i noteringen. Se [Jämför en skanning med modellen](topic:compare-scan-with-model).

:::warning
Den jämförelsen matchar varje elements box med skanningspunkter. Det är ingen mätning. Använd den för element du också har tittat på.
:::

## As-built-modellen och överlämningspaketet

{{ui:Bygg överlämningspaketet}} på fliken {{ui:Tillgångar}} lägger as-built-modellen i zip-filen, med:

- ett påstående i projektet om hur många element som är fältverifierade, kontrollerade, ej verifierade och omarkerade;
- `as-built/verified-elements.csv`: varje element och rum med dess status, vem, när och hur;
- `as-built/as-built-drawings.pdf`: ritningsuppsättningen så som den är nu;
- ritningens ändringslogg, när modellen har utfärdade uppsättningar.

Se [Tillgångar och underhåll](topic:assets-and-maintenance).

## Hur det sparas i IFC

Varje markerat element bär egenskapsuppsättningen `CadCraft_Verification`: State, By, On, Method, Source, Note och LevelOfDevelopment (`LOD 500` medan det är fältverifierat). De är vanliga textegenskaper, så andra program listar dem, och Sök, Färg efter egenskap och taggförteckningar kan använda dem. Påståendet för as-built ligger i egenskapsuppsättningen `CadCraft_AsBuilt` på projektet. Ett element utan uppsättningen har inte mätts på plats.

## Nästa

- [Väggar från en uppsättning planritningar](topic:walls-from-plans)
- [Granska modellen](topic:audit-the-model)

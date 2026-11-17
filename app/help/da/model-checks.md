---
title: Kontroller en model for almindelige problemer
summary: Find elementer, der mangler en egenskab, du har brug for, GlobalId'er brugt to gange, elementer uden for nogen etage og kopier stablet oven på hinanden.
keywords: kontrol, modelkontrol, validering, qa, kvalitet, manglende egenskab, påkrævet, dublet, globalid, guid, etage, stablet, overlap
from: 4d835513
---

## Hvad du gør

Gennemgå en model, før du giver den videre: de problemer, der ødelægger skemaer, mængder og andres software.

## Trin

1. Åbn en IFC-model.
2. Åbn {{ui:Modelkontrol}} i venstre panel.
3. Under {{ui:Påkrævede egenskaber}} findes allerede en regel (enhver klasse, Name). Skift dens klasse (eller {{ui:Enhver klasse}}) og egenskab, eller klik på {{ui:Tilføj en egenskab}} for en anden regel; x'et fjerner en. Et element fejler en regel, når egenskaben mangler eller er tom. Reglerne bliver i denne browser for hver model.
4. Klik på {{ui:Kør kontrol}}.
5. Klik på et resultat for at vælge de elementer og zoome til dem.

## Hvad du bør se

- **Manglende påkrævet egenskab**: hver regel med de elementer, der ikke har en værdi for den.
- **GlobalId brugt to gange**: elementer, der deler et GlobalId. Anden software behandler dem som ét element.
- **Ingen etage**: elementer med en form, som ingen etage indeholder.
- **Kopier oven på hinanden**: elementer af samme klasse og type med samme form på samme sted, som tæller dobbelt i mængderne.

Hver linje i resultaterne er en knap: klik for at vælge og zoome til disse elementer. Kun de første 50 grupper af en kontrol vises. De samme fund vises også i {{ui:Problemer}}.

## Godt at vide

- Kontrollerne kigger på den aktive model, når flere er åbne. Se [Se flere IFC-modeller sammen](topic:several-models).
- Kør kontrollerne igen efter en redigering.
- I panelet {{ui:Problemer}} følger længder, arealer og volumener i et problems ordlyd den {{ui:Enheder}}, der er valgt i værktøjslinjen (en dør på »800 mm« står som 2'-7 1/2" i fod og tommer); skift enhed, og panelet skriver dem om.

## Næste

- [Gennemgå modellen: rum, tags, LOD, kollisioner og grænseflader](topic:audit-the-model)
- [Find elementer efter klasse, navn eller egenskab](topic:find)
- [Slet, klip, kopiér og sæt elementer ind](topic:copy-paste)

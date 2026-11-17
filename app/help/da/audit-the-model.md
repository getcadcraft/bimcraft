---
title: Audit modellen: rum, mærker, LOD, kollisioner og grænseflader
summary: Kør klar-kontroller for unavngivne rum, manglende mærker, elementer under det udviklingsniveau, som projektfasen kræver, kollisioner mellem fag og LOD 350-grænseflader. Kun vejledning: intet blokeres.
keywords: audit, kontrol, unavngivet rum, manglende mærke, markering, lod, udviklingsniveau, milepæl, fase, kollision, fag, koordinering, grænseflade, lod 350, åbning, overligger, gennemføring, hylster, rør, kanal, problemer, kontrolrapport, vejledende
from: cc83a14d
---

## Hvad du skal gøre

Gennemgå hele modellen på én gang, før du udsteder den. Auditen kører klare regelsæt og lægger det, den finder, i listen {{ui:Problemer}} som vejledning. Intet blokeres: du retter et fund eller accepterer det med en begrundelse, som ved ethvert andet problem.

## Trin

1. Åbn {{ui:Modelkontrol}} › {{ui:Audit}} i venstre panel, eller {{ui:Værktøjer}} › {{ui:Audit modellen…}} (skrevet: `AUDIT`).
2. Vælg {{ui:Projektfase}}. Det er samme fase som i tegningsdetaljerne.
3. Sæt flueben ved de regelsæt, der skal køres.
4. Klik på {{ui:Kør audit}}.
5. Læs linjen for hvert regelsæt, og åbn derefter {{ui:Åbn listen over problemer}}. Et klik på et fund vælger dets element.
6. {{ui:Kontrolrapporten}} downloader rapporten: alle fund, hvem der accepterede hvad og hvorfor, og de regelsæt, der kørte.

## Regelsættene

- **Unavngivne rum**: et rum uden navn, eller som stadig hedder det, programmet kaldte det ("Room 3").
- **Manglende mærker**: en dør eller et vindue uden betegnelse, et rum uden nummer, en elektrisk enhed uden mærke.
- **Elementer under fasens LOD**: hver væg, hvert gulv, loft, tag, dør og vindue, hvis LOD er under det, fasen kræver. Et element læser sin typs LOD-mærke; et element verificeret på stedet er LOD 500. Elementer uden mærke tælles i én note, fordi de ikke kan kontrolleres.
- **Kollisioner mellem fag**: elementer fra to fag (arkitektur, konstruktion, maskin, VVS, el, efter IFC-klasse), der løber ind i hinanden. Et tag, der hviler på sine vægge, tælles ikke.
- **LOD 350-grænseflader**: hver dør og hvert vindue sidder i en åbning i sin væg, åbningen passer inden for væggen, to åbninger overlapper ikke, en åbning bredere end grænsen har en overligger (et element over den eller en note på døren eller vinduet), og et rør, en kanal eller en kabelbakke, der krydser en væg eller et dæk, har en åbning der. Fund tælles pr. par af fag.
- **Genkendte elementer, ingen har kontrolleret**: vægge, døre, vinduer og rum læst fra en PDF, en scanning eller en tegning, som endnu ikke er verificeret. Se [Markér elementer som kontrolleret eller verificeret på stedet](topic:verification).

## Den LOD hver fase kræver

Åbn {{ui:Den LOD hver fase kræver}} for at se eller ændre tabellen.

:::note
Tabellen og overliggerbredden er CadCraft's startværdier. De er ikke hentet fra en standard: et projekt angiver LOD pr. fase i sin BIM-gennemførelsesplan. Angiv dine egne. Et kontor kan angive tabellen for alle under Indstillinger › Default Policies › Audit; en ændring i afsnittet Audit gemmes på denne computer.
:::

## Godt at vide

- En overligger kan noteres i stedet for at modelleres: vælg døren eller vinduet og udfyld {{ui:Note om overligger}} under {{ui:Verifikation}} i Egenskaber.
- Et rør, der passerer en reel åbning, krydser ingen flade og bliver ikke rapporteret. Et rør, der er modelleret lige igennem væggen, bliver det.
- Kollisionskontrollen stopper efter nogle sekunder på en meget stor model og siger det. Til en fuld kontrol af to valgte sæt, brug [Find kollisioner mellem elementer](topic:clash-check).
- Kør auditen igen, efter du har ændret modellen. Accepterede fund forbliver accepteret, så længe deres tal ikke ændrer sig.
- Den læser modellen. Den erstatter ikke en koordineringsgennemgang af de ansvarlige.

## Næste

- [Kontrollér en model for almindelige problemer](topic:model-checks)
- [Find kollisioner mellem elementer](topic:clash-check)
- [Markér elementer som kontrolleret eller verificeret på stedet](topic:verification)

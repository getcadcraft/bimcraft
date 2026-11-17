---
title: Granska modellen: rum, taggar, LOD, kollisioner och gränssnitt
summary: Kör färdiga kontroller för namnlösa rum, saknade taggar, element under den utvecklingsnivå (LOD) som projektstadiet kräver, kollisioner mellan discipliner och LOD 350-gränssnitt. Endast råd: inget blockeras.
keywords: granskning, kontroll, namnlöst rum, saknad tagg, markering, lod, utvecklingsnivå, milstolpe, stadium, kollision, disciplin, samordning, gränssnitt, lod 350, öppning, överliggare, balk, genomföring, hylsa, rör, kanal, problem, kontrollrapport, rådgivande
from: cc83a14d
---

## Vad du gör

Gå igenom hela modellen på en gång innan du utfärdar den. Granskningen kör klara regeluppsättningar och lägger det den hittar i listan {{ui:Problems}} som råd. Inget blockeras: du åtgärdar en iakttagelse, eller godkänner den med en motivering, som vilket annat problem som helst.

## Steg

1. Öppna {{ui:Model checks}} › {{ui:Audit}} i vänster panel, eller {{ui:Tools}} › {{ui:Audit the model…}} (skrivs: `AUDIT`).
2. Välj {{ui:Project stage}}. Det är samma stadium som i ritningsdetaljerna.
3. Markera de regeluppsättningar som ska köras.
4. Klicka på {{ui:Run the audit}}.
5. Läs raden för varje regeluppsättning, och öppna sedan {{ui:Open the Problems list}}. Ett klick på en iakttagelse väljer dess element.
6. {{ui:The check report}} laddar ner rapporten: varje iakttagelse, vem som godkände vad och varför, och de regeluppsättningar som kördes.

## Regeluppsättningarna

- **Namnlösa rum**: ett rum utan namn, eller som fortfarande heter det programmet kallade det ("Rum 3").
- **Saknade taggar**: en dörr eller ett fönster utan beteckning, ett rum utan nummer, en elektrisk apparat utan tagg.
- **Element under stadiets LOD**: varje vägg, golv, innertak, tak, dörr och fönster vars LOD är under vad stadiet kräver. Ett element läser sin typs LOD-tagg; ett element som verifierats på plats är LOD 500. Element utan tagg räknas i en gemensam anteckning, eftersom de inte kan kontrolleras.
- **Kollisioner mellan discipliner**: element från två discipliner (arkitektur, konstruktion, ventilation, sanitet, el, enligt IFC-klass) som går in i varandra. Ett tak som vilar på sina väggar räknas inte.
- **LOD 350-gränssnitt**: varje dörr och fönster sitter i en öppning i sin vägg, öppningen ryms inom väggen, två öppningar överlappar inte varandra, en öppning som är bredare än gränsen har en överliggare eller balk (ett element över den, eller en anteckning på dörren eller fönstret), och ett rör, en kanal eller en kabelbana som korsar en vägg eller ett bjälklag har en öppning där. Iakttagelser räknas per par av discipliner.
- **Igenkända element som ingen har kontrollerat**: väggar, dörrar, fönster och rum lästa från en PDF, en skanning eller en ritning som ännu inte är verifierade. Se [Markera element som kontrollerade eller verifierade på plats](topic:verification).

## Stadiets LOD

Öppna {{ui:The LOD each stage asks for}} för att se eller ändra tabellen.

:::note
Tabellen och överliggarens bredd är CadCrafts utgångsvärden. De är inte hämtade från någon standard: ett projekt anger LOD per stadium i sin BIM-genomförandeplan. Ange dina egna. Ett kontor kan ange tabellen för alla i Inställningar › Default Policies › Audit; en ändring i avsnittet Audit sparas på den här datorn.
:::

## Bra att veta

- En överliggare kan antecknas i stället för att modelleras: välj dörren eller fönstret och fyll i {{ui:Lintel or header note}} under {{ui:Verification}} i Egenskaper.
- Ett rör som går genom en verklig öppning korsar ingen yta och rapporteras inte. Ett som modelleras rakt genom väggen rapporteras.
- Kollisionskontrollen stoppar efter några sekunder på en mycket stor modell och säger det. För en fullständig kontroll av två valda uppsättningar, använd [Hitta kollisioner mellan element](topic:clash-check).
- Kör granskningen igen efter att du ändrat modellen. Godkända iakttagelser förblir godkända så länge deras nummer inte ändras.
- Den läser modellen. Den ersätter inte en samordningsgranskning av de ansvariga.

## Nästa

- [Kontrollera en modell mot vanliga problem](topic:model-checks)
- [Hitta kollisioner mellan element](topic:clash-check)
- [Markera element som kontrollerade eller verifierade på plats](topic:verification)

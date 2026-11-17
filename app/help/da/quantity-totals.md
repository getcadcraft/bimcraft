---
title: Læg mængder sammen, list elementer og opgør zonerne
summary: Tæl elementer og læg deres længder, arealer, volumener eller ethvert talegenskab sammen, grupperet efter en vilkårlig egenskab; list én række pr. element; eller opgør zonerne med deres arealer og volumener. Hver downloades som en CSV.
keywords: mængde, mængder, mængdeudtræk, summer, opgørelse, tilbudsliste, boq, qto, csv, gruppér efter, tæl, længde, areal, volumen, zoner, rum, rumliste, arealliste, elementliste
from: e2e7210c
---

## Hvad du gør

Få summer ud af en model: væglængder pr. etage, dørantal pr. type, dækvolumen pr. materiale, prisen for hver zone.

## Trin

1. Åbn en IFC-model.
2. Åbn {{ui:Mængdesummer}} i venstre panel.
3. Under {{ui:Tæl}} vælger du {{ui:Alle elementer}} eller kun de valgte.
4. Under {{ui:Gruppér efter}} vælger du en egenskab, for eksempel {{ui:Klasse}}. Klik på {{ui:Tilføj en gruppe}} for at dele yderligere op, op til tre, for eksempel efter {{ui:Etage}}.
5. Under {{ui:Læg sammen}} sætter du kryds ved de tal, der skal summeres. Modellens mængdesæt er markeret fra start.
6. Klik på {{ui:Download CSV}} for at åbne tabellen i et regneark.

## Hvad du bør se

- En række pr. gruppe med, hvor mange elementer den har, og hver sum, og en totalrække.
- Elementer uden en værdi tælles, men lægger intet til. Når det sker, tilføjer CSV-filen en kolonne "udeladt" ved siden af summen, så du kan se, hvor mange.
- Tal er i filens egne enheder, som filen gemmer dem, ofte millimeter for længder.

## Én række pr. element, eller zonerne

Skift {{ui:Vis}}:

- **Én række pr. element**: hvert element på sin egen række, med egenskaberne under {{ui:Kolonner}} og tallene under {{ui:Læg sammen}}. CSV-filen starter med hvert elements GlobalId. Klik på den første værdi i en række for at vælge det element.
- **Zoner**: hvert rum med sit nummer, navn, etage, areal og volumen samt deres summer. Arealer og volumener kommer fra zonens mængder, som filen angiver dem. Når filen ikke har nogen, måles de ud fra zonens form i m² og m³ og vises med kursiv; CSV-filen siger, hvilket er hvilket.

## Næste

- [Find elementer efter klasse, navn eller egenskab](topic:find)
- [Farvelæg elementer efter en egenskab](topic:color-by-property)

## Infrastruktur (IFC 4.3)

Vælg **Infrastruktur (IFC 4.3)** i visningslisten for at se veje, jernbaner, broer og marine værker summeret pr. klasse og type, med længden, arealet og volumenet, som filen selv angiver. En mængde, som filen ikke angiver, efterlades tom, aldrig beregnet. **Send infrastrukturmængder til TakeoffCraft** gemmer en `.quantities.json`-fil, som TakeoffCraft åbner som typede mængder.

---
title: Niveli i zhvillimit (LOD) dhe kontrollet e etapave
summary: Jepni elementeve një nivel zhvillimi, shihni nga vjen, kontrolloni modelin sipas LOD-it që kërkon një etapë, dhe rregulloni etiketat që mungojnë dhe dhomat pa emër. Çdo kontroll vetëm këshillon; asgjë nuk bllokohet.
keywords: lod, niveli i zhvillimit, lod 100, lod 200, lod 300, lod 350, lod 400, lod 500, etapë, tabelë etapash, kontrollet e modelit, etiketa që mungojnë, dhoma pa emër, gjeneric herët, klasë ifc, klasifikim
from: 2091c79b
---

## Çfarë do të bëni

Thoni sa i zhvilluar është çdo element, pastaj kontrolloni të gjithë modelin sipas asaj që kërkon një etapë projekti.

## Hapat

1. Zgjidhni një element (ose disa) dhe hapni {{ui:Vetitë}}. Gjeni {{ui:Niveli i zhvillimit}}.
2. Zgjidhni një nivel nga lista. Çdo nivel emërtohet sipas asaj që do të thotë dhe përfshin ato nën të. Një hap zhbërjeje mbulon të gjithë zgjedhjen.
3. Lexoni nga vjen niveli: nga ky element, nga tipi i tij, ose nga një shenjë e verifikuar në terren.
4. Për të kontrolluar modelin, hapni {{ui:Kontrollet e modelit}} në të majtë, pastaj {{ui:LOD-et e etapave}}. Zgjidhni etapën dhe tabelën (tabelën fillestare, ose skedarin tuaj CSV ose JSON me {{ui:Ngarkesa}}).
5. Klikoni {{ui:Kontrollo modelin}}. Totalet dhe një rresht për çdo rresht të tabelës tregojnë çfarë ka arritur nivelin e vet dhe çfarë jo; gjetjet shfaqen gjithashtu në listën Problem.
6. Te {{ui:Etiketat që mungojnë dhe dhomat pa emër}}, klikoni {{ui:Gjej ato}}, ndryshoni propozimet nëse dëshironi, dhe klikoni {{ui:Zbato}}.

## Çfarë duhet të shihni

- Niveli që zgjodhët te elementi, me klasën IFC dhe kodet e klasifikimit pranë tij.
- Totalet dhe rreshtat për etapën. Një tabelë nuk ndryshon kurrë kuptimin e një niveli: shkalla është fikse, tabela thjesht thotë cilin nivel kërkon një etapë.
- "Qëndrim gjeneric herët": këshillë për të mbajtur elementet gjenerikë në një etapë të hershme. Është vetëm këshillë.

## Të mirë për t'u ditur

- Asgjë këtu nuk bllokon. Një model nën nivelin që kërkon një etapë listohet, nuk refuzohet.
- Tri pjesët e një niveli (gjeometria, informacioni, dokumentimi) mund të caktohen secila; një shenjë tregon arritur, nën nivel ose e pa deklaruar.

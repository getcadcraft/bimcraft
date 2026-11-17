---
title: Vienības importējot: fails norāda savas vienības vai arī jums vispirms tiek jautāts
summary: Kad importētais fails norāda savas vienības, BimCraft tās izmanto un par to paziņo. Ja nenorāda, BimCraft pirms ko novietot jautā un atceras jūsu atbildi šim failam.
keywords: vienības, imports, atvērt, OBJ, STL, DWG, DXF, IFC, punktu mākonis, bibliotēkas vienums, milimetri, metri, collas, pēdas, mērogs, nepareizs izmērs, pārāk liels, pārāk mazs, 1000 reizes, jautāt, atcerēts
from: f044e9bc
---

## Ko darāt

Ievietojiet failu un pārliecinieties, ka tas tiek ievietots pareizajā izmērā.

## Soļi

1. Atveriet vai pievienojiet failu kā parasti: {{ui:Atvērta}}, bibliotēkas {{ui:Faili}}, {{ui:Punktu mākoņi}} vai Veidot › No rasējuma.
2. Ja fails norāda savas vienības, nekas netiek jautāts. Statusa rindā rakstīts, kuras vienības fails norāda.
3. Ja nē, dialogā tiek jautāts **Faila vienības**. Izvēlieties, kas ir viena vienība failā, un noklikšķiniet uz {{ui:Izmantot šīs mērvienības}}. Nekas netiek novietots, kamēr neesat atbildējis.
4. {{ui:Atcelt}} (vai {{key:Esc}}) neko neieved.

## Kuri faili norāda savas vienības

- **IFC**: norāda savu garuma vienību, un "Opened" (Atvērts) to parāda. IFC, kurā tāda nav, pirms atvēršanas tiek jautāts; jūsu atbilde tiek ierakstīta modelī, tāpēc pēc saglabāšanas fails to norāda.
- **DWG un DXF**: rasējuma ievietošanas vienības. Rasējumā bez tām tiek jautāts (bibliotēkas faili, Veidot › No rasējuma, reljefs no horizontālēm).
- **Punktu saraksti** reljefam: vienības nenorāda. Tiek jautāts.
- **Punktu mākoņi**: LAS un LAZ ar koordinātu sistēmu, E57, PTX un PLY norāda savas. Pārējiem tiek jautāts.
- **OBJ un STL**: nekad nenorāda vienības. Tiek jautāts.
- **glTF un GLB**: metri pēc paša formāta noteikuma.
- **Attēli**: paši nav izmēra. Attēls tiek pielāgots skatam, un izmēru iestatāt ar **Mērogot pēc diviem punktiem**. Izmēru, ko dodat, atceras šim failam: ievietojot to atkal, tas tiek ievietots šajā izmērā, un statusa rindā tas tiek norādīts.
- **Papildinājums Punktu mākoņi**: jautā, kad veidojat mākoni, kura fails nenorāda vienību, un apzīmē mākoņa skaitļus ar vienību, ko tas nes.

## Labi zināt

- Atbilde tiek atcerēta šim failam (tā nosaukums, izmērs un datums) šajā datorā visās CadCraft lietotnēs. Nākamreiz, kad tas pats fails tiek importēts, jautājums netiek uzdots, un statusa rindā tiek norādīts, ka tika izmantotas atceres vienības.
- Lai tiktu jautāts atkārtoti: komandu paleta ({{key:Mod+K}}) › **Jautāt atkārtoti par importēto failu vienībām**.
- Vienību saraksts, kas importam jau ir (bibliotēkas **Vienības**, mākoņa joslas **Vienības**, **Rasējuma vienības** sadaļā No rasējuma), joprojām maina vienības pēc tam. Reljefa rīka vienību saraksts tagad ir tikai tas, ar ko sākas jautājums.

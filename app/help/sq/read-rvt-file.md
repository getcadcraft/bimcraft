---
title: Lexo një skedar projekti ose familjeje
summary: Hap një skedar .rvt, .rfa, .rte ose .rft dhe lexo versionin, punën e përbashkët, informacionin e projektit, parametrat e familjes, lidhjet dhe imazhin paraprak, pa programin që e krijoi.
keywords: rvt, rfa, rte, rft, skedar projekti, familje, version, cili version, ndërtim, punë e përbashkët, qendër, informacion projekti, pamje paraprake, miniaturë, lidhje
from: df3600e1
---

## Çfarë do të bësh

Gjej çfarë ka brenda një skedari projekti ose familjeje pa e hapur në Revit: cili version e ruajti, nëse është me punë të përbashkët, informacionin e projektit dhe çfarë lidh. E dobishme kur një skedar vjen nga dikush tjetër dhe duhet të dish në cilin version të hapet.

## Hapat

1. Kliko {{ui:Choose a file}}.
2. Zgjidh një skedar `.rvt`, `.rfa`, `.rte` ose `.rft`.
3. Prit pak. Rreshti i statusit thotë "Reading the file…" dhe pastaj "Opened *emri i skedarit*".
4. Shiko në krye të kartelës: imazhin paraprak të ruajtur në skedar, llojin e skedarit dhe versionin me të cilin u ruajt, dhe emrin e projektit.
5. Lëviz poshtë për të lexuar seksionet e kartelës.

## Çfarë duhet të shohësh

Kartela në mes, me këta seksione kur skedari i përmban:

| Seksioni | Çfarë të tregon |
|---|---|
| Skedari | Emri i skedarit, madhësia, lloji (projekt, shabllon projekti, familje ose shabllon familjeje), versioni dhe ndërtimi me të cilin u ruajt, puna e përbashkët, shtegu i modelit qendër, ku u ruajt për herë të fundit, kush e ruajti, gjuha dhe GUID-i i dokumentit |
| Informacioni i projektit | Fushat e vetë projektit, si emri, numri, klienti, adresa dhe statusi. Fushat që janë ende në vlerat fillestare të projektit të ri lihen jashtë. |
| Familja, Familja: … | Për një familje: emri, kategoria, versioni, përditësimi i fundit dhe parametrat e saj, grup pas grupi |
| Skedarët e lidhur dhe të referuar | Çdo model i lidhur, lidhje CAD, imazh dhe tabelë shënimesh që skedari i tregon, me shtegun e ruajtur |

Majtas, paneli {{ui:File}} përsërit faktet kryesore dhe shton **Lexuar**: sa nga skedari lexoi vërtet BimCraft, zakonisht rreth 40 KB nga një skedar që ka disa megabajt. Djathtas, paneli {{ui:Properties}} thotë se vetitë e elementeve kanë nevojë për modelin 3D.

## Pse nuk ka 3D

Modeli 3D dhe elementët brenda një skedari projekti ruhen në një format të padokumentuar. BimCraft lexon vetëm pjesët e skedarit që janë të dokumentuara ose qartësisht të lexueshme: informacionin e skedarit, informacionin e projektit, të dhënat e familjes, listën e lidhjeve dhe imazhin paraprak. Nuk hamendëson për pjesën tjetër. Për të parë modelin në 3D dhe për të lexuar vetitë e elementeve, eksporto IFC nga programi që e krijoi skedarin. Shih [Merr një skedar projekti në 3D përmes IFC](topic:rvt-to-ifc).

## Gabimet e zakonshme

- **Pritja e 3D.** Shih më lart.
- **Lidhjet shfaqin vetëm shtegun e ruajtur.** Një skedar i hapur vetëm nuk mund të kontrollojë nëse lidhjet e tij ekzistojnë. Hap dosjen ku ndodhet, dhe BimCraft e shënon çdo lidhje si të gjetur ose jo: [Hap një dosje të tërë projekti](topic:open-project-folder).
- **"Ky skedar është i paplotë…"** Skedari u pre gjatë kopjimit, ngarkimit ose sinkronizimit. Edhe një skedar në një disk në re që është ende "vetëm online" e bën këtë. BimCraft e hap prapë dhe shfaq vetëm atë që u rikuperua: një njoftim me ngjyrë qelibari në krye të kartelës, një seksion **E rikuperuar nga ky skedar** që liston pjesët, çdo bajt i të cilave është në skedar, dhe **Nuk është në skedar** për pjesën tjetër. Asgjë nuk plotësohet për pjesën që mungon, kështu që versioni, imazhi paraprak ose informacioni i projektit mund të mungojnë kur ruheshin pas pikës së prerjes. Nëse edhe lista e përmbajtjes së skedarit u pre, asgjë nuk mund të hapet. Kopjo përsëri origjinalin dhe rihape për skedarin e plotë.
- **"Nuk ka imazh paraprak në këtë skedar".** Disa skedarë ruhen pa të. Kjo është normale.
- **Hapja e një kopjeje rezervë për gabim.** Skedarët me emra si `Tower.0004.rvt` janë kopje rezervë të numëruara. Hapja e dosjes i grupon me modelin e tyre.

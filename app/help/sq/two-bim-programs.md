---
title: Puna ndërmjet dy programeve BIM
summary: Dërgoni një model nga një program BIM te një tjetër përmes IFC me BimCraft në mes, ruani GlobalId-të, grupet e vetive dhe klasifikimet, vendosni të dy programet për të njëjtat vetí, dhe shihni çfarë u kthye.
keywords: ifc, udhëtim i plotë, ndërveprim, globalid, guid, grupe vetish, psets, klasifikime, parametra të përbashkët, pasqyrim i vetive, përkthyes, bcf, koordinim, shkëmbim
from: 9f224176
---

## Çfarë do të bëni

Zhvendosni një model nga një program BIM në tjetrin, për shembull nga Revit te Archicad dhe anasjelltas, përmes IFC, me BimCraft në mes për ta kontrolluar, për ta plotësuar dhe për të raportuar çfarë mbijetoi. Asnjë skedar i formatit të vetë programit nuk lexohet: gjithçka udhëton si IFC.

## Çfarë ruan BimCraft

Kur ndryshoni një model në BimCraft dhe klikoni {{ui:Ruaj si IFC}}, çdo rresht që nuk e keni ndryshuar shkruhet përsëri saktësisht siç ishte. Kështu:

- **GlobalId-të** mbeten të njëjta, dhe programi tjetër mund ta lidhë çdo element me atë që i dërgoi.
- **Grupet e vetive** dhe vlerat e tyre mbeten, përveç vlerave që keni ndryshuar.
- **Klasifikimet** mbeten të lidhura me elementet e tyre.

## Vendosni të dy programet për të njëjtat veti

1. Hapni modelin në BimCraft (dhe paketën e projektit, nëse keni një: grupet e vetive të saj shtohen).
2. Në panelin e majtë, hapni {{ui:Ndërmjet dy programeve BIM}}.
3. Nën **Pasqyrimi i vetive**, shkarkoni atë që i nevojitet secilit program:
   - {{ui:Parametra të përbashkët}}: një skedar parametrash të përbashkët. Në Revit, ngarkojeni me Manage › Shared Parameters dhe shtoni parametrat te kategoritë që i kanë nevojë.
   - {{ui:Grupet e vetive për eksportin IFC}}: një skedar grupesh vetish të përcaktuara nga përdoruesi. Në cilësimet e eksportit IFC të Revit, zgjidheni nën grupet e vetive të përcaktuara nga përdoruesi, që IFC-ja e eksportuar të mbajë të njëjtin grup dhe emra vetish.
   - {{ui:Tabela e pasqyrimit (CSV)}}: çdo veti me grupin dhe emrin e saj IFC, tipin e saj, dhe emrat përkatës në çdo program. Skedarët e pasqyrimit të Archicad nuk janë format i publikuar, prandaj konfiguroni përkthyesin e tij IFC dhe menaxherin e vetive nga kjo tabelë me dorë.
   - {{ui:Skedari i pasqyrimit}}: i gjithë pasqyrimi si një skedar i vetëm, për ta mbajtur bashkë me projektin.

Grupet standarde (Pset_ dhe Qto_) lihen jashtë skedarit të parametrave të përbashkët: të dy programet i shkruajnë këto nga të dhënat e tyre.

## Dërgoni modelin dhe kthejeni

1. Eksportoni IFC nga programi i parë me GlobalId-të të ruajtura (Revit: "Store the IFC GUID in an element parameter after export" e ndezur).
2. Hapeni në BimCraft, kontrolloni ({{ui:Kontrollet e modelit}}, {{ui:Kontrolli i përplasjeve}}), shtoni çështje ({{ui:Çështje}}, BCF), ndryshoni vlera nëse ju duhen, dhe {{ui:Ruaj si IFC}}.
3. Hapeni IFC-në e ruajtur në programin e dytë, punoni mbi të, dhe eksportoni IFC nga aty me GlobalId-të të ruajtura (përkthyesi i Archicad: "Global Unique Identifiers: Keep existing").
4. Kthehuni në BimCraft, hapni modelin që u dërgua, pastaj shtoni atë që u kthye ({{ui:Shto një model}} nën Modelet).
5. Te {{ui:Ndërmjet dy programeve BIM}}, zgjidhni **U dërgua** dhe **U kthye**, dhe klikoni {{ui:Bëj raportin}}.

## Lexoni raportin

- **Elementet**: sa u kthyen me të njëjtin GlobalId, sa mungojnë dhe sa janë të rinj. Elementët me një GlobalId të re shfaqen si një që mungon dhe një i ri: programi tjetër nuk e mbajti.
- **Klasa IFC ndryshoi**: elementet që u kthyen si lloj tjetër elementi.
- **Vlerat e vetive të ruajtura**: pjesa e vlerave që u kthyen të pandryshuara. Lista më poshtë tregon vetitë me më shumë vlera të ndryshuara ose që mungojnë.
- **Klasifikimet**: të ruajtura, të ndryshuara (i njëjti sistem, kod tjetër) ose që mungojnë.

{{ui:Shkarko raportin (CSV)}} jep çdo veti me numërimet e saj. Për të parë cilat elemente u zhvendosën ose ndryshuan formë, përdorni {{ui:Krahaso versionet}} për të njëjtat dy modele.

:::note
BimCraft nuk ekzekuton asnjë nga dy programet. Cilat cilësime e bartin një vlerë varet nga cilësimet IFC të secilit program: raporti tregon çfarë u kthye në të vërtetë, kështu që provoni një cilësim, eksportoni përsëri dhe krahasoni.
:::

## Çështjet udhëtojnë si BCF

Çështjet që ngreni në BimCraft eksportohen si BCF ({{ui:Çështje}}), që të dy programet mund t'i lexojnë me veglat e tyre BCF, kështu që një pyetje për një element arrin te personi që punon në programin tjetër, me pamjen e saj.

Shih gjithashtu [Hapni një paketë projekti](topic:open-project-bundle), [Nga një skedar projekti te BimCraft përmes IFC](topic:rvt-to-ifc) dhe [Krahasoni dy versione të një modeli](topic:compare-versions).

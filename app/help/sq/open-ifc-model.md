---
title: Hap një model IFC dhe shiko rreth në 3D
summary: Hap një skedar IFC, rrotullo, lëviz dhe zmadho, dhe përdor Përshtat, Sipër, Para dhe Anësore për të gjetur orientimin.
keywords: ifc, 3d, rrotullim, lëvizje, zmadhim, përshtatje, pamje sipër, pamje para, pamje anësore, navigim, kub pamjeje, kamerë
from: 68b460dd
---

## Çfarë do të bësh

Hap një model IFC, lëviz rreth tij në 3D dhe shko te pamjet standarde. Rreth pesë minuta.

Të duhet një skedar `.ifc`. Shumica e programeve BIM e eksportojnë një; në Revit është **File > Export > IFC**. Shih [Merr një skedar projekti në 3D përmes IFC](topic:rvt-to-ifc).

## Hapat

1. Kliko {{ui:Zgjidh një skedar}} (ose zonën e lëshimit lart majtas).
2. Zgjidh skedarin tënd `.ifc` dhe konfirmo.
3. Prit që rreshti i statusit të mbarojë. Shfaq "Po nis motorin IFC…" herën e parë, pastaj "Po lexon modelin…" dhe "Po ndërton gjeometrinë: … nga … elementë".
4. Shiko modelin: hapet në një pamje tre-çerekë, e përshtatur me ekranin.
5. Kliko {{ui:Sipër}} në shiritin mbi model për të parë drejt poshtë.
6. Kliko {{ui:Para}} për të parë përpara, pastaj {{ui:Anësore}} për të parë nga ana.
7. Kliko {{ui:Përshtat}}, ose shtyp {{key:F}}, për t'u kthyer te pamja tre-çerekë e të gjithë modelit.

## Çfarë duhet të shohësh

- Modeli në mes, me skaje të holla të errëta për një pamje si vizatim.
- Paneli {{ui:Skedari}} majtas: emri i skedarit, madhësia, skema IFC (për shembull IFC2X3 ose IFC4), emri i projektit, faza, programi nga i cili u eksportua, autori, data e eksportit, dhe numri i elementëve dhe trekëndëshave.
- Listat {{ui:Katet}} dhe {{ui:Elementët}} nën të.
- Rreshti i statusit: "Hapur *emri i skedarit*: *n* elementë në *s* s".

## Lëvizja

:::mouse
| Për | Bëj këtë |
|---|---|
| Rrotullo | Tërhiq me butonin e majtë |
| Lëviz | Tërhiq me butonin e djathtë, ose mbaj {{key:Shift}} (ose {{key:Mod}}) dhe tërhiq me butonin e majtë |
| Zmadho | Lëviz rrotën, ose tërhiq me butonin e mesit |
| Shiko gjithçka | Shtyp {{key:F}} ose kliko {{ui:Përshtat}} |
:::

:::mac mouse
Në një trackpad: tërhiq me një gisht të shtypur për të rrotulluar; mbaj {{key:Shift}} ose {{key:Mod}} dhe tërhiq për të lëvizur; lëviz me dy gishta ose shtrydh për të zmadhuar. Një klikim me dy gishta është një klikim i djathtë, dhe mund të tërhiqesh me të për të lëvizur, por {{key:Shift}} dhe tërheqje është më e lehtë.
:::

:::touch
| Për | Bëj këtë |
|---|---|
| Rrotullo | Tërhiq me një gisht |
| Zmadho | Shtrydh me dy gishta |
| Lëviz | Lëviz dy gishtat së bashku |
| Shiko gjithçka | Prek {{ui:Përshtat}} |
:::

Rrotullimi kthehet gjithmonë rreth një pike në mes të modelit. Lëvizja e kësaj pike, kështu që pas një lëvizjeje të gjatë rrotullimi mund të duket jashtë qendrës: kliko {{ui:Përshtat}} për ta rivendosur.

## Hije, skaje ose tel

Tre butona të vegjël mbi kubin e pamjes zgjedhin mënyrën e vizatimit të modelit: {{ui:Me hije}}, {{ui:Me hije dhe skaje}} (parazgjedhja) dhe {{ui:Skelet me tel}}. Ata janë edhe komanda (Pamja në menytë dhe lista Personalizo), kështu që mund të kenë taste të tyre. {{ui:Planimetri}}, {{ui:Ndaj}} dhe {{ui:3D}} janë te rreshti {{ui:Pamja}} i shiritit.

## Gabime të zakonshme

- **Pritja e pamjeve të emërtuara.** BimCraft ka katër pamje fikse ({{ui:Përshtat}}, {{ui:Sipër}}, {{ui:Para}}, {{ui:Anësore}}), kubin e pamjes në qoshen e poshtme djathtas dhe rrotullim të lirë. Nuk ruan pamje.
- **Kërkimi i planeve dhe prerjeve.** Nuk ka plane 2D ose kuti prerjeje në këtë version. Pritet modeli me një plan të vetëm {{ui:Prerje}} ([Pre një model IFC me një plan prerjeje](topic:section-plane)), ose fik katet: [Shfaq dhe fshih katet, hapësirat dhe skajet](topic:storeys-and-spaces).
- **Hapja e një skedari projekti dhe pritja e 3D.** Një skedar projekti hapet si një kartë skedari. Eksporto IFC së pari.
- **Hapja e një `.ifczip`.** Nxirre nga zip-i, ose eksporto `.ifc` të thjeshtë.
- **Një model shumë i madh e bën skedën të ngadaltë ose të mbyllet.** Shih [Shfletuesit, pajisjet dhe memoria](topic:platforms).

## Më pas

[Zgjidh një element dhe lexo vetitë e tij](topic:inspect-element).

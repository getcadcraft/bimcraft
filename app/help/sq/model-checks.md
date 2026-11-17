---
title: Kontrollo një model për problemet e zakonshme
summary: Gjej elementët që mungon një veti e nevojshme, GlobalId të përdorura dy herë, elementë pa kat dhe kopje të grumbulluara mbi njëra-tjetrën.
keywords: kontrollo, kontroll modeli, validim, qa, cilësi, veti e mungon, e kërkuar, dublikatë, globalid, guid, kat, i grumbulluar, mbivendosje
from: 4d835513
---

## Çfarë do të bëni

Shikoni një model përpara se ta dorëzoni: problemet që prishin tabelat, sasitë dhe programet e të tjerëve.

## Hapat

1. Hapni një model IFC.
2. Hapni {{ui:Kontrollet e modelit}} në panelin e majtë.
3. Nën {{ui:Vetitë e kërkuara}} një rregull është tashmë aty (çdo klasë, Emri). Ndryshoni klasën e tij (ose {{ui:Çdo klasë}}) dhe vetinë, ose klikoni {{ui:Shto një veti}} për një rregull tjetër; x heq një rregull. Një element dështon një rregull kur vetia mungon ose është e zbrazët. Rregullat mbeten në këtë shfletues për çdo model.
4. Klikoni {{ui:Nis kontrollet}}.
5. Klikoni një rezultat për të zgjedhur ato elemente dhe për t'u zmadhuar mbi to.

## Çfarë duhet të shihni

- **Mungon një veti e kërkuar**: çdo rregull me elementët që nuk kanë vlerë për të.
- **GlobalId e përdorur dy herë**: elementë që ndajnë të njëjtin GlobalId. Programet e tjera i trajtojnë si një element.
- **Pa kat**: elementë me një formë që asnjë kat nuk e përmban.
- **Kopje të grumbulluara mbi njëra-tjetrën**: elementë të së njëjtës klasë dhe lloji, me të njëjtën formë në të njëjtin vend, që numërohen dy herë në sasi.

Çdo rresht në rezultate është një buton: klikoni për të zgjedhur ato elemente dhe për t'u zmadhuar mbi to. Shfaqen vetëm 50 grupet e para të një kontrolli. Të njëjtat gjetje shfaqen edhe te {{ui:Problemet}}.

## Mirë të dish

- Kontrollet shikojnë modelin aktiv kur janë hapur disa. Shihni [Shiko disa modele IFC së bashku](topic:several-models).
- Pas një ndryshimi, nisni përsëri kontrollet.
- Te paneli {{ui:Problemet}}, gjatësitë, sipërfaqet dhe vëllimet në fjalët e një problemi ndjekin {{ui:Njësitë}} e zgjedhura në shiritin e veglave (një derë "800 mm" lexohet 2'-7 1/2" në këmbë dhe inç); ndryshoni njësinë dhe paneli i rishkruan ato.

## Më tej

- [Audito modelin: dhoma, etiketa, LOD, përplasje dhe ndërfaqe](topic:audit-the-model)
- [Gjej elementët sipas klasës, emrit ose vetisë](topic:find)
- [Fshi, prit, kopjo dhe ngjit elementët](topic:copy-paste)

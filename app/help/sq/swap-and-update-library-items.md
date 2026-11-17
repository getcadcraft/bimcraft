---
title: Zëvendëso një element të vendosur dhe përditëso elementet e bibliotekës
summary: Zëvendëso një element të vendosur nga biblioteka me një tjetër, duke mbajtur vendin dhe numrin e elementit, dhe kontrollo te Bibliotekë për versione më të reja të gjithçkaje në model.
keywords: zëvendëso, zëvendësim, përzëvendëso, përditëso, version më i ri, kontrollo për përditësime, bibliotekë, tërhequr, ndryshim licence, numër elementi
from: 8bdfe01d
---

## Çfarë do të bësh

Ndërro mendje për një element pa e lëvizur përsëri, dhe mbaj të përditësuara elementet e bibliotekës në një model.

## Zëvendëso një element

1. Kliko një element bibliotekeje të vendosur në model.
2. Te {{ui:Vetitë}}, kliko {{ui:Zëvendëso elementin…}} në kutinë **Elementi i bibliotekës**. Skeda {{ui:Bibliotekë}} hapet.
3. Gjej elementin e ri dhe kliko kartelën e tij.
4. Kliko {{ui:Zëvendëso … me këtë}}.

Elementi mban vendin, rrotullimin, katin, numrin e elementit, sasinë dhe shënimet. Tipi, forma dhe të dhënat e tij ndryshojnë në elementin e ri. Elementët e vendosur në të njëjtën mënyrë ndajnë një tip, si kur i vendos.

Një element që ka variante (shih [Vendos dhe zëvendëso një element bibliotekeje që ka variante](topic:library-variants)) liston variantet e tij të tjera në krye të skedës {{ui:Bibliotekë}} kur e zëvendëson: një klik për secilin.

Kur elementi i ri është lloj tjetër gjëje, për shembull një lavaman në vend të një tryeze, klasa IFC e elementit ndryshon për t'u përshtatur (këtu nga element mobilje në terminal sanitar), kështu që programe të tjera e planifikojnë saktë. Ai mbetet i njëjti element, me të njëjtin GlobalId, kështu që lidhjet me të funksionojnë ende. {{key:Mod+Z}} e kthen klasën e vjetër me elementin e vjetër.

## Kontrollo për përditësime

1. Kliko {{ui:Përditësimet}} në shirit (ose {{ui:Kontrollo për përditësime}} në kutinë e një elementi bibliotekeje).
2. Lexo listën: çdo element bibliotekeje në model, me versionin e tij në model, versionin më të fundit dhe një status: **I përditësuar**, **Version më i ri**, **Tërhequr** ose **Nuk u gjet**. Thotë edhe çfarë ndryshoi (gjeometria, të dhënat, licenca ose një rregullim).
3. Kliko {{ui:Përditëso}} në një rresht, ose {{ui:Përditëso të gjitha}}.

## Çfarë duhet të shohësh

- "Përditësuan *n* vendosje. Vendet, numrat e elementeve, sasitë dhe shënimet mbahen."
- Rreshta "Përditësuar: *element*" në listën e ndryshimeve. {{key:Mod+Z}} zhbën secilin.

## Gjëra që duhen ditur

- Mund të kontrollohen vetëm elementet që vijnë nga Biblioteka. Elementet nga skedarët nuk mbajnë id bibliotekeje.
- Kur ndryshoi një licencë, kopja që ke vendosur tashmë mban licencën me të cilën erdhi, derisa ta përditësosh.
- Një element **Tërhequr** nuk ofrohet për vendosje të reja. Një i tërhequr për arsye të drejtash autoriale nuk mund të shkarkohet fare; zëvendëse me {{ui:Zëvendëso elementin…}}.
- Një variant i vendosur mbetet ai variant kur versioni më i ri i elementit e ka ende; përndryshe merr variantin parazgjedhur të elementit.
- Kontrollimi dërgon vetëm id-të dhe versionet e elementeve, kurrë modelin tënd.

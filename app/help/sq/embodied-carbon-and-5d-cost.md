---
title: Karboni i trupëzuar dhe kostot te tabela
summary: Mblidh karbonin e trupëzuar të modelit nga një tabelë faktorësh e hapur dhe e redaktueshme, dhe shpërndaj çmimet mbi tabelën 4D në një kurbë kostosh dhe rrjedhe parash. Të dyja nisen nga vlerat që shkruan ose importon.
keywords: karbon i trupëzuar, karbon, co2, kgco2e, emetime, tabelë faktorësh, epd, 5d, kosto, rrjedhë parash, kurbë S, kosto e tabelës, çmime, çmime llogaritjeje sasish
from: 83e82840
---

## Karboni i trupëzuar

Hap panelin **Karboni**. Sasia e çdo elementi (vëllimi, sipërfaqja ose gjatësia) shumëzohet me një faktor nga tabela, sipas modulit të ciklit jetësor: faza e prodhimit është e detyrueshme, transporti dhe mbetjet janë opsionale. Totalet dalin sipas materialit, klasës dhe katit, dhe për metër katror dyshemeje.

**Tabela e faktorëve është e jotja.** Rreshtat që vijnë me BimCraft janë vlera fillestare të përgjithshme me rendin e duhur të madhësisë. Nuk vijnë nga një bazë të dhënash, janë të shënuara si të pakontrolluara dhe duhet të zëvendësohen me burimin që përdor ti (një EPD, një bazë të dhënash kombëtare, ose shifrat e firmës sate). Redakto rreshtat në panel, ose importo dhe eksporto tabelën si CSV ose JSON. Rreshtat që shton zëvendësojnë rreshtin fillestar me të njëjtin id. Tabela ruhet në model.

Elementët pa përputhje, ose pa sasi, listohen si Probleme dhe nuk numërohen si zero.

## Kostot në tabelën 4D

Hap panelin **Kosto** pranë tabelës 4D. Jepi çmime (shkruaji, importo një CSV ose JSON, ose sill rreshtat e TakeoffCraft), lidh çdo çmim me materialet e modelit përmes fjalëve kyçe, dhe ai çmimëzon elementët e çdo detyre. Kostoja e një detyre shpërndahet në ditët nga fillimi deri në mbarim (në mënyrë të barabartë, ose me ngarkesë në fillim ose në fund), dhe paneli vizaton kurbën kumulative të rrjedhës së parave sipas ditës, javës ose muajit, me koston sipas fazës dhe paketës, dhe atë që është planifikuar krahasuar me atë që është ndërtuar në një datë. Eksporti CSV. Asgjë nuk çmimëzohet derisa të japësh çmime: asnjë nuk jepet bashkë me programin.

## Monedha

Një tabelë çmimesh mund të thotë në çfarë monedhe janë çmimet (tre shkronja, si USD ose EUR). Paneli 5D ka një kuti për këtë; ruhet në skedar bashkë me çmimet, dhe eksportet JSON e mbajnë. Një tabelë e bërë më parë, ose ku e le bosh, nuk ka monedhë: kostot e saj shfaqen si USD, parazgjedhja e aplikacionit, dhe paneli dhe totalet vijuese e thonë këtë. Asnjë monedhë nuk konvertohet në tjetrën.

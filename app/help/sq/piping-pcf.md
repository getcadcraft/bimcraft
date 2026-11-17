---
title: Dërgoni tubacionin te një program stresi ose izometrik, dhe lexojeni përsëri (PCF)
summary: Shkruani linjat e tubave të modelit si skedar përbërësish tubacioni PCF, ose lexoni një skedar PCF nga një program i stresit të tubave ose izometrik dhe vizatoni tubin e tij si linja.
keywords: pcf, skedar përbërësish tubacioni, stres tubi, izometrik, izometrikë, eksport, import, tubacion, instalim industrial, tub çeliku, zhvendos një punë, programe të tjera
from: 24f91355
---

## Çfarë do të bëni

PCF është skedari tekst i thjeshtë që programet e stresit të tubave dhe izometrike lexojnë dhe shkruajnë. Ai liston përbërësit e çdo tubacioni me pikat e tyre të fundit dhe diametrat e brendshëm (bore).

## Eksporto

1. Zgjidhni veglën Tub. Rreshti i opsioneve tregon **Export PCF**.
2. Klikoni. Çdo linjë tubi në model shkruhet: tub i drejtë, lakime (kthesë 90 gradë, përndryshe një përkulje), trungje me pikën e degës së tyre, reduktorë dhe valvula.
3. Skedari përdor milimetra. Diametrat e brendshëm janë diametra nominalë në milimetra. Pika qendrore e një lakimi është kënduku i tij, ku takohen dy krahët.

PCF shkruhet për tub çeliku me saldim tip butt. Një linjë në material tjetër shkruhet gjithashtu, me kode përbërësish çeliku, dhe shënohet te paneli Problemet.

## Import

1. Zgjidhni veglën Tub dhe klikoni **Import PCF…**, pastaj zgjidhni skedarin.
2. Nga tubi i drejtë deri te lakimet, përkuljet, valvulat dhe flanxhat bëhet një linjë në nivelin aktual. Një ndryshim madhësie nis një linjë të re. Dega e një trungu bëhet linjë e vet që nis te qendra e trungut.
3. Modeli i vendos pjesët e veta lidhëse. Reduktorët dhe trungjet nuk kopjohen: shfaqen aty ku takohen linja me madhësi të ndryshme, ose një degë.

:::note
Lartësitë në skedar lexohen si lartësi mbi nivelin aktual. Ngarkesat, mbajtëset dhe vetë analiza e stresit nuk janë në një skedar PCF dhe nuk vijnë me të.
:::

## Kontrolloni çfarë erdhi

- Gjatësia totale e tubit për çdo tubacion duhet të përputhet me burimin.
- Paneli Problemet liston, një herë secilin, një lakim whose pika qendrore nuk është në të njëjtën distancë nga të dy skajet, tub pa gjatësi, dhe një diametër i brendshëm që nuk është madhësi standarde.

## Tubacion që është tashmë në një skedar IFC

Kur është hapur një skedar IFC, **Export PCF** shkruan edhe segmentet e tij të tubit, pjesët lidhëse dhe valvulat, pranë linjave që keni vizatuar. Një segment merr skajet nga portat e tij, ose nga skajet e trupit të tij. Një pjesë lidhëse pa porta lihet jashtë dhe paneli Problemet e thotë këtë. Mund të eksportoni vetëm nga IFC kur modeli nuk ka linja të vizatuara.

Gjatë importit, mbajtëset, olet, flanxhat, garniturat dhe kapakët në skedar nuk vizatohen. Paneli Problemet liston sa prej secilit u la jashtë, që asgjë të mos zhduket pa u vënë re.

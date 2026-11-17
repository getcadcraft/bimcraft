---
title: Dimensiono tubat dhe kanalet, kontrollo mbushjen e kabllove dhe ndriçimin
summary: Kontrollo përmasat e tubave dhe kanaleve të furnizimit me rënien e presionit, nxirr kabllot nëpër tavat dhe tubat për kabllo dhe shiko mbushjen e tyre, dhe llogarit ndriçimin në dhoma nga skedarët IES ose EULUMDAT. Vlerat e paracaktuara janë të shënuara; shkruaj vlerat e kodit në fuqi.
keywords: dimensionim, dimensionim tubash, dimensionim kanalesh, rënie presioni, njësi armaturash, kërkesë, hunter, hazen-williams, shpejtësi, fërkim, fërkim i barabartë, presion ventilatori, kllapë, rrugë kritike, tavë kabllosh, tub kablloje, mbushje, tabela e kabllove, ies, ldt, eulumdat, fotometri, iluminim, lux, uniformitet, llogaritja e ndriçimit, dendësia e energjisë, mep, llogaritje, problemet
from: 9cb90815
---

## Çfarë do të bësh

Vizato tubat, kanalet, tavat e kabllove dhe tubat për kabllo si zakonisht, pastaj hap panelin **Llogaritjet**. Çdo skedë lexon modelin, shfaq një tabelë dhe liston çfarë është gabim si Problemet te paneli ⚠. Kur një përmasë do të zgjidhte një Problem, **Zbato përmasat** ndryshon vargjet me një hap zhbërjeje.

Këto janë ndihmëza hartimi. Çdo vlerë e paracaktuar është e shënuar në ekran, dhe asnjëra nuk është tabelë kodi: shkruaj numrat nga standardi sipas të cilit projekton, dhe bëj që rezultatin ta rishikojë inxhinieri që përgjigjet për të.

## Tubat

1. Zgjidh tastin e **sistemit** (uji i ftohtë është `cw`, uji i ngrohtë `hw`).
2. Cakto shpejtësinë më të lartë dhe, nëse dëshiron të kontrollohet presioni, presionin te burimi dhe presionin më të ulët që i nevojitet një armature.
3. Kliko {{ui:Kontrollo}}.

Çdo tub mban kërkesën e njësive të armaturave poshtë tij. Kërkesa vjen nga një kurbë e njësive të armaturave kundrejt rrjedhës, në mënyrën që përshkroi Hunter. **Kurba e integruar është një shembull, jo një tabelë kodi**; Problemet e thonë këtë derisa të shkruash të tyren. Fërkimi është Hazen–Williams, pjesët e lidhjes janë koeficientë humbjeje, dhe një ngritje kushton 9.8 kPa për metër. Njësitë e një armature vijnë nga lloji i saj, ose nga numri që cakton me mjetin asistent `loads_set`.

## Kanalet

Cakto sistemin, normën e fërkimit (fërkim i barabartë) ose një shpejtësi, dhe çdo humbje në serpentinë, filtër ose zhurmëmbytës. Terminalet e marrin rrjedhën e ajrit nga `loads_set` te difuzori. Tabela shfaq shpejtësinë dhe fërkimin për çdo pjesë, **presionin e ventilatorit** te rruga kritike, dhe presionin që duhet të marrë kllapa e çdo terminali tjetër. Humbjet e pjesëve të lidhjes përdorin koeficientë të rrumbullakosur të paracaktuar, jo një bazë të dhënash pjesësh.

## Tavat e kabllove dhe tubat për kabllo

Vizato me mjetin **Kanal ajri**: sistemet **Tavë kabllosh** dhe **Tub kablloje** ruhen si mbajtës kabllosh, kështu që programet e tjera i lexojnë si tava dhe tuba për kabllo. Te skeda **Kabllot**, ngjit listën e kabllove (etiketa, diametri i jashtëm në mm, numri, nga, te). `from` dhe `to` janë etiketa e një pjese pajisjeje ose një pikë `x,y,z` në milimetra. Kabllot ndjekin rrugën më të shkurtër të vazhdueshme nëpër tava dhe tuba; çdo varg tregon mbushjen e tij kundrejt kufijve që shkruan, dhe tabela ruhet si CSV me një gjatësi që përfshin një përqindje rezerve dhe skajet.

## Ndriçimi

Jepi çdo armaturë skedarin e saj IES (LM-63) ose EULUMDAT me mjetin asistent `photometry_set`. Shkruaj objektivat, hapësirën e rrjetës dhe lartësinë e sipërfaqes së punës. Rezultati është vetëm ndriçim **i drejtpërdrejtë**: pa reflektim ndërmjet sipërfaqeve dhe pa hije, kështu që është një kufi i poshtëm në një dhomë.

## Spërkatësit e zjarrit

Shtojca **Spërkatësit e zjarrit** ka skedën e vet; shih ndihmën e saj.

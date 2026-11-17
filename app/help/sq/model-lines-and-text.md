---
title: Vija dhe tekst i modelit: të vizatuara në model, në planin e punës
summary: Një vijë modeli është një vijë, polivijë ose hark që jeton në model dhe shfaqet në çdo pamje që e sheh. Teksti i modelit është shkrim 3D me thellësi reale. Të dyja vizatohen në planin e punës.
keywords: vijë modeli, tekst modeli, tekst 3D, shkrim, tabelë, shenjëzim, vijë në 3D, hark, polivijë, plan pune, tekst i shtrirë, shkronjë, thellësi, vijë detaji, vijë vizatimi, shënim, IfcAnnotation
from: fc9cccb5
---

## Çfarë do të bësh

Vizato vija dhe shkrim që janë pjesë e modelit, jo e një pamjeje.

## Hapat

1. Vendos planin e punës së pari (shih **Plani i punës**). Një plan niveli vizatohet në planimetri; një plan vertikal në Shikuesin e planit të punës.
2. Për një vijë zgjidh **Vijë modeli** në menynë **Ndërtimi** dhe zgjidh **Vijë**, **Polivijë** ose **Hark (tri pika)**:
   - një vijë është dy klikime;
   - një polivijë është një klikim për çdo pikë, pastaj {{key:Enter}} ose klik dyfish. Një klikim mbi pikën e parë e mbyll atë;
   - një hark është tre klikime: fillimi, një pikë që kalon nga ajo, fundi.
3. Për tekst zgjidh **Tekst modeli**. Shkruaj fjalët, vendos lartësinë e shkronjave dhe thellësinë, pastaj kliko ku fillon teksti (skaji i majtë i vijës bazë).
4. Zgjidh një vijë ose një tekst për ta parë te **Vetitë**. Fjalët, lartësia dhe thellësia e tekstit mund të ndryshohen atje. **Fshi** e heq.

## Ku shfaqen

- Një vijë modeli shfaqet në planimetrinë e nivelit të saj, në pamjen 3D, në panelin e fasadës dhe prerjes, dhe në Shikuesin e planit të punës kur shtrihet mbi planin e punës. Një vijë vizatimi (Shëno, Vijë) i përket vetëm një pamjeje.
- Teksti i modelit është gjeometri e ngurtë: shfaqet kudo ku shfaqet modeli, në planimetri, në 3D, në fasada dhe prerje, dhe në fletë.
- Vijat e modelit nuk vizatohen ende në fletët e printuara. Teksti i modelit po.

## Shkronjat

Teksti i modelit përdor të njëjtën shkronjë si fletët dhe PDF-të: Liberation Sans, sipas SIL Open Font License. Një shkronjë që fonti nuk e ka vizatohet si pikëpyetje dhe të tregohet cila. Ka një shkronjë dhe një peshë. Shkronjat janë të distancuara sipas gjerësive të vetë fontit, pa kerning.

## Në skedarin IFC

- Një vijë modeli është një IfcAnnotation me llojin e objektit ModelLine. Forma e saj është një kurbë 3D: një polivijë, ose një rreth i prerë për një hark.
- Teksti i modelit është një IfcBuildingElementProxy me llojin e objektit ModelText. Forma e tij është një solid i shtrirë për çdo copë shkronje, me vrimat e shkronjave si O dhe B. Sasitë e tij janë sipërfaqja e fytyrës dhe vëllimi (sipërfaqja e fytyrës herë thellësia).

## Mirë për t'u ditur

- Çdo madhësi bëhet siç kërkon. Vetëm një vijë pa gjatësi, një hark ku tri pikat janë në një vijë, ose një tekst pa shkronja refuzohet, sepse nuk ka çfarë të bëhet.
- Çdo vijë, dhe çdo tekst ose ndryshim i tij, është një hap i Zhbërjes.

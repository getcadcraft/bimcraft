---
title: Çështjet, rishikimet dhe regjistri i ndryshimeve
summary: Regjistro çdo grup fletësh që jep, shih çfarë ka ndryshuar që atëherë në çdo fletë dhe element, dhe mbaj udhëzimet në terren, vizatimet e punishteve dhe modelet e lidhura të lidhura me çështjen ku i përkasin.
keywords: çështje, grup i lëshuar, grup i dorëzuar, dorëzim, rishikim, rishikime, çfarë ka ndryshuar, që nga çështja, regjistri i ndryshimeve, regjistri i vizatimeve, dërgesë, udhëzim në terren, vizatim punishteje, model i lidhur, ofertë, ndërtim, pamje e ruajtur, krahaso
from: 4c732832
---

## Çfarë do të bëni

Regjistroni një çështje: cilat fleta janë dërguar, në çfarë date, për çfarë qëllimi, secila me rishikimin e vet. Më vonë, pyesni çfarë ka ndryshuar që nga ajo çështje. Mbani udhëzimet në terren dhe vizatimet e punishteve të kthyera të lidhura me çështjen.

## Hapat

1. Në panelin e majtë hapni **Çështjet dhe rishikimet**.
2. Zgjidhni **Regjistro një çështje**. Rishikimi sugjerohet (A, pastaj B; një rishikim i numëruar si P1 numërohet më tej). Zgjidhni për çfarë është lëshuar, kujt i dërgohet, datën dhe fletët. Kur faza e projektit është caktuar, qëllimi ndjek atë. Kur paketa e lejes ka një listë dokumentesh mbështetëse, fletët e lidhura me atë listë shënohen automatikisht.
3. Lëreni të shënuar **Ruaj gjithashtu një kopje të modelit si të lëshuar** për ta mbajtur modelin saktësisht siç doli. Kopja shkarkohet; emri, madhësia dhe SHA-256 e saj ruhen me çështjen.
4. Zgjidhni **Regjistro këtë çështje**. Një fletë që ka ndryshuar që kur u lëshua herën e fundit merr rishikimin e ri. Një fletë që nuk ka ndryshuar e mban rishikimin që ka. Blloku i titullit të çdo fletë tregon rishikimin e saj.
5. Për të parë çfarë ka ndryshuar, zgjidhni **Ndryshime që nga** pranë një çështjeje. Çdo fletë shfaq E njëjtë ose E ndryshuar, me elementet e shtuara, të ndryshuara dhe të hequra në të. Klikoni një numër për të zgjedhur ato elemente.
6. Zgjidhni **Shto një regjistrim** për një udhëzim në terren, një vizatim punishteje, një grup markimesh, një model të lidhur ose një shënim. Zgjidhni çështjen me të cilën lidhet. Një skedar që zgjidhni regjistrohet me emrin, madhësinë dhe SHA-256; skedari mbetet aty ku është.
7. **Regjistri i ndryshimeve të vizatimit** tregon një rresht për çdo fletë dhe një kolonë për çdo çështje. **Shkarko regjistrin e ndryshimeve (CSV)** e ruan me çështjet dhe regjistrimet.
8. **Ruaj historikun e çështjeve** shkruan një skedar `.issues.json`. MarkupCraft, TakeoffCraft dhe DetailCraft e lexojnë me **Lexo një historik çështjesh**.

## Të mirë për t'u ditur

- Historiku mbahet brenda skedarit IFC (grupi i vetive `CadCraft_Issues` te projekti). Programet e tjera e injorojnë.
- Një fletë numërohet e ndryshuar kur vetë konfigurimi i saj ndryshoi, ose kur ndryshoi një element që ajo shfaq: një planimetri shfaq nivelin e saj, një fasadë ose prerje të gjithë modelin, një tabelë dyersh ose dritaresh dyert ose dritaret e saj.
- Një element numërohet i ndryshuar kur ndryshon një veti, pozicioni, madhësia ose forma e tij.
- Për të parë saktësisht cila veti ndryshoi, hapni kopjen e ruajtur të modelit të lëshuar me **Krahaso versionet**.
- Heqja e një çështjeje mban regjistrimet e saj, pa çështje. Çdo hap është një Zhbëj.
- Një model me më shumë se 60,000 elementë nuk mban regjistër për secilin element me çështjen. Fletët krahasohen ende.

## Nuk është ndërtuar ende

- Fletët nuk ruhen si PDF me çështjen.
- Një re rishikimi nuk vizatohet në fletët e vetë BimCraft. Regjistroni retë në MarkupCraft, të lidhura me çështjen.

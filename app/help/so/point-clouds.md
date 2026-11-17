---
title: Muuji daruurta barta oo ag moodeelka
summary: Fur scan laser (LAS, LAZ, E57, PLY, PCD, PTX, PTS ama XYZ) muuqaalka 3D keligiis ama moodeel IFC la socda, midabee, gooy xaashi khafiif ah, ka qiyaas barooyinkiisa, oo u dhiib app-ka naqshadaha si uu u raad-raaco khadadka sida la dhisay.
keywords: daruurta barta, scan laser, scan, lidar, las, laz, e57, ply, pcd, ptx, xyz, pts, sida la dhisay, sahan, isku-dhigid, goyn, qiyaas, raad, scan ilaa bim
from: d0a3e740
---

## Waxa aad samayn doontid

Eeg scan laser ee dhismo oo ku xiga moodeelkeeda: hubi in waxa la dhisay uu waafaqayo naqshadda, ka qiyaas masaafada u dhaxaysa barooyinka scan-ka, oo goo xaashi khafiif ah si aad ugu akhrido darbiyada, albaabada iyo tiirarka.

## Tallaabooyin

1. Fur daruurta: {{ui:Furan}} fayl `.las`, `.laz`, `.e57`, `.ply`, `.pcd`, `.ptx`, `.pts` ama `.xyz`, ama ku dhig bogga (eeg mawduuca qaababka daruurta barta si aad u aragto waxa mid kasta keenayo, iyo waxa laga dhoofiyo software-ka scanner-ka). Marka moodeel la furay, daruurtu waxay ku biirtaa moodeelka muuqaalka 3D; furista daruur weligeed ma xirto moodeelka ama isbeddelladiisa aan la kaydin. Moodeel la'aan, daruurtu waa furmaa keligeed.
2. Jaraa bar daruurta ayaa soo baxa hoosta qalabka. Waxay sheegaysaa inta barood ee muuqata iyo inta faylku leeyahay.
3. Dooro {{ui:Midabka ku salaysan}}: midabada faylka (marka scanner-ku kaydiyay), {{ui:Joog}}, {{ui:Xoogga}}, {{ui:Nooca}} (fasallada LiDAR sida dhulka, dhirta iyo dhismaha) ama {{ui:Hal midab}}. {{ui:Cabbirka}} wuxuu ka dhigaa barooyinka weyn ama yar.
4. Riix {{ui:Qorshe}} hoosta {{ui:Goyn}} si aad u hayso kaliya xaashi khafiif ah oo 1.2 m ka sarreeya barta ugu hoose, oo laga eego sare: darbiyada, furayaasha albaabada iyo tiirarka waxay u akhriyi doonaan sida qorshe dabaq. {{ui:Hore}} iyo {{ui:Dhinac}} waxay gooyaan xaashiyo toosan oo ah muuqaalka dhinacyada iyo qaybaha. Xaashiga ku dhaqaaq {{ui:Ag}} hoose, oo beddel {{ui:Dhumucda}} (mitir). {{ui:Demi}} wuxuu mar kale muujiyaa daruurta oo dhan.
5. Riix {{ui:Qiyaas}} qalabka sare. Taliyuhu wuxuu ku dhegaa barooyinka daruurta (calaamadu waxay leedahay "daruurta barta"), sidaas darteed waxaad ka qiyaasi kartaa darbi ilaa darbi xaashiga goosan, ama moodeel ilaa scan. Geesta ama khadka moodeelka ee u dhow ayaa weli mudan.
6. Marka {{ui:Qiyaas}} › {{ui:Booska}}, bar daruur wuxuu siinayaa latitude iyo longitude ka nidaamka isku-xirka daruurta, marka faylku magacooda sheego.
7. {{ui:Qari}} wuxuu qariyaa daruurta wakhti yar; {{ui:Ka saar}} wuu ka saaraa. {{ui:Muuji}} › {{ui:Daruurta barta}} wuxuu qariyaa ama muujiyaa jaraa-ka.

## Meesha ay daruurtu tagto

{{ui:Dhig}} jaraha ayaa sheegaya sida daruurtu ula jaanqaadayso moodeelka:

- **Isku-xirka moodeelka**: lambarada daruurta waa lambarada moodeelka (scan la isku dhigay isku-xirka naqshadda).
- **Isku-xirka khariidadda**: moodeelku wuxuu leeyahay beddelka khariidadda (IfcMapConversion) daruurtuna waxay ku jirtaa isla nidaamka mapped-ka: daruurta waxaa lagu dhigaa isagoo mararka qaarkood la mari karo beddelkaas. Haddii labadaba magacyo kala duwan sheegaan, jaraha ayaa sheegaya.
- **Dhexda moodeelka**: marka midna daruurta u dhigi waayo meel u dhow moodeelka, dhexdeeda waxay saaraa dhexda moodeelka, barta ugu hoose ee dabaqa moodeelka. Dooro doorasho kale si aad u beddesho.

Marka faylku aanu sheegin cabbirkiisa, BimCraft wuxuu akhriyaa mitir, wuxuuna bixiyaa {{ui:Cutubyada}} jaraha.

## Raadi khadadka sida la dhisay

Riix {{ui:Ku rajee CadCraft}} si aad daruurta ugu gudbiso app-ka naqshadaha tab cusub. Halkaas waxay ku furmaysaa hoosta sawirka, halkaas oo goyn qorshe iyo ku dhejinta (snap) shayga uu kuu ogolaanayo inaad darbiyada ku sawirto scan-ka dushiisa. Eeg mawduuca CadCraft ee daruurta barta.

## Inta barood

Scan wuxuu ku hayn karaa boqolaal milyan oo bar. BimCraft wuxuu akhriyaa bar kasta hal mar, wuxuuna ilaaliyaa qayb isku mid ah oo ka mid ah si uu u sawiro: {{ui:Muuji}} jaraha ayaa dejiya inta (1, 2, 5 ama 10 milyan). Barooyin badan xusuus badan iyo kaarka muuqaalka oo xoog badan ayaa u baahan. Tirinta fasal kasta oo LiDAR waa tiro dhammaan barooyinka faylka.

:::note
Faylalka waxaa lagu akhriyaa kombiyuutarkan; wax lagama soo dirin. LAS 1.0–1.4 iyo LAZ waa la akhriyaa (LAZ ilaa 1 GB, oo lagu hayo xusuusta intii la akhrinayay); E57 ilaa 6 milyan oo bar iyo 512 MB hadda (skaanada waaweyn: dhoofi LAS ama LAZ); PLY, PCD iyo PTX oo buuxa; daruurta qoraalka ah waa `x y z`, oo leh tiirarka midabka (`r g b`) iyo xoogga marka ay jiraan.
:::

## Skaano badan

Skaanada laga qaaday meelo kala duwan waa la dhigi karaa hal qaab, ICP ayaa lagu hagaajin karaa, waana la dhoofin karaa hal LAS ama E57: eeg [Isku-dhig skaano badan hal mid](topic:register-scans).

---
title: Shfletuesit, pajisjet dhe memoria
summary: Çfarë ndryshon në BimCraft midis Chrome, Edge, Firefox dhe Safari, në Mac, Windows dhe Linux, me miun, trackpad-in ose prekjen, dhe sa madh skedar mund të marrë.
keywords: shfletues, chrome, edge, firefox, safari, brave, mac, windows, linux, ipad, tablet, telefon, prekje, trackpad, memorie, skedarë të mëdhenj, webgl, performancë
from: fd8acba1
---

BimCraft punon në versionet aktuale të Chrome, Edge, Firefox dhe Safari, në Mac, Windows dhe Linux. Pamja 3D kërkon WebGL, që çdo shfletues aktual e ka. Shih [Shfletuesit dhe kompjuterët](common:browsers) për atë që kërkojnë aplikacionet përgjithësisht.

## Hapja e një dosjeje

| Shfletuesi | {{ui:Hap një dosje}} bën këtë | Tërheqja e një dosjeje brenda | {{ui:Dosjet e fundit}} |
|---|---|---|---|
| Chrome, Edge | Zgjedhësi i dosjeve i shfletuesit, pastaj "A lejohet sajti të shohë skedarët?": klikoni **Shiko skedarët** | Hapet pa asnjë pyetje | Po, për dosjet e zgjedhura ose të tërhequra |
| Firefox | Zgjedhësi i dosjeve i sistemit | Hapet pa asnjë pyetje | Jo |
| Safari | Zgjedhësi i dosjeve i sistemit, me një buton **Ngarko** (asgjë nuk ngarkohet) | Hapet pa asnjë pyetje | Jo |

Pas skenës: Chrome dhe Edge përdorin zgjedhësin File System Access dhe mund ta mbajnë mend dosjen. Firefox dhe Safari përdorin zgjedhësin më të vjetër të dosjeve, që jep çdo skedar të dosjes njëherësh dhe nuk mund të mbahet mend. Një dosje e tërhequr lexohet hyrje pas hyrjeje në çdo shfletues.

:::chromium
Brave dhe disa shfletues të tjerë Chromium e fikin zgjedhësin e dosjeve. BimCraft atëherë përdor zgjedhësin e dosjeve të sistemit, dhe shfletuesi mund të pyesë "Të ngarkohen *n* skedarë në këtë sajt?". Asgjë nuk ngarkohet; skedarët shkojnë vetëm te skeda. Tërheqja e dosjes brenda e shmang pyetjen.
:::

## Mac, Windows dhe Linux

- Shkurtoret e shkruara {{key:Mod+S}} dhe {{key:Mod+Z}} janë Command në Mac dhe Ctrl në Windows dhe Linux.
- {{key:Ctrl+Shift+F}} (mënyrat e ekranit) është Control në çdo platformë, përfshirë Mac.
- Dialogët e skedarëve dhe dosja e shkarkimeve janë të sistemit tuaj.

## Miu, trackpad-i dhe prekja

| Hyrja | Pamja 3D | Vizatimi 2D |
|---|---|---|
| Miu | Tërheqja me butonin e majtë rrotullon, tërheqja me të djathtën lëviz, rrotulla zmadhon, klikimi zgjedh | Çdo tërheqje lëviz pamjen, rrotulla zmadhon, klikimi i dyfishtë përshtat |
| Trackpad | Klik-tërheqje rrotullon; {{key:Shift}} ose {{key:Mod}} dhe tërheqje lëviz; lëvizja me dy gishta ose pinch zmadhon | Klik-tërheqje lëviz pamjen; lëvizja me dy gishta ose pinch zmadhon |
| Prekja | Një gisht rrotullon, dy gishta pinch dhe lëvizin, prekja zgjedh | Një gisht lëviz pamjen; nuk ka ende zmadhim me pinch; prekni {{ui:Përshtat}} |

Në trackpad-in e Mac, klikimi i djathtë është klik me dy gishta (ose klik me Control). Shih [Tastet, miet dhe trackpad-et](common:keys).

Tabletët dhe telefonat mund të hapin skedarë të vetëm dhe t'i shohin, por ekrani është i vogël, shumë shfletues celularësh nuk mund të zgjedhin dosje, dhe modele të mëdha mund të mos futen në memorien e tyre. Një kompjuter punon më mirë.

## Skedarët e mëdhenj dhe memoria

Çdo gjë që lexon BimCraft jeton në memorien e skedës së shfletuesit. Sa mund të përdorë një skedë varet nga shfletuesi dhe kompjuteri juaj, më shumë se nga BimCraft.

| Skedari | Sa lexohet | Çfarë të pritet |
|---|---|---|
| IFC | Gjithë skedari, plus gjeometria 3D e ndërtuar prej tij | Sa e madhe është varet nga kompjuteri dhe shfletuesi juaj; një model me disa qindra megabajt mund të jetë shumë për një laptop. Mbi 1.5 milionë trekëndësha, skajet fiken |
| Skedarët e projektit dhe të familjeve | Rreth 40 KB deri 100 KB, pavarësisht madhësisë | Edhe modelet qendrore shumë të mëdha hapen në një moment, edhe nga një disk rrjeti |
| DWG dhe DXF | Gjithë skedari | Vizatimet shumë të mëdha shfaqin "Ky vizatim është shumë i madh; shfaqet vetëm një pjesë e tij." |
| Dosjet | Lista e skedarëve, plus disa kilobajt për model | Deri në 20,000 skedarë |

Nëse një skedë mbaron memorien, shfletuesi shfaq faqen e vet të gabimit ("Aw, Snap!" në Chrome, për shembull). Mbyllni skedat e tjera, rifreskoni BimCraft dhe provoni përsëri, ose përdorni një kompjuter me më shumë memorie.

## Të lidhura

- [Online dhe offline](topic:online-offline)
- [Zgjidhja e problemeve](topic:troubleshooting)

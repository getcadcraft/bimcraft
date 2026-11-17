---
title: Boru və kanalları konstruksiya ilə yoxlayın
summary: Boru və kanalların hazır toqquşma dəstlərini divarlar, plitələr, tirlər və sütunlarla işə salın, izolyasiya və boşluqdan daha yaxın keçən boru və kanal xətlərini tapın və xətlərin divar və plitələrdə tələb etdiyi deşikləri CSV və BCF kimi siyahıya salın.
keywords: mep, toqquşma, toqquşma yoxlaması, koordinasiya, konstruksiya, divarlar, plitələr, tirlər, sütunlar, təmizlik, yumşaq toqquşma, izolyasiya, boşluq, deşik, deşiklər, keçid, qoruyucu manşon, nüvə, tikinti işləri, bcf, csv
from: 2d597f01
---

## Nə edəcəksiniz

Xidmətlərin binaya uyğun olduğuna əmin olun: konstruksiyaya nə girir, ona nə qədər yaxın keçir və divar və plitələrdə deşiklər harada lazımdır. Sol paneldə {{ui:Toqquşma yoxlaması}} açın; **Boru və kanallar konstruksiyaya qarşı** bölməsi adi yoxlamanın altındadır.

## Sərt toqquşmalar

İki dəst siyahısı indi **Boru və kanallar**, **Divarlar**, **Plitələr və damlar**, **Tirlər**, **Sütunlar** və **Konstruksiya** (dörd növün hamısı) də təklif edir, hər birində neçə element olduğu göstərilir. Birinci və sonuncu dəsti seçmək və yoxlamanı işə salmaq üçün {{ui:Borular və kanallar × konstruksiya}} klikləyin; və ya istənilən cütü özünüz seçin və {{ui:Başlat}} klikləyin. Bax [Toqquşmaların yoxlanılması](topic:clash-check).

## Təmizliklər

Bəzi xidmətlərin ətrafında yer lazımdır: izolyasiyaları üçün və iş görmək və ya qoruyucu manşon üçün.

1. Boru və ya kanal xəttinə Xüsusiyyətlər bölməsində **İzolyasiya** qalınlığını verin (bunun üçün heç nə çəkilmir).
2. Toqquşma yoxlamasında boru və kanalların ətrafında boşluğu (mm) yazın.
3. {{ui:Təmizlikləri yoxla}} klikləyin: divar, plitə, tir və ya sütuna izolyasiyası üstəgəl boşluğundan daha yaxın olan hər hissə, mövcud məsafə və tələb olunan məsafə ilə siyahıya salınır. Cütü görmək üçün sətrə klikləyin.

Divardan və ya plitədən keçən hissə təmizlik deyil, deşikdir və orada siyahıya salınır.

## Lazım olan deşiklər

{{ui:Lazım olan deşiklər}} klikləyin. Boru və ya kanal xəttinin mərkəz xətti divar və ya plitədən keçdikdə, BimCraft ona lazım olan deşiyi siyahıya salır: dəyirmi boru və ya kanal üçün dəyirmi, əks halda düzbucaqlı; ölçüsü xəttin xarici ölçüsü, izolyasiyasının iki mislı və boşluğunun iki mislı qədərdir, xəttin kəsişdiyi yerdə mərkəzləşdirilir. Xətti və divarı və ya plitəni görmək üçün sətrə klikləyin.

- {{ui:Deşiklər CSV kimi}}: hər deşik üçün bir sətir — xətt, onun ölçüsü və izolyasiyası, deşiyin ölçüsü, keçdiyi element və onun GlobalId-si, səviyyə, mərkəzin X, Y və Z koordinatları və xəttin nə qədər keçdiyi.
- {{ui:Deşiklər BCF məsələləri kimi}}: hər deşik üçün bir məsələ, ona baxan kamera, seçilmiş xətt və element ilə, konstruktor mühəndisin proqramı üçün.

:::note
Heç nə kəsilmir: deşiklər onların ölçüsünü təyin edənlər üçün siyahıdır. Boşluq sizin yazdığınızdır; deşiyin nə qədər böyük olmalı olduğunu heç bir norma demir. Tirlər və sütunlar deşik deyil, toqquşmadır: boru onlardan keçə bilərmi, bu konstruktor mühəndisin qərarıdır.
:::

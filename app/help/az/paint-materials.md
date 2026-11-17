---
title: Divarlara, döşəmələrə və damlara material vurun
summary: Elementlərə kərpic, siding, şifer, taxta, daş və ya kafel kimi material verin, bütün elementə və ya onun bir tərəfinə; IFC-də saxlanılsın və vizuallaşdırılmış şəkillərdə göstərilsin.
keywords: boyamaq, material, materiallar, örtük, tekstura, kərpic, siding, şifer, dam örtüyü, taxta, daş, kafel, beton, suvaq, çəmən, çınqıl, şüşə, metal, divarın tərəfi, içəri, kənar, döşəmə örtüyü, otaq, səth üslubu
from: fbfed676
---

{{ui:Boya}} alətlər panelində 3D görünüşün üzərində material kitabxanasını açır: kərpic və bloklar, siding, dam örtükləri, taxta, daş, kafel, beton, suvaq, torpaq, şüşə və metal.

## Elementləri boyayın

1. {{ui:Boya}} klikləyin.
2. Bir material klikləyin.
3. 3D görünüşdə elementləri klikləyin. Hər klik klik etdiyiniz elementi boyayır.

Çoxunu birdən boyamaq üçün əvvəlcə onları seçin (klik, {{key:Ctrl}}+klik, ya da [axtarış](topic:find)), sonra materialı klikləyin: seçilən hər element bir addımda onu alır.

Element 3D görünüşdə materialın rəngini dərhal göstərir. Onun teksturası [vizuallaşdırılmış şəkildə](topic:render) görünür. {{key:Esc}} ya da {{ui:Bağla}} boyamanı bitirir.

## Bir tərəfi boyayın

{{ui:Yalnız klikləyilən tərəf}} seçin, sonra istədiyiniz tərəfi klikləyin: divarın kənarını siding ilə, içərisini başqa örtüklə, döşəmənin üst tərəfini taxta ilə, altını isə olduğu kimi saxlayaraq. Elementin qalan hissəsi öz materialını saxlayır.

Tərəf elementin öz istiqamətlərindən tapılır, buna görə elementi köçürdükdə və ya fırladıqda eyni tərəf qalır.

Döşəmələri otaq-otaq boyamaq üçün hər otağa öz döşəməsini verin ({{ui:Çək}} › {{ui:Döşəmə}} › **Bu otaq**, bax: [Otaqlar, döşəmələr, tavanlar və damlar](topic:floors-and-roofs)), sonra hər döşəmənin üst tərəfini boyayın.

## Materialı çıxarın

Zolaqlı nümunəni ({{ui:Material yoxdur}}) klikləyin, sonra elementi. Onun üzərindəki bütün materiallar, tərəflər daxil, silinir.

## Faylda

Boyamaq IFC-ni dəyişir (hər dəfə bir addım, {{key:Ctrl+Z}} geri qaytarır) və sadə IFC olaraq qalır:

- hər boyanmış element öz materialını adlandıran `CadCraft_Render` xassə dəstini alır və hər boyanmış tərəf üçün bir xassə;
- onun gövdəsi materialın rəngi ilə səth üslubu alır, buna görə digər BIM proqramları rəngi göstərir. IFC4-də üslub teksturanı da adlandırır.

BimCraft boyadığınız divarı yenidən formalaşdırdıqda (məsələn, onun ucunu hərəkət etdirdikdə), divar öz materialını və rəngini saxlayır: BimCraft-da, şəkillərdə və digər proqramlarda.

:::note
Teksturaları BimCraft özü çəkir: onlar oflayn işləyir və istənilən məqsəd üçün pulsuzdur (CC0). Sizin öz şəkil teksturalarınız hələ hazır deyil.
:::

## 3D görünüşdə teksturalar

Boyanmış kərpic divar kərpiclərini, taxta döşəmə taxtalarını real ölçüsündə, boya vurulan kimi göstərir. Düz rəngləri görmək üçün Boya palitrasında **Teksturaları 3D görünüşdə göstər** seçimini silin (çox böyük model onları özü söndürür və bunu deyir). Xassəyə görə rəngləndirmə həmişə öz rənglərini göstərir. Teksturalar proqram tərəfindən çəkilir, buna görə heç nə yüklənmir; vizuallaşdırmalar və glTF faylı onları hər halda daşıyır.

---
title: Elementləri yoxlanılıb və ya sahədə təsdiqlənib kimi işarələyin
summary: PDF-dən və ya skanerdən oxunan element siz yoxlayana qədər təsdiqlənməyib. Elementləri yoxlanılıb və ya kim, nə vaxt və necə ölçdüyü qeyd olunmaqla sahədə təsdiqlənib (LOD 500) kimi işarələyin və tikildiyi kimi (as-built) modeli hansının hansı olduğunu bildirərək təhvil verin.
keywords: təsdiqlənməyib, təsdiqlənib, yoxlanılıb, sahədə təsdiqlənib, tikildiyi kimi, as-built, lod 500, bağlanış, təhvil, sahədə ölçülüb, lent, lazer, skan, planalma, mövcud bina, dəyişiklik, yoxlanılıb kimi işarələ, yoxlama, mərhələ 7
from: df35d908
---

## Nə edəcəksiniz

Modeldə kimin həqiqətən baxdığı şeyləri izləyin. Elementin üç işarədən biri və ya heç biri olur:

- **Təsdiqlənməyib**: proqram onu PDF-dən, skan edilmiş çertyojdan, izlənmiş çertyojdan və ya nöqtə buludu skanından tanıyıb. Hələ heç kim yoxlamayıb.
- **Yoxlanılıb**: bir nəfər onu mənbə çertyojla müqayisə edib.
- **Sahədə təsdiqlənib (LOD 500)**: bir nəfər onu sahədə ölçüb. Kim, nə vaxt və necə ölçdüyü onunla birlikdə saxlanılır.
- **İşarə yoxdur**: bir nəfər çəkib. Model onun barədə heç bir iddia etmir.

## Addımlar

1. Bir və ya bir neçə element seçin (divarlar, qapılar, pəncərələr, otaqlar, istənilən element).
2. {{ui:Xassələr}} daxilində {{ui:Yoxlama}} açın.
3. Kimin yoxladığını və ya ölçdüyünü yazın. Tarix dəyişməsəniz bu günkü tarixdir.
4. {{ui:Yoxlanılıb kimi işarələ}} düyməsinə basın. Sahə ölçüsü üçün necə ölçüldüyünü seçin (lent, lazer məsafəölçən, skan, planalma) və {{ui:Sahədə yoxlanılıb kimi işarələ (LOD 500)}} düyməsinə basın.
5. {{ui:Yoxlanılmayıb kimi işarələ}} və {{ui:İşarəni götür}} geri qaytarır. Hər klik geri alına bilən bir addımdır və bütün seçim üçün keçərlidir.

Seçimi tez işarələmək üçün: {{ui:Alətlər}} › {{ui:Yoxlanılıb kimi işarələ}} (yazılı: `MARKCHECKED`) seçimi bu gün sizin tərəfinizdən yoxlanılıb kimi işarələyir.

## Nəyi görməlisiniz

- Planda təsdiqlənməmiş elementin qırıq çərçivəsi və "?" işarəsi var; sahədə təsdiqlənmiş elementin işarəsi tik-dir. Onları gizlətmək üçün **Audit** bölməsində {{ui:Planda yoxlama işarələrini göstər}} seçimini silin.
- {{ui:Cədvəllər}} › {{ui:Yoxlama}} hər işarələnmiş elementi mərtəbəsi, vəziyyəti, kim, nə vaxt, necə və haradan gəldiyi ilə siyahıya salır.
- Audit təsdiqlənməmiş elementləri siyahıya salır və sahədə təsdiqlənmiş elementi LOD 500 kimi sayır. Bax: [Modelin auditi](topic:audit-the-model).

## Skandan

Skanı modellə müqayisə edərkən {{ui:Uyğun elementləri sahədə təsdiqlənib kimi işarələ}} skanın tikildiyi kimi gördüyü hər elementi tolerantlıq daxilində işarələyir; üsul "skan" və tolerantlıq qeyddə yazılır. Bax: [Skanı modellə müqayisə edin](topic:compare-scan-with-model).

:::warning
Bu müqayisə hər elementin qutusunu skan nöqtələri ilə uyğunlaşdırır. Bu, planalma deyil. Onu yalnız baxdığınız elementlər üçün istifadə edin.
:::

## Tikildiyi kimi model və təhvil paketi

{{ui:Təhvil paketini yaradın}} düyməsi {{ui:Aktivlər}} nişanında tikildiyi kimi modeli zipə qoyur, bunlarla birlikdə:

- layihə üzrə neçə elementin sahədə təsdiqləndiyi, yoxlandığı, təsdiqlənmədiyi və işarəsiz olduğunu göstərən bəyanat;
- `as-built/verified-elements.csv`: hər element və otaq, onun vəziyyəti, kim, nə vaxt və necə ilə;
- `as-built/as-built-drawings.pdf`: çertyoj dəsti indiki kimi;
- model dəstlər buraxdıqda çertyoj dəyişiklik jurnalı.

Bax: [Aktivlər və baxım](topic:assets-and-maintenance).

## IFC-də necə saxlanılır

Hər işarələnmiş element `CadCraft_Verification` xassə dəstini daşıyır: State, By, On, Method, Source, Note və LevelOfDevelopment (sahədə təsdiqləndikdə `LOD 500`). Onlar sadə mətn xassələridir, buna görə digər proqramlar onları siyahıya sala bilir, və Axtar, Xassəyə görə rəng vermə və etiket cədvəlləri onlardan istifadə edə bilir. Tikildiyi kimi bəyanat layihədə `CadCraft_AsBuilt` xassə dəstidir. Həmin dəsti olmayan element sahədə ölçülməyib.

## Növbəti

- [Plan dəstindən divarlar](topic:walls-from-plans)
- [Modelin auditi](topic:audit-the-model)

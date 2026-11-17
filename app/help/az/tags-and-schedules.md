---
title: Elementləri etiketləyin və etiketə görə cədvəl qurun
summary: Öz etiketlərinizi müəyyən edin (ad, tip, icazə verilən dəyərlər, hansı siniflər), bir çox elementi bir dəfəyə etiketləyin və sütunları, filtrləri və qruplaşdırmaları etiketləri oxuyan cədvəllər qurun. Etiketlər IFC-də saxlanılır.
keywords: etiketlər, etiket, etiketləmə, fərdi xassələr, parametrlər, paylaşılan parametrlər, xassə dəsti, pset, cədvəl, filtr, qruplaşdır, bitirmə, yanğın müqaviməti, kütləvi redaktə, csv
from: 9cc7c90d
---

## Nə edəcəksiniz

Etiket sizin öz xassənizdir, məsələn *Bitirmə* və ya *Yanğın müqaviməti*. Onu layihə üçün bir dəfə müəyyən edirsiniz, bir çox elementdə bir dəfəyə təyin edirsiniz və BimCraft-dakı hər cədvəl onu oxuya bilir: burada etiket cədvəli, {{ui:Miqdarlar}}, Axtarış, Xassəyə görə rəng və [Modeldən sənədlər](topic:documents-from-the-model).

## Addımlar

1. IFC modeli açın və ya yeni bina başlayın.
2. Sol paneldə, {{ui:Miqdarlar}} altında {{ui:Etiketlər}} açın.
3. {{ui:Etiket əlavə et}} klikləyin. Ad verin, tipini seçin və istəsəniz icazə verilən dəyərləri (vergüllə) və etiketin aid olduğu sinifləri (`IfcDoor`, `IfcWall` …) siyahıya salın. {{ui:Etiketi əlavə et}} klikləyin.
4. Modeldə elementləri seçin (Axtarış kömək edir: bütün qapıları bir dəfəyə seçin).
5. {{ui:Seçilmişləri etiketlə}} altında, təyin etmək istədiyiniz hər etiket üçün dəyər seçin və ya yazın, qalanlarını olduğu kimi buraxın və {{ui:… seçilmiş elementlərə tətbiq et}} klikləyin.
6. {{ui:Etiket cədvəli}} altında sütunları işarələyin, filtrlər əlavə edin, {{ui:Qruplaşdır}} seçin, sonra {{ui:CSV yüklə}} klikləyin.

## Nə görməlisiniz

- Hər saxlanılmış tərif və hər etiketləmə üçün dəyişiklik siyahısında bir addım; {{ui:Geri qaytar}} onu geri alır.
- Etiket aid olmadığı sinifin elementləri həmin etiketdən kənarda qalır və status sətiri neçə belə element olduğunu göstərir.
- Etiket cədvəli hər element üçün bir sətir göstərir, seçdiyiniz sahəyə görə qruplaşdırılmış; elementi seçmək üçün sətrin birinci xanasına klikləyin.
- {{ui:Miqdarlar}} etiketləri `CadCraft_Tags` altında sadalayır, ona görə orada etiketə görə sahələri və ya sayları cəmləyə bilərsiniz.

## Tiplər

Tiplər ailə parametrləri ilə eynidir: Uzunluq (millimetrlə), Bucaq (dərəcə ilə), Ədəd, Tam ədəd, Bəli / Xeyr, Qələm (1–16), Mətn, Material və Doldurma. Tipinə uyğun gəlməyən və ya icazə verilən dəyərlərdən biri olmayan dəyər mesajla rədd edilir və heç nə dəyişmir.

## Bilmək yaxşıdır

- Hər şey sadə IFC-dir, ona görə digər proqramlar dəyərləri oxuyur: tərifləri layihədə `CadCraft_TagDefs` xassə dəstində, dəyərləri isə hər elementdə `CadCraft_Tags` xassə dəstində saxlanılır (hər etiket üçün bir xassə). Uzunluqlar faylın uzunluq vahidində yazılır.
- Etiketin siniflərində `IfcWall` standart-case və elementli divarları da əhatə edir.
- Etiketi yenidən adlandırmaq eyni addımda hər elementdə onun dəyərlərinin adını dəyişir. Etiketi silmək yalnız onun tərifini silir: artıq təyin olunmuş dəyərlər elementlərdə sadə xassə kimi qalır. Onları götürmək üçün əvvəlcə {{ui:Təmizlə}} seçərək təmizləyin.
- CadCraft çəkiliş tətbiqindəki etiketlər (blok atributları) hələ hazırlanmayıb.

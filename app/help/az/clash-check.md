---
title: Toqquşmaları yoxlayın
summary: Bir elementlər dəstinin digərinə haradan dəydiyini tapın — kanallar tirlərdən, divarlar plitələrdən keçir — bir modeldə və ya bir neçə modeldə, tolerantlıqla, və toqquşmanı probleme çevirin.
keywords: toqquşma, toqquşma aşkarlanması, toqquşma yoxlaması, sərt toqquşma, müdaxilə, çarpışma, koordinasiya, üst-üstə düşmə, tolerantlıq, mep, struktur
from: 9cb12346
---

## Nə edəcəksiniz

İki elementlər dəstinin bir-birinə dəydiyi yerləri tapın, məsələn xidmət modelindəki hər şeyi strukturla müqayisə edin, sonra hər birinə baxın və əhəmiyyət kəsb edənləri problem kimi saxlayın.

## Addımlar

1. IFC modelini açın və bir neçə modeli yoxlayırsınızsa, digərlərini {{ui:Model əlavə et…}} ilə əlavə edin. Bax [Bir neçə IFC modelini birlikdə görün](topic:several-models).
2. Sol paneldə {{ui:Toqquşma yoxlaması}} açın.
3. {{ui:Yoxla}} və {{ui:Qarşı}} bölmələrində iki dəst seçin: seçdiyiniz elementlər, sinif (bütün açıq modellər üzrə), saxlanmış axtarış dəsti (bax [Elementləri sinfə, adına və ya xassəyə görə tapın](topic:find)) və ya hər şey.
4. Nəzərə alınmayacaq üst-üstə düşmənin dərəcəsini metrlə təyin edin. 0.01 yalnız zəif toxunan elementləri nəzərə almır.
5. {{ui:Başlat}} düyməsinə klikləyin. Yoxlama fonda işləyir; {{ui:Ləğv et}} onu dayandırır.
6. Nəticəyə klikləyin ki, o görünsün: iki element seçilir və göstərilir, qalanları şəffaf olur və görünüş onlara yaxınlaşır.
7. Nəticənin altında {{ui:Bundan problem yarat}} düyməsinə klikləyin ki, onu {{ui:Problemlər}} bölməsində yazasınız. Bax [Problemlər və BCF faylları](topic:issues-bcf).

## Nə görməlisiniz

- Toqquşmalar hər iki elementin adı ilə (bir neçə model açıq olduqda onların faylları ilə) və üst-üstə düşmə dərinliyi ilə, ən dərin olanı əvvəl, sadalanır.
- Yalnız toxunan səthlər, məsələn divarın plitənin üstündə durması və ya qapının öz açıqlığında olması, toqquşma deyil.

## Yaxşı bilmək lazımdır

- Bu, əsas sərt toqquşma yoxlamasıdır: səthləri kəsişən elementlər. Tamamilə başqa elementin içində gizlənmiş element (divara basdırılmış boru) hələ tapılmır.
- Dərinlik iki elementin sərhədlərinin ən az üst-üstə düşməsidir: dəqiq ölçü deyil, bələdçidir.

## Növbəti

- [3D-də məsafələri, səth sahələrini və yerləri ölçün](topic:measure)
- [Elementləri gizlədin, təcrid edin və şəffaf göstərin](topic:hide-and-isolate)

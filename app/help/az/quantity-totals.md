---
title: Miqdarları toplayın, elementləri siyahılayın və məkanların cədvəlini çıxarın
summary: Elementləri sayın və onların uzunluqlarını, sahələrini, həcmlərini və ya istənilən ədəd xassəsini istənilən xassəyə görə qruplaşdırıb toplayın; hər elementi bir sətirdə siyahılayın və ya məkanları sahə və həcmləri ilə cədvələ salın. Hər biri CSV kimi yüklənir.
keywords: miqdar, miqdarlar, miqdarların hesablanması, cəm, cədvəl, miqdar siyahısı, boq, qto, csv, qruplaşdır, say, uzunluq, sahə, həcm, məkanlar, otaqlar, otaq cədvəli, sahə cədvəli, element siyahısı
from: e2e7210c
---

## Nə edəcəksiniz

Modeldən cəmləri əldə edin: mərtəbəyə görə divar uzunluqları, növə görə qapı sayları, materiala görə plitə həcmi, hər zonanın dəyəri.

## Addımlar

1. IFC modeli açın.
2. Sol paneldə {{ui:Miqdarların cəmi}} açın.
3. {{ui:Say}} altında {{ui:Bütün elementlər}} və ya yalnız seçilmiş elementləri seçin.
4. {{ui:Qruplaşdır}} altında xassə seçin, məsələn {{ui:Sinif}}. Daha da bölmək üçün {{ui:Qrup əlavə et}} düyməsini basın (üçə qədər), məsələn {{ui:Mərtəbə}} üzrə.
5. {{ui:Topla}} altında cəmləmək istədiyiniz ədədləri qeyd edin. Modelin miqdar dəstləri əvvəldən qeyd olunub.
6. Cədvəli cədvəl proqramında açmaq üçün {{ui:CSV yüklə}} düyməsini basın.

## Nə görməlisiniz

- Hər qrup üçün bir sətir: neçə elementi olduğu və hər cəm, həmçinin cəm sətri.
- Dəyəri olmayan elementlər sayılır, lakin heç nə əlavə etmir. Bu olduqda CSV cəmin yanında "kənarda qalan" sütunu əlavə edir ki, neçə olduğunu görəsiniz.
- Ədədlər faylın öz vahidlərindədir, fayl necə saxlayırsa elə; çox vaxt uzunluqlar millimetrlə olur.

## Hər elementə bir sətir və ya məkanlar

{{ui:Göstər}} seçimini dəyişin:

- **Hər elementə bir sətir**: hər element öz sətrində, {{ui:Sütunlar}} altındakı xassələrlə və {{ui:Topla}} altındakı ədədlərlə. CSV hər elementin GlobalId-si ilə başlayır. Sətirdə birinci dəyərə klik edərək həmin elementi seçin.
- **Məkanlar**: hər otağın nömrəsi, adı, mərtəbəsi, sahəsi və həcmi, və onların cəmləri. Sahələr və həcmlər faylın bildirdiyi kimi məkanın kəmiyyətlərindən götürülür. Fayl heç nə bildirmədikdə, onlar məkanın formasından m² və m³-lə ölçülür və kursivlə göstərilir; CSV hansının hansı olduğunu bildirir.

## Növbəti

- [Elementləri sinifə, ada və ya xassəyə görə tapın](topic:find)
- [Elementləri xassəyə görə rəngləndirin](topic:color-by-property)

## İnfrastruktur (IFC 4.3)

Görünüş siyahısında **İnfrastruktur (IFC 4.3)** seçin ki, yolları, dəmir yollarını, körpüləri və dəniz işlərini sinif və növə görə cəmlənmiş, faylın özünün bildirdiyi uzunluq, sahə və həcmlə görəsiniz. Fayl bildirmədiyi kəmiyyət boş qalır, heç vaxt hesablanmır. **İnfrastruktur kəmiyyətlərini TakeoffCraft-a göndərin** düyməsi `.quantities.json` faylı saxlayır ki, TakeoffCraft onu tipli kəmiyyətlər kimi açsın.

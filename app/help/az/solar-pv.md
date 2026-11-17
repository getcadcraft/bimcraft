---
title: Günəş PV massivləri, kölgələnmə və məhsuldarlıq
summary: Günəş massivlərini damlara və ya yerə quraşdırın, modeldən kölgələndirin, illik enerjini qiymətləndirin, stringləri ölçün və bir xətli diaqram məlumatı yaradın. Bütün girişlər göstərilir, başlanğıc modul və itkilər isə ümumidir.
keywords: günəş, pv, fotovoltaik, massiv, modul, dam, kölgə, məhsuldarlıq, kWh, kWp, string ölçüsü, invertor, bir xətt, tək xətt, əyilmə, azimut, sıra aralığı
from: adf4aaf3
---

## Nə edəcəksiniz

**Solar PV** panelini açın. Dam üzünü seçin (onun meyli və üzü modeldən oxunur) və ya meyl və üzlə yer massivi qurun; modullar boşluqlarla içəridə yerləşdirilir və sayılır, DC gücü kWp ilə verilir. Massivi yerləşdirmək onu modelə günəş cihazları kimi yazır, bir geri alma addımında.

## Kölgələnmə, məhsuldarlıq və stringlər

- **Kölgələnmə** hər ayın tipik günləri üçün hər moduldan günəşə doğru şüa göndərir, modelin öz həndəsəsinə qarşı, beləliklə qonşu binalar, parapetlər və önündəki sıralar sayılır. Yalnız birbaşa günəş işığı azalır və qismən kölgəli massiv gücünü mütənasib itirir.
- **Məhsuldarlıq** aylar və il üzrə kWh, kWp başına kWh və performans nisbətini verir. Günəş, yazsanız, üfüqi səthdə öz aylıq cəminizdən gəlir. Onlar olmadan panel açıq səma üzrə yuxarı həddi istifadə edir və bunu bildirir. Məhsuldarlıq sekmesindəki düymə ilə **NASA POWER-dən iqlimi gətirin**: o, yalnız sahənin enlik və uzunluğunu bir dəfə göndərir və cavabı bu kompüterdə saxlayır (brauzerdən 2026-10-30 tarixində yoxlanılıb). PVGIS veb səhifənin cavabını oxumasına icazə vermir, buna görə sekmə sahə üçün PVGIS-in aylıq məlumatlarını yeni sekmədə açan link verir; onun göstərdiyini qutuya yapışdırın və on iki ay doldurulur.
- **Stringlər** hər stringdə modulları invertorun gərginlik pəncərəsinə qarşı ən soyuq və ən isti gün üçün yoxlayır, paralel stringləri isə onun cərəyanına qarşı.
- **Bir xətt** diaqram məlumatını (massiv, birləşdirici, ayırıcı, invertor, panel, şəbəkə) yazdığınız amillərdən simin və sığortanın ölçüləri ilə yaradır. O, məlumat və SVG-dir; CadCraft-dakı Elektrik əlavəsi onları simvol kimi yerləşdirə bilər.

BimCraft ilə gələn modul, invertor, itki və sim amilləri ümumi nümunələrdir və hər nəticədə etiketlənir. İstehsalçının məlumatlarını və layihələndirdiyiniz norma dəyərlərini yazın və layihəni ona cavab verən şəxs tərəfindən yoxlatdırın.

---
title: Model ağacı ilə yolunuzu tapın
summary: IFC modelinə layihə, sahə, bina, mərtəbə və məkan üzrə baxın, elementləri növünə görə qruplaşdırılmış görün; qutuları işarələyərək göstərin və gizlədin, sətirə klik edərək seçin, ikiqat klik edərək yaxınlaşdırın.
keywords: model ağacı, ağac, struktur, məkan strukturu, brauzer, kontur, naviqator, mərtəbə, səviyyə, döşəmə, məkan, otaq, qrup, sinif, gizlət, göstər, seç, seçim, yaxınlaşdır
from: 69de4ab7
---

## Nə edəcəksiniz

Modelin necə qurulduğunu görün və 3D-də axtarmadan istənilən elementə çatın: bina, onun mərtəbələri, hər mərtəbədəki məkanlar və onlardakı elementlər növünə görə (divarlar, qapılar, plitələr…) qruplaşdırılmış.

## Addımlar

1. IFC modelini açın. Soldakı {{ui:Model ağacı}} mərtəbələrə qədər açılır.
2. Sətrin yanındakı oxa klikləyib açın və ya bağlayın. Mərtəbə əvvəlcə öz məkanlarını, sonra elementlərini növünə görə, neçə ədəd olduğu ilə göstərir. Hissələrdən ibarət element, məsələn pilləkən, öz hissələrini saxlayır.
3. Sətrin qutusunu işarələməyin: hər şeyi gizlədir; yenidən işarələyin: göstərir. Qutuda defis olan sətir yalnız içindəkilərin bir hissəsinin göstərildiyini bildirir.
4. Sətrin adına klikləyərək onun təmsil etdiyi elementi seçin: tək element, və ya qrup, mərtəbə və ya məkandakı bütün elementlər. {{key:Mod}}+klik seçimə əlavə edir və ya seçimdən çıxarır.
5. Mərtəbə, məkan və ya bina yanındakı {{ui:i}} düyməsinə klikləyərək onun öz xassələrinə baxın.
6. Sətrə ikiqat klik edərək ona yaxınlaşın.

## Nəyi görməlisiniz

- 3D görünüşdə elementi seçdikdə ağac onun altına qədər açılır və onu qeyd edir.
- Gizlədilmiş elementlərin üstündən xətt çəkilir. Ağacın qutuları və {{ui:Göstər}} ({{key:H}}, {{key:I}}, {{key:Shift+H}}) birlikdə işləyir: bax [Elementləri gizlədin, təcrid edin və şəffaf görün](topic:hide-and-isolate).
- Model heç bir mərtəbədə yerləşdirmədiyi elementlər sonda **Məkan strukturunda deyil** adlı qrupdadır.
- Uzun qrup bir dəfəyə 200 sətir göstərir; qalanı üçün onun altındakı **Daha çox göstər** düyməsinə klikləyin.

## Klavişlər

Sətrin adı fokusda olduqda: {{key:Up}} və {{key:Down}} hərəkət edir, {{key:Right}} açır, {{key:Left}} bağlayır və ya yuxarı çıxır, {{key:Space}} qutunu işarələyir, {{key:Enter}} seçir.

## Ümumi səhvlər

- **Mərtəbənin qutusu işarələnib, amma heç nə görünmür.** Ağacın altındakı {{ui:Mərtəbələr}} siyahısı mərtəbələri tək başına söndürür: orada da işarələyin.
- **Sətir heç nə seçmir.** Bəzi sətirlərdə, məsələn boş məkanda, çəkilə bilən element yoxdur; status xətti bunu deyir.

## Növbəti

- [Bina elementlərini silin, kəsin, kopyalayın və yapışdırın](topic:edit-elements)
- [Mərtəbələri, məkanları və kənarları göstərin və gizlədin](topic:storeys-and-spaces)

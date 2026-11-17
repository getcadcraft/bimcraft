---
title: Modelin iki versiyasını müqayisə edin
summary: Eyni IFC modelinin iki versiyasını açın və GlobalId-lərinə görə uyğunlaşdırılmış əlavə edilmiş, silinmiş və dəyişdirilmiş elementləri görün, hər dəyişikliyin CSV-si ilə.
keywords: müqayisə, diff, fərq, versiyalar, reviziya, dəyişikliklər, dəyişdirilmiş, əlavə edilmiş, silinmiş, köçürülmüş, globalid, guid, nə dəyişdi
from: cfca6971
---

## Nə edəcəksiniz

Sahib olduğunuz model ilə sizə göndərilən model arasında nəyin dəyişdiyini görün: hansı elementlər yenidir, hansılar yoxdur, hansılar köçürülüb və ya yeni xassə dəyərləri alıb.

## Addımlar

1. Yeni versiyanı açın, sonra {{ui:Model əlavə et…}} klikləyin və köhnəsini seçin. Bax: [Bir neçə IFC modelini birlikdə görün](topic:several-models).
2. {{ui:Modellər}} bölməsində {{ui:Versiyaları müqayisə et}} açın.
3. {{ui:Köhnə versiya}} və {{ui:Yeni versiya}} seçin.
4. {{ui:Müqayisə et}} klikləyin.
5. Siyahıda elementə klikləyib onu seçin və xassələrinə baxın. Hər dəyişiklik üçün, xassə-xassə, {{ui:CSV yüklə}} klikləyin.
6. Normal görünüşə qayıtmaq üçün {{ui:Təmizlə}} klikləyin.

## Nə görməlisiniz

- **Əlavə edilmiş** elementlər mavi rənglə, yeni versiyadan.
- **Silinmiş** elementlər qırmızı rənglə, köhnə versiyadan.
- **Dəyişdirilmiş** elementlər xardal rəngli, yeni versiyadan; hər biri nəyin dəyişdiyini bildirir: xassələr, nə qədər köçürülmə və ya yeni forma.
- Eyni qalan hər şey şəffaf görünür.

## Bilmək yaxşıdır

- Elementlər GlobalId-lərinə görə uyğunlaşdırılır. Hər ixracda elementlərə yeni GlobalId verən proqram hər elementi silinmiş və yenidən əlavə edilmiş kimi göstərir.
- Mövqelər modellərin səhnədə yerləşdiyi yerdə müqayisə olunur. Əgər bir versiya qəsdən köçürülübsə, əvvəl {{ui:Modellər}} bölməsində {{ui:Sürüşdür}} ilə düzləşdirin.
- Bir modeldə iki dəfə istifadə olunan GlobalId müqayisədən kənarda qalır. [Modeli ümumi problemlərə görə yoxlayın](topic:model-checks) bunları tapır.

## Növbəti

- [Problemlər və BCF faylları](topic:issues-bcf)
- [Xassəyə görə miqdarları toplayın](topic:quantity-totals)

---
title: Sinif, ad və ya xassə üzrə elementləri tapın
summary: Bir və ya bir neçə qaydaya uyğun gələn bütün elementləri — sinfini, adını, növünü, mərtəbəsini, materialını və ya istənilən xassə dəyərini — tapın, hamısını seçin və qaydaları adlı axtarış dəsti kimi saxlayın.
keywords: tap, axtar, filtr, sorğu, qayda, axtarış dəsti, seçim dəsti, saxlanmış axtarış, xassə, dəyər, sinif, material, hamısını seç
from: 3d293bc2
---

## Nə edəcəksiniz

Bir addımda bir növ olan və ya bir dəyərə malik bütün elementləri seçin: bütün qapıları, 2 saylı səviyyədəki bütün divarları, yanğına davamlılığı EI60 olan bütün elementləri, müəyyən məbləğdən çox dəyəri olan bütün divarları.

## Addımlar

1. IFC modelini açın.
2. Sol paneldə {{ui:Axtar}} bölməsini açın.
3. Birinci qaydada xassə seçin (əvvəlcə elementin öz xassələri, məsələn {{ui:Sinif}} və {{ui:Mərtəbə}}, sonra modelin xassə dəstləri), müqayisə üsulunu və dəyəri seçin. Dəyər qutusu modeldə olan dəyərləri təklif edir.
4. Axtarışı daraltmaq üçün {{ui:Qayda əlavə et}} düyməsinə klikləyin. Hamısının tələb olunması üçün {{ui:Hər qayda}} seçin, onlardan birinin kifayət etməsi üçün isə {{ui:İstənilən qayda}} seçin.
5. {{ui:Axtar}} düyməsinə klikləyin və ya dəyər qutusunda {{key:Enter}} düyməsini basın. Uyğun gələnlər seçilir.
6. Qaydaları saxlamaq üçün {{ui:Axtarış dəsti kimi saxla}} düyməsinə klikləyin, ad yazın və yenidən klikləyin. Sonra dəstin adına klikləməklə ondan istifadə edərək axtarın.

## Nəyi görməlisiniz

- Uyğun gələnlər 3D görünüşdə və model ağacında seçilir, {{ui:Xassələr}} isə sinfə görə neçə element tapıldığını göstərir. Yalnız onları göstərmək üçün {{key:I}}, onları gizlətmək üçün {{key:H}} basın.
- Sözlər böyük-kiçik hərfə baxmadan uyğun gəlir. Ədədlər ədəd kimi müqayisə olunur: "1000-dən çoxdur" mətnin yox, dəyərin mənasını verir.
- {{ui:dəyəri var}} və {{ui:dəyəri yoxdur}} dəyər tələb etmir; onlar dolu və ya boş olanları tapır.
- Saxlanmış dəstlər açdığınız bütün modellər üçün bu brauzerdə qalır.

## Tez-tez edilən səhvlər

- **Heç nə tapılmır.** Qayda uyğunlaşa bilən dəyər tələb edir: dəyər qutusundakı təklifləri yoxlayın.
- **Siyahıda xassə yoxdur.** Bu modeldə fiquru olan heç bir element buna malik deyil.

## Növbəti

- [Elementləri xassəyə görə rənglə](topic:color-by-property)
- [Elementləri gizlədin, təcrid edin və şəffaf göstərin](topic:hide-and-isolate)

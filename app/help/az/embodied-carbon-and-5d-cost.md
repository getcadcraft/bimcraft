---
title: Cədvəldə təcəssüm olunmuş karbon və xərclər
summary: Modelin təcəssüm olunmuş karbonunu açıq, redaktə edilə bilən əmsal cədvəlindən toplayın və qiymətləri 4D cədvəl üzrə xərc və pul axını əyrisinə bölün. Hər ikisi sizin yazdığınız və ya idxal etdiyiniz dəyərlərdən başlayır.
keywords: təcəssüm olunmuş karbon, karbon, co2, kgCO2e, emissiya, əmsal cədvəli, epd, 5d, xərc, pul axını, s əyrisi, cədvəl xərci, qiymətlər, həcmlərin hesablanması qiymətləri
from: 83e82840
---

## Təcəssüm olunmuş karbon

**Karbon** panelini açın. Hər elementin miqdarı (həcm, sahə və ya uzunluq) cədvəldəki əmsalla çarpılır, həyat dövrü modulu üzrə: məhsul mərhələsi məcburidir, daşınma və tullantı isə ixtiyaridir. Yekunlar material, sinif və mərtəbə üzrə, və hər kvadrat metr döşəmə üzrə alınır.

**Əmsal cədvəli sizindir.** BimCraft ilə gələn sətirlər düzgün tərtibdə ümumi başlanğıc dəyərlərdir. Onlar verilənlər bazasından gəlmir, yoxlanılmamış kimi işarələnir və istifadə etdiyiniz mənbə ilə (EPD, milli verilənlər bazası və ya firmanızın rəqəmləri) əvəz olunmalıdır. Sətirləri paneldə redaktə edin, ya da cədvəli CSV və ya JSON kimi idxal və ixrac edin. Əlavə etdiyiniz sətirlər eyni id-li başlanğıc sətri əvəz edir. Cədvəl modelə yazılır.

Uyğun gəlməyən və ya miqdarı olmayan elementlər sıfır sayılmır, **Problemlər** siyahısında göstərilir.

## 4D cədvəl üzrə xərclər

**4D cədvəlin** yanında **Xərc** panelini açın. Ona qiymətlər verin (yazın, CSV və ya JSON idxal edin, ya da TakeoffCraft sətirlərini gətirin), hər qiyməti açar sözlərlə model materiallarına uyğunlaşdırın və o, hər tapşırığın elementlərini qiymətləndirir. Tapşırığın xərci başlanğıcdan bitməyə qədər olan günlərə bölünür (bərabər, ya əvvəldə və ya sonda yüklənmiş). Panel gün, həftə və ya ay üzrə yığılmış pul axını əyrisini çəkir, mərhələ və paket üzrə xərci, və tarixə görə planlaşdırılanla tikilənin müqayisəsini göstərir. CSV ixracı var. Qiymət verənə qədər heç nə qiymətləndirilmir: heç bir qiymət əlavə olunmur.

## Valyuta

Qiymət cədvəli qiymətlərinin hansı valyutada olduğunu göstərə bilər (üç hərf, məsələn USD və ya EUR). 5D panelində bunun üçün xana var, fayldə qiymətlərlə birlikdə saxlanılır və JSON ixracları onu daşıyır. Bundan əvvəl yaradılmış və ya boş buraxılmış cədvəldə valyuta yoxdur: onun xərcləri USD kimi göstərilir (proqramın standart valyutası), panel və işləyən cəmlər isə bunu bildirir. Valyutalar arasında heç nə çevrilmir.

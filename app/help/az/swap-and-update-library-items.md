---
title: Yerləşdirilmiş elementi dəyişdirin və kitabxana elementlərini yeniləyin
summary: Yerləşdirilmiş kitabxana elementini yerini və element nömrəsini saxlayaraq başqası ilə əvəz edin, modeldəki hər şey üçün Kitabxanada daha yeni versiyaları yoxlayın.
keywords: dəyişdir, əvəz et, əvəzləyici, yenilə, yeni versiya, yeniləmələri yoxla, kitabxana, geri çəkilmiş, lisenziya dəyişikliyi, element nömrəsi
from: 8bdfe01d
---

## Nə edəcəksiniz

Elementi yenidən yerləşdirmədən fikrinizi dəyişin və modeldəki kitabxana elementlərini aktual saxlayın.

## Bir elementi dəyişdirin

1. Modeldə yerləşdirilmiş kitabxana elementinə klikləyin.
2. {{ui:Xassələr}}-də **Kitabxana elementi** qutusunda {{ui:Elementi dəyişdir…}} klikləyin. {{ui:Kitabxana}} bölməsi açılır.
3. Yeni elementi tapın və onun kartına klikləyin.
4. {{ui:… bununla dəyişdir}} klikləyin.

Element yerini, fırlanmasını, mərtəbəsini, element nömrəsini, miqdarını və qeydlərini saxlayır. Onun tipi, forması və datası yeni elementə keçir. Eyni şəkildə yerləşdirilmiş elementlər bir tip paylaşır, yerləşdirdiyiniz kimi.

Variantları olan element (bax [Variantları olan kitabxana elementini yerləşdirmək və dəyişdirmək](topic:library-variants)) dəyişdirildikdə digər variantlarını {{ui:Kitabxana}} bölməsinin yuxarısında göstərir: hər biri üçün bir klik.

Yeni element başqa növ şey olduqda, məsələn masanın yerinə lavabo, elementin IFC sinfi buna uyğun dəyişir (burada mebel elementindən sanitar terminala), beləliklə digər proqramlar onu düzgün cədvələ salır. O, eyni GlobalId ilə eyni element olaraq qalır, buna görə ona olan bağlantılar hələ də işləyir. {{key:Mod+Z}} köhnə sinfi köhnə elementlə birlikdə geri qaytarır.

## Yenilənmələri yoxlayın

1. Alətlər zolağında {{ui:Yeniləmələr}} klikləyin (və ya kitabxana elementinin qutusunda {{ui:Yeniləmələri yoxla}}).
2. Siyahını oxuyun: modeldəki hər kitabxana elementi, modeldəki versiyası, ən son versiyası və statusu ilə: **Aktualdır**, **Daha yeni versiya**, **Geri çəkilib** və ya **Tapılmadı**. Nəyin dəyişdiyini də deyir (həndəsə, data, lisenziya və ya düzəliş).
3. Sətirdə {{ui:Yenilə}} klikləyin və ya {{ui:Hamısını yenilə}} klikləyin.

## Nə görməlisiniz

- "*n* yerləşdirmə yeniləndi. Yerlər, element nömrələri, miqdarlar və qeydlər saxlanılır."
- Dəyişiklik siyahısında "Yeniləndi: *element*" sətirləri. {{key:Mod+Z}} hər birini geri qaytarır.

## Bilmək yaxşıdır

- Yalnız Kitabxanadan gələn elementləri yoxlamaq olar. Fayllardan gələn elementlərdə kitabxana identifikatoru yoxdur.
- Lisenziya dəyişdikdə, artıq yerləşdirilmiş nüsxə onu yeniləyənə qədər öz lisenziyasını saxlayır.
- **Geri çəkilmiş** element yeni yerləşdirmələr üçün təklif olunmur. Müəllif hüququ səbəbindən geri çəkilən element heç yüklənə bilməz; onu {{ui:Elementi dəyişdir…}} ilə əvəz edin.
- Yerləşdirilmiş variant, elementin yeni versiyasında o hələ də varsa, o variant olaraq qalır; yoxsa elementin standart variantını alır.
- Yoxlama yalnız element identifikatorlarını və versiyaları göndərir, modelinizi heç vaxt göndərmir.

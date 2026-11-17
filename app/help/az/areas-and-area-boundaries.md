---
title: Sahələr və sahə sərhədləri
summary: Çəkdiyiniz sərhəd xətlərinin içində ümumi tikinti sahəsini və ya icarəyə verilə bilən sahəni ölçün, sərhədləri divarlardan da götürün və sahələri cədvəldə sadalayın.
keywords: sahə, sahələr, sahə sərhədi, sahə sxemi, ümumi tikinti sahəsi, ümumi mərtəbə sahəsi, GFA, icarəyə verilə bilən, sahə planı, sahələrin cədvəli, divarları seç, qapalı deyil
from: c79f96d2
---

## Nə edəcəksiniz

Sahə sxeminin sərhədlərini çəkin, sahələri onların içində yerləşdirin və cəmləri oxuyun.

## Alətlər harada yerləşir

- Lent tərtibatları: {{ui:Memarlıq}} › **Otaq və sahə** › {{ui:Sahə}} və {{ui:Sahə sərhədi}}.
- Klassik tərtibat: Çəkmə paneli › {{ui:Otaqlar}} menyusu.

## Addımlar

1. {{ui:Sahə sərhədi}} seçin. Sətirdə {{ui:Sxem}} seçin: Ümumi tikinti və ya İcarəyə verilə bilən. Hər sxemin öz sərhədləri var.
2. Xətləri necə yaratmağı {{ui:Necə yaradılsın}} bölməsində seçin:
   - **Çək**: nöqtə-nöqtə klik edin.
   - **Divarları seç: ox xətti**: divara klik edin, onun ox xətti sərhəd olur.
   - **Divarları seç: klik edilən üz**: istədiyiniz tərəfdəki divara klik edin; həmin üz sərhəd olur. Ümumi tikinti sahəsi üçün xarici divarların xarici tərəfinə klik edin.
3. {{ui:Sahə}} seçin. Eyni sxemi seçin, istəsəniz ad, nömrə və ya tip yazın və sərhədlərin içinə klik edin.
4. Sahə dərhal ölçülür. Onun adını, nömrəsini və ya tipini dəyişmək üçün seçin və **Xassələr**-də dəyişin.

## Nə nəyi izləyir

- Divar seçməklə yaradılan sərhəd həmin divarı izləyir: divarı köçürəndə sahə eyni addımda yenidən ölçülür.
- Çəkdiyiniz sərhəd çəkdiyiniz yerdə qalır.
- Künc təşkil edən divarların üzləri orada da birləşir, belə ki, seçilmiş dörd divar boşluq qoymadan sahəni bağlayır.
- Sahə sərhədləri əlinizdə otaq və ya sahə aləti olanda planda görünür, ona görə qalan vaxt plan qarışmır.

## Sərhədlər bağlanmırsa

Sahə yenə yerləşdirilir. Onda **Qapalı deyil** yazılır və sərhədlər onun ətrafında bağlanana qədər heç nə ölçülmür. Bu məsləhətdir: heç nə rədd edilmir.

## Cədvəl

Sol panel › {{ui:Cədvəllər}} › **Sahələr**: sxem, nömrə, ad, tip, səviyyə, sahə və perimetr, cəmi ilə. Sətirə klik sahəni seçir. {{ui:CSV yüklə}} eyni cədvəli verir.

## IFC-də

Sahə gövdəsi olmayan IfcSpace-dir: ümumi tikinti sxemi üçün PredefinedType GFA, icarə üçün USERDEFINED ilə ObjectType Rentable. Onda GrossFloorArea və GrossPerimeter var, net sahə yoxdur, belə ki, otaqla səhv salınmır. Sərhəd isə IfcVirtualElement-dir.

## Hələ hazırlanmayıb

- Öz sxemləriniz (yalnız Ümumi tikinti və İcarəyə verilə bilən).
- Sahə tipinə görə rəngli doldurmalar.
- Sərhədi sizin üçün yerləşdirən qaydalar, məsələn, „şüşə xəttinə qədər“.

Həmçinin bax: [Otaqlar və otaq ayırıcıları](topic:rooms-and-separators), [Otaq və sahə etiketləri](topic:room-and-area-tags).

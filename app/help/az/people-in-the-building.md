---
title: İnsanları binada gəzdirin
summary: Otaqlarınız, qapılarınız və pilləkənlərinizlə təxliyə və ya normal günün gəlişləri; bina daraldığı yerdə növbələr, hər otaqdan çıxışa ən uzun yol və nəticələr Problemlər kimi. Dizayn qərarları üçün kobud izdiham modeli, yanğın təhlükəsizliyi sertifikatı deyil.
keywords: insanlar, təxliyə, çıxış, qaçış, gediş məsafəsi, növbə, izdiham, axın, qapı eni, pilləkənlər, gəlişlər, darboğaz, simulyasiya, sakinlər, piyada, nə olar, bloklanmış qapı
from: 84aa8920
---

{{ui:Binadakı insanlar}} bölməsi sol paneldə açıq IFC modelinin otaqlarından, qapılarından və pilləkənlərindən insanları keçirir. Modeldə heç nə dəyişmir və heç nə yüklənmir.

:::warning
Bu **dizayn vasitəsidir, yanğın təhlükəsizliyi sertifikatı deyil**. O yanğını, tüstünü, panikanı, hərəkət imkanı fərqlərini və normanın sizdən nə tələb etdiyini bilmir. Məhdudiyyətlər sizindir: hər hansı çıxışa ən uzun yol və mövcud vaxt yazdığınız rəqəmlərdir, heç biri fərz edilmir.
:::

## İşə salın

1. Bağlı otaqları və qapıları olan modeli açın. Bir tərəfində yalnız bir otağı olan qapı çıxışdır; iki otaq arasındakı qapı onları birləşdirir; pilləkən öz uclarındakı otaqları birləşdirir.
2. **Təxliyə** (hamı çıxışa gedir), **Gəliş** (hamı daxil olur və otağa gedir) və ya **Mübadilə** (otaqlardakı insanlar çıxır, eyni sayda gəlir) seçin və hər nəfərə düşən döşəmə sahəsini yazın. Dəhliz, pilləkən, lobbi və ya tualet kimi adlandırılmış otaqlarda heç kim olmur.
3. {{ui:Başlat}} klikləyin. Son adamın çıxdığı vaxtı (və yarısının, on nəfərdən doqquzunun nə vaxt çıxdığını), hər qapı və pilləkənin növbəsini, ən uzun gedişli otağı və işləməni oynadan planı alırsınız.

## Nə olarsa

Cədvəldə qapını {{ui:Bağlı}} işarələyin və yenidən işə salın: insanlar başqa yol tapır, ya da çıxışı olmayan otaqlar səhv kimi siyahıya alınır. İki dəfə geniş qapı otağı çox tez boşaldır; cədvəl növbələrin harada olduğunu göstərir.

## Necə işləyir

Hər otaq şəbəkədir, buna görə insanlar küncləri dövrə vurur, divarların içindən keçmir. Otaq dolduqca sürət azalır (S = 1.4 (1 − 0.266 D) m/s, D adam/m²). Qapı enindən hər metr üçün saniyədə 1.3 adam keçirir, hər tərəfdən 150 mm çıxılır; pilləkən 1.0 keçirir və gedişi daha yavaşdır. İnsanlar birinci gələn birinci çıxan növbəsində gözləyir. Qaçış nömrəsi eyni işi dəqiq təkrarlayır.

Köməkçi də eyni şeyi işə sala bilər: təxliyə və ya hər otaqdan çıxışa ən uzun gedişi soruşun.

## Hər otaqda insanlar

Hər hansı otaq üçün rəqəm yazmaq üçün {{ui:Hər otaqda insanlar}} açın. Boş xana döşəmə sahəsi rəqəmini istifadə edir (boz rəngdə göstərilir); 0 otağı boşaldır. Rəqəmləriniz işə salmada istifadə olunur və bu brauzerdə saxlanılır.

## Qapılarda əks axın

**Mübadilə** rejimində çıxan və gələn insanlar eyni qapılarda görüşür. Qapı son adamın arxasında yaxından başqa istiqamətdə keçəndə öz sürətinin bir hissəsini saxlayır (burada 0.8; bu fərziyyədir, çünki dərc olunmuş dəyərlər fərqlidir), cədvəl isə istiqamət dəyişikliklərini sayır. Tez-tez istiqamət dəyişən qapı Problemlərdə qeyd kimi siyahıya alınır.

## Pilləkənlər və meydançalar

Pilləkənin hər meydançası gedənə dönmək üçün bir saniyəyə başa gəlir (fərziyyə). Düz pilləkənin yoxdur; L və ya U pilləkənin bir var. Pilləkənin sürəti hələ də pilləkən yürüşünün enindən gəlir.

## 3D görünüşdə

{{ui:İnsanları 3D görünüşdə göstər}} işarələyin və gəzənlər modeldə fiqur kimi görünür, nə etdiklərinə görə rənglənir və işləməni oynatdıqca hərəkət edir. Modelə heç nə əlavə olunmur.

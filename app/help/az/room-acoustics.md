---
title: Otağın reverberasiyasını yoxlayın və onu dinləyin
summary: Hər otaq üçün oktava zolağı üzrə reverberasiya müddəti (Sabine və Eyring), ölçüsündən və örtüklərindən hesablanır, həmçinin öz hədəfiniz; səs, alqış və ya musiqi otağın hesablanmış impuls cavabı ilə oxunur.
keywords: akustika, reverberasiya, reverb müddəti, rt60, sabine, eyring, udma, əks-səda, səs, dinləmək, impuls cavabı, nitq, sinif otağı, ofis, xalça, tavan plitəsi, səs-küy
from: 16996cbb
---

{{ui:Otaq akustikası}} bölməsi sol paneldə hər otaqda səsin nə qədər davam etdiyini hesablayır. O, hər otağın döşəmə sahəsini, hündürlüyünü, divarlarını, qapılarını və pəncərələrini açıq IFC modelindən oxuyur. Modeldə heç nə dəyişdirilmir.

## Örtükləri seçin

Model səthin üzərində nə olduğunu bildirdikdə, otaq bunu oxuyur: hər divar tipinin daxili qatı (gipsokarton, suvaq, kərpic, beton və blok tanınır), döşəmənin növü (taxta və ya beton) və tavanın kafelli olub-olmaması. Hər seçimin yanındakı etiket onun modeldən, standart dəyərdən və ya sizin seçiminizdən gəldiyini göstərir; onu əvəz etmək üçün başqa örtük seçin. Modelin bildirmədiyi hər şey standart dəyərdə qalır. Əmsallar **tipik dərc olunmuş dəyərlərdir**; məhsulun sınaq məlumatı olduqda onları həmin məlumatla əvəz edin. **Hədəf** (istədiyiniz ən uzun orta tezlik reverberasiyası) yazın; bu dəyəri aşan hər otaq xəbərdarlıq olur və onu aşağı salacaq udma göstərilir.

## Cədvəli oxuyun

Reverberasiya 125 Hz-dən 4 kHz-ə qədər verilir. Sabine canlı otaqlara, Eyring isə sönük otaqlara uyğundur; *İstifadə edilən* kimi işarələnmiş sətir orta udma 0.2-dən çox olduqda Eyring-i götürür. Havanın udması daxildir (böyük otaqlarda yüksək zolaqları qısaldır). Bu statistik modeldir: səsin bərabər yayıldığını güman edir, ona görə uzun və ya yastı otaqlar və çox kiçik otaqlar təxmini bələdçidir; mebel, insanlar və açıq qapılar hesaba alınmır.

## Dinləyin

{{ui:Bu otaqda oxut}} səs (burada yaradılmış), alqış, çəkilmiş notlar və ya **öz səs faylınız** (kompüterinizdə qalır) oxudur; bunlar otaq üçün hesablanmış impuls cavabı vasitəsilə gedir: birbaşa səs, həmin ölçülü qutunun ilk əks-səsləri və hər zolaqda otağın öz reverberasiya müddətilə sönən quyruq. {{ui:Quru halda oxut}} eyni səsi eyni səviyyədə, otaq olmadan oxudur. Impuls cavabını və ya otaqdakı səsi WAV faylı kimi saxlaya bilərsiniz. Bu, həmin ölçü və örtükdə olan otağa bənzəyir, heç bir real otağa deyil.

## İnsanlar və mebel

Onların udmasını əlavə etmək üçün **bu otaqdakı insanların sayını** yazın. Modeldə olan mebel (divanlar, çarpayılar, stullar, masalar, şkaflar; adına görə tapılır) öz udmasını əlavə edir. Rəqəmlər yuvarlaqlaşdırılmış, təxmini planlaşdırma dəyərləridir; vacib otaq üçün onları ölçülərlə əvəz edin.

## Mənbə və dinləyici

{{ui:Mənbə və dinləyici}} altında {{ui:Mənbəni yerləşdirin}} və ya {{ui:Dinləyicini yerləşdirin}} düyməsinə basın və otağın planına klikləyin. Oxutduğunuz səs oradan eşidilir: birbaşa səs məsafədən sonra gəlir, reverberasiyalı hissə isə həmin məsafə üçün səviyyədə olur. Hər ikisini təmizləyərək məsafə qutusuna qayıdın.

## Qeyri-bərabər udma və otaq rejimləri

{{ui:Qeyri-bərabər udma (qutu otaq)}} altında otağı qutu kimi yazın və onun döşəməsini, tavanını və divar örtüklərini seçin. Cədvəl Sabine və Eyring-ə Fitzroy və Arau-Puchades əlavə edir: onlar üç cüt əks səthə ayrıca baxır, buna görə xalçalı otaq sərt tavanla çox qısa oxunmur. Cütlər çox fərqləndikdə, bir qeyd hansına etibar etmək lazım olduğunu göstərir. Cədvəlin altında **Otaq rejimləri** qutunun ən aşağı dayanıqlı dalğalarını və otağın bərabər səs sahəsi əvəzinə ayrıca rejimlər olduğu tezliyi sadalayır. Bunlar qutu otaq üçün proqnozlardır, layihə vasitəsidir, ölçmə deyil.

## Vahidlər

Otaq sahələri, hündürlükləri, həcmləri və məsafələr seçdiyiniz {{ui:Vahidlər}} ilə göstərilir (kvadrat və kub fut, düym, millimetr, santimetr və ya metr). Hesablama özü SI-də qalır; yalnız göstəriş dəyişir. Vaxtlar (saniyə), tezliklər və səviyyələr dəyişmir.

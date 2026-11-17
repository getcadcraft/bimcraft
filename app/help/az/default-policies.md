---
title: "Standart siyasətlər: yeni bina nə ilə başlayır"
summary: Bir dəfə təyin edin ki, yeni bina hansı divar növü, səviyyələr, ilk vərəq, LOD etiketləri, vahidlər və alət ilə başlasın, həm metrik, həm də imperial layihələr üçün, və siyasətləri ofis üzrə kiçik fayl kimi paylaşın.
keywords: defolt, defoltlar, standart siyasətlər, siyasət, ofis standartı, ofis defoltları, şablon, yeni bina, ilk divar növü, metrik divar, hörgü, LOD, inkişaf səviyyəsi, ilk vərəq, kağız, miqyas, səviyyələr, mərtəbə hündürlüyü, səviyyə adları, divar aləti, vahidlər, paylaşma, ixrac, idxal, json
from: 42379aa5
---

## Nə edəcəksiniz

BimCraft-a yeni binanın nədən başlamalı olduğunu deyin ki, ofisdə heç kəs hər dəfə eyni şeyləri dəyişməsin. Bu əlavədir: onu açana qədər söndürülüb, və siyasəti təyin etmədikdə BimCraft-ın öz standartı olduğu kimi qalır.

:::note
Bunlar **yeni** binalar və **yeni** şeylər üçün standartlardır. Artıq başladığınız layihə dəyişdirilmir.
:::

## Addımlar

1. Parametrləri açın, {{ui:Əlavələr}} bölməsinə keçin və {{ui:Standart siyasətlər}} açın.
2. Parametrlərdə **BimCraft** sekmesini açın və soldakı siyahıdan {{ui:Standart siyasətlər}} seçin.
3. İstədiyiniz siyasətləri təyin edin. Hər biri **BimCraft-ın öz** dəyərindən başlayır, mötərizədə nə olduğu ilə. **Metrik** və **İmperial** qutusu olan siyasət hər layihə növü üçün bir dəyər alır; yalnız ehtiyacınız olanları doldurun.
4. Saxla düyməsi yoxdur: hər dəyişiklik edildiyi anda saxlanılır. İstifadə edilə bilməyən dəyər sözlərlə rədd edilir və köhnəsi qalır.
5. {{ui:Yeni bina}} düyməsinə klikləyin. Dialoq siyasətlərinizdən doldurulur və siyasətin təyin etdiyi hər dəyər yanında **Standart siyasətlərinizdən** yazılır. {{ui:Yarat}} düyməsinə klikləməzdən əvvəl onların hər birini hələ də dəyişə bilərsiniz.

## Siyasətlər

- **Yeni binanın vahidləri**: vahidlər Yaratdıqda bunlara keçir.
- **Səviyyələrin sayı**, **Səviyyə adları** və **Səviyyə hündürlüyü**. Adda `{n}` 1, 2, 3 sayır; `{n0}` 0, 1, 2 sayır; `{nn}` və `{nn0}` eyni şeyi iki rəqəmlə edir. Belə ki `Mərtəbə {nn0}` Mərtəbə 00, Mərtəbə 01, Mərtəbə 02 verir.
- **İlk divar növü**: Divar aləti ilk nə çəkir. Metrik ofis Xarici hörgü 300 mm ilə başlaya bilər, imperial layihələr isə Xarici 2×6 saxlayır.
- **Başlanğıc divar növlərində LOD etiketi**: doqquz başlanğıc növün hər yerdə növ siyahısında göstərdiyi inkişaf səviyyəsi (LOD 100-dən 500-ə). Bax: [Divar yığımlarını qurun](topic:wall-assemblies).
- **Yeni yaradılmış divar növünün LOD-u**: yeni növün növ redaktorunda başladığı etiket. Onu orada dəyişə bilərsiniz.
- **İlk vərəq**: onun kağızı, miqyası, vərəq nömrəsi və adı (ən aşağı səviyyənin adı üçün `{level}` istifadə edin), ya da ümumiyyətlə ilk vərəq yoxdur.
- **Kağızda qeyd ölçüləri** (Parametrlər › Ümumi › Standart siyasətlər): ofisin hündürlükləri, çap olunduğu kimi millimetrlə, qeydlər, ölçü mətni, etiketlər, otaq adları, şəbəkə dairəcik hərfləri, görünüş başlıqları və cədvəl mətni üçün. Yeni bina onları Yaratdıqda götürür və öz faylında saxlayır. Bax: [Tam ölçüdə çəkin, miqyasa görə qeyd edin](topic:annotation-sizes).
- **Yaratdıqdan sonra aktiv alət**: Seç, BimCraft-ın öz-özünə etdiyi kimi, ya da Divar, belə ki plandakı ilk iki klik artıq divar çəkir.

## Cədvəl tərtibatı: ofis standartı

**Parametrlər › Ümumi › Standart siyasətlər** bölməsində, **Cədvəl tərtibatı (ofis standartı)** altında hər cədvəlin necə qruplaşdırıldığını, aralıq cəmi və ümumi cəmi olub-olmadığını, başlığını və sütun başlıqlarının yazılış formatını təyin edin. Öz tərtibatını bildirməyən hər cədvəl bunları götürür, onu kim qurursa qursun. Bax: [Cədvəli tərtib edin, saxlayın və ixrac edin](topic:schedule-layouts).

## Ofis üzrə paylaşın

1. Parametrlərdə **Ümumi** sekmesini açın və {{ui:Standart siyasətlər}} seçin.
2. İstəsəniz **Ofis adı**nı yazın. Fayla yazılır.
3. {{ui:Fayla saxla}} düyməsinə klikləyin. `.ccdefaults.json` ilə bitən kiçik fayl alırsınız.
4. Başqa kompüterdə əlavəni açın, eyni yeri açın və {{ui:Fayldan yüklə}} düyməsinə klikləyin. Faylın siyasətləri həmin kompüterdəkilərin yerinə keçir.

Ümumi sekmesində həmçinin **Yeni layihənin vahid sistemi** var, bu əlavəsi olan hər tətbiq üçün keçərlidir, və {{ui:Bütün siyasətləri sıfırla}}. BimCraft sekmesindəki {{ui:BimCraft-ın öz standartlarına qaytar}} yalnız BimCraft-ınkını təmizləyir.

## Bilmək yaxşıdır

- Fayl sadə, açıq JSON-dur: siyasət adlarının və dəyərlərinin siyahısı. Faylın adlandırdığı, bu versiyanın tanımadığı siyasət kənarda qalır və mesajda adı çəkilir; qalanı yenə yüklənir.
- Siyasətlər bu brauzerdə, bu kompüterdəki hər CadCraft tətbiqi üçün saxlanılır. Bina faylında saxlanılmır və kompüterlər arasında sinxronlaşmır: faylı istifadə edin.
- Başlanğıc növün LOD etiketi bu kompüterdəki siyasətdən gəlir. Başlanğıcın surəti kimi yaratdığınız növ öz etiketini bina faylında daşıyır.
- BimCraft-da dəqiqlik parametri yoxdur, ona görə burada dəqiqlik siyasəti də yoxdur.
- Şablondan başladılmış bina şablonun öz səviyyələrini və vərəqlərini gətirir. Divar növü və vahidlər siyasəti yenə tətbiq olunur.
- Əlavəni söndürsəniz hər şey yenidən BimCraft-ın öz olur. Siyasətləriniz onu yenidən açanda üçün saxlanılır.

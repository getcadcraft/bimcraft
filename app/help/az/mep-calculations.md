---
title: Boruların və kanalların ölçülərini təyin edin, kabel doldurmasını və işıqlandırmanı yoxlayın
summary: Təchizat boru və kanallarının ölçülərini təzyiq itkisi ilə yoxlayın, kabelləri kabel lotoklarından və kabel borularından keçirin və doldurulmasını görün, IES və ya EULUMDAT fayllarından otaqlarda illüminansı hesablayın. Standart dəyərlər etiketlənib; qüvvədə olan normanın dəyərlərini daxil edin.
keywords: ölçülər, boru ölçüsü, kanal ölçüsü, təzyiq itkisi, qurğu vahidləri, tələbat, Hunter, Hazen-Williams, sürət, sürtünmə, bərabər sürtünmə, ventilyator təzyiqi, dempfer, kritik yol, kabel lotoku, kabel borusu, doldurma, kabel cədvəli, ies, ldt, eulumdat, fotometriya, illüminans, lüks, vahidlik, işıqlandırma hesablaması, güc sıxlığı, mep, hesablamalar, problemlər
from: 9cb90815
---

## Nə edəcəksiniz

Boruları, kanalları, kabel lotoklarını və kabel borularını adi qayda ilə çəkin, sonra **Hesablamalar** panelini açın. Hər sekmə modeli oxuyur, cədvəl göstərir və nə səhv olduğunu ⚠ panelində {{ui:Problemlər}} kimi siyahıya salır. Ölçü bir Problemi düzəldə bilərsə, **Ölçüləri tətbiq et** xətləri bir geri alma addımında dəyişir.

Bunlar layihələndirmə köməkçiləridir. Hər standart dəyər ekranda etiketlənib və heç biri norma cədvəli deyil: layihələndirdiyiniz standartın rəqəmlərini yazın və nəticəni onun üçün cavabdeh olan mühəndis yoxlasın.

## Borular

1. **Sistem** açarını seçin (soyuq su `cw`, isti su `hw`).
2. Ən yüksək sürəti təyin edin və təzyiqin yoxlanmasını istəyirsinizsə, mənbədə təzyiqi və qurğunun tələb etdiyi ən az təzyiqi təyin edin.
3. {{ui:Yoxla}} klikləyin.

Hər boru altındakı qurğu vahidlərinin tələbatını daşıyır. Tələbat Hunter-in təsvir etdiyi üsulla, qurğu vahidlərinin axına qarşı əyrisindən gəlir. **Daxili əyri nümunədir, norma cədvəli deyil**; öz əyrinizi yazana qədər Problemlər bunu deyir. Sürtünmə Hazen–Williams-dır, fitinqlər itki əmsallarıdır, qalxma isə metrə 9.8 kPa itki verir. Qurğunun vahidləri onun növündən gəlir, və ya `loads_set` köməkçi aləti ilə təyin etdiyiniz rəqəmdən.

## Kanallar

Sistemi, sürtünmə dərəcəsini (bərabər sürtünmə) və ya sürəti, və istənilən sarğac, filtr və ya səs-boğucu itkisini təyin edin. Terminallar hava axınını diffuzerdə `loads_set`-dən alır. Cədvəl hər parça üçün sürəti və sürtünməni, kritik yoldakı **ventilyator təzyiqini** və hər digər terminal dempferinin götürməli olduğu təzyiqi göstərir. Fitinq itkiləri yuvarlaqlaşdırılmış standart əmsallardan istifadə edir, fitinq bazasından yox.

## Kabel lotokları və kabel boruları

Hava kanalı alətilə çəkin: **Kabel lotoku** və **Kabel borusu** sistemləri kabel daşıyıcıları kimi saxlanılır, buna görə digər proqramlar onları lotok və boru kimi oxuyur. Kabellər sekmədə kabel siyahısını (etiket, mm-lə xarici diametr, say, haradan, hara) yapışdırın. `from` və `to` avadanlığın etiketi və ya millimetrlə `x,y,z` nöqtəsidir. Kabellər lotoklar və borular üzrə ən qısa fasiləsiz marşrutla gedir; hər xətt yazdığınız limitlərlə müqayisədə öz doldurulmasını göstərir və cədvəl CSV kimi saxlanılır, uzunluğu ehtiyat faizi və uclar daxil olmaqla.

## İşıqlandırma

Hər işıq armaturuna `photometry_set` köməkçi aləti ilə öz IES (LM-63) və ya EULUMDAT faylını verin. Hədəfləri, şəbəkə addımını və iş səthinin hündürlüyünü yazın. Nəticə yalnız **birbaşa** illüminansdır: şüaların qarşılıqlı əks olunması və kölgələr yoxdur, buna görə otaqda bu aşağı sərhəddir.

## Yanğın sprinkleri

**Yanğın sprinkleri** əlavəsinin öz sekməsi var; onun kömək bölməsinə baxın.

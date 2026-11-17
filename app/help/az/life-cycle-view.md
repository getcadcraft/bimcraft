---
title: Əlli il ərzində nələrin köhnəldiyini görün
summary: Modeldəki pəncərələr, qapılar, səthlər və dam, onların xidmət müddətləri, hər birinin dəyişdiriləcəyi illər, vahid başına qiymət yazdıqda isə illər üzrə xərc və onun cari dəyəri.
keywords: həyat dövrü, lifecycle, xidmət müddəti, dəyişdirmə, təmir, xərc, cari dəyər, diskont, inflyasiya, 50 il, pəncərələr, boya, dam, səthlər, bütün həyat dövrü
from: 1b849545
---

Sol panelin {{ui:Həyat dövrü görünüşü}} bölməsi modeldə köhnələn elementləri və tədqiqat dövrü ərzində (əvvəlcə 50 il) onların nə vaxt dəyişdirildiyini siyahılayır. Modeldə heç nə dəyişdirilmir.

## Necə oxunur

Hər hissə öz kəmiyyətini (modeldən ölçülən: pəncərə sahəsi, xarici və daxili qapılar, xarici divarın səthi, daxili boya, döşəmə və tavanın səthi, damın oturacağı, pilləkənlər), **ömür illərini** və **vahid başına qiymətini** göstərir. Hissə öz ömrü ilə, ömrünün iki misli ilə və s. dəyişdirilir, bu, tədqiqatın sonundan əvvəl olduqca belədir. Beləliklə, 50 illik tədqiqatda 30 illik pəncərə bir dəfə, 30-cu ildə dəyişdirilir. Xidmət müddətləri tipik planlaşdırma rəqəmləridir: onları öz məhsullarınıza və iqliminizə uyğun dəyişdirin. Heç bir qiymət nəzərdə tutulmur; illər üzrə pulu, cəmini və onun cari dəyərini görmək üçün qiymət yazın. İstəsəniz, diskont dərəcəsi və inflyasiya dərəcəsi əlavə edin.

{{ui:Cədvəli saxla (CSV)}} komponentləri və illəri yazır. Borular, hava kanalları, kabel və avadanlıq da siyahıya daxildir (aşağıya bax).

## Borular, hava kanalları, kabel və avadanlıq

- **Borular və hava kanalları** çəkilmiş hər xəttin metrləridir. **Avadanlıq** (nasoslar, fanlar, klapanlar, terminallar, qurğular, çıxışlar, açarlar, lövhələr və Aktivlər nişanının izlədiyi digər şeylər) növünə görə sayılır, hər növün planlaşdırma ömrü var. Aktivlər nişanında öz **xidmət müddəti** təyin olunmuş element öz sətirinə həmin ömrlə düşür; quraşdırma tarixi varsa, onun yaşından başlayır: 16 yaşlı, 10 illik ömrü olan nasos indi vaxtı çatmış hesab olunur, sonra hər on ildən bir.
- **Kabel** təxminidir: hər dövrə üzrə lövhədən cihazlar boyunca plan məsafəsi, ən yaxındandan başlayaraq, marşrutlaşdırma üçün 1,25-ə vurulur. Model kabel çəkmir, ona görə onu öz həcmlərin hesablanması ilə yoxlayın.
- Ömürlər nəzərdən keçiriləcək planlaşdırma rəqəmləridir, mənbə deyil.

## Hər dəyişdirmə üçün karbon

{{ui:Hər yerinə qoyulan hissənin təcəssüm olunmuş karbonunu daxil edin}} işarəsini qoyun. Yeni pəncərə, qapı, pilləkən, dam, boru və ya avadanlıq parçası modelin həmin növ elementlərinin daşıdığı karbonla sayılır (Karbon nişanının əmsalları, vahid başına). Elementi və ya əmsalı olmayan hissə, məsələn boya, səthlər və kabel, defis göstərir və siyahıya düşür. Köhnə hissənin ömrünün sonu və onu dəyişdirmək işi sayılmır.

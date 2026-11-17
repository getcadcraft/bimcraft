---
title: Sahə, sahədəki bina və səviyyələr
summary: Sahənin konturunu çəkin, binanı sahədə yerləşdirin və fırladın, verilmiş hündürlüklərdə səviyyə əlavə edin və ya binanın hündürlüyünü bölün və seçdiyiniz səviyyədə çəkin.
keywords: sahə, sahə planı, tikinti xətti, geri çəkilmə, servitut, keçid hüququ, mülkiyyət xətti, parsel, sərhəd, binanın yerləşdirilməsi, binanı fırlat, binanı yerləşdir, səviyyələr, mərtəbələr, səviyyə əlavə et, hündürlüyü böl, döşəmədən döşəməyə, IfcSite, IfcBuilding, IfcBuildingStorey, məkan strukturu
from: 48d10c1e
---

## Nə edəcəksiniz

IFC modelinin hər şeyi saxlayan hissələrini quraşdırın: sahə, onun üzərindəki bina və binanın səviyyələri.

Model **sahə**dən ibarət təşkil olunub, o, **binanı** saxlayır, binada isə **səviyyələr** (mərtəbələr) var; divarlar, döşəmələr və hər şey səviyyəyə aiddir. {{ui:Fayl}} › {{ui:Yeni bina}} üçünü də qurur. Binası olan, lakin sahəsi olmayan digər proqramdan gələn model, sahəni ilk dəfə çəkdiyiniz zaman sahə alır: bina əvvəl olduğu yerdə yerləşdirilir.

## Sahəni çəkin

1. {{ui:Çək}} aktiv edin, sonra {{ui:Versiya}} › {{ui:Sahə}} seçin.
2. Sahənin künclərinə klikləyin (alət Divar aləti kimi bağlanır). Birinci künci yenidən klikləyin, ikiqat klikləyin və ya {{key:Enter}} basın. {{key:Backspace}} bir künci geri alır.
3. Sətirdə sahənin sahəsi göstərilir. Onu dəyişmək üçün yenidən çəkin.

Hər səviyyənin planı sahə konturunu mülkiyyət xətti kimi göstərir.

## Binanı sahədə yerləşdirin

{{ui:Sahə}} aktiv olanda binanın sahədə **X** və **Y** koordinatlarını və **Dönüş** dərəcəsini yazın, ya da {{ui:Binanı klikləməklə yerləşdirin}} klikləyin və binanın başlanğıcının olacağı yerə klikləyin. Binadakı hər şey (səviyyələr, divarlar, şəbəkələr, çəkdiyiniz hər şey) onunla birlikdə hərəkət edir; sahə və onun konturu yerində qalır. Planlar hər səviyyəni binaya nəzərən düzbucaqlı göstərməyə davam edir.

## Tikinti xətləri və servitutlar

Tikinti xətləri və servitutlar (sərhəd keçidləri, keçid hüququ) sahədə məhdudiyyət kimi çəkilir. Onlar **xəbərdarlıq edir, heç vaxt bloklamır**: onların üzərindəki divar istədiyiniz kimi çəkilir və Problem bölməsində divarı və xətti və ya servitutu adlandıran xəbərdarlıq görünür. Divarı geri çəkin, xəbərdarlıq silinir. Xəbərdarlıq səbəblə qəbul edilə bilər (məsələn, orqanın verdiyi güzəşt).

- **Geri çəkilmələrdən tikinti xətti.** {{ui:Versiya}} › {{ui:Tikinti xətti}}, sonra {{ui:Geri çəkilmələr}}: xəttin sahənin hər sərhədindən nə qədər içəridə durduğunu yazın. Alət aktiv olanda sərhədlər planda nömrələnir. Xətt həmin məsafələrdən hesablanır və sərhədlərin eyni sayı ilə konturu yenidən çəksəniz sahə konturunu izləyir. Məsafələr sizin mülkiyyət sənədinizdən və ya zonalaşdırma sxemindən götürülür; BimCraft heç birini doldurmur.
- **Çəkilmiş tikinti xətti.** {{ui:Tikinti xətti}} aktiv olanda nöqtələrinə klikləyin və ikiqat klik və ya {{key:Enter}} ilə bitirin. Qapalı xətt üçün birinci nöqtədə bitirin: içindəki sahə tikinti üçün icazəli yerdir, hissəsi onun kənarında olan divar haqqında xəbərdarlıq edilir. Açıq xətt yalnız onu kəsən divar haqqında xəbərdarlıq edir.
- **Servitut.** {{ui:Versiya}} › {{ui:Servitut}}: növünü seçin, adını, qeydə alınmış istinadını və enini yazın, sonra mərkəz xəttinə klikləyin və bitirin (zolaq), ya da birinci nöqtədə bağlayın (sahə). Hər hansı hissəsi üzərində olan divar hər səviyyədə xəbərdarlıq edilir.
- Üzün xəttin tam üstündə olması kəsişmə deyil, toxunmadır (tolerantlıq 1 mm-dir).
- Hər seçim dəstinin cari kütlə variantı divarlarla eyni qayda ilə yoxlanılır: sərhəddən kənarda, tikinti xəttindən üstündə və ya servitutda olan kütlə xəbərdarlıq alır. Bax: [Yan-yana saxlanılan kütlə variantları](topic:massing-options).
- {{ui:Seç}} ilə birini seçin ki, adını, istinadını, növünü və ya enini dəyişin, köçürün və ya silin.

Onlar hər səviyyənin planında, vərəqlərdə və plan PDF-də çəkilir: tikinti xətləri qırıq, servitutlar nöqtəli, hər biri etiketi ilə. IFC faylında hər biri sahədə annotasiyadır (IfcAnnotation, növü BuildingLine və ya Servitude), xətti digər proqramların oxuya biləcəyi sadə əyri kimi. Yoxlama hər divarın planda real konturunu, çəkildiyi kimi birləşmələri ilə istifadə edir; əyri divar öz mərkəz xətti ətrafında öz qalınlığı ilə yoxlanılır.

## Səviyyələr əlavə edin

**Səviyyələr** panelində {{ui:Üstə səviyyə əlavə et}} birini əlavə edir, {{ui:Aşağıya səviyyə əlavə et}} ən aşağının altına əlavə edir (zirzəmi, mənfi hündürlükdə). {{ui:Mərtəbələr əlavə et…}} bir neçəsini birdən əlavə edir:

- **Bu hündürlüklərdə**: ən aşağı səviyyədən yuxarı vergüllə ayrılmış hündürlükləri yazın (məsələn `12', 24', 36'`). Artıq səviyyəsi olan hündürlüklər ötürülür.
- **Binanın hündürlüyünü bölün**: binanın hündürlüyünü və səviyyə sayını yazın. Sizdə olan səviyyələr aşağıdan yuxarıya yeni hündürlüklərinə köçürülür, çatışmayanlar əlavə olunur, onların üstündəkilər yerində qalır.

Yuxarı səviyyəyə gedən divarlar onu izləyir, sütunlar və rampalar da belə.

{{ui:Bu səviyyəni kopyala…}} (eyni paneldə) baxdığınız səviyyədə çəkilmiş hər şeyi başqa səviyyəyə və ya üstdə yeni səviyyəyə kopyalayır, beləliklə mərtəbə planı binanın yuxarısına bir addımda qalxa bilər. Bax: [Divar çəkmək](topic:draw-walls).

## Səviyyədə çəkin

Hər {{ui:Çək}} aləti planın səviyyə siyahısında (ya da {{ui:Səviyyələr}} panelində) seçilmiş səviyyədə işləyir: çəkdiyiniz şey o səviyyəyə aiddir.

## Nəyi görməlisiniz

- Bu dəyişikliklərin hər biri bir addımdır: {{key:Mod+Z}} onu geri alır.
- IFC faylında: sahə (IfcSite) konturu və sahəsi ilə, bina (IfcBuilding) onun üzərində yerləşdirilmiş və binada səviyyələr (IfcBuildingStorey).

Layihə başlanğıcı və planalma nöqtəsi üçün bax: [BimCraft-da koordinatlar](topic:coordinates).

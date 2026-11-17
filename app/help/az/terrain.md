---
title: Obyektin torpağı, tikinti meydançası və örtük
summary: Torpağı planalma nöqtələrindən, horizontallardan, LAS / LAZ skanerindən, GeoTIFF-dən, LandXML səthindən (CivilCraft-ın) və ya bir neçə nöqtə hündürlüyündən modelə gətirin; evin tikinti meydançasını yamacları və kəsik / doldurma ilə daxil edin; üzərinə maşın yollarını, cığırları və həyətləri yerləşdirin; CivilCraft-a LandXML kimi ötürün.
keywords: relyef, torpaq, sahə, topoqrafiya, planalma, nöqtələr, PNEZD, horizontallar, LAS, LAZ, LiDAR, GeoTIFF, DEM, hündürlük, nöqtə hündürlüyü, şaquli planlaşdırma, meydança, tikinti meydançası, kəsik, doldurma, torpaq işləri, yamac, maşın yolu, cığır, həyət, örtük, LandXML, CivilCraft
from: 208298d6
---

## Nə edəcəksiniz

Evi onun sahəsinə yerləşdirin. Torpaq modelin bir hissəsinə çevrilir: 3D-də göstərilir, kəsiklərdə və fasadlarda kəsilir, planda horizontallarla göstərilir. Evin altında tikinti meydançası kəsilir, maşın yolları və cığırlar onu izləyir, bünövrələr isə onunla birlikdə pillə-pillə enir.

## Torpağı daxil edin

1. {{ui:Versiya}} açın və {{ui:Relyef}} seçin.
2. Ya:
   - **Planalma faylı aç…**: planalma nöqtələri (PNEZD, PENZD və ya sadə şərq, şimal, hündürlük; vergül, tabulyasiya və ya boşluqla ayrılmış), DXF və ya DWG-də horizontallar (hündürlüyündə polixətlər, 3D polixətlər), LAS və ya LAZ skaneri (yer nöqtələri saxlanılır, təxminən hər kvadrat metrə bir nöqtəyə qədər seyrəldilir), GeoTIFF və ya ASCII hündürlük şəbəkəsi, ya da CivilCraft-ın ixrac etdiyi kimi **LandXML** səthi (onun öz nöqtələri və üçbucaqları saxlanılır; fayl bir neçə səth ehtiva edirsə, BimCraft hansının torpaq olduğunu soruşur; vahidləri fayldan götürülür). Əvvəlcə faylın vahidlərini seçin (LandXML öz vahidlərini özü göstərir).
   - Və ya **Nöqtə hündürlüyü** yazın (bu səviyyənin döşəməsindən, belə ki `-1'` onun bir fut aşağısı deməkdir) və plan üzərində nöqtələri vurun, hündürlüyü dəyişin və daha çox nöqtə vurun, sonra **Torpağı yaradın**. Başlamaq üçün üç nöqtə kifayətdir.

Modeldən uzaqda olan planalma koordinatları (dövlət müstəvisi, UTM) evin üzərinə köçürülür və hündürlüklər elə təyin olunur ki, evdəki torpaq birinci mərtəbədən təxminən 8" aşağıda olsun. **Xassələr** bölməsində **Torpağı qaldır** istənilən qədər düzəldir.

## Tikinti meydançası

1. {{ui:Tikinti meydançası}} seçin.
2. Evin ətrafında **Haşiyə**, **meydançanın döşəmədən aşağıda olma dərinliyi** (plitə altında 8", boşluqlu zirzəmi altında daha çox) və mövcud torpağa qədər **Yamaclar** təyin edin (`2:1` = yuxarı və ya aşağı hər fut üçün kənara iki fut).
3. Evin içində nöqtə göstərin və vurun.

Torpaq evin altında və haşiyəyə qədər düzləşdirilir, sonra mövcud torpağa çatana qədər yamacla təpəyə qalxır (kəsik) və aşağı tərəfə enir (doldurma). Torpağın və meydançanın **Xassələri** kəsik və doldurma həcmlərini göstərir. Divarları köçürün, meydança da onları izləyəcək.

## Maşın yolları, cığırlar və həyətlər

{{ui:Örtük}} seçin, **Cığır**, **Maşın yolu** və ya **Həyət** seçin və küncləri vurun. İlk küncü yenidən vurun, ikiqat vurun və ya {{key:Enter}} basın. Örtük bitmiş səviyyəni izləyir; növünü və ya qalınlığını **Xassələr**də dəyişin.

## Bünövrələr səviyyəyə uyğun pillə-pillə enir

Torpaq modeldə olanda, divar bünövrələri və boşluqlu zirzəmi bünövrələri onu izləyir: hər divar boyu bünövrə kənardakı torpağın altında öz dərinliyində qalır və torpaq aşağı düşən yerlərdə tam 8" pillələrlə enir (bax [Divarların altındakı bünövrələr](topic:foundations)).

## CivilCraft-a ötürün

**CivilCraft üçün LandXML** (Relyef sırasında və ya torpağın **Xassələrində**) mövcud torpağı və bitmiş səviyyəni LandXML faylı kimi yükləyir. Real torpaq işləri, drenaj və torpaq işləri üçün onu CivilCraft-da açın.

## Bilmək yaxşıdır

- Torpaq, hər yeni bina kimi, IFC4 modeli tələb edir.
- Horizontallar torpağın səviyyə planında torpağın **Xassələrində** təyin olunmuş intervalla göstərilir; hər beşinci xətt qalındır.
- Torpaq IFC relyef elementi kimi saxlanılır (bağlı üçbucaqlı səth, buna görə kəsiklər onu kəsir); meydança və örtük onunla birlikdə saxlanılır. Yenidən başlamaq üçün torpağı silin — onun meydançası və örtüyü də onunla birlikdə gedir.

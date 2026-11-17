---
title: Səviyyəni izləyin, görünüşə görə qələmləri təyin edin, pilləkən eskizi çəkin və OBJ açın
summary: Başqa səviyyəni plan altında kəsikli göstərin və onu düzləşdirin, divarlara, qapılara və pəncərələrə bir görünüşdə öz qələmini verin, pilləkən üçün gediş xətti çəkin və Wavefront OBJ şəbəkəsini açın.
keywords: izləmə istinadı, şəbəh, altlıq, qələm, xətt qalınlığı, xətt növü, üstələmə, pilləkən, eskiz, meydança, OBJ, şəbəkə, idxal, Wavefront
from: 333ebbde
---

## Səviyyəni izləyin

{{ui:Versiya}} menyusunda {{ui:İzləmə}} seçin, sonra siyahıdan görünüş seçin: başqa səviyyənin planı, səviyyənin tavan planı və ya çağırış (kəsiyinə kəsilmiş). Onun divarları, sütunları və döşəmələri çəkdiyiniz planın altında kəsikli göstərilir. Onu istinad nöqtəsində baza nöqtəsini vurmaqla və sonra həmin nöqtənin olmalı olduğu yeri göstərməklə hərəkət etdirin, ya da X, Y və bucaq yazın (öz mərkəzi ətrafında dönür). {{ui:Sıfırla}} onu yerinə qaytarır, {{ui:Gizlət}} isə onu çıxarır. Bu yalnız istinaddır: heç nə onu seçmir, çap olunmur və IFC-də saxlanılmır. BimCraft onu bu brauzerdə hər səviyyə üçün yadda saxlayır.

## Görünüş üzrə qələmlər

{{ui:Qələmlər}} seçin. Qələmin nə üçün olduğunu göstərin: bütün divarlar, bütün qapılar, bütün pəncərələr, seçilmiş elementin növü və ya seçilmiş elementlər. Xəttin qalınlığını, xətt növünü (bütöv, kəsikli, nöqtəli) və rəngi seçin, sonra {{ui:Tətbiq et}}. Dəyişiklik yalnız bu səviyyənin planı üçündür. Seçim növdən üstündür, növ isə bütün kateqoriyadan üstündür. {{ui:Hamısını təmizlə}} onları silir. Onlar bu brauzerdə saxlanılır. **3D-də qələm rəngləri** qutusunu işarələsəniz, rəngli qələmlər 3D görünüşdə modelin üzərində boyanır (qalınlıq və ya kəsik xəttə aiddir, ona görə orada yalnız rəng görünür); geri qaytarmaq üçün işarəni silin. {{ui:Çap}} onları planın PDF-inə çəkir: qalınlıq ekrandan miqyaslanır (standart divar qələmi, 1.75 piksel, 0.5 mm-dir), kəsiklər kəsik olaraq qalır və rəng kağız mövzusunun dəyəri ilə çap olunur.

## Eskizdən pilləkən

{{ui:Pilləkən eskizi}} seçin və gediş xəttinin küncələrini aşağı pillədən başlayaraq vurun. Bir xətt düz pilləkəndir, düz bucaqda birləşən iki xətt L-dir, üç xətt (yuxarı, köndələn, geri) isə U-dur. Pilləkən meydançası çəkmək üçün {{key:L}} basın: küncləri vurun və {{key:Enter}} basın; onun qısa tərəfi pilləkənin enini təyin edir. Pilləkəni yerləşdirmək üçün {{key:Enter}} basın. Hər pillə xəttinizin uzunluğundan və hündürlük üçün lazım olan pillə sayından hesablanır. Bundan sonra o, adi pilləkəndir: **Xassələrdə** dəyişin, pilləkən boşluğu və dəstəklər onu izləyir.

Pilləkəni ailə kimi yerləşdirmək üçün {{key:Enter}} basmazdan əvvəl alətin sətirində **Ailə kimi edin** qutusunu işarələyin (və ya {{key:F}} basın). Bu zaman pilləkən (düz, L və ya U) bir element kimi daxil olur və ailə redaktorunda eni, pilləsi, ümumi hündürlüyü, hər marşdakı pillələr və U-nun boşluğu parametr kimi açılır, buna görə ölçülər, plan simvolu və ya aktiv nöqtələr əlavə edə bilərsiniz. Pillələr və pillə hündürlüyü onlardan alınır. Onun dəstəkləri və pilləkən boşluğu yoxdur: onlar adi pilləkənə məxsusdur.

## OBJ açın

`.obj` faylını digər fayllar kimi açın. OBJ-nin vahidləri yoxdur, buna görə BimCraft onu metrlə və Y yuxarı ilə oxuyur, əksər proqramların yazdığı kimi. Hər obyekt və ya qrup vahid səviyyədə bir şəbəkə elementinə çevrilir; sonra onu görə, ölçə, kəsə, modelə yerləşdirə və IFC kimi saxlaya bilərsiniz. Xətlər, əyrilər və səthlər kənarda qalır və status sətri bunu deyir.

Dəqiq düz prizma olan obyekt (iki paralel, eyni, uclarına perpendikulyar düz yanları olan bağlı şəbəkə: plitə, dirək, divar bloku, deşikli lövhə) IFC-də IFC-nin öz ekstruziya edilmiş bərk cismi kimi, konturu və dərinliyi ilə saxlanılır, üçbucaqlar siyahısı kimi yox. Digər proqramlar onu həqiqi bərk cisim kimi oxuyur, o kiçik qalır və dərinliyi və konturu sonra redaktə edilə bilər. Status sətri neçə obyektin bu üsulla saxlandığını göstərir. Dəqiq prizma olmayan hər şey (konusvari forma, bir təpəsi yerdəyişmiş şəbəkə, boşluğu olan şəbəkə) üçbucaq olaraq qalır. STEP faylı eyni şəkildə oxunur.

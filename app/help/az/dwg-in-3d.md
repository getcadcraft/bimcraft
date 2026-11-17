---
title: DWG və ya DXF çertyojunu 3D-də baxın
summary: Çertyojun model məkanını 3D-yə keçirin: hündürlüklərə, qalınlığa, 3D üzlərə, şəbəkələrə və bloklara baxın, ətrafında fırladın, obyektə klikləyib xassələrini görün və hələ çəkilməyənləri öyrənin.
keywords: 3d, dwg, dxf, çertyoj, model məkanı, orbit, fırlatma, kəsik, kəsmə, kəsik müstəvisi, seçmək, xassələr, atributlar, tutacaq, hündürlük, qalınlıq, ekstruziya, 3dface, polyface, şəbəkə, 3d polixətt, bloklar, görünüşlər, perspektiv, paralel, hamısı, acis, bərk cisimlər
from: a0c6cd17
---

## Nə edəcəksiniz

Çertyojun model məkanına 3D-də baxın. Xətlər və polixətlər öz real hündürlüklərində yerləşir, qalınlığı olan obyektlər divar kimi qalxır, 3D üzlər, şəbəkələr və 3D bloklar isə ətrafında fırlana biləcəyiniz səthlər kimi göstərilir. Vərəqlər 2D qalır.

## Addımlar

1. DWG və ya DXF açın. Bax [DWG və ya DXF çertyojuna baxın](topic:view-dwg). Parametrlər › BimCraft › **Çertyojlar açılır** bölməsində {{ui:Model (2D)}} seçilməyibsə, çertyoj 3D-də açılır.
2. 2D-dən çertyojun üstündəki panelində {{ui:3D}} klikləyin və ya {{key:3}} basın.
3. İlk dəfə bir az gözləyin: status sətri "Çertyoj 3D-də qurulur…" yazır, sonra isə neçə xətt və üz göstərildiyini bildirir.
4. Fırladın, sürüşdürün və miqyası dəyişin (aşağıdakı cədvələ baxın).
5. İkinci paneldə görünüşlərdən birinə klikləyin: {{ui:Iso}}, {{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}} və ya {{ui:Right}}.
6. Perspektiv və paralel görünüş arasında keçmək üçün {{ui:Perspective}} klikləyin.
7. Bütün çertyoju yenidən görmək üçün {{ui:Extents}} klikləyin və ya {{key:F}} basın.
8. 2D-yə qayıtmaq üçün yenidən {{ui:3D}} klikləyin, {{key:3}} basın, ya da {{ui:Model}} və ya vərəq nişanına klikləyin.

## Nəyi görməlisiniz

- 3D-də model məkanı, Z yuxarıda, çertyojun öz rənglərində. Üzlər kənarlarından bir qədər açıqdır.
- {{ui:Layers}} bölməsində söndürdüyünüz qatlar 3D görünüşdən də yox olur.
- Sağda: xətt və üzlərin sayı, çertyojun X, Y və Z üzrə ölçüsü, **Yalnız 2D görünüşündə** və **Hələ çəkilməyib**.

## Kəsik müstəvisi ilə kəsin

3D panelində {{ui:Section}} klikləyin və ya {{key:X}} basın. Onun altındakı panel IFC modelləri ilə eyni işləyir (bax [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)): {{ui:Top}}, {{ui:Front}} və ya {{ui:Side}} tərəfdən kəsin, sürüşmə məsafəsini sürükləyin və ya yazın — burada çertyojun öz vahidlərində — və digər tərəfi saxlamaq üçün {{ui:Flip}} seçin. Müstəvinin kəsib atdığı hissə seçilmir. 2D-yə qayıtdıqda kəsik silinir.

## Obyektin xassələrinə baxın

3D görünüşdə obyektə klikləyin. O, seçim rəngini alır və {{ui:Properties}} faylın onun haqqında dediklərini göstərir: tipi, qatı, rəngi, xətt tipi və tutacağı, sonra isə öz məlumatları — məsələn, xəttin başlanğıc və son nöqtəsi və uzunluğu, dairənin mərkəzi və radiusu, 3D üzün künclərı, və ya blok istinadının bloku, əlavə nöqtəsi, miqyası, fırlanması və atribut dəyərləri.

- Blok istinadı bütövlükdə seçilir, içindəki iç-içə bloklar da daxil olmaqla.
- Xəttdən bir neçə piksel məsafədə klikləmək xətti seçir.
- Daha çox obyekt seçmək və ya birini çıxarmaq üçün {{key:Mod}} basıb klikləyin; {{ui:Properties}} onları növünə görə sayır.
- {{key:Esc}} və ya boş məkana klikləmək seçimi təmizləyir.
- Söndürdüyünüz qatlardakı obyektlər seçilə bilməz.

## Ətrafında hərəkət

:::mouse
| Məqsəd | Bunu edin |
|---|---|
| Fırlatmaq | Orta düymə ilə və ya sol düymə ilə sürükləyin |
| Sürüşdürmək | Sağ düymə ilə sürükləyin və ya {{key:Shift}} basıb sürükləyin |
| Miqyas | Təkəri fırladın; miqyas göstəricinin altındakı yerə doğru dəyişir |
| Hamısını görmək | {{ui:Extents}} və ya {{key:F}} |
| Yandan baxmaq | Aşağı sağ küncdəki görünüş kubunun üzünə, kənarına və ya küncünə klikləyin |
:::

Görünüş kubu {{ui:Settings}} bölməsində ox işarəsi ilə əvəz oluna və ya gizlədilə bilər. Bax [BimCraft parametrləri](topic:settings).

:::mac mouse
Trackpaddə fırlatmaq üçün iki barmaqla sürüşdürün, sürüşdürmək üçün {{key:Shift}} basıb sürüşdürün, miqyas üçün isə barmaqları yaxınlaşdırıb uzaqlaşdırın.
:::

:::touch
Bir barmaqla sürükləyərək fırladın. İki barmaqla miqyası dəyişin, birlikdə hərəkət etdirərək sürüşdürün.
:::

## 3D-də nə çəkilir

| Çertyojda | 3D-də |
|---|---|
| Xətlər, 3D polixətlər | Öz real hündürlüklərində |
| Polixətlər, dairələr, qövslər, ellipslər | Öz müstəvisində, öz kotasında, çertyoj əyəndə əyilmiş |
| Xətlərdə, polixətlərdə, dairə və qövslərdə qalınlıq | Həmin hündürlükdə divarlar; dairələr üstdən və altdan qapalıdır |
| 3D üzlər, polyface şəbəkələri, polygon şəbəkələri | Görünən kənarları olan kölgəli səthlər |
| Bloklar | 3D-də yerləşdirilmiş, fırlanmış və miqyaslanmış, iç-içə bloklar da daxil |
| Ştrixlamalar | Konturları |
| Sadə 2D xətt işi | Düz, çəkildiyi yerdə |

## Yalnız 2D görünüşündə

Mətn, çoxsətirli mətn və blokların görünən atributları 3D-də öz müstəvisində, öz hündürlüyündə çəkilir və onlara klikləmək onları seçir. Enli polixətlər eni düz bir zolaq kimi göstərir. Çoxlu istinad xətləri, şəkillər və ştrix naxışları **Yalnız 2D görünüşündə** hesablanır: onlara {{ui:Model}} nişanında və ya vərəqlərdə baxın.

## Hələ çəkilməyib

ACIS cisimləri kimi saxlanılan bərk cisimlər və səthlər (3D bərk cisimlər, cisimlər, bölgələr və səthlər) və alt bölünmüş şəbəkələr **Hələ çəkilməyib** altında neçə ədəd olduğu ilə siyahıya salınır. Onlar ötürülür, təxmin edilmir.

## Tez-tez edilən səhvlər

- **Hər şey düz görünür.** Çertyoj 2D-dir: onun xətlərinin hündürlüyü yoxdur. Yoxlamaq üçün {{ui:Front}} klikləyin; düz çertyoj xətt kimi görünür.
- **Bərk model heç nə göstərmir.** Bərk modelləyici ilə yaradılmış bərk cisimlər ACIS cisimləridir və **Hələ çəkilməyib** altında siyahıya salınır. Modeli onu yaradan proqramdan IFC və ya 3D üzlər kimi ixrac edin.
- **Çertyoj ortada kiçik bir yığın kimi görünür.** Model məkanında uzaqda bir şey, məsələn, planın köhnə surəti, hamısını böyüdür. Baxmaq istədiyiniz yerdə təkərlə yaxınlaşın.

## Növbəti

- [Qatlarla və vərəqlərlə işləyin](topic:dwg-layers-sheets)
- [IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)

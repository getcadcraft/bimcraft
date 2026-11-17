---
title: IFC modelini açın və 3D-də ətrafa baxın
summary: IFC faylını açın, fırladın, sürüşdürün və miqyaslayın; istiqamətinizi tapmaq üçün Sığdır, Üst, Ön və Yan istifadə edin.
keywords: ifc, 3d, fırlatma, sürüşdürmə, miqyas, sığdır, üst görünüş, ön görünüş, yan görünüş, naviqasiya, görünüş küpü, kamera
from: 68b460dd
---

## Nə edəcəksiniz

IFC modelini açın, 3D-də onun ətrafında hərəkət edin və standart görünüşlərə keçin. Təxminən beş dəqiqə.

Sizə `.ifc` faylı lazımdır. Əksər BIM proqramları onu ixrac edir; Revit-də bu **File > Export > IFC**-dir. Bax: [Layihə faylını IFC vasitəsilə 3D-ə gətirin](topic:rvt-to-ifc).

## Addımlar

1. {{ui:Fayl seçin}} düyməsinə (və ya yuxarı sol küncdəki buraxma sahəsinə) klikləyin.
2. `.ifc` faylınızı seçin və təsdiq edin.
3. Status xəttinin bitməsini gözləyin. İlk dəfə "IFC mühərriki başlayır…", sonra "Model oxunur…" və "Həndəsə qurulur: … / … element" göstərilir.
4. Modelə baxın: o, üç çərəkli görünüşdə, ekrana sığdırılmış açılır.
5. Modelin üstündəki alətlər çubuğunda {{ui:Üst}} düyməsinə klikləyin, düz aşağı baxmaq üçün.
6. Önə baxmaq üçün {{ui:Ön}} klikləyin, sonra yandan baxmaq üçün {{ui:Yan}}.
7. Bütün modelin üç çərəkli görünüşünə qayıtmaq üçün {{ui:Sığdır}} klikləyin və ya {{key:F}} basın.

## Nəyi görməlisiniz

- Model ortada, qələmlə çəkilmiş görünüş üçün nazik tünd kənarlarla.
- Sol tərəfdə {{ui:Fayl}} paneli: fayl adı, ölçüsü, IFC sxemi (məsələn IFC2X3 və ya IFC4), layihə adı, faza, ixrac edildiyi proqram, müəllif, ixrac tarixi, element və üçbucaq sayları.
- Altında {{ui:Mərtəbələr}} və {{ui:Elementlər}} siyahıları.
- Status xətti: "*fayl adı* açıldı: *n* element, *s* s".

## Ətrafda hərəkət

:::mouse
| Məqsəd | Nə edin |
|---|---|
| Fırlat | Sol düyməni basıb sürüşdürün |
| Sürüşdür | Sağ düyməni basıb sürüşdürün, ya da {{key:Shift}} (və ya {{key:Mod}}) saxlayın və sol düymə ilə sürüşdürün |
| Miqyas | Təkərciyi fırladın, ya da orta düymə ilə sürüşdürün |
| Hər şeyi görün | {{key:F}} basın və ya {{ui:Sığdır}} klikləyin |
:::

:::mac mouse
Trackpad-də: bir barmaqla basıb sürüşdürərək fırladın; {{key:Shift}} və ya {{key:Mod}} saxlayın və sürüşdürün ki, sürüşdürəsiniz; iki barmaqla sürüşdürərək və ya sıxaraq miqyaslayın. İki barmaqla klik sağ klikdir, və onunla sürüşdürə bilərsiniz, amma {{key:Shift}} və sürükləmək daha asandır.
:::

:::touch
| Məqsəd | Nə edin |
|---|---|
| Fırlat | Bir barmaqla sürükləyin |
| Miqyas | İki barmaqla sıxın |
| Sürüşdür | İki barmağı birlikdə hərəkət etdirin |
| Hər şeyi görün | {{ui:Sığdır}} toxunun |
:::

Fırlatma həmişə modelin ortasındakı nöqtə ətrafında baş verir. Sürüşdürmə həmin nöqtəni hərəkət etdirir, ona görə uzun sürüşdürmədən sonra fırlanma mərkəzdən kənar hiss oluna bilər: onu sıfırlamaq üçün {{ui:Sığdır}} klikləyin.

## Kölgəli, kənarlı və ya karkas

Görünüş küpünün üstündəki üç kiçik düymə modelin necə çəkiləcəyini seçir: {{ui:Kölgəli}}, {{ui:Kənarları olan kölgəli}} (standart) və {{ui:Karkas}}. Onlar həm də əmrlərdir ({{ui:Görünüş}} menyularda və Fərdiləşdirmə siyahısında), ona görə öz klavişləri ola bilər. {{ui:Plan}}, {{ui:Böl}} və {{ui:3D}} alətlər çubuğunun {{ui:Görünüş}} sırasındadır.

## Ümumi səhvlər

- **Adlandırılmış görünüşlər gözləmək.** BimCraft-ın dörd sabit görünüşü var ({{ui:Sığdır}}, {{ui:Üst}}, {{ui:Ön}}, {{ui:Yan}}), sağ aşağı küncdəki görünüş küpü və sərbəst fırlatma. Görünüşləri saxlamır.
- **Plan və kəsik axtarmaq.** Bu versiyada 2D planlar və ya kəsik qutuları yoxdur. Modeli bir {{ui:Kəsik}} müstəvisi ilə kəsin ([IFC modelini kəsik müstəvisi ilə kəsin](topic:section-plane)), ya da mərtəbələri söndürün: [Mərtəbələri, məkanları və kənarları göstərin və gizlədin](topic:storeys-and-spaces).
- **Layihə faylı açıb 3D gözləmək.** Layihə faylı fayl kartı kimi açılır. Əvvəlcə IFC ixrac edin.
- **`.ifczip` açmaq.** Arxivi açın, ya da təmiz `.ifc` ixrac edin.
- **Çox böyük model vərəqi yavaşladır və ya çökdürür.** Bax: [Brauzerlər, cihazlar və yaddaş](topic:platforms).

## Növbəti

[Elementi seçin və onun xassələrini oxuyun](topic:inspect-element).

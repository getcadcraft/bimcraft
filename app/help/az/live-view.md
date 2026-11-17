---
title: Canlı görünüş
summary: Modeli real vaxt görünüşündə, günəş, kölgələr və əks olunan işıqla göstərən yan panel; hər dəyişikliyinizi izləyir. Onun içində gəzin və gün vaxtını və ayı təyin edin.
keywords: canlı görünüş, real vaxt, realtime, real-time render, gəzinti, gəz, birinci şəxs, təqdimat, müştəri, ikinci ekran, ikinci pəncərə, monitor, gün vaxtı, günəş, fəsil, ay, kölgələr, ambient occlusion, əks olunma, əks olunan işıq, global illumination, webgpu, webgl
from: ea5c02bf
---

Canlı görünüş modeli real vaxt görünüşündə göstərir: saytınızın yerinə və tarixinə görə səma və günəş, günəşin kölgələri, elementlərə verdiyiniz boyalar və materiallar, lampalar və divar və döşəmələrdən əks olunan işıq. Etdiyiniz işi izləyir: 3D görünüşü çevirsəniz, o da dönür; modeli dəyişsəniz, dəyişikliyi bir az sonra göstərir. Heç nə yüklənmir.

Bu, [Şəkil render etmək](topic:render) ilə eyni səhnəni, boyaları, lampaları və günəşi çəkir; hazır şəkil üçün onu istifadə edin.

## Açın

1. Modeli açın və alətlər panelində {{ui:Canlı görünüş}} seçin. Panel tətbiqin üstündə, sağ aşağıda açılır.
2. Onu başlıq zolağından tutub sürüşdürün, küncündən çəkib böyüdün.
3. Yanındakı {{ui:Canlı görünüş yeni pəncərədə}} düyməsi və ya paneldəki {{ui:Yeni pəncərə}} onu ikinci ekran üçün ayrıca pəncərəyə keçirir. Brauzeriniz açılan pəncərələri bloklayırsa, panel kimi açılır.
4. {{ui:Bağla}} onu bağlayır.

## İdarəetmə

| Idarəetmə | Nə edir |
|---|---|
| {{ui:Görünüşü izlə}} | Aktivdirsə: canlı görünüş 3D görünüşün baxdığı yerə baxır. Gəzinti onu söndürür |
| {{ui:Gəz}} | Modelin içində gəzin (aşağıya bax) |
| {{ui:Cazibə}} | Gəzərkən: döşəmələrdə durun və pilləkənlərlə qalxın. Söndürülü: uçun |
| {{ui:Vaxt}} | Günün saatı. Sürüşdürdükcə günəş hərəkət edir |
| {{ui:Ay}} | Ay, qışda və yayda günəşi görə biləsiniz |
| {{ui:Keyfiyyət}} | {{ui:Bu kompüter üçün}}, və ya {{ui:Aşağı}}, {{ui:Orta}} və ya {{ui:Yüksək}} |

Aşağı sətir görünüşü nəyin çəkdiyini (WebGPU və ya WebGL 2), keyfiyyəti və əks olunan işığı göstərir.

## Modeldə gəzin

1. 3D görünüşü dayanmaq istədiyiniz yerə çevirin və {{ui:Gəz}} seçin. Görünüşün göz nöqtəsindən aşağıdakı döşəmədə, 1,6 m hündürlükdə dayanırsınız.
2. Canlı görünüşə klik edin, sonra {{key:W}} {{key:A}} {{key:S}} {{key:D}} və ya ox düymələrindən istifadə edin. Qaçmaq üçün {{key:Shift}} saxlayın. Ətrafa baxmaq üçün sürüşdürün.
3. 40 sm-ə qədər addımlar qalxılır (pilləkənlər); bundan yüksəkdəki şey divardır. Divarlar sizi saxlayır və siz onun boyunca sürüşürsünüz.
4. {{ui:Cazibə}} söndürülü olduqda uçursunuz: {{key:E}} yuxarı, {{key:Q}} aşağı.
5. {{key:Esc}} gəzintini dayandırır.

## Əks olunan işıq

Günəş düşən divardan döşəməyə əks olunan işıq və otağın kölgəli daxili hissəsi bütün prosessor nüvələrində fonda hesablanır. İşləyən zaman alt sətir {{ui:Əks olunan işıq: 40 %}} yazır; hazır olanda görünüş onu qəbul edir. Hər dəyişiklikdən sonra yenidən başlayır.

:::note
Bu, canlı görünüş üçün təxmini hesablamadır, render olunmuş şəkil deyil: nöqtələr arasındakı kiçik təfərrüatlar ona yaxın nöqtələrin əks olunan işığını alır.
:::

:::note
Brauzerlər fərqlidir. Brauzerdə WebGPU varsa canlı görünüş onu istifadə edir; əks halda WebGL 2 istifadə edir və eyni görünür. Heç biri yoxdursa, panel bunu bildirir.
:::

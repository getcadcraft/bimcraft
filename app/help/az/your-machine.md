---
title: Maşınınız vizuallaşdırmanı nə ilə aparır
summary: Parametrlər › Vizuallaşdırma bu brauzerin tətbiqə icazə verdiyi qrafikanı, prosessor nüvələrini və yaddaşı, və vizuallaşdırmanın harada başladığını müəyyən edən səviyyəni göstərir.
keywords: maşın, qrafika kartı, gpu, webgpu, webgl, prosessor, cpu, nüvələr, axınlar, yaddaş, ram, ümumi yaddaş, izolyasiya, səviyyə, sürət, yavaş, vizuallaşdırma sürəti, noutbuk
from: 360f2375
---

Open {{ui:Parametrlər}} ({{key:Mod+,}}), bu tətbiqin öz sekmesində qalın və {{ui:Vizuallaşdırma}} bölməsinə sürüşdürün. {{ui:Sizin kompüteriniz}} bu brauzerin tətbiqə vizuallaşdırma üçün nəyə icazə verdiyini siyahılayır. Onun heç biri kompüterinizdən çıxmır.

| Sətir | Nə deməkdir |
|---|---|
| {{ui:Qrafika}} | Brauzerin bildirdiyi qrafika kartı. "WebGPU" o deməkdir ki, vizuallaşdırma işini görə bilir; "WebGL 2 only" o deməkdir ki, WebGPU yoxdur: canlı görünüş və yüksək keyfiyyətli şəkillər WebGL 2 vasitəsilə qrafika kartını istifadə edir (köhnə WebGL path tracer ilə şəkillər, WebGPU tələb edən əlavələr olmadan); proqram əvəzedicisi o deməkdir ki, hər şey prosessorda işləyir |
| {{ui:Prosessor}} | Brauzerin bildirdiyi prosessor nüvələrinin sayı |
| {{ui:Yaddaş}} | Brauzer bildirdikdə kompüterdə təxminən nə qədər yaddaş olduğu. Bəzi brauzerlər bunu bildirmir |
| {{ui:Ümumi yaddaş}} | Səhifənin işçiləri arasında yaddaşı paylaşmasına icazə verilib-verilmədiyi. Açıq olduqda hər nüvə bir səhnənin eyni nüsxəsi üzərində işləyə bilir; bağlı olduqda hər birinə öz nüsxəsi lazımdır, ona görə böyük səhnə eyni anda az nüvəyə sığır |
| {{ui:Sürətli prosessor kodu}} | Brauzerin daha sürətli WebAssembly kodunu işlədib-işlətmədiyi. Onsuz daha yavaş ehtiyat istifadə olunur |
| {{ui:Səviyyə}} | {{ui:Qrafika kartı, yüksək}}, {{ui:Qrafika kartı, əsas}} və ya {{ui:Yalnız prosessor}}, altında səbəbi ilə |

## Səviyyə

Səviyyə vizuallaşdırmanın başladığı yerdir, ona görə daxili qrafika çipi olan və ya ümumiyyətlə qrafika kartı olmayan noutbuk cavab verməyə davam edir. Daxili və ya telefon qrafika çipi, ya da 4 GB və ya daha az yaddaş heç vaxt {{ui:Qrafika kartı, yüksək}} almır.

:::note
Brauzerlər fərqlənir. Eyni kompüter bir brauzerdə WebGPU, başqasında "WebGL 2 only" göstərə bilər. Linux-da əksər brauzerlərdə hələ WebGPU yoxdur.
:::
